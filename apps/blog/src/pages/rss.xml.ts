import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "Reader Blog",
    description:
      "Technical articles about web data extraction, AI agents, and building with Reader.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      author: post.data.author,
      categories: post.data.keywords,
      content: sanitizeHtml(parser.render(post.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          "img",
          "pre",
          "code",
        ]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          code: ["class"],
          pre: ["class"],
          img: ["src", "alt", "width", "height"],
        },
      }),
    })),
    customData: `<language>en-us</language>`,
  });
}
