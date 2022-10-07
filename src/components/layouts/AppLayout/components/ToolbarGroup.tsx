import { memo } from "react";

import { Group } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import { SpotlightOpenerActionIcon } from "~/components/core";

type ToolbarGroupProps = GroupProps;

function ToolbarGroup({ children, ...props }: ToolbarGroupProps) {
  return (
    <Group {...props}>
      <SpotlightOpenerActionIcon aria-label="app search" />
    </Group>
  );
}

export type { ToolbarGroupProps };
export default memo(ToolbarGroup);
