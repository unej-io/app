import {} from "react";

import { Button, Container, Group, Text, Title } from "@mantine/core";

import { Head } from "~/components/core";

import useStyles from "./styles";

function NotFoundPage() {
  const { classes } = useStyles();

  return (
    <>
      <Head title={{ prefix: "Not Found" }} />

      <Container className={classes.root}>
        <div className={classes.background}>
          <Text weight={700} className={classes[404]}>
            404
          </Text>
        </div>
        <div className={classes.foreground}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you
            think this is an error contact support.
          </Text>
          <Group position="center">
            <Button component="a" href="/" size="md">
              Take me back to home page
            </Button>
          </Group>
        </div>
      </Container>
    </>
  );
}

export default NotFoundPage;
