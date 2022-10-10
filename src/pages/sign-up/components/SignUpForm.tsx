import { Button, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { FormErrors } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

import { signUp } from "~/libs/unej-io/firebase/auth";
import { getFirebaseErrorMessage } from "~/libs/unej-io/firebase/utilities";

import { useSubmitHandler } from "~/hooks/core";
import useAuthStore from "~/stores/auth";

type SignUpFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

function SignUpForm() {
  const { user } = useAuthStore();

  const form = useForm<SignUpFormValues>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [submitHandler, { submitting }] = useSubmitHandler<SignUpFormValues>(async (values) => {
    try {
      const { email, password, confirmPassword } = values;
      if (password !== confirmPassword) throw new Error("Password don't match");
      await signUp(email, password);
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

        <PasswordInput
          mt="md"
          label="Confirm Password"
          placeholder="Confirmation password"
          required
          {...form.getInputProps("confirmPassword")}
        />

        <Button type="submit" mt="xl" fullWidth loading={submitting || Boolean(user)}>
          Sign up
        </Button>
      </Paper>
    </form>
  );
}

export default SignUpForm;
