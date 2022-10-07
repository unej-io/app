import { Alert } from "@mantine/core";
import type { AlertProps } from "@mantine/core";

import { IconAlertCircle } from "@tabler/icons";

type ErrorAlertProps = Omit<AlertProps, "children"> & {
  title: string;
  message: string;
};

function ErrorAlert(props: ErrorAlertProps) {
  const { title, message, ...rest } = props;
  return (
    <Alert icon={<IconAlertCircle />} color="red" title={title} {...rest}>
      {message}
    </Alert>
  );
}

export type { ErrorAlertProps };
export default ErrorAlert;
