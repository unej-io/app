import { forwardRef } from "react";

import { ActionIcon, Group } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import useThemeStore, { primaryColors } from "~/stores/theme";

type PrimaryColorSelectGroupProps = GroupProps;

const PrimaryColorSelectGroup = forwardRef<HTMLDivElement, PrimaryColorSelectGroupProps>(function (props, ref) {
  const { primaryColor, setPrimaryColor } = useThemeStore();

  return (
    <Group ref={ref} {...props}>
      {primaryColors.map((color) => (
        <ActionIcon
          key={color}
          size="md"
          color={color}
          radius="xl"
          variant={primaryColor === color ? "filled" : "outline"}
          onClick={() => {
            setPrimaryColor(color);
          }}
        />
      ))}
    </Group>
  );
});

export type { PrimaryColorSelectGroupProps };
export default PrimaryColorSelectGroup;
