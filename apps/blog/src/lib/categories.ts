export const CATEGORIES = [
  "Comparisons",
  "Guides",
  "Tools",
  "Deep Dives",
  "Use Cases",
  "Ecosystem",
  "Product",
  "Perspectives",
] as const;

export type Category = (typeof CATEGORIES)[number];

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Comparisons:
    "Head-to-head comparisons of web scraping tools, APIs, and platforms for AI developers.",
  Guides:
    "Step-by-step tutorials for web scraping, crawling, and building with Reader.",
  Tools:
    "The best tools, libraries, and APIs for web data extraction and AI.",
  "Deep Dives":
    "Technical explorations of anti-bot detection, browser automation, proxy strategies, and infrastructure.",
  "Use Cases":
    "Real-world applications of web scraping for lead generation, price monitoring, RAG, and more.",
  Ecosystem:
    "Integration guides for LangChain, CrewAI, LlamaIndex, MCP, and other AI frameworks.",
  Product:
    "Announcements, feature deep-dives, and engineering behind Reader and Supermarkdown.",
  Perspectives:
    "Ideas on the future of web scraping, AI agents, and open-source infrastructure.",
};

export function categoryDescription(category: string): string {
  return (
    CATEGORY_DESCRIPTIONS[category] ||
    `Articles about ${category.toLowerCase()} on the Reader blog.`
  );
}
