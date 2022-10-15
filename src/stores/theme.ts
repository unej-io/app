import create from "zustand";
import { persist } from "zustand/middleware";

import type { ColorScheme, MantineColor, MantineSize } from "@mantine/core";

import { defaultThemeSystemValue, isValidColorScheme, isValidPrimaryColor, isValidDefaultRadius } from "@unej-io/ui/system";
import type { ThemeSystemState } from "@unej-io/ui/system";

import { BroadcastChannel } from "broadcast-channel";

import { hasOwnProperty } from "javascript-yesterday";

import { withDevtools } from "./@utilities";

const NAME = "app-unej-io:theme-store";

type ThemeStoreState = ThemeSystemState;

type ThemeStoreAction = {
  toggleColorScheme: () => void;
  setColorScheme: (colorScheme?: ColorScheme | (string & {})) => void;
  setPrimaryColor: (primaryColor?: MantineColor | (string & {})) => void;
  setDefaultRadius: (defaultRadius?: MantineSize | (string & {})) => void;
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
      type: "set-default-radius";
      payload: MantineSize;
    };

const channel = new BroadcastChannel<ThemeStoreMessageData>(NAME);

const useThemeStore = create<ThemeStoreType>()(
  withDevtools(
    persist(
      (set, get) => ({
        ...defaultThemeSystemValue,
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
        setDefaultRadius: (defaultRadius) => {
          if (isValidDefaultRadius(defaultRadius)) {
            set({ defaultRadius });
            channel.postMessage({ type: "set-default-radius", payload: defaultRadius });
          }
        },
      }),
      {
        name: NAME,
        merge(persist, current) {
          function validatedPersistedState(persist: object) {
            let result: Partial<ThemeStoreState> = {};

            function setResult<K extends keyof ThemeStoreState>(key: K, check: (value: unknown) => value is ThemeStoreState[K]) {
              if (hasOwnProperty(persist, key) && check(persist[key])) result[key] = persist[key];
            }

            setResult("colorScheme", isValidColorScheme);
            setResult("primaryColor", isValidPrimaryColor);
            setResult("defaultRadius", isValidDefaultRadius);

            return result;
          }

          return Object.assign({}, current, typeof persist === "object" && persist != null ? validatedPersistedState(persist) : {});
        },
      }
    ),
    {
      name: NAME,
    }
  )
);

export type { ThemeStoreState, ThemeStoreAction, ThemeStoreType, ThemeStoreMessageData };
export { channel };
export default useThemeStore;
