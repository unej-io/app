import { Container, Text, Title } from "@mantine/core";

import { Head } from "~/components/core";

import ForgotPasswordForm from "./components/ForgotPasswordForm";

function ForgotPasswordPage() {
  return (
    <>
      <Head title={{ prefix: "Forgot Password" }} />

      <Container size="xs" my="xl" p="xl">
        <Title align="center">Forgot your password?</Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Enter your email to get a reset link
        </Text>

        <ForgotPasswordForm />
      </Container>
    </>
  );
}

export default ForgotPasswordPage;
