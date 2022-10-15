import { useEffect, useState } from "react";

import { Stack, Text } from "@mantine/core";

import { CenterLoader, ErrorAlert } from "@unej-io/ui/core";
import { AnchorLink } from "@unej-io/ui/react-router";

import { applyActionCode } from "~/libs/unej-io/firebase/auth";
import { getFirebaseErrorMessage } from "~/libs/unej-io/firebase/utilities";

import useAuthStore from "~/stores/auth";

type VerifyEmailProps = {
  code: string | null;
};

function VerifyEmail(props: VerifyEmailProps) {
  const { code } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ title: string; message: string } | null>(null);

  const { user } = useAuthStore();

  useEffect(() => {
    /**
     * Should loading
     */
    if (!loading) return;

    setError(null);

    /**
     * Should auth
     */
    if (!user) {
      setLoading(false);
      setError({ title: "Error", message: "Unauthorized" });
      return;
    }

    /**
     * Should not unverified email
     */
    if (user.emailVerified) {
      setLoading(false);
      return;
    }

    /**
     * Code is string
     */
    if (typeof code !== "string") {
      setLoading(false);
      setError({ title: "Bad request", message: "Missing action code" });
      return;
    }

    /**
     * Apply code
     */
    applyActionCode(code)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        const { code, message } = getFirebaseErrorMessage(error);
        setError({ title: code === "unknown" ? "Oh no!" : "Error!", message });
      });

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
        <AnchorLink to="/" align="center" replace>
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
        Email verification successful
      </Text>
      <AnchorLink to="/" align="center" replace>
        Back to home
      </AnchorLink>
    </Stack>
  );
}

export type { VerifyEmailProps };
export default VerifyEmail;
