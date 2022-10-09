import { DEFAULT_THEME } from "@mantine/core";
import type { ColorScheme, MantineColor, MantineSize, MantineThemeOverride } from "@mantine/core";

import type { AccordionProps } from "@mantine/core";
import type { AvatarProps } from "@mantine/core";
import type { CheckboxProps } from "@mantine/core";
import type { ContainerProps } from "@mantine/core";
import type { PasswordInputProps } from "@mantine/core";

import { IconChevronDown, IconUser } from "@tabler/icons";

import { CheckboxIcon, PasswordInputVisibilityToggleIcon } from "../components/core";

const components: MantineThemeOverride["components"] = {
  Accordion: {
    defaultProps: {
      chevron: <IconChevronDown size={20} />,
    } as AccordionProps,
  },
  Avatar: {
    defaultProps: {
      children: <IconUser width="75%" height="75%" />,
    } as AvatarProps,
  },
  Checkbox: {
    defaultProps: {
      icon: CheckboxIcon,
    } as CheckboxProps,
  },
  Container: {
    defaultProps: {
      size: "xl",
    } as ContainerProps,
  },
  PasswordInput: {
    defaultProps: {
      visibilityToggleIcon: PasswordInputVisibilityToggleIcon,
    } as PasswordInputProps,
  },
};

function createTheme(colorScheme: ColorScheme, primaryColor: MantineColor, defaultRadius: MantineSize): MantineThemeOverride {
  return {
    colorScheme,
    components,
    defaultRadius,
    primaryColor,
    defaultGradient: {
      from: DEFAULT_THEME.colors[primaryColor][6],
      to: DEFAULT_THEME.colors[primaryColor][4],
      deg: 45,
    },
    fontFamily: "Nunito, sans-serif",
    fontFamilyMonospace: "monospace",
    headings: {
      fontFamily: "Open Sans, sans-serif",
    },
    cursorType: "pointer",
    activeStyles: {
      transform: "scale(0.98)",
    },
  };
}

export default createTheme;
