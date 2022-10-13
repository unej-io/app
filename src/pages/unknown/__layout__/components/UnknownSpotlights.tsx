import { useMemo } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import { SpotlightProvider } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";

import { IconDiscountCheck, IconHome, IconSearch } from "@tabler/icons";

type UnknownSpotlightsProps = PropsWithChildren<{}>;

function UnknownSpotlights(props: UnknownSpotlightsProps) {
  const navigate = useNavigate();

  const actions = useMemo((): SpotlightAction[] => {
    return [
      {
        title: "Home",
        description: "Go to home page",
        onTrigger: () => navigate("/"),
        icon: <IconHome />,
      },
      {
        title: "Verify Me",
        description: "Go to verify me page",
        onTrigger: () => navigate("/verify-me"),
        icon: <IconDiscountCheck />,
      },
    ];
  }, []);

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={20} />}
      searchPlaceholder="Search..."
      nothingFoundMessage="Nothing found..."
      shortcut="/"
      highlightQuery
    >
      {props.children}
    </SpotlightProvider>
  );
}

export type { UnknownSpotlightsProps };
export default UnknownSpotlights;
