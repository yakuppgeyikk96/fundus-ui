import { copyFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ["src/**/*"],
      exclude: ["src/**/*.scss", "src/**/*.css"],
    }),
    {
      name: "copy-scss-css",
      closeBundle() {
        copyFileSync(
          resolve(__dirname, "src/tokens.scss"),
          resolve(__dirname, "dist/tokens.scss")
        );
        copyFileSync(
          resolve(__dirname, "src/tokens.css"),
          resolve(__dirname, "dist/tokens.css")
        );
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "FundusTokens",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "esm" : ""}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name === "tokens.scss" ||
            assetInfo.name === "tokens.css"
          ) {
            return assetInfo.name;
          }
          return assetInfo.name || "asset";
        },
      },
    },
  },
});
