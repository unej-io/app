import create from "zustand";
import { persist } from "zustand/middleware";

import type { ColorScheme, MantineColor, MantineSize } from "@mantine/core";

import { BroadcastChannel } from "broadcast-channel";

import { isTypeofString } from "javascript-yesterday";

import { withDevtools } from "./@utilities";

const NAME = "app-unej-io:theme-store";
const colorSchemes: ColorScheme[] = ["light", "dark"];
const primaryColors: MantineColor[] = ["red", "orange", "yellow", "green", "blue", "indigo", "grape"];
const radii: MantineSize[] = ["sm", "md", "lg"];

function isValidColorScheme(value: unknown): value is ColorScheme {
  return isTypeofString(value) && colorSchemes.includes(value as any);
}

function isValidPrimaryColor(value: unknown): value is MantineColor {
  return isTypeofString(value) && primaryColors.includes(value as any);
}

function isValidRadius(value: unknown): value is MantineSize {
  return isTypeofString(value) && radii.includes(value as any);
}

type ThemeStoreState = {
  colorScheme: ColorScheme;
  primaryColor: MantineColor;
  radius: MantineSize;
};

type ThemeStoreAction = {
  toggleColorScheme: () => void;
  setColorScheme: (colorScheme?: ColorScheme | (string & {})) => void;
  setPrimaryColor: (primaryColor?: MantineColor | (string & {})) => void;
  setRadius: (radius?: MantineSize | (string & {})) => void;
};

type ThemeStoreType = ThemeStoreState & ThemeStoreAction;

type ThemeStoreMessageData =
  | {
      type: "toggle-color-scheme";
      payload: ColorScheme;
    }
  | {
      type: "set-color-scheme";
      payload: ColorScheme;
    }
  | {
      type: "set-primary-color";
      payload: MantineColor;
    }
  | {
      type: "set-radius";
      payload: MantineSize;
    };

const channel = new BroadcastChannel<ThemeStoreMessageData>(NAME);

const useThemeStore = create<ThemeStoreType>()(
  withDevtools(
    persist(
      (set, get) => ({
        colorScheme: "light",
        primaryColor: "indigo",
        radius: "md",
        toggleColorScheme: () => {
          const colorScheme = get().colorScheme === "dark" ? "light" : "dark";
          set({ colorScheme });
          channel.postMessage({ type: "toggle-color-scheme", payload: colorScheme });
        },
        setColorScheme: (colorScheme) => {
          if (isValidColorScheme(colorScheme)) {
            set({ colorScheme });
            channel.postMessage({ type: "set-color-scheme", payload: colorScheme });
          }
        },
        setPrimaryColor: (primaryColor) => {
          if (isValidPrimaryColor(primaryColor)) {
            set({ primaryColor });
            channel.postMessage({ type: "set-primary-color", payload: primaryColor });
          }
        },
        setRadius: (radius) => {
          if (isValidRadius(radius)) {
            set({ radius });
            channel.postMessage({ type: "set-radius", payload: radius });
          }
        },
      }),
      {
        name: NAME,
      }
    ),
    {
      name: NAME,
    }
  )
);

export type { ThemeStoreState, ThemeStoreAction, ThemeStoreType, ThemeStoreMessageData };
export { colorSchemes, primaryColors, radii };
export { channel };
export default useThemeStore;
