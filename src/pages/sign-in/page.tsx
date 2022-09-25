import {} from "react";

import { Button } from "@mantine/core";

import useAuthStore from "~/stores/auth";

import { Head } from "~/components/core";

function SignInPage() {
  const { signIn } = useAuthStore();

  function handleSignIn() {
    signIn({ username: "flamrdevs", password: "flamrdevs" });
  }

  return (
    <>
      <Head title={{ prefix: "Sign In" }} />

      <div>SignInPage</div>

      <Button onClick={handleSignIn}>Sign In</Button>
    </>
  );
}

export default SignInPage;
