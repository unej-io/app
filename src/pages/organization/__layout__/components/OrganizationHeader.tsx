import {} from "react";

import { Anchor, Box, Burger, Group, Header, MediaQuery } from "@mantine/core";

import { Logo } from "~/libs/unej-io/components/core";
import { useSharedStyles } from "~/libs/unej-io/hooks/styles";

import { StatusBadge } from "~/components/core";
import { AppToolbarGroup } from "~/components/interfaces";

type OrganizationHeaderProps = {
  opened: boolean;
  onMenuClick: () => void;
};

function OrganizationHeader(props: OrganizationHeaderProps) {
  const { classes: sharedClasses } = useSharedStyles();

  return (
    <Header height={64} p="md">
      <Group align="center" spacing="xl" className={sharedClasses.fullHeight}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger opened={props.opened} onClick={props.onMenuClick} size="sm" />
        </MediaQuery>

        <Anchor href="/" variant="text" className={sharedClasses.flexCenter} aria-label="unej.io logo">
          <Logo className={sharedClasses.logo} />
        </Anchor>

        <StatusBadge variant="outline" size="lg" />

        <Box sx={{ flexGrow: 1 }} />

        <AppToolbarGroup />
      </Group>
    </Header>
  );
}

export type { OrganizationHeaderProps };
export default OrganizationHeader;
