import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

import { useLocation } from "react-router-dom";

import { Center } from "@mantine/core";
import { showNotification, hideNotification } from "@mantine/notifications";

import useAuthStore from "~/stores/auth";

import { auth } from "~/libs/unej-io/firebase/const";

import { AnchorLink, LogoLoader } from "~/components/core";

function CenterLogoLoader() {
  return (
    <Center sx={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <LogoLoader />
    </Center>
  );
}

type AuthProviderProps = PropsWithChildren<{}>;

function AuthProvider(props: AuthProviderProps) {
  const location = useLocation();

  const { user, loading, setUser, setLoading } = useAuthStore();

  const [notifyEmailVerified, setNotifyEmailVerified] = useState(false);

  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        if (user) setUser(user);
        else setUser(null);

        setLoading(false);
      }),
    []
  );

  useEffect(
    () =>
      auth.onIdTokenChanged((user) => {
        if (user) setUser(user);
        else setUser(null);

        setLoading(false);
      }),
    []
  );

  useEffect(() => {
    if (!location.pathname.startsWith("/auth") && user && !user.emailVerified && !notifyEmailVerified) {
      const id = "verify-account";

      const handleCloseNotification = () => {
        hideNotification(id);
      };

      showNotification({
        id,
        title: "Verify account",
        message: (
          <AnchorLink to="/auth/email-verification" onClick={handleCloseNotification}>
            Request email verification
          </AnchorLink>
        ),
        color: "yellow",
      });
      setNotifyEmailVerified(true);
    }
  }, [location.pathname, user, notifyEmailVerified]);

  /**
   * WAIT FOR INITIAL AUTH CHECK
   */
  if (loading) return <CenterLogoLoader />;

  /**
   * RENDER ROUTES
   */
  return <>{props.children}</>;
}

export type { AuthProviderProps };
export default AuthProvider;
