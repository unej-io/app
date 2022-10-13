import {} from "react";
import type { PropsWithChildren } from "react";

type RootProviderProps = PropsWithChildren<{}>;

function RootProvider(props: RootProviderProps) {
  return <>{props.children}</>;
}

export type { RootProviderProps };
export default RootProvider;
