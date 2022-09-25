import { forwardRef } from "react";

import { ActionIcon, ColorSwatch, Menu, useMantineTheme } from "@mantine/core";
import type { ActionIconProps, MenuProps } from "@mantine/core";

import { IconPalette } from "@tabler/icons";

import useThemeStore, { primaryColors } from "~/stores/theme";

type PrimaryColorSelectMenuActionIconProps = ActionIconProps & {
  menuProps?: MenuProps;
};

const PrimaryColorSelectMenuActionIcon = forwardRef<HTMLButtonElement, PrimaryColorSelectMenuActionIconProps>(function (props, ref) {
  const { primaryColor, setPrimaryColor } = useThemeStore();

  const { menuProps, ...rest } = props;

  const theme = useMantineTheme();

  return (
    <Menu {...menuProps}>
      <Menu.Target>
        <ActionIcon ref={ref} {...rest}>
          <IconPalette />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {primaryColors.map((primaryColor) => {
          return (
            <Menu.Item
              key={primaryColor}
              color={primaryColor}
              onClick={() => {
                setPrimaryColor(primaryColor);
              }}
            >
              <ColorSwatch color={theme.colors[primaryColor][6]} />
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
});

export type { PrimaryColorSelectMenuActionIconProps };
export default PrimaryColorSelectMenuActionIcon;
