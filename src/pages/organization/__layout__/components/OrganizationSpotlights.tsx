import { useMemo } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import { SpotlightProvider } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";

import { IconCalendarEvent, IconHome, IconLink, IconSearch, IconSettings, IconTable } from "@tabler/icons";

type OrganizationSpotlightsProps = PropsWithChildren<{}>;

function OrganizationSpotlights(props: OrganizationSpotlightsProps) {
  const navigate = useNavigate();

  const actions = useMemo((): SpotlightAction[] => {
    return [
      {
        title: "Home",
        description: "Go to home page",
        onTrigger: () => navigate("/organization"),
        icon: <IconHome />,
      },
      {
        title: "Event",
        description: "Go to event page",
        onTrigger: () => navigate("/organization/event"),
        icon: <IconCalendarEvent />,
      },
      {
        title: "Form",
        description: "Go to form page",
        onTrigger: () => navigate("/organization/form"),
        icon: <IconTable />,
      },
      {
        title: "Link",
        description: "Go to link page",
        onTrigger: () => navigate("/organization/link"),
        icon: <IconLink />,
      },
      {
        title: "Settings",
        description: "Go to settings page",
        onTrigger: () => navigate("/organization/settings"),
        icon: <IconSettings />,
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

export type { OrganizationSpotlightsProps };
export default OrganizationSpotlights;
