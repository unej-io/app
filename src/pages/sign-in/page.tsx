import { Container, Text, Title } from "@mantine/core";

import { AnchorLink, Head } from "~/components/core";

import SignInForm from "./components/SignInForm";

function SignInPage() {
  return (
    <>
      <Head title={{ prefix: "Sign In" }} />

      <Container size="xs" my="xl" p="xl">
        <Title align="center">Welcome back!</Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <AnchorLink to="/sign-up" size="sm">
            Sign up
          </AnchorLink>
        </Text>

        <SignInForm />
      </Container>
    </>
  );
}

export default SignInPage;
