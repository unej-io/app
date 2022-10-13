import { useMemo } from "react";
import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import { SpotlightProvider } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";

import { IconHome, IconLink, IconSearch, IconSettings, IconTable } from "@tabler/icons";

type StudentSpotlightsProps = PropsWithChildren<{}>;

function StudentSpotlights(props: StudentSpotlightsProps) {
  const navigate = useNavigate();

  const actions = useMemo((): SpotlightAction[] => {
    return [
      {
        title: "Home",
        description: "Go to home page",
        onTrigger: () => navigate("/student"),
        icon: <IconHome />,
      },
      {
        title: "Form",
        description: "Go to form page",
        onTrigger: () => navigate("/student/form"),
        icon: <IconTable />,
      },
      {
        title: "Link",
        description: "Go to link page",
        onTrigger: () => navigate("/student/link"),
        icon: <IconLink />,
      },
      {
        title: "Settings",
        description: "Go to settings page",
        onTrigger: () => navigate("/student/settings"),
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

export type { StudentSpotlightsProps };
export default StudentSpotlights;
