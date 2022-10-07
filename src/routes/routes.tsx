import { Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { createRoutes } from "react-router-yesterday";

import { AuthOnly, GuestOnly, StudentRoleOnly, OrganizationRoleOnly, UnknownRoleOnly } from "~/components/core";
import { StudentAppLayout, OrganizationAppLayout, UnknownAppLayout } from "~/components/layouts";

import NotFoundPage from "~/pages/404/page";

import StudentIndexPage from "~/pages/student/index/page";
import OrganizationIndexPage from "~/pages/organization/index/page";
import UnknownIndexPage from "~/pages/unknown/index/page";
import AuthNotFoundPage from "~/pages/auth/pages/404/page";

const RootRoutes = createRoutes((route) => {
  const routes: RouteObject[] = [
    /**
     * Should auth
     * - Main App based on user role
     */
    route.element(<AuthOnly redirect="/sign-in" replace children={<Outlet />} />, [
      /**
       * Student App
       * - Form
       * - Link
       * - Settings
       */
      route.path("student", <StudentRoleOnly children={<StudentAppLayout />} />, [
        route.index(<StudentIndexPage />),
        route.lazy.path("form", () => import("~/pages/student/form/page")),
        route.lazy.path("link", () => import("~/pages/student/link/page")),
        route.lazy.path("settings", () => import("~/pages/student/settings/page")),
      ]),

      /**
       * Organization App
       * - Form
       * - Link
       * - Settings
       */
      route.path("organization", <OrganizationRoleOnly children={<OrganizationAppLayout />} />, [
        route.index(<OrganizationIndexPage />),
        route.lazy.path("form", () => import("~/pages/organization/form/page")),
        route.lazy.path("link", () => import("~/pages/organization/link/page")),
        route.lazy.path("settings", () => import("~/pages/organization/settings/page")),
      ]),

      /**
       * Unknown App
       * - Verify user role
       */
      route.element(<UnknownRoleOnly children={<UnknownAppLayout />} />, [
        route.index(<UnknownIndexPage />),
        route.lazy.path("verify-me", () => import("~/pages/unknown/verify-me/page")),
      ]),

      /**
       * Auth fallback
       */
      route.catch(<AuthNotFoundPage />),
    ]),

    /**
     * Shouldn't auth
     * - Sign-in
     * - Sign-up
     * - Forgot password
     */
    route.element(<GuestOnly redirect="/" replace children={<Outlet />} />, [
      route.lazy.path("sign-in", () => import("~/pages/sign-in/page")),
      route.lazy.path("sign-up", () => import("~/pages/sign-up/page")),
      route.lazy.path("forgot-password", () => import("~/pages/forgot-password/page")),
    ]),

    /**
     * Firebase auth action
     * - Verify email
     * - Reset password
     * - Email verification
     */
    route.path("auth", <Outlet />, [
      route.lazy.path("action", () => import("~/pages/auth/pages/action/page")),
      route.lazy.path("email-verification", () => import("~/pages/auth/pages/email-verification/page")),
    ]),

    /**
     * DEV
     */
    route.path("__dev__", <Outlet />, [
      //
      route.lazy.path("components", () => import("~/pages/__DEV__/components/page")),
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
