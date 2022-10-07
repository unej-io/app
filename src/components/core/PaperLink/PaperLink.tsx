import { forwardRef } from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import type { LinkProps as ReactRouterLinkProps } from "react-router-dom";

import { Paper } from "@mantine/core";
import type { PaperProps } from "@mantine/core";

type PaperLinkProps = PaperProps & ReactRouterLinkProps;

const PaperLink = forwardRef<HTMLAnchorElement, PaperLinkProps>((props, ref) => {
  return <Paper ref={ref} component={ReactRouterLink} {...props} />;
});

export type { PaperLinkProps };
export default PaperLink;
