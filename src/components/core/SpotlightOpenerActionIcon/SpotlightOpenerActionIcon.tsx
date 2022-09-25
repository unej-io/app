import { forwardRef } from "react";

import { ActionIcon } from "@mantine/core";
import type { ActionIconProps } from "@mantine/core";

import { IconSearch } from "@tabler/icons";

import { useSpotlight } from "@mantine/spotlight";

type SpotlightOpenerActionIconProps = ActionIconProps;

const SpotlightOpenerActionIcon = forwardRef<HTMLButtonElement, SpotlightOpenerActionIconProps>(function ({ children, ...props }, ref) {
  const spotlight = useSpotlight();

  return (
    <ActionIcon ref={ref} onClick={spotlight.openSpotlight} {...props}>
      <IconSearch />
    </ActionIcon>
  );
});

export type { SpotlightOpenerActionIconProps };
export default SpotlightOpenerActionIcon;
