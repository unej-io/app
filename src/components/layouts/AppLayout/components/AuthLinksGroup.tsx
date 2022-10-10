import { memo, useState } from "react";

import { ActionIcon, Box, Group, Menu, ScrollArea, Text } from "@mantine/core";
import type { GroupProps } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import { IconLogout, IconUser } from "@tabler/icons";

import { signOut } from "~/libs/unej-io/firebase/auth";
import { getFirebaseErrorMessage } from "~/libs/unej-io/firebase/utilities";

import useAuthStore from "~/stores/auth";

type AuthLinksGroupProps = GroupProps;

function AuthLinksGroup({ children, ...props }: AuthLinksGroupProps) {
  const { user } = useAuthStore();

  const [logoutLoading, setLogoutLoading] = useState(false);

  async function handleSignOut() {
    try {
      setLogoutLoading(true);
      await signOut();
      setLogoutLoading(false);
    } catch (error) {
      const { code, message } = getFirebaseErrorMessage(error);
      showNotification({ id: code, title: code === "unknown" ? "Oh no!" : "Error!", message, color: "red" });
    }
  }

  return (
    <Group {...props}>
      <Menu width={240} shadow="md" position="bottom-end" withinPortal>
        <Menu.Target>
          <ActionIcon variant="outline" radius="xl">
            <IconUser />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Group p="sm" noWrap>
            <Box component={ScrollArea} my="-xs" py="xs">
              <Text size="sm">{user!.displayName || "No name"}</Text>
              <Text size="sm">{user!.email || "No email"}</Text>
            </Box>
          </Group>

          <Menu.Label>Account</Menu.Label>
          <Menu.Item icon={<IconLogout size={14} />} onClick={handleSignOut} disabled={logoutLoading} closeMenuOnClick={false}>
            Sign Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export type { AuthLinksGroupProps };
export default memo(AuthLinksGroup);
