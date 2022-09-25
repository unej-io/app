import { memo } from "react";

import { useDocumentTitle } from "@mantine/hooks";

import { isTypeofString } from "javascript-yesterday";

import { APP } from "~/const/app";

function getTitle(prefix?: string, suffix?: string) {
  let title = APP.name;
  if (isTypeofString(prefix)) title = `${prefix} | ${title}`;
  if (isTypeofString(suffix)) title = `${title} | ${suffix}`;
  return title.trim();
}

type HeadProps = {
  title?: {
    prefix?: string;
    suffix?: string;
  };
};

function Head(props: HeadProps) {
  const title = getTitle(props.title?.prefix, props.title?.suffix);

  useDocumentTitle(title);

  return null;
}

export type { HeadProps };
export default memo(Head);
