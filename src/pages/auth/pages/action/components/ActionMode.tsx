import { Container } from "@mantine/core";

import { ErrorAlert } from "@unej-io/ui/core";

import ResetPassword from "./ResetPassword";
import VerifyEmail from "./VerifyEmail";

type ActionModeProps = {
  mode: "resetPassword" | "recoverEmail" | "verifyEmail" | (string & {}) | null;
  code: string | null;
};

function ActionMode(props: ActionModeProps) {
  const { mode, code } = props;

  if (mode === "resetPassword")
    return (
      <Container size="xs" my="xl" p="xl">
        <ResetPassword code={code} />
      </Container>
    );

  if (mode === "verifyEmail")
    return (
      <Container size="sm" my="xl" p="xl">
        <VerifyEmail code={code} />
      </Container>
    );

  return (
    <Container size="sm" my="xl" p="xl">
      <ErrorAlert title="Oops" message="Unknown Action" />
    </Container>
  );
}

export type { ActionModeProps };
export default ActionMode;
