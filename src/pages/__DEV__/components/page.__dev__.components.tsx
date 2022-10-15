import {} from "react";

import {
  Accordion,
  ActionIcon,
  Anchor,
  Avatar,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Group,
  Input,
  NumberInput,
  Paper,
  PasswordInput,
  Radio,
  SegmentedControl,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import type { AnchorProps, ActionIconVariant, AvatarProps, ButtonVariant } from "@mantine/core";

import { IconSettings } from "@tabler/icons";

import { ColorSchemeTogglerSwitch, DefaultRadiusSelectGroup, PrimaryColorSelectGroup } from "~/components/core";

const anchorVariants: AnchorProps["variant"][] = ["gradient", "link", "text"];
const actionIconVariants: ActionIconVariant[] = ["default", "filled", "gradient", "light", "outline", "subtle", "transparent"];
const avatarVariants: AvatarProps["variant"][] = ["filled", "gradient", "light", "outline"];
const buttonVariants: ButtonVariant[] = ["default", "filled", "gradient", "light", "outline", "subtle"];

function DEVComponentsPage() {
  return (
    <Container py="xl">
      <Grid gutter="xl">
        <Grid.Col span={12}>
          <Stack>
            <Title>Theme</Title>

            <Divider />

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

            <Divider />
          </Stack>
        </Grid.Col>

        <Grid.Col span={12}>
          <Stack spacing="xl">
            <Paper withBorder p="xl">
              <Stack>
                <Text size="xl">Anchor</Text>

                <Group>
                  {anchorVariants.map((variant) => (
                    <Tooltip key={variant} label={variant} withinPortal>
                      <Anchor variant={variant}>Link</Anchor>
                    </Tooltip>
                  ))}
                </Group>
              </Stack>
            </Paper>

            <Paper withBorder p="xl">
              <Stack>
                <Text size="xl">Action Icon</Text>

                <Group>
                  {actionIconVariants.map((variant) => (
                    <Tooltip key={variant} label={variant} withinPortal>
                      <ActionIcon variant={variant}>
                        <IconSettings />
                      </ActionIcon>
                    </Tooltip>
                  ))}
                </Group>
              </Stack>
            </Paper>

            <Paper withBorder p="xl">
              <Stack>
                <Text size="xl">Avatar</Text>

                <Group>
                  {avatarVariants.map((variant) => (
                    <Tooltip key={variant} label={variant} withinPortal>
                      <Avatar variant={variant} />
                    </Tooltip>
                  ))}
                </Group>
              </Stack>
            </Paper>

            <Paper withBorder p="xl">
              <Stack>
                <Text size="xl">Button</Text>

                <Group>
                  {buttonVariants.map((variant) => (
                    <Tooltip key={variant} label={variant} withinPortal>
                      <Button variant={variant}>{variant}</Button>
                    </Tooltip>
                  ))}
                </Group>
              </Stack>
            </Paper>

            <Paper withBorder p="xl">
              <Stack>
                <Text size="xl">Accordion</Text>

                <Accordion defaultValue="aaa">
                  <Accordion.Item value="aaa">
                    <Accordion.Control>Control AAA</Accordion.Control>
                    <Accordion.Panel>Panel AAA</Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="bbb">
                    <Accordion.Control>Control BBB</Accordion.Control>
                    <Accordion.Panel>Panel BBB</Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="ccc">
                    <Accordion.Control>Control CCC</Accordion.Control>
                    <Accordion.Panel>Panel CCC</Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Stack>
            </Paper>

            <Paper withBorder p="xl">
              <Stack>
                <Text size="xl">Input</Text>

                <Stack>
                  <TextInput label="Text" description="This is anonymous" placeholder="Text..." />

                  <NumberInput label="Number" description="This is anonymous" placeholder="Number..." />

                  <PasswordInput label="Password" description="This is anonymous" placeholder="Password..." />

                  <Select label="Select" description="This is anonymous" placeholder="Pick one" data={["One", "Two", "Three"]} />

                  <Input.Wrapper label="Segmented Control" description="This is anonymous">
                    <SegmentedControl mt={4} data={["One", "Two", "Three"]} />
                  </Input.Wrapper>

                  <Checkbox.Group label="Checkbox" description="This is anonymous" defaultValue={["a"]}>
                    <Checkbox value="a" label="A" />
                    <Checkbox value="b" label="B" />
                    <Checkbox value="c" label="C" />
                    <Checkbox value="d" label="D" />
                  </Checkbox.Group>

                  <Switch.Group label="Switch" description="This is anonymous" defaultValue={["a"]}>
                    <Switch value="a" label="A" />
                    <Switch value="b" label="B" />
                    <Switch value="c" label="C" />
                    <Switch value="d" label="D" />
                  </Switch.Group>

                  <Radio.Group label="Radio" description="This is anonymous" defaultValue="a">
                    <Radio value="a" label="A" />
                    <Radio value="b" label="B" />
                    <Radio value="c" label="C" />
                    <Radio value="d" label="D" />
                  </Radio.Group>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default DEVComponentsPage;
