import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import useUserStore from "~/stores/user";

type OrganizationRoleOnlyProps = PropsWithChildren<{}>;

function OrganizationRoleOnly(props: OrganizationRoleOnlyProps) {
  const { role } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "organization") navigate("/", { replace: true });
  }, [role]);

  if (role !== "organization") return null;

  return <>{props.children}</>;
}

export type { OrganizationRoleOnlyProps };
export default OrganizationRoleOnly;
