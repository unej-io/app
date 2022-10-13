import {} from "react";

import { Container } from "@mantine/core";

import { Head } from "~/components/core";

import FakeStats from "./components/FakeStats";

function OrganizationIndexPage() {
  return (
    <>
      <Head />

      <Container size="xl">
        <FakeStats />
      </Container>
    </>
  );
}

export default OrganizationIndexPage;
