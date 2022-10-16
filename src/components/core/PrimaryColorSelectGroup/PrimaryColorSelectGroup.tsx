import { forwardRef } from "react";

import { ActionIcon, Group } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import { primaryColors } from "@unej-io/ui/system";

import useThemeStore from "~/stores/theme";

type PrimaryColorSelectGroupProps = GroupProps;

const PrimaryColorSelectGroup = forwardRef<HTMLDivElement, PrimaryColorSelectGroupProps>(function (props, ref) {
  const { primaryColor, setPrimaryColor } = useThemeStore();

  return (
    <Group ref={ref} {...props}>
      {primaryColors.map((color) => {
        const active = primaryColor === color;

        return (
          <ActionIcon
            key={color}
            size="md"
            color={color}
            title={color}
            radius="xl"
            variant={active ? "filled" : "outline"}
            onClick={() => {
              setPrimaryColor(color);
            }}
            {...(active ? { ["data-autofocus"]: true } : {})}
          />
        );
      })}
    </Group>
  );
});

export type { PrimaryColorSelectGroupProps };
export default PrimaryColorSelectGroup;
