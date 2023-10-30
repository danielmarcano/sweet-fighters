/// <reference types="vitest" />
// This is a reference directive needed for Vitest types
// More info here: https://vitest.dev/guide/#configuring-vitest
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

/**
 * Vite project's configuration options
 * More info here: https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    react(),
    svgr({
      esbuildOptions: {
        jsx: "automatic",
      },
      include: "**/*.svg?react",
      svgrOptions: {
        // More info here: https://react-svgr.com/docs/options/#svg-props
        svgProps: {
          // It prevents screen-readers to attempt to read SVGs
          "aria-hidden": "true",
        },
        // Colors taken from colors.css
        // More info here: https://react-svgr.com/docs/options/#replace-attribute-value
        replaceAttrValues: {
          "#FFD6E0": "currentColor",
          "#C1FBA4": "currentColor",
          "#7BF1A8": "currentColor",
          "#FFEF9F": "currentColor",
          "#4AD5FF": "currentColor",
          "#0C0F0A": "currentColor",
        },
      },
    }),
  ],
  /**
   * These should be in sync with the tsconfig.json "paths"
   * and the jest.config.ts module name mappers
   */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
