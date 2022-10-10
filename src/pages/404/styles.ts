import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: 80,
    paddingBottom: 80,
  },

  background: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    display: "flex",
    justifyContent: "center",
    paddingTop: 55,
    opacity: 0.75,
    overflow: "hidden",
  },

  ["404"]: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
    fontSize: theme.fontSizes.xl * 24,

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.xl * 12,
    },
  },

  foreground: {
    paddingTop: 220,
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 120,
    },
  },

  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default useStyles;
