import { Container, Text, Title } from "@mantine/core";

import { AnchorLink } from "@unej-io/ui/react-router";

import { Head } from "~/components/core";

import SignUpForm from "./components/SignUpForm";

function SignUpPage() {
  return (
    <>
      <Head title={{ prefix: "Sign Up" }} />

      <Container size="xs" my="xl" p="xl">
        <Title align="center">Welcome back!</Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <AnchorLink to="/sign-in" size="sm">
            Sign in
          </AnchorLink>
        </Text>

        <SignUpForm />
      </Container>
    </>
  );
}

export default SignUpPage;
