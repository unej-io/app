import { useMemo } from "react";
import type { PropsWithChildren } from "react";

import { MantineProvider } from "@mantine/core";

import { createTheme } from "~/libs/unej-io/theme";

import useThemeStore from "~/stores/theme";

type ThemeProviderProps = PropsWithChildren<{}>;

function ThemeProvider(props: ThemeProviderProps) {
  const { colorScheme, primaryColor } = useThemeStore();

  const theme = useMemo(() => createTheme({ colorScheme, primaryColor }), [colorScheme, primaryColor]);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
}

export type { ThemeProviderProps };
export default ThemeProvider;
