import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import useUserStore from "~/stores/user";

type StudentRoleOnlyProps = PropsWithChildren<{}>;

function StudentRoleOnly(props: StudentRoleOnlyProps) {
  const { data } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.role !== "student") navigate("/", { replace: true });
  }, [JSON.stringify(data)]);

  if (data?.role !== "student") return null;

  return <>{props.children}</>;
}

export type { StudentRoleOnlyProps };
export default StudentRoleOnly;
