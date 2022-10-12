import { forwardRef } from "react";

import { Switch } from "@mantine/core";
import type { SwitchProps } from "@mantine/core";

import { IconMoon, IconSun } from "@tabler/icons";

import useThemeStore from "~/stores/theme";

type ColorSchemeTogglerSwitchProps = Omit<SwitchProps, "checked" | "onChange" | "size" | "onLabel" | "offLabel">;

const ColorSchemeTogglerSwitch = forwardRef<HTMLInputElement, ColorSchemeTogglerSwitchProps>(function (props, ref) {
  const { colorScheme, toggleColorScheme } = useThemeStore();

  return (
    <Switch
      ref={ref}
      color={colorScheme === "dark" ? "gray" : "dark"}
      size="lg"
      aria-label="Toggle color scheme"
      {...props}
      checked={colorScheme === "dark"}
      onChange={toggleColorScheme}
      onLabel={<IconSun size={20} />}
      offLabel={<IconMoon size={20} />}
    />
  );
});

export type { ColorSchemeTogglerSwitchProps };
export default ColorSchemeTogglerSwitch;
