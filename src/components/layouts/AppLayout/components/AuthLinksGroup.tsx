import { Button, Group } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import useAuthStore from "~/stores/auth";

type AuthLinksGroupProps = GroupProps;

function AuthLinksGroup({ children, ...props }: AuthLinksGroupProps) {
  const { user, signOut } = useAuthStore();

  function handleSignOut() {
    signOut();
  }

  if (user) {
    return (
      <Group {...props}>
        <Button variant="gradient" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Group>
    );
  }

  return (
    <Group {...props}>
      <Button component="a" href="/sign-in" variant="outline">
        Sign In
      </Button>

      <Button component="a" href="/sign-up" variant="gradient">
        Sign Up
      </Button>
    </Group>
  );
}

export type { AuthLinksGroupProps };
export default AuthLinksGroup;
