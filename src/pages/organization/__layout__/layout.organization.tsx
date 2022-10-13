import { Suspense, useCallback, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { AppShell } from "@mantine/core";

import { history } from "~/components/core";

import OrganizationHeader from "./components/OrganizationHeader";
import OrganizationNavbar from "./components/OrganizationNavbar";
import OrganizationSpotlights from "./components/OrganizationSpotlights";

function OrganizationShell() {
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
      header={<OrganizationHeader opened={navbar} onMenuClick={toggleNavbar} />}
      navbar={<OrganizationNavbar hidden={!navbar} />}
    >
      <Suspense>
        <Outlet />
      </Suspense>
    </AppShell>
  );
}

function OrganizationLayout() {
  return (
    <OrganizationSpotlights>
      <OrganizationShell />
    </OrganizationSpotlights>
  );
}

export default OrganizationLayout;
