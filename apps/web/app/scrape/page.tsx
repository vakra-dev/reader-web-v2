import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PrimitivePage } from "@/components/primitive/primitive-page";
import type { PrimitivePageData } from "@/components/primitive/primitive-page";

export const metadata: Metadata = {
  title: "Web Scraping API — Any URL to Clean Markdown | Reader",
  description:
    "Turn any URL into clean, LLM ready markdown with one API call. JavaScript rendering, anti-bot bypass, and proxy rotation handled. Open source.",
  alternates: { canonical: "https://reader.dev/scrape" },
  openGraph: {
    title: "Web Scraping API — Any URL to Clean Markdown | Reader",
    description:
      "Turn any URL into clean, LLM ready markdown with one API call. JavaScript rendering, anti-bot bypass, and proxy rotation handled.",
    url: "https://reader.dev/scrape",
    type: "website",
  },
};

const data: PrimitivePageData = {
  eyebrow: "Scrape",
  headline: "Web Scraping API",
  subheadline: "Clean markdown from any URL.",
  description:
    "Turn any URL into clean, LLM ready markdown or structured JSON. One API call. Reader renders JavaScript, bypasses anti-bot protection, and rotates proxies so every page comes back clean.",
  trustLine:
    "Apache 2.0 · Open Source · Built on Playwright · 1,000 free pages/month",
  codeTabs: [
    {
      label: "cURL",
      language: "bash",
      code: `curl -X POST https://api.reader.dev/v1/read \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: rdr_your_api_key" \\
  -d '{"url": "https://example.com"}'`,
    },
    {
      label: "JavaScript",
      language: "javascript",
      code: `import { ReaderClient } from "@vakra-dev/reader-js";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });
const result = await reader.read({ url: "https://example.com" });

console.log(result.data.markdown);`,
    },
    {
      label: "Python",
      language: "python",
      code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")
result = reader.read(url="https://example.com")

print(result.data.markdown)`,
    },
  ],
  features: [
    {
      title: "Clean, AI ready output",
      description:
        "Strips navigation, ads, cookie banners, and scripts. Returns markdown or HTML in one call. Powered by Supermarkdown, a Rust HTML to markdown engine built for messy real world pages.",
    },
    {
      title: "Real browser rendering",
      description:
        "Every scrape runs in a real stealthed Chromium via Playwright. React, Vue, Next.js, and Angular sites come back complete with all dynamic content rendered.",
    },
    {
      title: "Anti-bot bypass built in",
      description:
        "Browser fingerprint generation, identity randomization, and proxy rotation. The browser reports webdriver as false on every request. Datacenter and residential proxy pools handle IP reputation automatically.",
    },
    {
      title: "Structured JSON extraction",
      description:
        "Add an extract schema and get validated JSON back alongside the markdown. Define fields with JSON Schema, shorthand types, or plain English. Missing fields return null instead of hallucinated values.",
    },
    {
      title: "Batch at scale",
      description:
        "Pass an array of URLs and Reader processes them in parallel as an async job. Scrape up to 1,000 pages in a single request with configurable concurrency.",
    },
    {
      title: "Open source, Apache 2.0",
      description:
        "Self host the entire engine on your infrastructure. No AGPL copyleft restrictions. No feature gaps between the open source and managed versions. Use the cloud or run your own.",
    },
  ],
  faqs: [
    {
      question: "What formats can I get back?",
      answer:
        "Markdown (default), HTML, and screenshots. Add an extract schema to get structured JSON alongside the markdown.",
    },
    {
      question: "Does it render JavaScript?",
      answer:
        "Yes. Every scrape runs in a real Chromium browser that executes JavaScript and renders dynamic content before extracting.",
    },
    {
      question: "How much does a scrape cost?",
      answer:
        "1 credit per page with standard proxies. 3 credits per page with premium proxies. Cache hits and failed requests cost 0 credits.",
    },
    {
      question: "Is there a free tier?",
      answer:
        "Yes. 1,000 free credits per month with no credit card required.",
    },
    {
      question: "Can I self host the scraping engine?",
      answer:
        "Yes. The engine is open source under Apache 2.0. Clone the repository and deploy on your infrastructure.",
    },
  ],
};

export default function ScrapePage() {
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
