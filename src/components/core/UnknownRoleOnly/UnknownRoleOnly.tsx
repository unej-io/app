import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import useUserStore from "~/stores/user";

type UnknownRoleOnlyProps = PropsWithChildren<{}>;

function UnknownRoleOnly(props: UnknownRoleOnlyProps) {
  const { data } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.role === "student" || data?.role === "organization") navigate(`/${data.role}`, { replace: true });
  }, [JSON.stringify(data)]);

  if (data?.role === "student" || data?.role === "organization") return null;

  return <>{props.children}</>;
}

export type { UnknownRoleOnlyProps };
export default UnknownRoleOnly;
