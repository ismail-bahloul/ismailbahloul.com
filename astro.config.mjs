import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ismailbahloul.com",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
