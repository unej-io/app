import { createStyles } from "@mantine/core";

const useSharedStyles = createStyles((theme) => ({
  blurredBackground: {
    backgroundColor: theme.fn.rgba(theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white, 0.7),
    backdropFilter: "blur(4px)",
  },

  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  fullWidth: {
    width: "100%",
  },

  fullHeight: {
    height: "100%",
  },

  flexGrow: {
    flexGrow: 1,
  },
}));

export { useSharedStyles };
