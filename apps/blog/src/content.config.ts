import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string(),
    authorRole: z.string().optional(),
    authorImage: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    category: z.string().optional(),
    draft: z.boolean().default(false),
    schemaType: z.enum(["article", "howto"]).default("article"),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
