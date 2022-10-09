import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import useUserStore from "~/stores/user";

type UnknownRoleOnlyProps = PropsWithChildren<{}>;

function UnknownRoleOnly(props: UnknownRoleOnlyProps) {
  const { role } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (role === "student" || role === "organization") navigate(`/${role}`, { replace: true });
  }, [role]);

  if (role === "student" || role === "organization") return null;

  return <>{props.children}</>;
}

export type { UnknownRoleOnlyProps };
export default UnknownRoleOnly;
