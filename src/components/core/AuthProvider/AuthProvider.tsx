import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import useAuthStore from "~/stores/auth";

type AuthProviderProps = PropsWithChildren<{}>;

function AuthProvider(props: AuthProviderProps) {
  const {} = useAuthStore();

  useEffect(() => {
    // firebase subscribe
  }, []);

  return <>{props.children}</>;
}

export type { AuthProviderProps };
export default AuthProvider;
