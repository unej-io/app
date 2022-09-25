import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";
import type { To } from "react-router-dom";

import useAuthStore from "~/stores/auth";

type AuthOnlyProps = PropsWithChildren<{
  redirect: To;
  replace?: boolean;
}>;

function AuthOnly(props: AuthOnlyProps) {
  const { redirect, replace } = props;
  const { user } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(redirect, { replace });
  }, [JSON.stringify(user), redirect, replace]);

  if (!user) return null;

  return <>{props.children}</>;
}

export type { AuthOnlyProps };
export default AuthOnly;
