import {} from "react";

import { Avatar, Box, Divider, Group, Navbar, ScrollArea, Text } from "@mantine/core";

import { NavLink } from "@unej-io/ui/react-router";

import { IconCalendarEvent, IconHome, IconLink, IconSettings, IconTable } from "@tabler/icons";

import useAuthStore from "~/stores/auth";

function OrganizationNavbarAuthLinks() {
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

function OrganizationNavbarNavLinks() {
  return (
    <Box p="xs">
      <Divider my="sm" label="Main" />
      <NavLink to="/organization" end icon={<IconHome />} label="Home" variant="filled" />
      <NavLink to="/organization/event" icon={<IconCalendarEvent />} label="Event" variant="filled" />
      <NavLink to="/organization/form" icon={<IconTable />} label="Form" variant="filled" />
      <NavLink to="/organization/link" icon={<IconLink />} label="Link" variant="filled" />
      <NavLink to="/organization/settings" icon={<IconSettings />} label="Settings" variant="filled" />
    </Box>
  );
}

type OrganizationNavbarProps = {
  hidden?: boolean;
};

const width = { sm: 280, lg: 320 };
const sx = { border: "none" };

function OrganizationNavbar(props: OrganizationNavbarProps) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={props.hidden} width={width} sx={sx}>
      <Navbar.Section>
        <OrganizationNavbarAuthLinks />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" py="sm" px="xs">
        <OrganizationNavbarNavLinks />
      </Navbar.Section>
    </Navbar>
  );
}

export type { OrganizationNavbarProps };
export default OrganizationNavbar;
