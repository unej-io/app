import { useCallback } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Box, Button, Container, Divider, Grid, Group, Paper, Stack, Tabs, Text, TextInput, Title } from "@mantine/core";

import { IconAdjustments, IconUser } from "@tabler/icons";

import { ColorSchemeTogglerSwitch, DefaultRadiusSelectGroup, Head, PrimaryColorSelectGroup } from "~/components/core";
import { useAuthUser } from "~/hooks/stores";

function AccountPanel() {
  const user = useAuthUser();

  return (
    <Grid gutter="xl">
      <Grid.Col span={12}>
        <Paper p="xl" withBorder>
          <Title>Auth</Title>

          <Stack p="sm" mt="md">
            <Box>
              <TextInput type="text" label="Display name" defaultValue={user.displayName ?? ""} />
            </Box>
            <Box>
              <TextInput type="email" label="Email" defaultValue={user.email ?? ""} />
            </Box>
            <Box>
              <Button>Change password</Button>
            </Box>
          </Stack>

          <Group position="right">
            <Button disabled>Update</Button>
          </Group>
        </Paper>
      </Grid.Col>

      <Grid.Col span={12}>
        <Paper p="xl" withBorder>
          <Title>Profile</Title>

          <Stack p="sm" mt="md">
            <Box>
              <TextInput type="text" label="Username" defaultValue="...Username..." />
            </Box>
          </Stack>

          <Group position="right">
            <Button disabled>Update</Button>
          </Group>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}

function PreferencesPanel() {
  return (
    <Grid gutter="xl">
      <Grid.Col span={12}>
        <Paper p="xl" withBorder>
          <Title>Theme</Title>

          <Stack p="sm" mt="md">
            <Stack>
              <Text size="xl">Color scheme</Text>

              <ColorSchemeTogglerSwitch />
            </Stack>

            <Divider />

            <Stack>
              <Text size="xl">Primary color</Text>

              <PrimaryColorSelectGroup />
            </Stack>

            <Divider />

            <Stack>
              <Text size="xl">Radius</Text>

              <DefaultRadiusSelectGroup />
            </Stack>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}

function MainTabs() {
  const navigate = useNavigate();

  const { tab } = useParams();

  const handleTabChange = useCallback((value: string) => {
    navigate(`/student/settings/${value}`);
  }, []);

  return (
    <Tabs value={tab} onTabChange={handleTabChange} variant="pills">
      <Tabs.List>
        <Tabs.Tab value="account" icon={<IconUser size={16} />}>
          Account
        </Tabs.Tab>
        <Tabs.Tab value="preferences" icon={<IconAdjustments size={16} />}>
          Preferences
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="account" pt="xs">
        <AccountPanel />
      </Tabs.Panel>

      <Tabs.Panel value="preferences" pt="xs">
        <PreferencesPanel />
      </Tabs.Panel>
    </Tabs>
  );
}

function StudentSettingsPage() {
  return (
    <>
      <Head title={{ prefix: "Settings" }} />

      <Container size="lg">
        <MainTabs />
      </Container>
    </>
  );
}

export default StudentSettingsPage;
