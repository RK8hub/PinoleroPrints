// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pinoleroprints.rk8.dev",
  // base ya NO va, porque tienes dominio propio
  vite: {
    plugins: [
      tailwindcss({
        resolveOptions: {
          tsconfigPaths: {
            root: process.cwd(),
            configNames: ["tsconfig.json"],
          },
        },
      }),
    ],
  },
});
