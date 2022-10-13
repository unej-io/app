import {} from "react";

import { Container } from "@mantine/core";

import { Head } from "~/components/core";

import FakeStats from "./components/FakeStats";

function StudentIndexPage() {
  return (
    <>
      <Head />

      <Container size="xl">
        <FakeStats />
      </Container>
    </>
  );
}

export default StudentIndexPage;
