import { useState } from "react";

import { Button, Center, Paper, Space, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { FormErrors } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

import { sendPasswordResetEmail } from "~/libs/unej-io/firebase/auth";
import { getFirebaseErrorMessage } from "~/libs/unej-io/firebase/utilities";

import { AnchorLink, SuccessAlert } from "~/components/core";
import { useSubmitHandler } from "~/hooks/core";

import { IconArrowLeft } from "@tabler/icons";

function Ok() {
  return (
    <Paper shadow="md" p={30} mt={30}>
      <SuccessAlert title="Success" message="Link sent" />

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

type ForgotPasswordFormValues = {
  email: string;
};

function ForgotPasswordForm() {
  const form = useForm<ForgotPasswordFormValues>({
    initialValues: {
      email: "",
    },
  });

  const [ok, setOk] = useState(false);
  const [submitHandler, { submitting }] = useSubmitHandler<ForgotPasswordFormValues>(async (values) => {
    try {
      const { email } = values;
      await sendPasswordResetEmail(email);
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
        <TextInput type="email" label="Email" placeholder="Your email" required {...form.getInputProps("email")} />

        <Button type="submit" mt="xl" fullWidth loading={submitting}>
          Reset password
        </Button>
      </Paper>
    </form>
  );
}

export default ForgotPasswordForm;
