import { forwardRef } from "react";

import { Link as ReactRouterLink, useLocation, useResolvedPath } from "react-router-dom";
import type { LinkProps as ReactRouterLinkProps } from "react-router-dom";

import { NavLink as MantineNavLink } from "@mantine/core";
import type { NavLinkProps as MantineNavLinkProps } from "@mantine/core";

type NavLinkProps = MantineNavLinkProps & Omit<ReactRouterLinkProps, "color"> & { caseSensitive?: boolean; end?: boolean };

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { to, caseSensitive, end, ...rest } = props;

  const location = useLocation();
  const path = useResolvedPath(to);

  let locationPathname = location.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  const active =
    locationPathname === toPathname ||
    (!end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/");

  return <MantineNavLink ref={ref} active={active} component={ReactRouterLink} to={to} {...rest} />;
});

export type { NavLinkProps };
export default NavLink;
