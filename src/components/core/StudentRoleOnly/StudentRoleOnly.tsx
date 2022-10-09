import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import useUserStore from "~/stores/user";

type StudentRoleOnlyProps = PropsWithChildren<{}>;

function StudentRoleOnly(props: StudentRoleOnlyProps) {
  const { role } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "student") navigate("/", { replace: true });
  }, [role]);

  if (role !== "student") return null;

  return <>{props.children}</>;
}

export type { StudentRoleOnlyProps };
export default StudentRoleOnly;
