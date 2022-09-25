import { Outlet } from "react-router-dom";
import { createRoutes } from "react-router-yesterday";

import { AuthOnly, GuestOnly } from "~/components/core";
import { AppLayout } from "~/components/layouts";

import IndexPage from "~/pages/index/page";
import SignInPage from "~/pages/sign-in/page";
import SignUpPage from "~/pages/sign-up/page";
import NotFoundPage from "~/pages/404/page";

const RootRoutes = createRoutes((route) => [
  //
  route.element(
    <AuthOnly redirect="/sign-in" replace>
      <Outlet />
    </AuthOnly>,
    [
      route.element(<AppLayout />, [
        //
        route.index(<IndexPage />),
        route.path("/form", <>FormPage</>),
        route.path("/link", <>LinkPage</>),
        route.path("/settings", <>SettingsPage</>),
        route.catch(<>AppNotFoundPage</>),
      ]),
    ]
  ),
  route.element(
    <GuestOnly redirect="/" replace>
      <Outlet />
    </GuestOnly>,
    [route.path("/sign-in", <SignInPage />), route.path("/sign-up", <SignUpPage />)]
  ),
  route.catch(<NotFoundPage />),
]);

export type { RoutesProps as RootRoutesProps } from "react-router-yesterday";
export default RootRoutes;
