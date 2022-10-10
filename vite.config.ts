import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

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
          const includes = (...ms: string[]) => ms.some((m) => id.includes(["node_modules", m].join("/")));

          if (includes("react", "react-dom")) return "react";

          if (includes("@emotion", "@mantine")) {
            const name = "ui";
            const base = (...ps: string[]) => [name].concat(ps).join("/");
            if (includes("@mantine/carousel")) return base("carousel");
            if (includes("@mantine/dates")) return base("dates");
            if (includes("@mantine/dropzone")) return base("dropzone");
            if (includes("@mantine/form")) return base("form");
            if (includes("@mantine/modals")) return base("modals");
            if (includes("@mantine/notifications")) return base("notifications");
            if (includes("@mantine/prism")) return base("prism");
            if (includes("@mantine/rte")) return base("rte");
            if (includes("@mantine/spotlight")) return base("spotlight");
            return base();
          }

          if (includes("@tabler")) return "icon";
          if (includes("@jsonforms")) return "jsonforms";
          if (includes("@dnd-kit")) return "dnd-kit";

          if (includes("@firebase")) {
            const name = "firebase";
            const base = (...ps: string[]) => [name].concat(ps).join("/");
            if (includes("@firebase/app")) return base("app");
            if (includes("@firebase/auth")) return base("auth");
            if (includes("@firebase/firestore")) return base("firestore");
            if (includes("@firebase/storage")) return base("storage");
            if (includes("@firebase/util")) return base("util");
            if (includes("@firebase/logger")) return base("logger");
            if (includes("@firebase/component")) return base("component");
            return base();
          }

          if (includes("ky")) return "ky";
          if (includes("swr")) return "swr";
        },
      },
    },
  },
});
