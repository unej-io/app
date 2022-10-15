import { useEffect, useMemo } from "react";
import type { PropsWithChildren } from "react";

import { MantineProvider } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import type { HotkeyItem } from "@mantine/hooks";

import { emotionCache, createTheme } from "@unej-io/ui/core";

import useThemeStore, { channel } from "~/stores/theme";
import type { ThemeStoreMessageData } from "~/stores/theme";

type ThemeProviderProps = PropsWithChildren<{}>;

function ThemeProvider(props: ThemeProviderProps) {
  const { colorScheme, primaryColor, defaultRadius, toggleColorScheme } = useThemeStore();

  const theme = useMemo(() => createTheme({ colorScheme, primaryColor, defaultRadius }), [colorScheme, primaryColor, defaultRadius]);

  const hotkeys = useMemo((): HotkeyItem[] => [["mod+J", () => toggleColorScheme()]], []);
  useHotkeys(hotkeys);

  useEffect(() => {
    const handler = (data: ThemeStoreMessageData) => {
      switch (data.type) {
        case "toggle-color-scheme":
          useThemeStore.setState({ colorScheme: data.payload });
          break;

        case "set-color-scheme":
          useThemeStore.setState({ colorScheme: data.payload });
          break;

        case "set-primary-color":
          useThemeStore.setState({ primaryColor: data.payload });
          break;

        case "set-default-radius":
          useThemeStore.setState({ defaultRadius: data.payload });
          break;

        default:
          break;
      }
    };

    channel.addEventListener("message", handler);

    return () => {
      channel.removeEventListener("message", handler);
    };
  }, []);

  return (
    <MantineProvider emotionCache={emotionCache} theme={theme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
}

export type { ThemeProviderProps };
export default ThemeProvider;
