import { Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { createRoutes } from "react-router-yesterday";

import { AuthOnly, GuestOnly, StudentRoleOnly, OrganizationRoleOnly, UnknownRoleOnly, UserProvider } from "~/components/core";

import NotFoundPage from "~/pages/404/page";

const RootRoutes = createRoutes((route) => {
  const routes: RouteObject[] = [
    /**
     * Should auth
     * - Main App based on user role
     */
    route.path("/", <AuthOnly redirect="/sign-in" replace children={<UserProvider children={<Outlet />} />} />, [
      /**
       * Student App
       * - Form
       * - Link
       * - Settings
       */
      route.path("student", <StudentRoleOnly children={<Outlet />} />, [
        route.lazy.element(
          () => import("~/pages/student/__layout__/layout.student"),
          [
            route.lazy.index(() => import("~/pages/student/index/page.student.index")),
            route.lazy.path("form", () => import("~/pages/student/form/page.student.form")),
            route.lazy.path("link", () => import("~/pages/student/link/page.student.link")),
            route.lazy.path("settings", () => import("~/pages/student/settings/page.student.settings")),
          ]
        ),
      ]),

      /**
       * Organization App
       * - Form
       * - Link
       * - Settings
       */
      route.path("organization", <OrganizationRoleOnly children={<Outlet />} />, [
        route.lazy.element(
          () => import("~/pages/organization/__layout__/layout.organization"),
          [
            route.lazy.index(() => import("~/pages/organization/index/page.organization.index")),
            route.lazy.path("form", () => import("~/pages/organization/form/page.organization.form")),
            route.lazy.path("link", () => import("~/pages/organization/link/page.organization.link")),
            route.lazy.path("settings", () => import("~/pages/organization/settings/page.organization.settings")),
          ]
        ),
      ]),

      /**
       * Unknown App
       * - Verify user role
       */
      route.element(<UnknownRoleOnly children={<Outlet />} />, [
        route.lazy.element(
          () => import("~/pages/unknown/__layout__/layout.index"),
          [
            route.lazy.index(() => import("~/pages/unknown/index/page.index")),
            route.lazy.path("verify-me", () => import("~/pages/unknown/verify-me/page.verify-me")),
          ]
        ),
      ]),

      /**
       * Auth fallback
       */
      // route.catch(<AuthNotFoundPage />),
    ]),

    /**
     * Shouldn't auth
     * - Sign-in
     * - Sign-up
     * - Forgot password
     */
    route.element(<GuestOnly redirect="/" replace children={<Outlet />} />, [
      route.lazy.path("sign-in", () => import("~/pages/sign-in/page.sign-in")),
      route.lazy.path("sign-up", () => import("~/pages/sign-up/page.sign-up")),
      route.lazy.path("forgot-password", () => import("~/pages/forgot-password/page.forgot-password")),
    ]),

    /**
     * Firebase auth action
     * - Verify email
     * - Reset password
     * - Email verification
     */
    route.path("auth", <Outlet />, [
      route.lazy.path("action", () => import("~/pages/auth/pages/action/page.auth.action")),
      route.lazy.path("email-verification", () => import("~/pages/auth/pages/email-verification/page.auth.email-verification")),
    ]),

    /**
     * DEV
     */
    route.path("__dev__", <Outlet />, [
      //
      route.lazy.path("components", () => import("~/pages/__DEV__/components/page.__dev__.components")),
    ]),

    /**
     * Root fallback
     */
    route.catch(<NotFoundPage />),
  ];

  return routes;
});

export type { RoutesProps as RootRoutesProps } from "react-router-yesterday";
export default RootRoutes;
