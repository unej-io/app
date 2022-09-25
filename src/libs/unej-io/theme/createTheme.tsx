import { DEFAULT_THEME } from "@mantine/core";
import type { ColorScheme, MantineColor, MantineThemeOverride } from "@mantine/core";

import type { AvatarProps } from "@mantine/core";
import type { CheckboxProps } from "@mantine/core";
import type { ContainerProps } from "@mantine/core";
import type { PasswordInputProps } from "@mantine/core";
import type { NavLinkProps } from "@mantine/core";

import { IconCaretRight, IconUser } from "@tabler/icons";

import { CheckboxIcon, PasswordInputVisibilityToggleIcon } from "../ui";

const components: MantineThemeOverride["components"] = {
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
  NavLink: {
    defaultProps: {
      rightSection: <IconCaretRight size={16} />,
    } as NavLinkProps,
  },
};

type CreateThemeOptions = {
  colorScheme: ColorScheme;
  primaryColor: MantineColor;
};

function createTheme(options: CreateThemeOptions): MantineThemeOverride {
  const { colorScheme, primaryColor } = options;

  return {
    colorScheme,
    components,
    defaultRadius: "md",
    primaryColor,
    defaultGradient: {
      from: DEFAULT_THEME.colors[primaryColor][6],
      to: DEFAULT_THEME.colors[primaryColor][4],
      deg: 45,
    },
    fontFamily: "Montserrat, sans-serif",
    fontFamilyMonospace: "monospace",
    headings: {
      fontFamily: "Montserrat, sans-serif",
    },
    cursorType: "pointer",
    activeStyles: {
      transform: "scale(0.98)",
    },
  };
}

export default createTheme;
