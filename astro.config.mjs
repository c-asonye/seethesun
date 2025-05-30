// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://c-asonye.github.io/seethesun/',
  base: "/seethesun/",
  output: 'static',
  integrations: [mdx(), sitemap()],
});
