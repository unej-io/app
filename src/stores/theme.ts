import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import type { ColorScheme, MantineColor } from "@mantine/core";

import { isTypeofString } from "javascript-yesterday";

const NAME = "unej-io:theme-store";
const colorSchemes: ColorScheme[] = ["light", "dark"];
const primaryColors: MantineColor[] = [
  "blue",
  "cyan",
  "grape",
  "green",
  "indigo",
  "lime",
  "orange",
  "pink",
  "red",
  "teal",
  "violet",
  "yellow",
];

function isValidPrimaryColor(value: unknown): value is MantineColor {
  return isTypeofString(value) && primaryColors.includes(value as any);
}

type ThemeStoreState = {
  colorScheme: ColorScheme;
  primaryColor: MantineColor;
};

type ThemeStoreAction = {
  toggleColorScheme: () => void;
  setPrimaryColor: (primaryColor?: MantineColor) => void;
};

type ThemeStoreType = ThemeStoreState & ThemeStoreAction;

const useThemeStore = create<ThemeStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        colorScheme: "light",
        primaryColor: "indigo",
        toggleColorScheme: () => {
          set({ colorScheme: get().colorScheme === "dark" ? "light" : "dark" });
        },
        setPrimaryColor: (primaryColor) => {
          if (isValidPrimaryColor(primaryColor)) set({ primaryColor });
        },
      }),
      {
        name: NAME,
      }
    )
  )
);

export type { ThemeStoreState, ThemeStoreAction, ThemeStoreType };
export { colorSchemes, primaryColors };
export default useThemeStore;
