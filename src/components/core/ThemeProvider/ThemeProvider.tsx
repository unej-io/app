import { useMemo } from "react";
import type { PropsWithChildren } from "react";

import { createEmotionCache, MantineProvider } from "@mantine/core";

import { createTheme } from "~/libs/unej-io/theme";

import useThemeStore from "~/stores/theme";

const cache = createEmotionCache({ key: "io", speedy: true });

type ThemeProviderProps = PropsWithChildren<{}>;

function ThemeProvider(props: ThemeProviderProps) {
  const { colorScheme, primaryColor, radius } = useThemeStore();

  const theme = useMemo(() => createTheme(colorScheme, primaryColor, radius), [colorScheme, primaryColor, radius]);

  return (
    <MantineProvider emotionCache={cache} theme={theme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
}

export type { ThemeProviderProps };
export default ThemeProvider;
