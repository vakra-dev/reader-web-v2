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

export function ScrapingBeeContent() {
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
              Reader vs ScrapingBee
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Compare a web context API for AI agents with a traditional scraping
              API.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader and ScrapingBee both help developers retrieve content from
              web pages. The difference is what each product is optimized for.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader is the web context API for AI agents. It helps teams scrape
              pages, crawl websites, extract structured data, and use browser
              sessions when interaction is required.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              ScrapingBee is a web scraping API focused on page retrieval,
              JavaScript rendering, proxies, screenshots, selector extraction, AI
              extraction, proxy mode, and specialized scraper APIs.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              This page compares Reader and ScrapingBee by workflow fit, feature
              surface, output model, extraction, crawling, developer experience,
              and usage shape.
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
              Choose Reader if your product needs clean web context for AI
              agents, RAG pipelines, research workflows, structured extraction,
              and website crawling.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Reader is a strong fit when Markdown, metadata, crawl results, and
              structured JSON are the main outputs your application needs.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose ScrapingBee if your product needs a traditional scraping API
              with more controls around rendering, proxies, request parameters,
              screenshots, selector extraction, and site specific scraping
              workflows.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-4">
              ScrapingBee is a strong fit when the main challenge is retrieving
              HTML from pages with the right browser, proxy, header, cookie,
              wait, screenshot, or extraction settings.
            </p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">
                      Choose Reader when
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Choose ScrapingBee when
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { reader: "Your agent needs clean web context", competitor: "Your scraper needs detailed request controls" },
                    { reader: "Markdown and structured JSON are core outputs", competitor: "HTML retrieval and proxy options are core needs" },
                    { reader: "You need scrape, crawl, extract, and browser workflows", competitor: "You need a traditional scraping API with many scrape parameters" },
                    { reader: "Your app owns storage, monitoring, and analysis", competitor: "Your app owns parsing, crawling logic, and downstream data workflows" },
                  ].map((row, i, arr) => (
                    <tr
                      key={i}
                      className={
                        i < arr.length - 1 ? "border-b border-edge/50" : ""
                      }
                    >
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
              Reader and ScrapingBee overlap on scraping, but their product
              models are different.
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
                      ScrapingBee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "Core positioning", reader: "Web context API for AI agents", competitor: "Web scraping API" },
                    { area: "Starting point", reader: "URL to clean context", competitor: "URL to scraped page response" },
                    { area: "Main product surface", reader: "Scrape, Crawl, Extract, Browser", competitor: "HTML API, proxy mode, extraction, CLI, specialized scraper APIs" },
                    { area: "Primary output", reader: "Markdown, metadata, JSON, crawl results, screenshots, browser sessions", competitor: "HTML, Markdown option, text, screenshots, extracted JSON" },
                    { area: "Best fit", reader: "Agents, RAG, research, page snapshots, structured data workflows", competitor: "Traditional scraping, proxy backed retrieval, screenshots, selector extraction" },
                    { area: "Crawl model", reader: "Built into Reader's read workflow", competitor: "Available through CLI crawl and custom crawler patterns" },
                    { area: "Application ownership", reader: "Your app owns product logic around context", competitor: "Your app owns parsing, crawling, storage, monitoring, and analysis" },
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
              Reader is built around the idea that modern AI systems need web
              context, not just page retrieval.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              ScrapingBee is built around the idea that developers need a simple
              API for scraping web pages without managing headless browsers and
              proxies directly.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              That difference matters. If your output needs to go directly into
              an agent or RAG pipeline, Reader is more aligned. If your output
              needs to feed a custom scraper or parsing system, ScrapingBee may
              feel more familiar.
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
                      ScrapingBee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Single page scraping", reader: "Yes", competitor: "Yes" },
                    { feature: "Clean Markdown output", reader: "Yes", competitor: "Yes, with Markdown option" },
                    { feature: "HTML output", reader: "Yes", competitor: "Yes" },
                    { feature: "Raw HTML output", reader: "Yes", competitor: "Yes" },
                    { feature: "Text output", reader: "Through content formats", competitor: "Yes" },
                    { feature: "Metadata", reader: "Yes", competitor: "Response headers and extracted response details" },
                    { feature: "Screenshots", reader: "Yes", competitor: "Yes" },
                    { feature: "JavaScript rendering", reader: "Yes", competitor: "Yes" },
                    { feature: "Wait for selector", reader: "Yes", competitor: "Yes" },
                    { feature: "Website crawling", reader: "Yes", competitor: "CLI crawl and custom crawler workflows" },
                    { feature: "Batch URL workflows", reader: "Yes", competitor: "CLI and application controlled workflows" },
                    { feature: "Structured extraction", reader: "Yes", competitor: "CSS, XPath, and AI extraction" },
                    { feature: "Main content extraction", reader: "Yes", competitor: "Possible through output options and custom extraction" },
                    { feature: "Proxy mode", reader: "Not the core product surface", competitor: "Yes" },
                    { feature: "Premium proxies", reader: "Managed inside Reader workflow", competitor: "Yes" },
                    { feature: "Stealth proxy option", reader: "Not the core Reader positioning", competitor: "Yes" },
                    { feature: "Specialized scraper APIs", reader: "Not core Reader positioning", competitor: "Yes" },
                    { feature: "Browser sessions", reader: "Yes", competitor: "Headless browser rendering and browser style workflows" },
                    { feature: "MCP support", reader: "Yes", competitor: "Remote MCP listed in docs" },
                    { feature: "CLI", reader: "Yes", competitor: "Yes" },
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
              The main difference is focus.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              Reader organizes the experience around the outputs AI agents need:
              Markdown, structured fields, crawl results, and browser sessions.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">
              ScrapingBee organizes the experience around scrape configuration:
              rendering, proxy choice, wait behavior, headers, cookies,
              screenshots, selectors, and specialized APIs.
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
            {/* Output model */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Output model comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader is designed to return web context that an AI workflow can use directly.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Common Reader outputs include:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clean Markdown</li>
                <li>Metadata</li>
                <li>HTML</li>
                <li>Raw HTML</li>
                <li>Screenshots</li>
                <li>Structured JSON</li>
                <li>Crawl results</li>
                <li>Browser session output controlled by your code</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This makes Reader useful when the result needs to become model context, a RAG document, a page snapshot, a structured record, or an agent tool result.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee&apos;s HTML API returns scraped page content and supports options such as page source, text, Markdown, screenshots, JSON responses, CSS selector extraction, XPath extraction, and AI extraction.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This makes ScrapingBee useful when your system needs a configurable scraping response and your application controls the parsing and workflow around it.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed space-y-1">
                <li>Reader starts from &quot;What web context does my agent need?&quot;</li>
                <li>ScrapingBee starts from &quot;How should this page be scraped?&quot;</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mt-3">Both are useful questions. They point to different tools.</p>
            </motion.div>

            {/* Scraping */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Scraping comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Both Reader and ScrapingBee can scrape individual web pages.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader Scrape is best when the goal is to turn a public URL into clean Markdown, metadata, optional HTML, screenshot output, or structured fields. It is designed for workflows where the scraped page becomes context for an agent, a document for retrieval, or a record in your system.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee&apos;s HTML API is best when the goal is to control the scrape request. It gives developers parameters for JavaScript rendering, wait time, wait conditions, selectors, screenshots, cookies, headers, proxy behavior, location, device, timeout, and response handling.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is more direct for AI context.</li>
                <li>ScrapingBee is more configurable for traditional scraping.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">If your agent needs to read a page, Reader keeps the workflow simple. If your scraper needs to tune request behavior across difficult targets, ScrapingBee gives more scrape level controls.</p>
            </motion.div>

            {/* Crawling */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Crawling comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader includes crawling as a core product workflow.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">A Reader crawl starts from a URL, discovers related pages within limits, and returns page level results. This is useful for documentation ingestion, help center ingestion, RAG pipelines, public website research, competitive intelligence, and dataset collection.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee is not primarily organized around website crawling in the same way. Its core API is a page scraping API. Its CLI includes crawl commands that follow links, crawl sitemaps, or run Scrapy project spiders with ScrapingBee middleware. For application level crawling, your system usually owns URL discovery, queueing, deduplication, crawl limits, and storage.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Crawl is a first class workflow for collecting website context.</li>
                <li>ScrapingBee is strongest as the page retrieval layer inside your own crawler or CLI workflow.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Choose Reader if crawling and page level context are central to your product. Choose ScrapingBee if you already have a crawler and mainly need a scraping API behind it.</p>
            </motion.div>

            {/* Extraction */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Extraction comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader Extract is designed to turn page context into structured JSON.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">You can use extraction when your workflow needs fields such as:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Product name</li>
                <li>Price</li>
                <li>Availability</li>
                <li>Company description</li>
                <li>Job title</li>
                <li>Property details</li>
                <li>Article metadata</li>
                <li>Pricing plan details</li>
                <li>Documentation sections</li>
                <li>Listing attributes</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader&apos;s extraction fits naturally into AI agent and data workflows because the structured result can live alongside the source Markdown.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee supports extraction through CSS selectors, XPath rules, and AI based extraction options. This is useful if your team wants precise selector based extraction or wants to add an AI query to a scrape request.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is stronger when extraction is part of a broader web context workflow.</li>
                <li>ScrapingBee is stronger when extraction is part of a traditional scraper request with selectors, XPath, or scrape parameters.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">For stable page layouts, selector extraction can be efficient. For messy pages where fields appear in inconsistent wording, schema based or AI assisted extraction can be more flexible.</p>
            </motion.div>

            {/* Proxy and unblocking */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Proxy and unblocking comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This is one of ScrapingBee&apos;s stronger areas.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee exposes proxy related controls such as premium proxy, stealth proxy, geolocation, session IDs, proxy mode, and request level options. It is designed for developers who want the scraping API to manage headless browsers and proxies without running that infrastructure themselves.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader handles modern web pages inside its own workflow, including dynamic rendering and modes for harder pages, but it is not positioned as a proxy infrastructure product.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is better when the output needs to become agent context.</li>
                <li>ScrapingBee is better when proxy behavior and scrape configuration are central to the workflow.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">If your main problem is &quot;my agent needs clean content,&quot; start with Reader.</p>
              <p className="text-base text-fg-muted leading-relaxed">If your main problem is &quot;my scraper needs more request control,&quot; ScrapingBee may be a better fit.</p>
            </motion.div>

            {/* Browser and rendering */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Browser and rendering comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader has Browser sessions for workflows that need interaction.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Use Reader Browser when your agent or application needs:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clicks</li>
                <li>Forms</li>
                <li>Navigation</li>
                <li>Screenshots</li>
                <li>PDFs</li>
                <li>Rendered page state</li>
                <li>Playwright or Puppeteer workflows</li>
                <li>A browser fallback inside a web context pipeline</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee uses headless browser rendering inside its HTML API and supports JavaScript scenarios, screenshots, waiting, window size, and browser related settings. It is useful when the page needs rendering, waiting, screenshot capture, or scripted actions as part of a scrape.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Browser is best when interaction is a fallback inside an agent context workflow.</li>
                <li>ScrapingBee rendering is best when browser behavior is part of a configurable scraping request.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Reader gives your application a browser session when scraping is not enough. ScrapingBee gives your scrape request more browser and rendering controls.</p>
            </motion.div>

            {/* AI agent workflow */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">AI agent workflow comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader is built around agent workflows.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">A typical Reader workflow looks like this:</p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 font-mono text-sm text-fg-muted">
                <p>Agent needs web context</p>
                <p className="pl-4">&rarr; Reader scrapes, crawls, extracts, or opens a browser session</p>
                <p className="pl-4">&rarr; Your application stores or filters the result</p>
                <p className="pl-4">&rarr; Agent reasons over the source context</p>
                <p className="pl-4">&rarr; Product returns an answer, record, alert, or action</p>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee can support AI workflows too, especially because it can return Markdown, extract data with AI queries, and integrate through CLI or API workflows. But the product model is still centered on scraping.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">A typical ScrapingBee workflow looks like this:</p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 font-mono text-sm text-fg-muted">
                <p>Application needs a page</p>
                <p className="pl-4">&rarr; ScrapingBee retrieves the page with selected parameters</p>
                <p className="pl-4">&rarr; Your parser or extraction logic processes it</p>
                <p className="pl-4">&rarr; Your application stores or uses the result</p>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The difference is subtle but important.</p>
              <p className="text-base text-fg-muted leading-relaxed">Reader is designed as the web context tool inside the agent stack. ScrapingBee is designed as the scraping layer inside a broader data collection stack.</p>
            </motion.div>

            {/* Credit and usage shape */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Credit and usage shape</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This section compares usage shape, not money pricing.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-4">Reader usage is organized around web context units.</p>
              <div className="border border-edge rounded-md overflow-hidden overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-edge bg-surface/50">
                      <th className="text-left px-4 py-3 font-semibold text-accent-500">Reader workflow</th>
                      <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Usage shape</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { workflow: "Standard scrape", shape: "Page based" },
                      { workflow: "Premium scrape", shape: "Higher page based usage" },
                      { workflow: "Cache hit", shape: "No additional credits" },
                      { workflow: "Failed scrape", shape: "No credits" },
                      { workflow: "Crawl", shape: "Pages discovered and scraped" },
                      { workflow: "Browser session", shape: "Time based" },
                      { workflow: "Extract", shape: "Additional credits on top of scrape" },
                    ].map((row, i, arr) => (
                      <tr key={row.workflow} className={i < arr.length - 1 ? "border-b border-edge/50" : ""}>
                        <td className="px-4 py-3 text-fg-muted font-medium">{row.workflow}</td>
                        <td className="px-4 py-3 text-fg-secondary">{row.shape}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee uses API credits, and the number of credits depends on request configuration. In its credit system, classic requests without JavaScript use fewer credits, JavaScript rendering costs more, premium proxies cost more, premium proxies with JavaScript cost more again, and stealth proxy requests cost the most. AI query usage adds credits on top of the request.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical planning difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>With Reader, estimate pages scraped, pages crawled, extraction usage, and browser minutes.</li>
                <li>With ScrapingBee, estimate request volume and the scrape parameters each request needs.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Reader is simpler to estimate when your workflow is page, crawl, extraction, and browser context based. ScrapingBee is more parameter driven, which can be useful but requires more attention to configuration.</p>
            </motion.div>

            {/* Operational tradeoffs */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Operational tradeoffs</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader reduces the work needed to collect clean web context. Your application still owns scheduling, storage, retrieval, comparison, alerts, dashboards, and agent logic.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee reduces the work needed to run scraping infrastructure. Your application still owns crawling logic, parsing, storage, retries beyond the API behavior, monitoring, and downstream analysis.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader asks your team to think in terms of source context.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ScrapingBee asks your team to think in terms of scrape configuration.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Choose Reader when your product architecture is centered on agents, RAG, source documents, structured records, and page snapshots.</p>
              <p className="text-base text-fg-muted leading-relaxed">Choose ScrapingBee when your product architecture is centered on custom scraping logic, proxy backed retrieval, and parameter tuned page requests.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to use each */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 border border-accent-500/30 rounded-md bg-accent-500/5">
              <h3 className="text-lg font-semibold mb-3 text-fg">Choose Reader if you need</h3>
              <ul className="space-y-2 text-sm text-fg-muted">
                {[
                  "A web context API for AI agents",
                  "Clean Markdown from URLs",
                  "Website crawling for RAG or research",
                  "Structured JSON extraction from public pages",
                  "Browser sessions as a fallback for interaction",
                  "Page snapshots with source context",
                  "A focused API for scrape, crawl, extract, and browser workflows",
                  "Control over your own storage, retrieval, alerts, and analysis",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">Reader is especially useful when the scraped output should be read by an LLM, embedded in a retrieval system, or stored as clean source context.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 border border-edge rounded-md">
              <h3 className="text-lg font-semibold mb-3 text-fg">Choose ScrapingBee if you need</h3>
              <ul className="space-y-2 text-sm text-fg-muted">
                {[
                  "A traditional web scraping API",
                  "Detailed request parameters",
                  "JavaScript rendering controls",
                  "Premium or stealth proxy options",
                  "Proxy mode",
                  "CSS or XPath extraction",
                  "Screenshot controls",
                  "Header and cookie forwarding",
                  "Specialized scraper APIs",
                  "A scraping layer behind your own crawler or parser",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">ScrapingBee is strongest when page retrieval and scrape configuration are the center of the workflow.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration notes */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-fg">Migration notes</h2>
            <p className="text-base text-fg-muted leading-relaxed mb-4">If you are evaluating Reader as a ScrapingBee alternative, start by mapping the workflow, not the parameter list.</p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Current need</th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">Reader capability</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { need: "Turn one URL into Markdown", capability: "Scrape" },
                    { need: "Get HTML from a page", capability: "Scrape with HTML format" },
                    { need: "Extract fields from a page", capability: "Extract" },
                    { need: "Crawl a website section", capability: "Crawl" },
                    { need: "Process many known URLs", capability: "Batch read" },
                    { need: "Capture a screenshot", capability: "Scrape or Browser depending on need" },
                    { need: "Interact with a page", capability: "Browser" },
                    { need: "Use selector based extraction", capability: "ScrapingBee may fit better" },
                    { need: "Tune proxy behavior directly", capability: "ScrapingBee may fit better" },
                    { need: "Use specialized scraper APIs", capability: "ScrapingBee may fit better" },
                  ].map((row, i, arr) => (
                    <tr key={row.need} className={i < arr.length - 1 ? "border-b border-edge/50" : ""}>
                      <td className="px-4 py-3 text-fg-muted font-medium">{row.need}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.capability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mt-4">Reader is a good alternative when your ScrapingBee workflow is mainly about turning pages into AI ready context.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">If your workflow depends heavily on ScrapingBee specific parameters, proxy controls, or specialized scraper APIs, ScrapingBee may remain the better fit.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-6 text-fg">Frequently asked questions</motion.h2>
          <div className="border border-edge rounded-md px-4">
            <FaqItem index={0} question="What is the main difference between Reader and ScrapingBee?" answer="Reader is a web context API for AI agents. ScrapingBee is a traditional web scraping API focused on page retrieval, JavaScript rendering, proxies, screenshots, and extraction options." />
            <FaqItem index={1} question="Is Reader a ScrapingBee alternative?" answer="Reader can be a ScrapingBee alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows." />
            <FaqItem index={2} question="Which tool is better for AI agents?" answer="Reader is better when the agent needs clean web context from pages and websites. ScrapingBee can support AI workflows, but its core model is more scrape configuration focused." />
            <FaqItem index={3} question="Which tool is better for traditional scraping?" answer="ScrapingBee may be better when you need detailed scrape parameters, proxy options, selector extraction, screenshots, and scraping specific controls." />
            <FaqItem index={4} question="Does ScrapingBee return Markdown?" answer="Yes. ScrapingBee supports returning page content in Markdown format." />
            <FaqItem index={5} question="Does Reader support crawling?" answer="Yes. Reader supports crawling as part of its read workflow when your request includes crawl limits such as depth or page count." />
            <FaqItem index={6} question="Does ScrapingBee support crawling?" answer="ScrapingBee's CLI includes crawl commands, and ScrapingBee can be used as the retrieval layer inside custom crawling workflows. Its core API is still centered on scraping pages." />
            <FaqItem index={7} question="Which tool is better for structured extraction?" answer="Reader is better when structured extraction should sit alongside clean source context for agents. ScrapingBee is useful when extraction should happen through CSS, XPath, or AI query options inside a scrape request." />
            <FaqItem index={8} question="Do these tools have the same usage model?" answer="No. Reader usage is centered on pages, extraction, crawl results, cache behavior, and browser minutes. ScrapingBee usage depends heavily on request configuration such as JavaScript rendering, proxy type, and AI query usage." />
            <FaqItem index={9} question="Should I choose based on features alone?" answer="No. Choose based on workflow. If the goal is clean web context for agents, Reader is a strong fit. If the goal is configurable scraping infrastructure, ScrapingBee may be a better fit." />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">Choose the right scraping layer</h2>
            <p className="text-base text-fg-muted mb-3">Use Reader when your AI agent needs clean web context from URLs, websites, structured fields, and occasional browser sessions.</p>
            <p className="text-base text-fg-muted mb-8">Use ScrapingBee when your product needs a traditional scraping API with detailed rendering, proxy, screenshot, selector, and request configuration controls.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://console.reader.dev" className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors">Start free</a>
              <a href="https://docs.reader.dev" className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors">View docs</a>
              <a href="/blog/reader-vs-scrapingbee" className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors">Read the full comparison</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
