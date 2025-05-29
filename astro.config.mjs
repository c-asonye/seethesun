// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://c-asonye.github.io/seethesun/',
  base: "/seethesun/",
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: {
    outDir: './dist',
  },
});
