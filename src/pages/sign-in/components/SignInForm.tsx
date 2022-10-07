import { Button, Group, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { FormErrors } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

import { signIn, getFirebaseErrorMessage } from "~/libs/unej-io/firebase";

import { AnchorLink } from "~/components/core";
import { useSubmitHandler } from "~/hooks/core";
import useAuthStore from "~/stores/auth";

type SignInFormValues = {
  email: string;
  password: string;
};

function SignInForm() {
  const { user } = useAuthStore();

  const form = useForm<SignInFormValues>({
    initialValues: {
      email: "flamrdevs@gmail.com",
      password: "flamrdevs",
    },
  });

  const [submitHandler, { submitting }] = useSubmitHandler<SignInFormValues>(async (values) => {
    try {
      const { email, password } = values;
      await signIn(email, password);
    } catch (error) {
      const { code, message } = getFirebaseErrorMessage(error);
      showNotification({ id: code, title: code === "unknown" ? "Oh no!" : "Error!", message, color: "red" });
    }
  });

  const validationFailureHandler = async (errors: FormErrors) => {
    console.error(errors);
  };

  const handleSubmit = form.onSubmit(submitHandler, validationFailureHandler);

  return (
    <form onSubmit={handleSubmit}>
      <Paper withBorder shadow="md" p={30} mt={30}>
        <TextInput type="email" label="Email" placeholder="Your email" required {...form.getInputProps("email")} />

        <PasswordInput mt="md" label="Password" placeholder="Your password" required {...form.getInputProps("password")} />

        <Group position="right" mt="md">
          <AnchorLink to="/forgot-password" size="sm">
            Forgot password?
          </AnchorLink>
        </Group>

        <Button type="submit" mt="xl" fullWidth loading={submitting || Boolean(user)}>
          Sign in
        </Button>
      </Paper>
    </form>
  );
}

export default SignInForm;
