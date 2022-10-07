import { forwardRef } from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import type { LinkProps as ReactRouterLinkProps } from "react-router-dom";

import { ActionIcon } from "@mantine/core";
import type { ActionIconProps } from "@mantine/core";

type ActionIconLinkProps = ActionIconProps & Omit<ReactRouterLinkProps, "color">;

const ActionIconLink = forwardRef<HTMLAnchorElement, ActionIconLinkProps>((props, ref) => {
  return <ActionIcon ref={ref} component={ReactRouterLink} {...props} />;
});

export type { ActionIconLinkProps };
export default ActionIconLink;
