import { Suspense } from "react";

import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { AppSpotlight, AuthProvider, HistoryRouter, RootProvider, ThemeProvider } from "~/components/core";

import RootRoutes from "~/routes";

function App() {
  return (
    <HistoryRouter>
      <ThemeProvider>
        <AppSpotlight>
          <NotificationsProvider>
            <ModalsProvider>
              <AuthProvider>
                <RootProvider>
                  <Suspense>
                    <RootRoutes />
                  </Suspense>
                </RootProvider>
              </AuthProvider>
            </ModalsProvider>
          </NotificationsProvider>
        </AppSpotlight>
      </ThemeProvider>
    </HistoryRouter>
  );
}

export default App;
