import {} from "react";
import type { PropsWithChildren } from "react";

type LinkBuilderProps = PropsWithChildren<{}>;

function LinkBuilder(props: LinkBuilderProps) {
  return (
    <>
      <div>LinkBuilder</div>
      {props.children}
    </>
  );
}

export type { LinkBuilderProps };
export default LinkBuilder;
