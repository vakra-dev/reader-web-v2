import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PrimitivePage } from "@/components/primitive/primitive-page";
import type { PrimitivePageData } from "@/components/primitive/primitive-page";

export const metadata: Metadata = {
  title: "Web Data Extraction API — URL to Structured JSON | Reader",
  description:
    "Extract structured data from any web page. Pass a schema or plain English prompt. Get validated JSON back. No CSS selectors needed.",
  alternates: { canonical: "https://reader.dev/extract" },
  openGraph: {
    title: "Web Data Extraction API — URL to Structured JSON | Reader",
    description:
      "Extract structured data from any web page. Pass a schema or plain English prompt. Get validated JSON back.",
    url: "https://reader.dev/extract",
    type: "website",
  },
};

const data: PrimitivePageData = {
  eyebrow: "Extract",
  headline: "Data Extraction API",
  subheadline: "Any page to structured JSON. No selectors needed.",
  description:
    "Give Reader a URL and a schema (or a plain English prompt) and get back validated structured JSON. Reader scrapes the page, converts it to markdown, and runs an LLM to fill your schema. Missing fields return null instead of hallucinated values.",
  trustLine:
    "Apache 2.0 · Open Source · Schema Validated · 1,000 free pages/month",
  codeTabs: [
    {
      label: "cURL",
      language: "bash",
      code: `curl -X POST https://api.reader.dev/v1/read \\
  -H "x-api-key: rdr_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/product/123",
    "extract": {
      "schema": {
        "title": "string",
        "price": "number",
        "in_stock": "boolean",
        "features": ["string"]
      }
    }
  }'`,
    },
    {
      label: "JavaScript",
      language: "javascript",
      code: `import { ReaderClient } from "@vakra-dev/reader-js";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });

const result = await reader.read({
  url: "https://example.com/product/123",
  extract: {
    schema: {
      title: "string",
      price: "number",
      in_stock: "boolean",
      features: ["string"],
    },
  },
});

console.log(result.data.extracted);`,
    },
    {
      label: "Python",
      language: "python",
      code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")

result = reader.read(
    url="https://example.com/product/123",
    extract={
        "schema": {
            "title": "string",
            "price": "number",
            "in_stock": "boolean",
            "features": ["string"]
        }
    }
)

print(result.data.extracted)`,
    },
  ],
  features: [
    {
      title: "Schema or natural language",
      description:
        'Define fields with JSON Schema, shorthand types, or a plain English prompt. "Extract the product name, price, and availability" works just as well as a formal schema definition.',
    },
    {
      title: "Validated, never hallucinated",
      description:
        "The LLM fills fields based on actual page content. If a field is not present on the page, it returns null. Reader never invents data to fill missing fields.",
    },
    {
      title: "One validation retry",
      description:
        "If the initial extraction fails validation against your schema, Reader retries once automatically before returning the result.",
    },
    {
      title: "Works on any page",
      description:
        "Product pages, company profiles, job listings, articles, documentation. The extraction works on any content because it reads the clean markdown, not raw HTML.",
    },
    {
      title: "Markdown alongside JSON",
      description:
        "Every extract response includes both the clean markdown and the structured JSON. Use the markdown for context and the JSON for your database.",
    },
    {
      title: "Four schema formats",
      description:
        "Full JSON Schema for strict typing. Shorthand types for quick prototyping. Prompt only for exploratory extraction. Prompt plus schema for guided extraction with natural language context.",
    },
  ],
  faqs: [
    {
      question: "Do I need CSS selectors?",
      answer:
        "No. Reader's extraction uses an LLM to understand page content semantically. You describe what you want in a schema or plain English.",
    },
    {
      question: "What if a field is not on the page?",
      answer:
        "It returns null. Reader never hallucates or invents data for missing fields.",
    },
    {
      question: "Does extract work with crawl?",
      answer:
        "Extract currently works in scrape mode only (single URLs). It does not work with batch or crawl jobs. There is a 30,000 token page content limit.",
    },
    {
      question: "How is extraction billed?",
      answer:
        "Extract adds 2 credits on top of the scrape cost. A standard scrape with extraction costs 3 credits total (1 scrape + 2 extract).",
    },
  ],
};

export default function ExtractPage() {
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
