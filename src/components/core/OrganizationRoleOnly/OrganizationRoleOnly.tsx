import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import useUserStore from "~/stores/user";

type OrganizationRoleOnlyProps = PropsWithChildren<{}>;

function OrganizationRoleOnly(props: OrganizationRoleOnlyProps) {
  const { data } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.role !== "organization") navigate("/", { replace: true });
  }, [JSON.stringify(data)]);

  if (data?.role !== "organization") return null;

  return <>{props.children}</>;
}

export type { OrganizationRoleOnlyProps };
export default OrganizationRoleOnly;
