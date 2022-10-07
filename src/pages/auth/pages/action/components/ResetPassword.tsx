import { useEffect, useState } from "react";

import { Button, Center, Paper, PasswordInput, Space, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { FormErrors } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

import { IconArrowLeft } from "@tabler/icons";

import { verifyPasswordResetCode, confirmPasswordReset, getFirebaseErrorMessage } from "~/libs/unej-io/firebase";

import { AnchorLink, CenterLoader, ErrorAlert, SuccessAlert } from "~/components/core";
import { useSubmitHandler } from "~/hooks/core";

import useAuthStore from "~/stores/auth";

function Ok() {
  return (
    <Paper shadow="md" p={30} mt={30}>
      <SuccessAlert title="Success" message="Try to sign in with your new password" />

      <Space my="md" />

      <AnchorLink to="/sign-in" color="dimmed" size="sm" replace>
        <Center inline>
          <IconArrowLeft size={12} />
          <Text ml="xs" inline>
            Back to sign in page
          </Text>
        </Center>
      </AnchorLink>
    </Paper>
  );
}

type ResetPasswordFormValues = {
  code: string;
  password: string;
  confirmPassword: string;
};

type ResetPasswordFormProps = {
  code: string;
};

function ResetPasswordForm(props: ResetPasswordFormProps) {
  const form = useForm<ResetPasswordFormValues>({
    initialValues: {
      code: props.code,
      password: "new-flamrdevs",
      confirmPassword: "new-flamrdevs",
    },
  });

  const [ok, setOk] = useState(false);
  const [submitHandler, { submitting }] = useSubmitHandler<ResetPasswordFormValues>(async (values) => {
    try {
      const { code, password, confirmPassword } = values;
      if (typeof code !== "string") throw new Error("Missing action code");
      if (password !== confirmPassword) throw new Error("Password don't match");
      await confirmPasswordReset(code, password);
      setOk(true);
    } catch (error) {
      const { code, message } = getFirebaseErrorMessage(error);
      showNotification({ id: code, title: code === "unknown" ? "Oh no!" : "Error!", message, color: "red" });
    }
  });

  const validationFailureHandler = async (errors: FormErrors) => {
    console.error(errors);
  };

  const handleSubmit = form.onSubmit(submitHandler, validationFailureHandler);

  if (ok) return <Ok />;

  return (
    <form onSubmit={handleSubmit}>
      <Paper withBorder shadow="md" p={30} mt={30}>
        <PasswordInput mt="md" label="Password" placeholder="Your password" required {...form.getInputProps("password")} />

        <PasswordInput
          mt="md"
          label="Confirm Password"
          placeholder="Confirmation password"
          required
          {...form.getInputProps("confirmPassword")}
        />

        <Button type="submit" mt="xl" fullWidth loading={submitting}>
          Save
        </Button>
      </Paper>
    </form>
  );
}

type ResetPasswordProps = {
  code: string | null;
};

function ResetPassword(props: ResetPasswordProps) {
  const { code } = props;

  const [validCode] = useState(String(code));

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ title: string; message: string } | null>(null);

  const { user } = useAuthStore();

  useEffect(() => {
    if (!loading) return;

    setError(null);

    /**
     * Shouldn't auth
     */
    if (user) {
      setLoading(false);
      return;
    }

    /**
     * Code is string
     */
    if (typeof code !== "string") {
      setLoading(false);
      setError({ title: "Bad request", message: "Missing action code" });
      return;
    }

    /**
     * Check code
     */
    verifyPasswordResetCode(code)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        const { code, message } = getFirebaseErrorMessage(error);
        setError({ title: code === "unknown" ? "Oh no!" : "Error!", message });
      });

    /**
     * WHY ONLY LOADING DEPS | Run once
     */
  }, [loading]);

  /**
   * ERROR
   */
  if (error) return <ErrorAlert title={error.title} message={error.message} />;

  /**
   * LOADING
   */
  if (loading) return <CenterLoader />;

  /**
   * USER SIGNED IN
   */
  if (user) {
    return (
      <Stack>
        <Text align="center" size="xl" weight={700}>
          You're signed in now
        </Text>
        <AnchorLink to="/" align="center" replace>
          Back to home
        </AnchorLink>
      </Stack>
    );
  }

  return (
    <>
      <Title align="center">Reset your password</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Create your new password
      </Text>

      <ResetPasswordForm code={validCode} />
    </>
  );
}

export type { ResetPasswordProps };
export default ResetPassword;
