import { Suspense, useCallback, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { AppShell } from "@mantine/core";

import { history } from "~/components/core";

import StudentHeader from "./components/StudentHeader";
import StudentNavbar from "./components/StudentNavbar";
import StudentSpotlights from "./components/StudentSpotlights";

function StudentShell() {
  const [navbar, setNavbar] = useState(false);

  const closeNavbar = useCallback(() => {
    setNavbar(false);
  }, []);
  const toggleNavbar = useCallback(() => {
    setNavbar((v) => !v);
  }, []);

  useEffect(
    () =>
      history.listen(() => {
        setTimeout(closeNavbar, 150);
      }),
    []
  );

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      header={<StudentHeader opened={navbar} onMenuClick={toggleNavbar} />}
      navbar={<StudentNavbar hidden={!navbar} />}
    >
      <Suspense>
        <Outlet />
      </Suspense>
    </AppShell>
  );
}

function StudentLayout() {
  return (
    <StudentSpotlights>
      <StudentShell />
    </StudentSpotlights>
  );
}

export default StudentLayout;
