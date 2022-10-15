import { Box, Divider } from "@mantine/core";

import { NavLink } from "@unej-io/ui/react-router";

import { IconHome, IconLink, IconSettings, IconTable } from "@tabler/icons";

function DrawerNavLinks() {
  return (
    <Box py="xs">
      <Divider my="sm" label="Main" />
      <NavLink to="/" icon={<IconHome />} label="Home" variant="filled" />
      <NavLink to="/form" icon={<IconTable />} label="Form" variant="filled" />
      <NavLink to="/link" icon={<IconLink />} label="Link" variant="filled" />
      <Divider my="sm" label="Other" />
      <NavLink to="/settings" icon={<IconSettings />} label="Settings" variant="filled" />
    </Box>
  );
}

export default DrawerNavLinks;
