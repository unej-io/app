import { useSearchParams } from "react-router-dom";

import { Head } from "~/components/core";

import ActionMode from "./components/ActionMode";

function AuthActionPage() {
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode");
  const code = searchParams.get("oobCode");

  return (
    <>
      <Head title={{ prefix: "Auth Action" }} />

      <ActionMode mode={mode} code={code} />
    </>
  );
}

export default AuthActionPage;
