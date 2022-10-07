import { IconCheck, IconMinus } from "@tabler/icons";

type CheckboxIconProps = {
  indeterminate: boolean;
  className: string;
};

function CheckboxIcon({ indeterminate, className }: CheckboxIconProps) {
  return indeterminate ? <IconMinus className={className} /> : <IconCheck className={className} />;
}

export type { CheckboxIconProps };
export default CheckboxIcon;
