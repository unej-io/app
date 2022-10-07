import { forwardRef } from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import type { LinkProps as ReactRouterLinkProps } from "react-router-dom";

import { Button } from "@mantine/core";
import type { ButtonProps } from "@mantine/core";

type ButtonLinkProps = ButtonProps & Omit<ReactRouterLinkProps, "color">;

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, ref) => {
  return <Button ref={ref} component={ReactRouterLink} {...props} />;
});

export type { ButtonLinkProps };
export default ButtonLink;
