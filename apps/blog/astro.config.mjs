import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://reader.dev",
  base: "/blog",

  integrations: [
    mdx(),
    tailwind(),
    sitemap(),
    pagefind(),
  ],

  output: "static",

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    rehypePlugins: [
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },

  trailingSlash: "never",
});
