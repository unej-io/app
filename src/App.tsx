import { Suspense } from "react";

import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { disableDevtools } from "react-yesterday";

import { AuthProvider, HistoryRouter, RootProvider, ThemeProvider } from "~/components/core";

import RootRoutes from "~/routes";

if (import.meta.env.PROD) disableDevtools();

console.log(
  `
     :::    :::       ::::    :::       ::::::::::      :::::::::::                :::::::::::       :::::::: 
    :+:    :+:       :+:+:   :+:       :+:                 :+:                        :+:          :+:    :+: 
   +:+    +:+       :+:+:+  +:+       +:+                 +:+                        +:+          +:+    +:+  
  +#+    +:+       +#+ +:+ +#+       +#++:++#            +#+                        +#+          +#+    +:+   
 +#+    +#+       +#+  +#+#+#       +#+                 +#+                        +#+          +#+    +#+    
#+#    #+#       #+#   #+#+#       #+#             #+# #+#           #+#          #+#          #+#    #+#     
########        ###    ####       ##########       #####            ###      ###########       ########       
`
);

function App() {
  return (
    <HistoryRouter>
      <ThemeProvider>
        <NotificationsProvider>
          <ModalsProvider>
            <AuthProvider>
              <RootProvider>
                {/*  */}
                <Suspense>
                  <RootRoutes />
                </Suspense>
                {/*  */}
              </RootProvider>
            </AuthProvider>
          </ModalsProvider>
        </NotificationsProvider>
      </ThemeProvider>
    </HistoryRouter>
  );
}

export default App;
