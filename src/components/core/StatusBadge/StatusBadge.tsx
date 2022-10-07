import { forwardRef } from "react";

import { Badge } from "@mantine/core";
import type { BadgeProps } from "@mantine/core";

type StatusBadgeProps = BadgeProps;

const StatusBadge = forwardRef<HTMLDivElement, StatusBadgeProps>((props, ref) => {
  if (typeof import.meta.env.VITE_STATUS === "string") {
    return (
      <Badge ref={ref} {...props}>
        {import.meta.env.VITE_STATUS}
      </Badge>
    );
  }

  return null;
});

export type { StatusBadgeProps };
export default StatusBadge;
