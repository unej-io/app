import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    process.env.ANALYZE === "true"
      ? visualizer({
          open: true,
        })
      : null,
    react(),
  ],
  server: {
    host: true,
    port: 3001,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  esbuild: {
    legalComments: "none",
  },
  build: {
    minify: process.env.UNMINIFY === "true" ? false : "esbuild",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          function includes(...modules: string[]) {
            return modules.some((module) => id.includes(["node_modules", module].join("/")));
          }

          if (includes("react", "react-dom", "@emotion", "@mantine", "@tabler", "@jsonforms")) {
            return "core";
          }

          if (includes("@firebase")) {
            return "firebase";
          }
        },
      },
    },
  },
});
