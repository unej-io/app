import { FirebaseError } from "firebase/app";

function getFirebaseErrorMessage(error: unknown, defaultMessage: string = "Something went wrong") {
  if (error instanceof FirebaseError) {
    const { code } = error;
    switch (code) {
      case "auth/email-already-in-use":
        return {
          code: "auth/email-already-in-use",
          message: "Email already in use",
        } as const;

      case "auth/invalid-action-code":
        return {
          code: "auth/invalid-action-code",
          message: "Invalid action code",
        } as const;

      case "auth/network-request-failed":
        return {
          code: "auth/network-request-failed",
          message: "Network request failed",
        } as const;

      case "auth/too-many-requests":
        return {
          code: "auth/too-many-requests",
          message: "Too many requests",
        } as const;

      case "auth/user-not-found":
        return {
          code: "auth/user-not-found",
          message: "User not found",
        } as const;

      case "auth/wrong-password":
        return {
          code: "auth/wrong-password",
          message: "Wrong password",
        } as const;
    }
  }

  if (error instanceof Error) {
    return {
      code: "error",
      message: error.message,
    } as const;
  }

  return {
    code: "unknown",
    message: defaultMessage,
  } as const;
}

export { getFirebaseErrorMessage };
