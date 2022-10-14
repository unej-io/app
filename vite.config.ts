import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

function createIncludes(id: string) {
  return function (...ms: string[]) {
    return ms.some((m) => {
      return id.includes(["node_modules", m].join("/"));
    });
  };
}

function createBase(name: string) {
  return function (...ps: string[]) {
    return [name].concat(ps).join(".");
  };
}

export default defineConfig({
  plugins: [process.env.ANALYZE === "true" ? visualizer({ open: true, filename: "dist/analyze.html" }) : null, react()],
  server: {
    host: true,
    port: 3001,
  },
  preview: {
    host: true,
    port: 3001,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  esbuild: {
    /**
     * Opt : Remove legal comments
     */
    legalComments: "none",
  },
  build: {
    /**
     * Opt : Unminified bundle
     */
    minify: process.env.UNMINIFY === "true" ? false : "esbuild",

    /**
     * Opt : Custom rollup
     */
    rollupOptions: {
      output: {
        /**
         * Opt : Manual chunks
         */
        manualChunks: (id) => {
          const enable: boolean = false;

          if (enable) {
            const includes = createIncludes(id);

            if (includes("react", "react-dom")) return "react";

            if (includes("@emotion", "@mantine")) {
              const ui_base = createBase("ui");
              if (includes("@mantine/carousel")) return ui_base("carousel");
              if (includes("@mantine/dates")) return ui_base("dates");
              if (includes("@mantine/dropzone")) return ui_base("dropzone");
              if (includes("@mantine/form")) return ui_base("form");
              if (includes("@mantine/modals")) return ui_base("modals");
              if (includes("@mantine/notifications")) return ui_base("notifications");
              if (includes("@mantine/prism")) return ui_base("prism");
              if (includes("@mantine/rte")) return ui_base("rte");
              if (includes("@mantine/spotlight")) return ui_base("spotlight");
              return ui_base();
            }

            if (includes("@tabler")) return "icon";
            if (includes("@jsonforms")) return "jsonforms";
            if (includes("@dnd-kit")) return "dnd-kit";

            if (includes("@firebase")) {
              const firebase_base = createBase("firebase");
              if (includes("@firebase/app")) return firebase_base("app");
              if (includes("@firebase/auth")) return firebase_base("auth");
              if (includes("@firebase/firestore")) return firebase_base("firestore");
              if (includes("@firebase/storage")) return firebase_base("storage");
              if (includes("@firebase/util")) return firebase_base("util");
              if (includes("@firebase/logger")) return firebase_base("logger");
              if (includes("@firebase/component")) return firebase_base("component");
              return firebase_base();
            }

            if (includes("ky")) return "ky";
            if (includes("swr")) return "swr";
          }
        },
      },
    },
  },
});
