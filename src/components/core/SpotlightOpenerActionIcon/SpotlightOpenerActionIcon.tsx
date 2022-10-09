import { forwardRef, useCallback } from "react";

import { ActionIcon } from "@mantine/core";
import type { ActionIconProps } from "@mantine/core";

import { IconSearch } from "@tabler/icons";

import { openSpotlight } from "@mantine/spotlight";

type SpotlightOpenerActionIconProps = ActionIconProps;

const SpotlightOpenerActionIcon = forwardRef<HTMLButtonElement, SpotlightOpenerActionIconProps>(function ({ children, ...props }, ref) {
  const handleClick = useCallback(() => {
    openSpotlight();
  }, []);

  return (
    <ActionIcon ref={ref} {...props} onClick={handleClick}>
      <IconSearch />
    </ActionIcon>
  );
});

export type { SpotlightOpenerActionIconProps };
export default SpotlightOpenerActionIcon;
