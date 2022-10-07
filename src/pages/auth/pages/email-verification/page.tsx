import { Container } from "@mantine/core";

import { Head } from "~/components/core";

import EmailVerification from "./components/EmailVerification";

function AuthEmailVerificationPage() {
  return (
    <>
      <Head title={{ prefix: "Email Verification" }} />

      <Container size="sm" my="xl" p="xl">
        <EmailVerification />
      </Container>
    </>
  );
}

export default AuthEmailVerificationPage;
