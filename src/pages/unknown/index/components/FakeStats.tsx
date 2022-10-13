import { createStyles, Group, Paper, SimpleGrid, Text } from "@mantine/core";

import { IconArrowUpRight, IconArrowDownRight, IconChartBar } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

type Item = {
  title: string;
  value: string;
  diff: number;
};

const data: Item[] = [
  {
    title: "A",
    diff: 17,
    value: "17",
  },
  {
    title: "B",
    diff: -8,
    value: "8",
  },
  {
    title: "C",
    diff: 19,
    value: "19",
  },
  {
    title: "D",
    diff: -45,
    value: "45",
  },
];

function FakeStats() {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <IconChartBar className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text color={stat.diff > 0 ? "teal" : "red"} size="sm" weight={500} className={classes.diff}>
            <span>{stat.diff}%</span>
            <DiffIcon size={16} stroke={1.5} />
          </Text>
        </Group>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {stats}
      </SimpleGrid>
    </div>
  );
}

export default FakeStats;
