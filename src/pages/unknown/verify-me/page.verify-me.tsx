import {} from "react";

import { Box, Button, Container, Paper, PasswordInput, Radio, Stack, TextInput, Title } from "@mantine/core";

import { Head } from "~/components/core";

function MainForm() {
  return (
    <Paper p="xl" withBorder>
      <Title align="center">Verify Me</Title>

      <Stack p="sm" mt="md">
        <Box>
          <TextInput name="username" label="Username" defaultValue="...Username..." />
        </Box>
        <Box>
          <PasswordInput name="password" label="Password" defaultValue="...Password..." />
        </Box>

        <Box>
          <Radio.Group name="as" label="Verify as" defaultValue="student">
            <Radio value="student" label="Student" />
            <Radio value="organization" label="Organization" />
          </Radio.Group>
        </Box>

        <Button>Verify</Button>
      </Stack>
    </Paper>
  );
}

function UnknownVerifyMePage() {
  return (
    <>
      <Head title={{ prefix: "Verify Me" }} />

      <Container size="sm">
        <MainForm />
      </Container>
    </>
  );
}

export default UnknownVerifyMePage;
