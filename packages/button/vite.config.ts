import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*"],
      exclude: ["src/**/*.module.scss"],
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${resolve(__dirname, "../tokens/src/tokens.scss")}";`,
        includePaths: [resolve(__dirname, "../tokens/src")],
      },
    },
  },
  resolve: {
    alias: {
      "@fundus-ui/tokens": resolve(__dirname, "../tokens/src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "FundusButton",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "esm" : ""}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@fundus-ui/tokens",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
    cssMinify: true,
  },
});
