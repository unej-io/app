import {} from "react";

import { Avatar, Box, Divider, Group, Navbar, ScrollArea, Text } from "@mantine/core";

import { IconDiscountCheck, IconHome } from "@tabler/icons";

import { NavLink } from "~/components/core";

import useAuthStore from "~/stores/auth";

function UnknownNavbarAuthLinks() {
  const { user } = useAuthStore();

  return (
    <Box p="xs">
      <Group noWrap>
        <Avatar variant="gradient" radius="xl" size="md" />

        <Box component={ScrollArea} my="-xs" py="xs">
          <Text size="sm">{user!.displayName || "No name"}</Text>
          <Text size="sm">{user!.email || "No email"}</Text>
        </Box>
      </Group>
    </Box>
  );
}

function UnknownNavbarNavLinks() {
  return (
    <Box p="xs">
      <Divider my="sm" label="Main" />
      <NavLink to="/" end icon={<IconHome />} label="Home" variant="filled" />
      <NavLink to="/verify-me" icon={<IconDiscountCheck />} label="Verify Me" variant="filled" />
    </Box>
  );
}

type UnknownNavbarProps = {
  hidden?: boolean;
};

const width = { sm: 280, lg: 320 };
const sx = { border: "none" };

function UnknownNavbar(props: UnknownNavbarProps) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={props.hidden} width={width} sx={sx}>
      <Navbar.Section>
        <UnknownNavbarAuthLinks />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" py="sm" px="xs">
        <UnknownNavbarNavLinks />
      </Navbar.Section>
    </Navbar>
  );
}

export type { UnknownNavbarProps };
export default UnknownNavbar;
