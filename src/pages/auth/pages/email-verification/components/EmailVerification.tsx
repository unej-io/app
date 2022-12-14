import { useEffect, useState } from "react";

import { Stack, Text } from "@mantine/core";

import { CenterLoader, ErrorAlert } from "@unej-io/ui/core";
import { AnchorLink } from "@unej-io/ui/react-router";

import { sendEmailVerification } from "~/libs/unej-io/firebase/auth";
import { getFirebaseErrorMessage } from "~/libs/unej-io/firebase/utilities";

import useAuthStore from "~/stores/auth";

function EmailVerification() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ title: string; message: string } | null>(null);

  const { user } = useAuthStore();

  useEffect(() => {
    if (!loading) return;

    setError(null);

    if (user) {
      if (user.emailVerified) {
        setLoading(false);
      } else {
        sendEmailVerification(user)
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            const { code, message } = getFirebaseErrorMessage(error);
            setError({ title: code === "unknown" ? "Oh no!" : "Error!", message });
          });
      }
    } else {
      setLoading(false);
      setError({ title: "Unauthorized", message: "User not found" });
    }

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
   * EMAIL ALREADY VERIFIED
   */
  if (user?.emailVerified) {
    return (
      <Stack>
        <Text align="center" size="xl" weight={700}>
          Email already verified
        </Text>
        <AnchorLink to="/" align="center">
          Back to home
        </AnchorLink>
      </Stack>
    );
  }

  /**
   * SUCCESS
   */
  return (
    <Stack>
      <Text align="center" size="xl" weight={700}>
        Email verification sent
      </Text>
      <Text align="center">Check your email</Text>
    </Stack>
  );
}

export default EmailVerification;
