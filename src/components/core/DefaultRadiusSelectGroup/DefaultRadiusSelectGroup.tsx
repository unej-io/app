import { forwardRef } from "react";

import { Button, Group } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import { radii } from "@unej-io/ui/system";

import useThemeStore from "~/stores/theme";

type DefaultRadiusSelectGroupProps = GroupProps;

const DefaultRadiusSelectGroup = forwardRef<HTMLDivElement, DefaultRadiusSelectGroupProps>(function (props, ref) {
  const { defaultRadius, setDefaultRadius } = useThemeStore();

  return (
    <Group ref={ref} {...props}>
      {radii.map((radi) => (
        <Button
          key={radi}
          size="md"
          radius={radi}
          variant={defaultRadius === radi ? "filled" : "outline"}
          onClick={() => {
            setDefaultRadius(radi);
          }}
        >
          {radi}
        </Button>
      ))}
    </Group>
  );
});

export type { DefaultRadiusSelectGroupProps };
export default DefaultRadiusSelectGroup;
