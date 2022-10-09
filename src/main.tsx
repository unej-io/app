import { createRoot } from "react-dom/client";

import "~/assets/css/style.css";
import "~/assets/fonts/index.css";

import App from "~/App";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
