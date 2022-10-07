import { forwardRef } from "react";

import { Button, Group } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import useThemeStore, { radii } from "~/stores/theme";

type RadiusSelectGroupProps = GroupProps;

const RadiusSelectGroup = forwardRef<HTMLDivElement, RadiusSelectGroupProps>(function (props, ref) {
  const { radius, setRadius } = useThemeStore();

  return (
    <Group ref={ref} {...props}>
      {radii.map((radi) => (
        <Button
          key={radi}
          size="md"
          radius={radi}
          variant={radius === radi ? "filled" : "outline"}
          onClick={() => {
            setRadius(radi);
          }}
        >
          {radi}
        </Button>
      ))}
    </Group>
  );
});

export type { RadiusSelectGroupProps };
export default RadiusSelectGroup;
