"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-edge/50 last:border-b-0"
    >
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
    </motion.div>
  );
}

export function FirecrawlContent() {
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
              Reader vs Firecrawl
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Compare two AI focused web data APIs for scraping, crawling,
              extraction, browser workflows, and agent context.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader and Firecrawl both help developers turn web pages into
              usable content for AI agents, RAG pipelines, research tools, and
              data workflows. The difference is in the product model.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader is built as a focused web context API for AI agents. It
              centers around scraping pages, crawling websites, extracting
              structured data, and opening browser sessions when a page needs
              interaction.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Firecrawl is a broader web data platform with more endpoint types,
              including scraping, crawling, mapping, searching, monitoring,
              interacting with pages, and agent style workflows.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              This page compares the two by workflow fit, feature surface, output
              model, developer experience, and credit usage.
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
              Choose Reader if you want one focused API for the core web context
              jobs AI agents need most: scrape a page, crawl a website, extract
              structured JSON, and use a browser session when interaction is
              required.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose Firecrawl if you want a broader web data platform with
              additional surfaces such as search, map, monitor, interact, and
              agent oriented workflows.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Both tools can be useful. The better choice depends on what you are
              building.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed">
              If your product needs clean web context inside an AI agent or RAG
              workflow, Reader is designed around that path. If your product
              needs more endpoint categories around discovery, monitoring, and
              agent automation, Firecrawl may offer more built in surfaces.
            </p>
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
              Reader and Firecrawl both serve developers building with web data,
              but they organize the product differently.
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
                      Firecrawl
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      area: "Core positioning",
                      reader: "Web context API for AI agents",
                      competitor:
                        "Broader web data API for AI products and automation",
                    },
                    {
                      area: "Main workflow",
                      reader:
                        "Turn URLs into Markdown, JSON, crawl results, or browser sessions",
                      competitor:
                        "Use endpoint specific tools for scrape, crawl, map, search, monitor, interact, and agent workflows",
                    },
                    {
                      area: "API model",
                      reader:
                        "One read endpoint for scrape, batch, and crawl, plus browser sessions",
                      competitor:
                        "Multiple endpoint families for different web data jobs",
                    },
                    {
                      area: "Best fit",
                      reader:
                        "Agent context, RAG ingestion, structured extraction, focused web data workflows",
                      competitor:
                        "Broader web data tasks, discovery, monitoring, search, and interaction workflows",
                    },
                    {
                      area: "Usage model",
                      reader:
                        "Credits by page, extraction, crawl, cache, and browser minutes",
                      competitor: "Credits by endpoint and feature",
                    },
                  ].map((row, i, arr) => (
                    <tr
                      key={row.area}
                      className={
                        i < arr.length - 1 ? "border-b border-edge/50" : ""
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
            <p className="text-base text-fg-muted leading-relaxed mt-4">
              Reader&apos;s model is compact. The same read primitive handles a
              single URL, known URL batches, and crawls based on the request
              shape. That makes the API easier to reason about when your main
              goal is web context.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              Firecrawl&apos;s model is broader. It exposes more separate
              capabilities, which can be useful if your product needs search,
              map, monitor, interact, or agent flows as first class product
              surfaces.
            </p>
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
                      Firecrawl
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Single page scraping", reader: "Yes", competitor: "Yes" },
                    { feature: "Clean Markdown output", reader: "Yes", competitor: "Yes" },
                    { feature: "HTML output", reader: "Yes", competitor: "Yes" },
                    { feature: "Raw HTML output", reader: "Yes", competitor: "Yes" },
                    { feature: "Screenshots", reader: "Yes", competitor: "Yes" },
                    { feature: "JavaScript rendering", reader: "Yes", competitor: "Yes" },
                    { feature: "Website crawling", reader: "Yes", competitor: "Yes" },
                    { feature: "Batch scraping", reader: "Yes", competitor: "Yes" },
                    { feature: "Structured JSON extraction", reader: "Yes", competitor: "Yes" },
                    { feature: "Main content extraction", reader: "Yes", competitor: "Yes" },
                    { feature: "Search endpoint", reader: "Not the core product surface", competitor: "Yes" },
                    { feature: "Map or URL discovery endpoint", reader: "Crawl and discovery oriented workflows", competitor: "Yes" },
                    { feature: "Monitoring endpoint", reader: "Customer built workflow with Reader data", competitor: "Yes" },
                    { feature: "Browser interaction", reader: "Browser sessions with automation control", competitor: "Interact endpoint and action based workflows" },
                    { feature: "MCP support", reader: "Yes", competitor: "Yes" },
                    { feature: "SDKs and API access", reader: "Yes", competitor: "Yes" },
                    { feature: "Agent focused workflows", reader: "Yes", competitor: "Yes" },
                  ].map((row, i, arr) => (
                    <tr
                      key={row.feature}
                      className={
                        i < arr.length - 1 ? "border-b border-edge/50" : ""
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
            <p className="text-base text-fg-muted leading-relaxed mt-4">
              The biggest difference is not whether either tool can scrape a
              page. Both can.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              The real difference is whether you prefer a focused web context API
              or a broader set of web data endpoints.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              Reader keeps the core workflow centered on four jobs: scrape,
              crawl, extract, and browse. Firecrawl expands the product surface
              into more endpoint categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Difference sections */}
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
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Output model comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                For AI agents, output quality matters as much as scrape success.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                A scrape that returns noisy HTML may technically work, but still
                be hard for an agent or retrieval system to use. The key question
                is what your application receives.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is designed around clean Markdown as the default context
                format. It also supports metadata, HTML, raw HTML, screenshots,
                and structured JSON extraction. This makes it useful when the
                output needs to be passed into an agent, embedded in a RAG
                pipeline, stored as a source snapshot, or transformed into a
                structured record.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Firecrawl also supports Markdown and multiple formats, including
                HTML, raw HTML, screenshots, links, images, JSON, and other
                scrape formats. This gives developers a broad output surface for
                different workflows.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Use Reader when you want a simpler content model focused on agent
                context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Use Firecrawl when you want more format and endpoint variety in
                one broader platform.
              </p>
            </motion.div>

            {/* Scraping comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Scraping comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Both Reader and Firecrawl can scrape individual URLs.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader&apos;s scrape workflow is centered on turning one URL into
                clean web context. The most common output is Markdown, with
                metadata and optional additional formats. This is useful when
                your agent needs to read a source page, summarize it, extract
                facts, or send the content into a retrieval pipeline.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Firecrawl&apos;s scrape endpoint also handles page retrieval and
                supports multiple response formats. It includes additional
                request options such as actions, location settings, proxy mode,
                cache settings, profile behavior, and zero data retention options
                where supported.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The practical difference:
              </p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>
                  Reader Scrape is best when the job is &quot;give my agent clean
                  context from this URL.&quot;
                </li>
                <li>
                  Firecrawl Scrape is best when you want a more configurable
                  scrape endpoint with broader scrape specific options.
                </li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                For many agent workflows, the simpler product model is an
                advantage. For more advanced scrape configurations, Firecrawl may
                offer more knobs.
              </p>
            </motion.div>

            {/* Crawling comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Crawling comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Both tools support crawling websites.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader uses crawl when a request includes a starting URL with
                crawl scope controls such as page limits or depth. The goal is to
                turn a website or section into page level results your system can
                store, search, summarize, or embed.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                This is useful for:
              </p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Documentation ingestion</li>
                <li>Help center ingestion</li>
                <li>Website research</li>
                <li>Competitor page collection</li>
                <li>Public content datasets</li>
                <li>RAG pipelines</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Firecrawl also supports crawling and has a broader platform
                around related web data workflows such as map, search, monitor,
                and agent behavior.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The practical difference:
              </p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>
                  Reader Crawl is a good fit when you want website context as
                  clean Markdown and metadata for your own pipeline.
                </li>
                <li>
                  Firecrawl may be a better fit when crawling is part of a
                  broader discovery, search, monitoring, or agent workflow inside
                  Firecrawl&apos;s endpoint system.
                </li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                Reader gives you the web context. Your application owns storage,
                refreshes, comparison, retrieval, and analysis.
              </p>
            </motion.div>

            {/* Extraction comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Extraction comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Both Reader and Firecrawl support structured extraction, but the
                experience is different.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader Extract is part of the read workflow. You scrape a page,
                provide a schema or instruction, and receive structured JSON
                alongside the source context. Reader supports extraction when the
                workflow needs fields such as product data, company details,
                listing information, article metadata, pricing fields, or job
                post details.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Firecrawl supports JSON output and also has extraction oriented
                surfaces. Its docs distinguish between scrape JSON mode, extract,
                and agent style workflows, with different usage behavior
                depending on the endpoint.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The practical difference:
              </p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>
                  Reader is a strong fit when extraction is attached to a known
                  page and you want source context plus structured fields.
                </li>
                <li>
                  Firecrawl may be a better fit when you want multiple extraction
                  paths, including broader extraction or agent based flows.
                </li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                For production workflows, the most important question is not just
                whether extraction exists. It is whether the output shape, source
                context, error handling, and usage model fit your product.
              </p>
            </motion.div>

            {/* Browser and interaction comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Browser and interaction comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader and Firecrawl both support interactive web workflows, but
                they approach them differently.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader Browser provides cloud browser sessions that your
                automation code can control with tools such as Playwright or
                Puppeteer. This is useful when your system needs clicks, forms,
                navigation, screenshots, PDFs, or rendered page state.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Firecrawl supports interaction through its Interact endpoint and
                scrape related action options. This can be useful when you want
                to describe or configure actions as part of a Firecrawl workflow.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The practical difference:
              </p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>
                  Reader Browser is better when your team wants browser control
                  as part of a broader web context API.
                </li>
                <li>
                  Firecrawl Interact is better when you want interaction as part
                  of Firecrawl&apos;s endpoint driven workflow.
                </li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                Use Browser when scraping is not enough. If your agent only needs
                content from a URL, scrape first. If the page requires
                interaction, then use a browser based workflow.
              </p>
            </motion.div>

            {/* Credit usage comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Credit usage comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-4">
                This section compares usage units, not money pricing.
              </p>
              <div className="border border-edge rounded-md overflow-hidden overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-edge bg-surface/50">
                      <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                        Workflow
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-accent-500">
                        Reader
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                        Firecrawl
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { workflow: "Standard scrape", reader: "1 credit per page", competitor: "1 credit per page" },
                      { workflow: "More advanced or protected scrape", reader: "Premium mode uses more credits", competitor: "Enhanced proxy can use more credits" },
                      { workflow: "Cache hit", reader: "0 credits", competitor: "Cache behavior depends on request mode and endpoint settings" },
                      { workflow: "Failed scrape", reader: "0 credits", competitor: "Failed requests are generally not charged, with noted exceptions" },
                      { workflow: "Crawl", reader: "1 credit per page discovered and scraped", competitor: "1 credit per page" },
                      { workflow: "Structured extraction", reader: "Additional credits on top of scrape", competitor: "Depends on extraction path and endpoint" },
                      { workflow: "Browser interaction", reader: "1 credit per browser minute", competitor: "Interact uses browser minute based credits" },
                      { workflow: "Search", reader: "Not the core product surface", competitor: "Search has endpoint based credits" },
                      { workflow: "Monitor", reader: "Customer built workflow using Reader data", competitor: "Monitor has endpoint based credits" },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.workflow}
                        className={
                          i < arr.length - 1 ? "border-b border-edge/50" : ""
                        }
                      >
                        <td className="px-4 py-3 text-fg-muted font-medium">
                          {row.workflow}
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
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader&apos;s usage model is easiest to understand when your
                workflow is page based or browser minute based: pages scraped,
                pages crawled, extraction added, or browser minutes used.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Firecrawl&apos;s usage model is broader because it has more
                endpoint categories. That can be useful, but it also means teams
                should estimate usage by endpoint rather than by one simple
                workflow.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If your product needs scrape, crawl, extract, and occasional
                browser sessions, Reader&apos;s model is straightforward. If your
                product needs search, monitor, interact, or agent endpoints,
                Firecrawl&apos;s broader credit model may map better.
              </p>
            </motion.div>

            {/* Developer experience comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Developer experience comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is designed to be easy to understand for teams building
                agent workflows.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The mental model is:
              </p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 font-mono text-sm text-fg-muted">
                <p>One URL or many URLs</p>
                <p className="pl-4">
                  &rarr; Reader returns clean context
                </p>
                <p className="pl-4">
                  &rarr; Your application stores, searches, extracts, or acts on
                  it
                </p>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                This is useful when you want to keep your own product logic,
                agent framework, storage layer, and retrieval system separate
                from the web data layer.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Firecrawl gives developers more endpoint options. That can be
                helpful when you want the web data platform to handle more of the
                workflow surface directly.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The tradeoff is simple:
              </p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader gives you a smaller, focused product model.</li>
                <li>Firecrawl gives you a broader product surface.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                Neither is automatically better. It depends on whether your team
                values focus or breadth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to use each */}
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
                Choose Reader if you need
              </h3>
              <ul className="space-y-2 text-sm text-fg-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  A web context API for AI agents
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  Clean Markdown from URLs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  Website crawling for RAG or research
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  Structured JSON from known pages
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  Browser sessions when interaction is required
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  A focused product model
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  A simple way to estimate page and browser usage
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  Control over your own storage, retrieval, alerts, and agent logic
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  A tool that fits into your own application rather than replacing your workflow
                </li>
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">
                Choose Reader when web context is the job. That means your agent
                or product needs source material from the web, but your own
                application decides what happens next.
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
                Choose Firecrawl if you need
              </h3>
              <ul className="space-y-2 text-sm text-fg-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  A broader web data platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  Search as a first class endpoint
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  Map or discovery as a first class endpoint
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  Built in monitoring endpoint behavior
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  Interaction through Firecrawl&apos;s endpoint model
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  Agent style workflows inside the platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  More endpoint specific configuration
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                  A product surface that goes beyond scrape, crawl, extract, and browser sessions
                </li>
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">
                Choose Firecrawl when you want more of the web data workflow
                inside one broader platform. That can be useful when discovery,
                monitoring, search, and interaction are central to what you are
                building.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration notes */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-fg">
              Migration notes
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              If you are evaluating Reader as a Firecrawl alternative, start with
              the workflow, not the endpoint name.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Map the workflow like this:
            </p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Current need
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">
                      Reader capability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { need: "Scrape one page", capability: "Scrape" },
                    { need: "Scrape many known URLs", capability: "Batch read" },
                    { need: "Crawl a website", capability: "Crawl" },
                    { need: "Return Markdown", capability: "Markdown format" },
                    { need: "Return structured JSON", capability: "Extract" },
                    { need: "Need interaction", capability: "Browser" },
                    { need: "Need recurring monitoring", capability: "Reader data plus your own scheduler and diff logic" },
                    { need: "Need search", capability: "Use your own search or another search provider with Reader context" },
                    { need: "Need agent tools", capability: "API, SDK, CLI, or MCP server" },
                  ].map((row, i, arr) => (
                    <tr
                      key={row.need}
                      className={
                        i < arr.length - 1 ? "border-b border-edge/50" : ""
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
            <p className="text-base text-fg-muted leading-relaxed mt-4">
              Reader works best when your application owns the product logic
              around the web context.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              If you currently rely on Firecrawl specific endpoints such as
              Search, Map, Monitor, or Agent, do not assume there is a one to one
              Reader endpoint. Instead, decide whether your application should
              own that logic with Reader as the web context layer.
            </p>
          </motion.div>
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
          <div className="border border-edge rounded-md px-4">
            <FaqItem
              index={0}
              question="What is the main difference between Reader and Firecrawl?"
              answer="Reader is a focused web context API for AI agents. Firecrawl is a broader web data platform with more endpoint categories such as scrape, crawl, map, search, monitor, interact, and agent workflows."
            />
            <FaqItem
              index={1}
              question="Is Reader a Firecrawl alternative?"
              answer="Yes, Reader can be a Firecrawl alternative when your main needs are scraping, crawling, Markdown output, structured extraction, and browser sessions for AI agents or RAG workflows."
            />
            <FaqItem
              index={2}
              question="Is Firecrawl broader than Reader?"
              answer="Yes. Firecrawl exposes more endpoint categories, including search, map, monitor, interact, and agent oriented workflows. Reader focuses on scrape, crawl, extract, and browser sessions."
            />
            <FaqItem
              index={3}
              question="Which tool is better for AI agents?"
              answer="Reader is a strong fit when your agent needs clean web context from pages and websites. Firecrawl may be a better fit if your agent workflow needs Firecrawl's broader endpoint surface."
            />
            <FaqItem
              index={4}
              question="Which tool is better for RAG?"
              answer="Reader is a strong fit for RAG ingestion because it focuses on clean Markdown, page level context, and website crawling. Firecrawl can also support RAG workflows, especially when you want its broader web data platform."
            />
            <FaqItem
              index={5}
              question="Which tool is better for browser interaction?"
              answer="Reader is useful when you want browser sessions that fit into a broader web context workflow. Firecrawl is useful when you want interaction through Firecrawl's endpoint model."
            />
            <FaqItem
              index={6}
              question="Do these tools have the same credit model?"
              answer="No. Reader's usage model is centered on pages, extraction, crawl results, cache behavior, and browser minutes. Firecrawl's usage model is endpoint based and includes additional endpoint categories."
            />
            <FaqItem
              index={7}
              question="Does Reader include search and monitoring endpoints?"
              answer="Reader is focused on web context collection. Search and monitoring workflows can be built in your application using Reader data, but they are not the same product surface as Firecrawl's dedicated endpoints."
            />
            <FaqItem
              index={8}
              question="Should I choose based on features alone?"
              answer="No. Choose based on the workflow you are building. Test real URLs, inspect output quality, estimate credit usage, and decide how much of the workflow your application should own."
            />
          </div>
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
              Choose the right web context layer
            </h2>
            <p className="text-base text-fg-muted mb-3">
              Use Reader when your AI agent needs clean web context from pages,
              websites, structured fields, and browser sessions.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Use Firecrawl when your product needs a broader set of web data
              endpoints around scraping, crawling, search, monitoring,
              interaction, and agent workflows.
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
                href="/blog/reader-vs-firecrawl"
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
