import { Suspense, useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";

import { ActionIcon, Anchor, Center, Container, Drawer, Group, Navbar, ScrollArea, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery, useWindowScroll } from "@mantine/hooks";

import { IconMenu2 } from "@tabler/icons";

import { APP } from "~/const/app";

import { Logo } from "~/libs/unej-io/components/core";
import { useSharedStyles } from "~/libs/unej-io/hooks/styles";

import { CenterLoader, history, StatusBadge } from "~/components/core";

import useStyles from "./styles";

import ToolbarGroup from "./components/ToolbarGroup";
import AuthLinksGroup from "./components/AuthLinksGroup";
import DrawerAuthLinks from "./components/DrawerAuthLinks";
import DrawerNavLinks from "./components/DrawerNavLinks";

function AppLayout() {
  const { classes: sharedClasses } = useSharedStyles();
  const { classes, cx, theme } = useStyles();

  const [scroll] = useWindowScroll();
  const [drawer, drawerHandle] = useDisclosure(false);

  const matchesLargerThanMedium = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);
  const currentMatchesLargerThanMedium = useRef(matchesLargerThanMedium);

  useEffect(
    () =>
      history.listen(() => {
        setTimeout(drawerHandle.close, 150);
      }),
    []
  );

  useEffect(() => {
    if (matchesLargerThanMedium !== currentMatchesLargerThanMedium.current) {
      drawerHandle.close();
      currentMatchesLargerThanMedium.current = matchesLargerThanMedium;
    }
  }, [matchesLargerThanMedium]);

  return (
    <>
      <header className={cx(classes.header, scroll.y > 10 && classes.headerShadow, sharedClasses.blurredBackground)}>
        <Container fluid px="xl" className={sharedClasses.fullHeight}>
          <Group align="center" spacing="xl" className={sharedClasses.fullHeight}>
            <ActionIcon mr="sm" onClick={drawerHandle.open} className={classes.header__menu_action}>
              <IconMenu2 />
            </ActionIcon>

            <Anchor href="/" variant="text" className={sharedClasses.flexCenter}>
              <Logo className={classes.logo} />
            </Anchor>

            <StatusBadge variant="outline" size="lg" />

            <div style={{ flexGrow: 1 }} />

            <ToolbarGroup />

            <AuthLinksGroup className={classes.header__auth_actions_group} />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawer}
        onClose={drawerHandle.close}
        title={
          <Anchor href="/" variant="text" className={sharedClasses.flexCenter}>
            <Logo className={classes.logo} />
          </Anchor>
        }
        padding="xl"
        size="lg"
        overlayOpacity={0.3}
        overlayBlur={3}
      >
        <Navbar py="sm" className={classes.drawer__navbar} height="100%">
          <Navbar.Section>
            <DrawerAuthLinks />
          </Navbar.Section>

          <Navbar.Section grow component={ScrollArea} mx="-xs" my="sm" px="xs">
            <DrawerNavLinks />
          </Navbar.Section>
        </Navbar>
      </Drawer>

      <main className={classes.main} style={{ minHeight: "80vh" }}>
        <Container fluid px="xl">
          <Suspense fallback={<CenterLoader m="xl" />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Container fluid px="xl" pb="xl">
          <Center>
            <Text size="xs" color="dimmed">
              © 2022 - {APP.name}
            </Text>
          </Center>
        </Container>
      </footer>
    </>
  );
}

export default AppLayout;
