import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// Note: @astrojs/sitemap removed temporarily due to version incompatibility
// with astro@4.x. Re-add when upgrading to astro@5.x or pinning a compatible version.

export default defineConfig({
  site: "https://reader.dev",
  // Removed base for standalone deployment (deployed at root, proxied to /blog)
  // base: "/blog",

  integrations: [
    mdx(),
    tailwind(),
  ],

  output: "static",

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  trailingSlash: "ignore",
});
