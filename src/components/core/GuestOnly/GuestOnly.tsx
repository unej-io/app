import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";
import type { To } from "react-router-dom";

import useAuthStore from "~/stores/auth";

type GuestOnlyProps = PropsWithChildren<{
  redirect: To;
  replace?: boolean;
}>;

function GuestOnly(props: GuestOnlyProps) {
  const { redirect, replace } = props;
  const { user } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(redirect, { replace });
  }, [JSON.stringify(user), redirect, replace]);

  if (user) return null;

  return <>{props.children}</>;
}

export type { GuestOnlyProps };
export default GuestOnly;
