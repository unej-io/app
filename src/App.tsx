import { BrowserRouter } from "react-router-dom";

import { AppSpotlight, AuthProvider, ThemeProvider } from "~/components/core";

import RootRoutes from "~/routes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <AppSpotlight>
            <RootRoutes />
          </AppSpotlight>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
