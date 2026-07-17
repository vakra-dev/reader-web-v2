"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-edge/50 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-fg pr-4">{question}</span>
        <svg
          className={`w-4 h-4 text-fg-muted flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`pb-4 ${open ? "" : "hidden"}`}>
        <p className="text-sm text-fg-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

const productModelRows = [
  {
    area: "Core positioning",
    reader: "Web context API for AI agents",
    competitor: "Scraping and extraction platform",
  },
  {
    area: "Starting point",
    reader: "URL to clean context",
    competitor: "URL to HTTP response, browser HTML, screenshot, or extracted data",
  },
  {
    area: "Main product surface",
    reader: "Scrape, Crawl, Extract, Browser",
    competitor:
      "Zyte API requests, browser automation, automatic extraction, request controls",
  },
  {
    area: "Primary output",
    reader: "Markdown, metadata, JSON, crawl results, screenshots, browser sessions",
    competitor:
      "HTTP response body, browser HTML, screenshots, structured extraction data",
  },
  {
    area: "Best fit",
    reader: "Agents, RAG, research, page snapshots, structured data workflows",
    competitor:
      "Production scraping, automatic extraction, browser rendered requests, SERP and category specific extraction",
  },
  {
    area: "Crawl model",
    reader: "Built into Reader's read workflow",
    competitor: "Usually handled by your crawler or application logic",
  },
  {
    area: "Workflow ownership",
    reader: "Your app owns product logic around context",
    competitor:
      "Your app owns crawl strategy, storage, monitoring, and downstream usage",
  },
];

const featureRows = [
  { feature: "Single page scraping", reader: "Yes", competitor: "Yes" },
  { feature: "Clean Markdown output", reader: "Yes", competitor: "Not the primary product model" },
  { feature: "HTML output", reader: "Yes", competitor: "Yes" },
  { feature: "Raw HTTP response body", reader: "Yes", competitor: "Yes" },
  { feature: "Response headers", reader: "Metadata and response details", competitor: "Yes" },
  { feature: "Metadata", reader: "Yes", competitor: "Yes" },
  { feature: "Screenshots", reader: "Yes", competitor: "Yes" },
  { feature: "JavaScript rendering", reader: "Yes", competitor: "Yes" },
  { feature: "Browser automation actions", reader: "Through Browser sessions", competitor: "Yes" },
  { feature: "Website crawling", reader: "Yes", competitor: "Your crawler or app usually owns crawl logic" },
  { feature: "Batch URL workflows", reader: "Yes", competitor: "Your app can orchestrate request batches" },
  { feature: "Structured extraction", reader: "Yes", competitor: "Yes, through automatic extraction fields" },
  { feature: "Product extraction", reader: "Schema based extraction", competitor: "Supported automatic extraction type" },
  { feature: "Article extraction", reader: "Schema based extraction", competitor: "Supported automatic extraction type" },
  { feature: "Job posting extraction", reader: "Schema based extraction", competitor: "Supported automatic extraction type" },
  { feature: "SERP extraction", reader: "Not the core product surface", competitor: "Supported automatic extraction type" },
  { feature: "Browser sessions", reader: "Yes", competitor: "Browser rendered requests and automation actions" },
  { feature: "Geolocation controls", reader: "Managed inside Reader workflow", competitor: "Yes" },
  { feature: "Cookies and sessions", reader: "Browser workflow dependent", competitor: "Yes" },
  { feature: "AI agent context", reader: "Core positioning", competitor: "Possible, but not the main product model" },
];

const usageRows = [
  { workflow: "Standard scrape", shape: "Page based" },
  { workflow: "Premium scrape", shape: "Higher page based usage" },
  { workflow: "Cache hit", shape: "No additional credits" },
  { workflow: "Failed scrape", shape: "No credits" },
  { workflow: "Crawl", shape: "Pages discovered and scraped" },
  { workflow: "Browser session", shape: "Time based" },
  { workflow: "Extract", shape: "Additional credits on top of scrape" },
];

const migrationRows = [
  { need: "Turn one URL into Markdown", capability: "Scrape" },
  { need: "Get HTML from a page", capability: "Scrape with HTML format" },
  { need: "Extract custom fields from a page", capability: "Extract" },
  { need: "Crawl a website section", capability: "Crawl" },
  { need: "Process many known URLs", capability: "Batch read" },
  { need: "Capture a screenshot", capability: "Scrape or Browser depending on need" },
  { need: "Interact with a page", capability: "Browser" },
  { need: "Use Playwright or Puppeteer", capability: "Browser" },
  { need: "Use category specific automatic extraction", capability: "Zyte may fit better" },
  { need: "Request SERP extraction", capability: "Zyte may fit better" },
  { need: "Control request fields in detail", capability: "Zyte may fit better" },
];

const verdictTableRows = [
  {
    reader: "Your agent needs clean web context",
    competitor: "Your scraper needs mature extraction and access controls",
  },
  {
    reader: "Markdown and structured JSON are core outputs",
    competitor: "Browser HTML, HTTP response data, and automatic extraction are core needs",
  },
  {
    reader: "You need scrape, crawl, extract, and browser workflows",
    competitor: "You need a scraping and extraction API with many request level options",
  },
  {
    reader: "Your app owns storage, monitoring, and analysis",
    competitor: "Your app owns parsing, crawling strategy, and downstream data workflows",
  },
];

const faqs = [
  {
    question: "What is the main difference between Reader and Zyte?",
    answer:
      "Reader is a web context API for AI agents. Zyte is a scraping and extraction platform with HTTP response retrieval, browser rendering, screenshots, automatic extraction, browser actions, geolocation, cookies, sessions, and metadata.",
  },
  {
    question: "Is Reader a Zyte alternative?",
    answer:
      "Reader can be a Zyte alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows.",
  },
  {
    question: "Which tool is better for AI agents?",
    answer:
      "Reader is better when the agent needs clean web context from pages and websites. Zyte can support AI workflows, but its product model is more focused on scraping and extraction requests.",
  },
  {
    question: "Which tool is better for automatic extraction?",
    answer:
      "Zyte is strong when your target fits its supported automatic extraction categories such as products, articles, job postings, page content, or SERP data. Reader is strong when you want flexible schema based extraction with source Markdown.",
  },
  {
    question: "Does Reader support crawling?",
    answer:
      "Yes. Reader supports crawling as part of its read workflow when your request includes crawl limits such as depth or page count.",
  },
  {
    question: "Does Zyte support crawling?",
    answer:
      "Zyte can be used inside crawling systems, but the application usually owns URL discovery, queueing, deduplication, crawl limits, and storage.",
  },
  {
    question: "Which tool is better for structured extraction?",
    answer:
      "Reader is better when structured extraction should sit alongside clean Markdown and source metadata for agent workflows. Zyte is better when you want automatic extraction for its supported page categories.",
  },
  {
    question: "Does Reader replace Zyte's SERP extraction?",
    answer:
      "No. SERP extraction is not Reader's core product surface. If SERP extraction is central to your workflow, Zyte may be a better fit.",
  },
  {
    question: "Do these tools have the same usage model?",
    answer:
      "No. Reader usage is centered on pages, extraction, crawl results, cache behavior, and browser minutes. Zyte usage depends on request fields, rendering mode, extraction type, screenshots, browser actions, and other request options.",
  },
  {
    question: "Should I choose based on features alone?",
    answer:
      "No. Choose based on workflow. If the goal is clean web context for agents, Reader is a strong fit. If the goal is production scraping and automatic extraction, Zyte may be a better fit.",
  },
];

export function ZyteComparisonContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
              Reader vs Zyte
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Compare a web context API for AI agents with a mature scraping and extraction platform.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader and Zyte both help developers collect data from public web pages. The difference is what each product is optimized for.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader is the web context API for AI agents. It helps teams scrape pages, crawl websites, extract structured data, and use browser sessions when interaction is required.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Zyte is a mature web scraping and extraction platform. Zyte API supports HTTP requests, browser rendered HTML, screenshots, browser automation actions, geolocation, sessions, metadata, and automatic extraction for common data types such as products, articles, job postings, page content, and search engine results.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              This page compares Reader and Zyte by product model, workflow fit, output model, extraction, crawling, browser workflows, developer experience, and operational tradeoffs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                Start free
              </a>
              <a
                href="https://docs.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                View docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-accent-500/20 rounded-md bg-accent-500/5"
          >
            <h2 className="text-lg font-semibold mb-3 text-fg">
              Quick verdict
            </h2>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose Reader if your product needs clean web context for AI agents, RAG pipelines, research tools, structured extraction, and website crawling.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Reader is a strong fit when the main output should be Markdown, structured JSON, crawl results, screenshots, or browser sessions that your application can feed into an AI workflow.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose Zyte if your product needs a mature scraping API with browser rendering, HTTP response control, automatic extraction for supported data types, browser automation actions, geolocation, sessions, and scraping focused infrastructure.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-4">
              Zyte is a strong fit when the main challenge is extracting data reliably from web pages using a scraping platform built for production data collection.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3 font-medium">
              The short version:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge">
                    <th className="text-left px-3 py-2 font-semibold text-accent-500">
                      Choose Reader when
                    </th>
                    <th className="text-left px-3 py-2 font-semibold text-fg-secondary">
                      Choose Zyte when
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {verdictTableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        i < verdictTableRows.length - 1
                          ? "border-b border-edge/50"
                          : ""
                      }
                    >
                      <td className="px-3 py-2 text-fg-secondary">
                        {row.reader}
                      </td>
                      <td className="px-3 py-2 text-fg-secondary">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Model Comparison Table */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-fg">
              Product model comparison
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              Reader and Zyte overlap around scraping, rendering, browser workflows, and extraction, but they start from different assumptions.
            </p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Area
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">
                      Reader
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Zyte
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productModelRows.map((row, i) => (
                    <tr
                      key={row.area}
                      className={
                        i < productModelRows.length - 1
                          ? "border-b border-edge/50"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-fg-muted font-medium">
                        {row.area}
                      </td>
                      <td className="px-4 py-3 text-fg-secondary">
                        {row.reader}
                      </td>
                      <td className="px-4 py-3 text-fg-secondary">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-base text-fg-muted leading-relaxed">
                Reader is built around the idea that AI products need usable web context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Zyte is built around the idea that scraping teams need a robust API for retrieving pages, rendering pages, controlling request behavior, and extracting structured data from common page types.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If the hard part is giving an AI agent clean source context, Reader is the more direct fit.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If the hard part is production scraping and automatic extraction across supported data types, Zyte may be the better fit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-fg">
              Feature comparison
            </h2>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Capability
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">
                      Reader
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Zyte
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i < featureRows.length - 1
                          ? "border-b border-edge/50"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-fg-muted font-medium">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-fg-secondary">
                        {row.reader}
                      </td>
                      <td className="px-4 py-3 text-fg-secondary">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-base text-fg-muted leading-relaxed">
                The main distinction is focus.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Reader organizes the workflow around AI ready context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Zyte organizes the workflow around scraping, rendering, response control, and automatic extraction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Difference Sections */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-fg"
          >
            Key differences
          </motion.h2>
          <div className="space-y-10">
            {/* Output model comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Output model comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is designed to return content that AI workflows can use directly.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                Common Reader outputs include:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clean Markdown</li>
                <li>Metadata</li>
                <li>HTML</li>
                <li>Raw HTML</li>
                <li>Screenshots</li>
                <li>Structured JSON</li>
                <li>Crawl results</li>
                <li>Browser session output controlled by your code</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                This makes Reader useful when page content needs to become model context, a RAG document, a source snapshot, an extracted record, or an agent tool result.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte is designed to return scraping and extraction outputs based on request fields. A request can ask for outputs such as browser rendered HTML, HTTP response body, HTTP response headers, screenshots, or automatic extraction results for supported page types.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader starts from &ldquo;What context does my agent need from this page?&rdquo;</li>
                <li>Zyte starts from &ldquo;What page response or extraction output should this request return?&rdquo;</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Both are useful questions. They usually belong to different layers of a product.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is stronger when the output is meant for an LLM or agent.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Zyte is stronger when the output is part of a scraping and extraction pipeline.
              </p>
            </motion.div>

            {/* Scraping comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Scraping comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Both Reader and Zyte can retrieve individual web pages.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader Scrape is best when the goal is to turn a public URL into clean Markdown, metadata, optional HTML, screenshot output, or structured fields. It is designed for workflows where the page becomes context for an agent, a record in a database, or a document in a retrieval pipeline.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte API is best when the goal is to retrieve a page response or extraction result with detailed request controls. Depending on the request, Zyte can return HTTP response data, browser rendered HTML, screenshots, headers, metadata, or automatic extraction data.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is more direct for AI ready page context.</li>
                <li>Zyte is more direct for scraping and extraction requests with explicit output fields.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                If your agent needs to read a page, summarize it, extract facts, or store clean source context, Reader keeps the workflow simple.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If your scraper needs response control, browser rendering, extraction types, geolocation, sessions, and request level options, Zyte gives a more mature scraping API surface.
              </p>
            </motion.div>

            {/* Crawling comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Crawling comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader includes crawling as a core workflow.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                A Reader crawl starts from a URL, follows related links within limits, and returns page level results. This is useful for documentation ingestion, help center ingestion, public website research, RAG pipelines, competitive intelligence, and dataset collection.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte is usually used as the scraping and extraction layer inside a crawler or application. Your system can decide which URLs to visit, how to queue them, how to deduplicate them, how deep to crawl, and how to store results. Zyte API can then handle the individual page requests and extraction outputs.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Crawl is a first class workflow for collecting website context.</li>
                <li>Zyte is strongest as the page retrieval and extraction layer inside custom crawling systems.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Choose Reader if crawling and page level context are part of your AI product.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Choose Zyte if your team already owns crawl orchestration and needs a production scraping API behind it.
              </p>
            </motion.div>

            {/* Extraction comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Extraction comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader Extract is designed to turn page context into structured JSON.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                Use Reader Extract when your workflow needs fields such as:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Product name</li>
                <li>Price</li>
                <li>Availability</li>
                <li>Company description</li>
                <li>Listing details</li>
                <li>Article metadata</li>
                <li>Pricing plan details</li>
                <li>Job post fields</li>
                <li>Documentation sections</li>
                <li>Custom records defined by your schema</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader&apos;s extraction fits naturally into AI agent and data workflows because the structured record can live alongside the source Markdown.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte automatic extraction is more category oriented. It supports extraction fields for page types such as products, product lists, product navigation, articles, article lists, article navigation, forum threads, job postings, job posting navigation, page content, and search engine results.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is stronger when you want flexible schema based extraction tied to source context.</li>
                <li>Zyte is stronger when your target fits one of its supported automatic extraction categories.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                For agent workflows, keeping source Markdown next to extracted JSON is useful because your system can inspect, verify, and debug the output later.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                For scraping workflows around supported categories, Zyte&apos;s automatic extraction can reduce the amount of custom parsing your team needs to build.
              </p>
            </motion.div>

            {/* Browser workflow comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Browser workflow comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader Browser gives your workflow a cloud browser session when normal scraping is not enough.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                Use Reader Browser when your agent or application needs:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clicks</li>
                <li>Forms</li>
                <li>Navigation</li>
                <li>Screenshots</li>
                <li>PDFs</li>
                <li>Rendered page state</li>
                <li>Playwright or Puppeteer workflows</li>
                <li>A browser fallback inside a web context pipeline</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte supports browser rendered requests and browser automation actions. It can return browser HTML, screenshots, and data extracted after browser actions run. Zyte browser workflows also include related request features such as geolocation, cookies, sessions, metadata, and network capture.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Browser is best when browser control is one capability inside your AI web context workflow.</li>
                <li>Zyte browser automation is best when browser rendering and actions are part of a scraping request pipeline.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader gives your application a browser when the page needs interaction.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Zyte gives scraping teams browser based request and extraction capabilities inside Zyte API.
              </p>
            </motion.div>

            {/* AI agent workflow comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                AI agent workflow comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is built around AI agent workflows.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                A typical Reader workflow looks like this:
              </p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 text-sm text-fg-muted font-mono whitespace-pre-wrap leading-relaxed">
{`Agent needs web context
  → Reader scrapes, crawls, extracts, or opens a browser session
  → Your application stores or filters the result
  → Agent reasons over the source context
  → Product returns an answer, record, alert, or action`}
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte can support AI workflows too, especially when an agent or pipeline needs structured data from supported page types or browser rendered responses. But Zyte&apos;s product model is more scraping and extraction oriented.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                A typical Zyte workflow looks like this:
              </p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 text-sm text-fg-muted font-mono whitespace-pre-wrap leading-relaxed">
{`Application needs a page or extraction result
  → Zyte retrieves HTTP or browser rendered content
  → Zyte returns the requested response or automatic extraction output
  → Your application stores, parses, reviews, or uses the result`}
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The difference is the layer each product is built to own.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader owns the web context layer for agents.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Zyte owns more of the scraping and extraction request layer.
              </p>
            </motion.div>

            {/* Usage shape comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Usage shape comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                This section compares usage shape, not money pricing.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-4">
                Reader usage is organized around web context units.
              </p>
              <div className="border border-edge rounded-md overflow-hidden overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-edge bg-surface/50">
                      <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                        Reader workflow
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                        Usage shape
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usageRows.map((row, i) => (
                      <tr
                        key={row.workflow}
                        className={
                          i < usageRows.length - 1
                            ? "border-b border-edge/50"
                            : ""
                        }
                      >
                        <td className="px-4 py-3 text-fg-muted font-medium">
                          {row.workflow}
                        </td>
                        <td className="px-4 py-3 text-fg-secondary">
                          {row.shape}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte usage depends on the request type and requested outputs. Usage can vary depending on whether you request HTTP response data, browser rendered HTML, screenshots, automatic extraction, browser actions, geolocation, sessions, or other features.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical planning difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>With Reader, estimate pages scraped, pages crawled, extraction usage, and browser minutes.</li>
                <li>With Zyte, estimate which request fields and extraction types each target needs.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is simpler to estimate when your workflow is mostly page, crawl, extraction, and browser context based.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Zyte is more request field oriented, which can be useful when your scraping workflow needs more control over what each request returns.
              </p>
            </motion.div>

            {/* Operational tradeoffs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Operational tradeoffs
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader reduces the work needed to collect clean web context. Your application still owns scheduling, storage, retrieval, comparison, alerts, dashboards, and agent logic.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte reduces the work needed to run production scraping and extraction requests. Your application still owns crawl logic, URL queues, storage, monitoring, review workflows, and downstream analysis.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader asks your team to think in terms of source context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Zyte asks your team to think in terms of scraping request outputs.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Choose Reader when your product architecture is centered on agents, RAG, source documents, structured records, and page snapshots.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Choose Zyte when your product architecture is centered on production scraping, category based extraction, browser rendered requests, and scraping pipeline control.
              </p>
            </motion.div>

            {/* Migration notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Migration notes
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-4">
                If you are evaluating Reader as a Zyte alternative, start by mapping the workflow.
              </p>
              <div className="border border-edge rounded-md overflow-hidden overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-edge bg-surface/50">
                      <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                        Current need
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                        Reader capability
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {migrationRows.map((row, i) => (
                      <tr
                        key={row.need}
                        className={
                          i < migrationRows.length - 1
                            ? "border-b border-edge/50"
                            : ""
                        }
                      >
                        <td className="px-4 py-3 text-fg-muted font-medium">
                          {row.need}
                        </td>
                        <td className="px-4 py-3 text-fg-secondary">
                          {row.capability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is a good alternative when your Zyte workflow is mainly about turning pages into AI ready context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If your workflow depends heavily on Zyte automatic extraction categories, SERP extraction, browser request actions, or detailed request field behavior, Zyte may remain the better fit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Choose Reader if / Choose Zyte if */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-accent-500/30 rounded-md bg-accent-500/5"
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                When Reader is the better fit
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-3">
                Reader is a better fit when your team needs:
              </p>
              <ul className="list-disc pl-5 text-sm text-fg-muted leading-relaxed space-y-1">
                <li>A web context API for AI agents</li>
                <li>Clean Markdown from URLs</li>
                <li>Website crawling for RAG or research</li>
                <li>Structured JSON extraction from public pages</li>
                <li>Custom schema based extraction</li>
                <li>Browser sessions as a fallback for interaction</li>
                <li>Page snapshots with source context</li>
                <li>A focused API for scrape, crawl, extract, and browser workflows</li>
                <li>Control over your own storage, retrieval, alerts, and analysis</li>
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-3">
                Reader is especially useful when the scraped output should be read by an LLM, embedded in a retrieval system, or stored as clean source context.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-edge rounded-md"
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                When Zyte may be the better fit
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-3">
                Zyte may be a better fit when your team needs:
              </p>
              <ul className="list-disc pl-5 text-sm text-fg-muted leading-relaxed space-y-1">
                <li>A mature scraping and extraction API</li>
                <li>HTTP response body and header control</li>
                <li>Browser rendered HTML</li>
                <li>Screenshots from browser requests</li>
                <li>Browser automation actions</li>
                <li>Geolocation controls</li>
                <li>Cookies and session behavior</li>
                <li>Automatic extraction for supported page categories</li>
                <li>SERP extraction</li>
                <li>Scraping pipeline infrastructure</li>
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-3">
                Zyte is strongest when request level scraping and extraction control are the center of the workflow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            Frequently asked questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-edge rounded-md divide-y-0 px-4"
          >
            {faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Choose the right scraping layer
            </h2>
            <p className="text-base text-fg-muted mb-4">
              Use Reader when your AI agent needs clean web context from URLs, websites, structured fields, and occasional browser sessions.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Use Zyte when your product needs a mature scraping and extraction platform with request level controls, browser rendering, screenshots, automatic extraction, and SERP focused workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                Start free
              </a>
              <a
                href="https://docs.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                View docs
              </a>
              <a
                href="/blog"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Read the full comparison
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
