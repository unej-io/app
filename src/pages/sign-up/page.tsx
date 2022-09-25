import {} from "react";

import { Button } from "@mantine/core";

import useAuthStore from "~/stores/auth";

import { Head } from "~/components/core";

function SignUpPage() {
  const { signUp } = useAuthStore();

  function handleSignUp() {
    signUp({ username: "flamrdevs", password: "flamrdevs" });
  }

  return (
    <>
      <Head title={{ prefix: "Sign Up" }} />

      <div>SignUpPage</div>

      <Button onClick={handleSignUp}>Sign Up</Button>
    </>
  );
}

export default SignUpPage;
