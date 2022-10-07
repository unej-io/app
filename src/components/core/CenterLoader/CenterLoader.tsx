import { Center, Loader } from "@mantine/core";
import type { LoaderProps } from "@mantine/core";

type CenterLoaderProps = LoaderProps;

function CenterLoader(props: CenterLoaderProps) {
  return (
    <Center>
      <Loader {...props} />
    </Center>
  );
}

export type { CenterLoaderProps };
export default CenterLoader;
