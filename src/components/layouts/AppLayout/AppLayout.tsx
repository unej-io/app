import { useCallback, useEffect, useRef, useState } from "react";

import { Outlet } from "react-router-dom";

import { ActionIcon, Center, Container, Group, Text } from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";

import { IconMenu2 } from "@tabler/icons";

import { APP } from "~/const/app";

import { ColorSchemeTogglerActionIcon, PrimaryColorSelectMenuActionIcon, SpotlightOpenerActionIcon } from "~/components/core";
import { Logo } from "~/libs/unej-io/ui";
import { useSharedStyles } from "~/libs/unej-io/hooks/styles";

import useStyles from "./styles";

import AuthLinksGroup from "./components/AuthLinksGroup";

type AppLayoutProps = {};

function AppLayout(props: AppLayoutProps) {
  const { classes: sharedClasses } = useSharedStyles();
  const { classes, cx, theme } = useStyles();

  const [scroll] = useWindowScroll();
  const [drawer, setDrawer] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setDrawer(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setDrawer(false);
  }, []);

  const matchesLargerThanMedium = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);
  const currentMatchesLargerThanMedium = useRef(matchesLargerThanMedium);

  useEffect(() => {
    if (matchesLargerThanMedium !== currentMatchesLargerThanMedium.current) {
      handleDrawerClose();
      currentMatchesLargerThanMedium.current = matchesLargerThanMedium;
    }
  }, [matchesLargerThanMedium]);

  return (
    <>
      <header className={cx(classes.header, scroll.y > 10 && classes.headerShadow, sharedClasses.blurredBackground)}>
        <Container size="xl" px="xl" className={sharedClasses.fullHeight}>
          <Group align="center" spacing="xl" className={sharedClasses.fullHeight}>
            <ActionIcon mr="sm" onClick={handleDrawerOpen} className={classes.header__menu_action}>
              <IconMenu2 />
            </ActionIcon>

            <a href="/" className={sharedClasses.flexCenter}>
              <Logo className={classes.logo} />
            </a>

            <div style={{ flexGrow: 1 }} />

            <Group>
              <SpotlightOpenerActionIcon aria-label="app search" />

              <ColorSchemeTogglerActionIcon aria-label="toggle color scheme" />

              <PrimaryColorSelectMenuActionIcon aria-label="select primary color" />
            </Group>

            <AuthLinksGroup className={classes.header__auth_actions_group} />
          </Group>
        </Container>
      </header>

      <main className={classes.main} style={{ minHeight: "100vh" }}>
        <Container size="xl" px="xl">
          <Outlet />
        </Container>
      </main>

      <footer className={classes.footer}>
        <Container size="xl" px="xl" pb="xl">
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

export type { AppLayoutProps };

export default AppLayout;
