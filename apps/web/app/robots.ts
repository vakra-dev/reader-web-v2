import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // AI crawler policy - customize based on your business needs:
  // - GPTBot (OpenAI) - blocks ChatGPT training
  // - ClaudeBot (Anthropic) - blocks Claude training
  // - Google-Extended - blocks Bard/Gemini training
  // - CCBot (Common Crawl) - blocks general LLM training datasets
  //
  // Allowing these crawlers increases discoverability in AI search results.
  // Blocking them protects your content from training data.
  // This is a business decision - adjust as needed.

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      "https://reader.dev/sitemap.xml",
      "https://reader.dev/blog/sitemap-index.xml",
    ],
  };
}
