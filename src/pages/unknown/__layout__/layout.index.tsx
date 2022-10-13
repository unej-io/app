import { Suspense, useCallback, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { AppShell } from "@mantine/core";

import { history } from "~/components/core";

import UnknownHeader from "./components/UnknownHeader";
import UnknownNavbar from "./components/UnknownNavbar";
import UnknownSpotlights from "./components/UnknownSpotlights";

function UnknownShell() {
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
      header={<UnknownHeader opened={navbar} onMenuClick={toggleNavbar} />}
      navbar={<UnknownNavbar hidden={!navbar} />}
    >
      <Suspense>
        <Outlet />
      </Suspense>
    </AppShell>
  );
}

function UnknownLayout() {
  return (
    <UnknownSpotlights>
      <UnknownShell />
    </UnknownSpotlights>
  );
}

export default UnknownLayout;
