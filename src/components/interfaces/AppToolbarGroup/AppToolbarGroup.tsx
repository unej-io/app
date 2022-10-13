import { memo } from "react";

import { ActionIcon, Group, Popover, useMantineTheme } from "@mantine/core";
import type { GroupProps } from "@mantine/core";
import { useMediaQuery, useViewportSize, useWindowScroll } from "@mantine/hooks";

import { IconPalette } from "@tabler/icons";

import { ColorSchemeTogglerSwitch, PrimaryColorSelectGroup, SpotlightOpenerActionIcon } from "~/components/core";

type AppToolbarGroupProps = Omit<GroupProps, "children">;

function AppToolbarGroup(props: AppToolbarGroupProps) {
  const theme = useMantineTheme();

  const { width, height } = useViewportSize();
  const [{ x, y }] = useWindowScroll();

  const matchesSmallerThanMedium = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  return (
    <Group {...props}>
      {matchesSmallerThanMedium && <SpotlightOpenerActionIcon aria-label="app search" />}

      {matchesSmallerThanMedium && (
        <Popover shadow="md" trapFocus withArrow withinPortal positionDependencies={[width, height, x, y]}>
          <Popover.Target>
            <ActionIcon aria-label="select primary color">
              <IconPalette />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            <PrimaryColorSelectGroup />
          </Popover.Dropdown>
        </Popover>
      )}

      <ColorSchemeTogglerSwitch aria-label="switch color scheme" />
    </Group>
  );
}

export type { AppToolbarGroupProps };
export default memo(AppToolbarGroup);
