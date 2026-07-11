import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PrimitivePage } from "@/components/primitive/primitive-page";
import type { PrimitivePageData } from "@/components/primitive/primitive-page";

export const metadata: Metadata = {
  title: "Web Crawling API — Crawl Any Site to Markdown | Reader",
  description:
    "Crawl entire websites and get clean markdown for every page. BFS discovery with depth and page limits. Built for RAG pipelines and knowledge bases.",
  alternates: { canonical: "https://reader.dev/crawl" },
  openGraph: {
    title: "Web Crawling API — Crawl Any Site to Markdown | Reader",
    description:
      "Crawl entire websites and get clean markdown for every page. BFS discovery with depth and page limits.",
    url: "https://reader.dev/crawl",
    type: "website",
  },
};

const data: PrimitivePageData = {
  eyebrow: "Crawl",
  headline: "Web Crawling API",
  subheadline: "Crawl an entire site into clean markdown.",
  description:
    "Give Reader one URL and it discovers and scrapes every page. Depth and page limits you control. Clean markdown out. Ready for RAG pipelines, knowledge bases, and content processing.",
  trustLine: "Apache 2.0 · Open Source · BFS Discovery · 1,000 free pages/month",
  codeTabs: [
    {
      label: "Python",
      language: "python",
      code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")

result = reader.read(
    url="https://docs.example.com",
    max_depth=3,
    max_pages=100
)

for page in result.data:
    print(f"{page.url}: {len(page.markdown)} chars")`,
    },
    {
      label: "JavaScript",
      language: "javascript",
      code: `import { ReaderClient } from "@vakra-dev/reader-js";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });

const result = await reader.read({
  url: "https://docs.example.com",
  maxDepth: 3,
  maxPages: 100,
});

for (const page of result.data) {
  console.log(\`\${page.url}: \${page.markdown.length} chars\`);
}`,
    },
    {
      label: "cURL",
      language: "bash",
      code: `curl -X POST https://api.reader.dev/v1/read \\
  -H "x-api-key: rdr_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://docs.example.com",
    "maxDepth": 3,
    "maxPages": 100
  }'`,
    },
  ],
  features: [
    {
      title: "BFS link discovery",
      description:
        "Reader crawls breadth first, discovering links level by level from your seed URL. Pages are processed in order of depth, giving you the most important content first.",
    },
    {
      title: "Depth and page limits",
      description:
        "Control how deep the crawler goes (maxDepth 1 to 10) and how many pages it processes (maxPages up to 10,000). Start small, review results, and scale up.",
    },
    {
      title: "URL pattern filtering",
      description:
        "Include and exclude patterns (regex) let you target specific sections of a site. Crawl only the docs, skip the blog. Crawl the product pages, skip the admin area.",
    },
    {
      title: "Same domain safety",
      description:
        "The crawler never follows links to external domains. It stays on the same host, preventing scope creep and wasted credits.",
    },
    {
      title: "Every page to markdown",
      description:
        "Each discovered page is scraped and converted to clean markdown through Supermarkdown. The output is ready for chunking, embedding, and retrieval.",
    },
    {
      title: "Async with progress tracking",
      description:
        "Large crawls run asynchronously. The SDK polls for progress automatically. Monitor job status and cancel if needed.",
    },
  ],
  faqs: [
    {
      question: "How deep can Reader crawl?",
      answer:
        "Up to 10 levels of depth. For most documentation sites, depth 2 to 3 captures the full content hierarchy.",
    },
    {
      question: "Does the crawler follow external links?",
      answer:
        "No. Reader stays on the same domain as the seed URL. It never follows links to external sites.",
    },
    {
      question: "Can I filter which URLs get crawled?",
      answer:
        "Yes. Use includePatterns and excludePatterns (regex arrays) to target specific URL paths.",
    },
    {
      question: "How is crawling billed?",
      answer:
        "1 credit per page discovered and scraped. Discovery only mode (scrape set to false) costs 1 credit flat for the entire job regardless of how many URLs are found.",
    },
  ],
};

export default function CrawlPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PrimitivePage data={data} />
      </main>
      <Footer />
    </>
  );
}
