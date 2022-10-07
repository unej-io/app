import { Group, Loader } from "@mantine/core";
import { Logo } from "~/libs/unej-io/components/core";

function LogoLoader() {
  return (
    <Group spacing="md">
      <Loader variant="dots" />
      <Logo height={32} primary />
      <Loader variant="dots" />
    </Group>
  );
}

export default LogoLoader;
