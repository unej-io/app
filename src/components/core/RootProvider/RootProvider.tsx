import {} from "react";
import type { PropsWithChildren } from "react";

import Spotlights from "./components/Spotlights";

type RootProviderProps = PropsWithChildren<{}>;

function RootProvider(props: RootProviderProps) {
  return <Spotlights>{props.children}</Spotlights>;
}

export type { RootProviderProps };
export default RootProvider;
