import { IconEye, IconEyeOff } from "@tabler/icons";

type PasswordInputVisibilityToggleIconProps = {
  reveal: boolean;
  size: number;
};

function PasswordInputVisibilityToggleIcon({ reveal, size }: PasswordInputVisibilityToggleIconProps) {
  return reveal ? <IconEyeOff size={size} /> : <IconEye size={size} />;
}

export type { PasswordInputVisibilityToggleIcon };
export default PasswordInputVisibilityToggleIcon;
