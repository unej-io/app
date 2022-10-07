import { Avatar, Box, Group, ScrollArea, Text } from "@mantine/core";

import useAuthStore from "~/stores/auth";

function DrawerAuthLinks() {
  const { user } = useAuthStore();

  return (
    <Box py="xs">
      <Group noWrap>
        <Avatar variant="outline" radius="xl" size="lg" />

        <Box component={ScrollArea} my="-xs" py="xs">
          <Text size="sm">{user!.displayName || "No name"}</Text>
          <Text size="sm">{user!.email || "No email"}</Text>
        </Box>
      </Group>
    </Box>
  );
}

export default DrawerAuthLinks;
