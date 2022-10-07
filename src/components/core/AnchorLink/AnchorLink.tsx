import { forwardRef } from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import type { LinkProps as ReactRouterLinkProps } from "react-router-dom";

import { Anchor } from "@mantine/core";
import type { AnchorProps } from "@mantine/core";

type AnchorLinkProps = AnchorProps & Omit<ReactRouterLinkProps, "color">;

const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>((props, ref) => {
  return <Anchor ref={ref} component={ReactRouterLink} {...props} />;
});

export type { AnchorLinkProps };
export default AnchorLink;
