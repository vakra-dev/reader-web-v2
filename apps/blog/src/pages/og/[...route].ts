import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const posts = await getCollection("blog");

const pages = Object.fromEntries(
  posts
    .filter((post) => !post.data.draft)
    .map((post) => {
      const words = (post.body || "").split(/\s+/).filter(Boolean).length;
      const readingTime = Math.max(1, Math.ceil(words / 275));
      const category = post.data.category || "Blog";

      return [
        post.id,
        {
          title: post.data.title,
          description: `${category}  ·  ${readingTime} min read  ·  reader.dev`,
        },
      ];
    })
);

const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [10, 10, 10],
      [25, 25, 30],
    ],
    padding: 60,
    font: {
      title: {
        families: ["Inter"],
        weight: "Bold",
        size: 56,
        lineHeight: 1.2,
        color: [255, 255, 255],
      },
      description: {
        families: ["Inter"],
        weight: "Normal",
        size: 24,
        color: [160, 160, 170],
      },
    },
    fonts: [
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf",
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf",
    ],
  }),
});

export { getStaticPaths, GET };
