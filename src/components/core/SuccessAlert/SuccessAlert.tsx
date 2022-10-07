import { Alert } from "@mantine/core";
import type { AlertProps } from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons";

type SuccessAlertProps = Omit<AlertProps, "children"> & {
  title: string;
  message: string;
};

function SuccessAlert(props: SuccessAlertProps) {
  const { title, message, ...rest } = props;
  return (
    <Alert icon={<IconCircleCheck />} color="green" title={title} {...rest}>
      {message}
    </Alert>
  );
}

export type { SuccessAlertProps };
export default SuccessAlert;
