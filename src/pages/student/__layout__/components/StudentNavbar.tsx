import {} from "react";

import { Avatar, Box, Divider, Group, Navbar, ScrollArea, Text } from "@mantine/core";

import { IconHome, IconLink, IconSettings, IconTable } from "@tabler/icons";

import { NavLink } from "~/components/core";

import useAuthStore from "~/stores/auth";

function StudentNavbarAuthLinks() {
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

function StudentNavbarNavLinks() {
  return (
    <Box p="xs">
      <Divider my="sm" label="Main" />
      <NavLink to="/student" end icon={<IconHome />} label="Home" variant="filled" />
      <NavLink to="/student/form" icon={<IconTable />} label="Form" variant="filled" />
      <NavLink to="/student/link" icon={<IconLink />} label="Link" variant="filled" />
      <NavLink to="/student/settings" icon={<IconSettings />} label="Settings" variant="filled" />
    </Box>
  );
}

type StudentNavbarProps = {
  hidden?: boolean;
};

const width = { sm: 280, lg: 320 };
const sx = { border: "none" };

function StudentNavbar(props: StudentNavbarProps) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={props.hidden} width={width} sx={sx}>
      <Navbar.Section>
        <StudentNavbarAuthLinks />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" py="sm" px="xs">
        <StudentNavbarNavLinks />
      </Navbar.Section>
    </Navbar>
  );
}

export type { StudentNavbarProps };
export default StudentNavbar;
