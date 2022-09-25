import { forwardRef } from "react";

import { ActionIcon } from "@mantine/core";
import type { ActionIconProps } from "@mantine/core";

import { IconMoon, IconSun } from "@tabler/icons";

import useThemeStore from "~/stores/theme";

type ColorSchemeTogglerActionIconProps = ActionIconProps;

const ColorSchemeTogglerActionIcon = forwardRef<HTMLButtonElement, ColorSchemeTogglerActionIconProps>(function (
  { children, ...props },
  ref
) {
  const { colorScheme, toggleColorScheme } = useThemeStore();

  return (
    <ActionIcon ref={ref} onClick={toggleColorScheme} {...props}>
      {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
});

export type { ColorSchemeTogglerActionIconProps };
export default ColorSchemeTogglerActionIcon;
