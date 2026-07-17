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
    competitor: "Cloud platform for Actors and automation",
  },
  {
    area: "Starting point",
    reader: "URL to clean context",
    competitor: "Actor input to hosted run",
  },
  {
    area: "Main product surface",
    reader: "Scrape, Crawl, Extract, Browser",
    competitor:
      "Actors, Store, tasks, schedules, datasets, key value stores, request queues, proxies",
  },
  {
    area: "Primary output",
    reader: "Markdown, metadata, JSON, crawl results, screenshots, browser sessions",
    competitor:
      "Actor run output, datasets, files, logs, key value records, scraped items",
  },
  {
    area: "Best fit",
    reader: "Agents, RAG, research, page snapshots, structured data workflows",
    competitor:
      "Ready made scrapers, custom scraping jobs, scheduled automation, platform hosted workflows",
  },
  {
    area: "Workflow ownership",
    reader: "Your app owns product logic around context",
    competitor:
      "Apify can host more of the scraping and automation workflow",
  },
  {
    area: "Usage model",
    reader: "Page, crawl, extraction, browser minute based",
    competitor: "Platform resource and Actor specific usage based",
  },
];

const featureRows = [
  { feature: "Single page scraping", reader: "Yes", competitor: "Yes, through Actors" },
  { feature: "Clean Markdown output", reader: "Yes", competitor: "Depends on the Actor" },
  { feature: "HTML output", reader: "Yes", competitor: "Depends on the Actor" },
  { feature: "Raw HTML output", reader: "Yes", competitor: "Depends on the Actor" },
  { feature: "Metadata", reader: "Yes", competitor: "Depends on the Actor and output" },
  { feature: "Screenshots", reader: "Yes", competitor: "Yes, through browser Actors or custom code" },
  { feature: "JavaScript rendering", reader: "Yes", competitor: "Yes, through browser based Actors" },
  { feature: "Website crawling", reader: "Yes", competitor: "Yes, through Actors and crawler frameworks" },
  { feature: "Batch URL workflows", reader: "Yes", competitor: "Yes, through Actor input and platform runs" },
  { feature: "Structured extraction", reader: "Yes", competitor: "Yes, through Actors or custom extraction logic" },
  { feature: "Browser sessions", reader: "Yes", competitor: "Yes, through browser automation Actors" },
  { feature: "Ready made scrapers", reader: "Not the core product model", competitor: "Yes, through Apify Store" },
  { feature: "Hosted automation jobs", reader: "Not the core product model", competitor: "Yes" },
  { feature: "Schedules", reader: "Your application owns scheduling", competitor: "Built in schedules" },
  { feature: "Platform storage", reader: "Your application owns storage", competitor: "Datasets, key value stores, request queues" },
  { feature: "Reusable task configs", reader: "Your application owns configs", competitor: "Actor tasks" },
  { feature: "Marketplace", reader: "No", competitor: "Yes" },
  { feature: "AI agent context", reader: "Core positioning", competitor: "Possible through Actor workflows" },
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
  { need: "Extract fields from a page", capability: "Extract" },
  { need: "Crawl a website section", capability: "Crawl" },
  { need: "Process many known URLs", capability: "Batch read" },
  { need: "Capture a screenshot", capability: "Scrape or Browser depending on need" },
  { need: "Interact with a page", capability: "Browser" },
  { need: "Run scheduled scraping jobs", capability: "Your app handles scheduling" },
  { need: "Store datasets on platform", capability: "Your app handles storage" },
  { need: "Use ready made site specific scrapers", capability: "Apify may fit better" },
  { need: "Build a custom hosted scraping program", capability: "Apify may fit better" },
];

const verdictTableRows = [
  {
    reader: "Your agent needs clean web context",
    competitor: "You need hosted actors and automation workflows",
  },
  {
    reader: "Markdown and structured JSON are core outputs",
    competitor: "Ready made scrapers or custom actors are core needs",
  },
  {
    reader: "You need scrape, crawl, extract, and browser workflows",
    competitor: "You need tasks, schedules, datasets, and platform storage",
  },
  {
    reader: "Your app owns storage, monitoring, and analysis",
    competitor: "You want more of the scraping workflow inside the platform",
  },
];

const faqs = [
  {
    question: "What is the main difference between Reader and Apify?",
    answer:
      "Reader is a web context API for AI agents. Apify is a cloud platform for running Actors, which are hosted programs for scraping, browser automation, data processing, and workflow automation.",
  },
  {
    question: "Is Reader an Apify alternative?",
    answer:
      "Reader can be an Apify alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows.",
  },
  {
    question: "Which tool is better for AI agents?",
    answer:
      "Reader is better when the agent needs clean web context from pages and websites. Apify is better when the agent workflow should run as a hosted Actor or automation job.",
  },
  {
    question: "Which tool is better for ready made scrapers?",
    answer:
      "Apify is stronger for ready made scrapers because Apify Store has many public Actors for specific sites and workflows.",
  },
  {
    question: "Does Reader support crawling?",
    answer:
      "Yes. Reader supports crawling as part of its read workflow when your request includes crawl limits such as depth or page count.",
  },
  {
    question: "Does Apify support crawling?",
    answer:
      "Yes. Apify can run crawling workflows through Actors, custom code, crawler libraries, request queues, and browser automation.",
  },
  {
    question: "Which tool is better for structured extraction?",
    answer:
      "Reader is better when structured extraction should sit alongside clean Markdown and source metadata for agent workflows. Apify is better when extraction should be packaged as a custom or ready made Actor.",
  },
  {
    question: "Does Reader include scheduling and platform storage?",
    answer:
      "No. Reader provides the web context layer. Your application owns scheduling, storage, alerts, dashboards, and product workflow logic.",
  },
  {
    question: "Do these tools have the same usage model?",
    answer:
      "No. Reader usage is centered on pages, extraction, crawl results, cache behavior, and browser minutes. Apify usage depends on Actor runs and platform resources such as compute, storage, data transfer, proxies, and API operations.",
  },
  {
    question: "Should I choose based on features alone?",
    answer:
      "No. Choose based on workflow. If the goal is clean web context for agents, Reader is a strong fit. If the goal is hosted scraping automation with actors, tasks, schedules, and storage, Apify may be a better fit.",
  },
];

export function ApifyComparisonContent() {
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
              Reader vs Apify
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Compare a focused web context API with an actor and automation platform.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader and Apify both help developers collect and use web data, but they are built around different product models.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader is the web context API for AI agents. It helps teams scrape pages, crawl websites, extract structured data, and use browser sessions when interaction is required.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Apify is a cloud platform for running Actors. Actors are serverless programs that can perform tasks such as web scraping, browser automation, data processing, and AI agent workflows. Apify also includes a large Actor Store, reusable tasks, schedules, datasets, key value stores, request queues, proxies, API access, and automation workflows.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              This page compares Reader and Apify by product model, workflow fit, output model, crawling, extraction, browser automation, storage, scheduling, developer experience, and usage shape.
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
              Choose Reader if your product needs clean web context for AI agents, RAG pipelines, research workflows, structured extraction, and website crawling through one focused API.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Reader is a strong fit when the main output should be Markdown, structured JSON, crawl results, screenshots, or browser sessions that your application can use directly.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose Apify if your product needs an actor platform with ready made scrapers, scheduled jobs, hosted automation, platform storage, reusable tasks, proxies, and the ability to build or run full scraping workflows as cloud programs.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-4">
              Apify is a strong fit when you want the scraping or automation job itself to run as a hosted actor.
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
                      Choose Apify when
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
              Reader and Apify solve web data problems from different starting points.
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
                      Apify
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
                Reader is narrower by design. It gives your application the web context layer.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Apify is broader. It is a platform where you can run scraping jobs, browser automation, data processing, or agent workflows as hosted programs.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                That difference matters. If your product needs clean source context from the web, Reader is more direct. If your product needs an automation platform to run and schedule scraping jobs, Apify may be the better fit.
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
                      Apify
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
                The main distinction is scope.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Reader gives you one focused API for web context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Apify gives you a platform to run and manage scraping or automation programs.
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
                Reader is designed to return web content in formats that AI workflows can use directly.
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
                This makes Reader useful when page content needs to become model context, a RAG document, a source snapshot, a structured record, or an agent tool result.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Apify output depends on the Actor. One Actor may return product records. Another may return social media posts. Another may return raw page data. Another may store screenshots, files, or structured results in a dataset or key value store.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                That flexibility is powerful, but it also means the output model is not always consistent across workflows.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader starts from &ldquo;What web context does my agent need?&rdquo;</li>
                <li>Apify starts from &ldquo;Which Actor should run this job?&rdquo;</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                Reader gives a consistent product model. Apify gives a flexible platform model.
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
                Both Reader and Apify can support scraping workflows.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader Scrape is best when the goal is to turn a public URL into clean Markdown, metadata, optional HTML, screenshot output, or structured fields. It is designed for workflows where the page becomes context for an agent, a record in a database, or a document in a retrieval pipeline.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Apify scraping usually happens through Actors. You can run ready made Actors from Apify Store, build custom Actors, or use crawler frameworks and browser automation inside an Actor. This is useful when you want the scraping job itself to be packaged, configured, scheduled, logged, and run on Apify infrastructure.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is more direct for AI ready page context.</li>
                <li>Apify is more flexible for hosted scraping jobs.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                If your agent needs to read a page, summarize it, extract information, or store a clean source snapshot, Reader keeps the workflow simple.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If your team needs a reusable scraper that runs on a schedule and stores results on the platform, Apify gives more workflow infrastructure.
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
                Apify can support crawling through Actors and crawler libraries. This is a strong fit when your team wants custom crawling logic, request queues, persistent storage, retries, browser automation, and scheduled runs inside a hosted platform.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Crawl is a first class workflow for collecting website context.</li>
                <li>Apify is stronger when crawling should be a custom hosted program.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Choose Reader if crawling and page level context are part of your AI product.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Choose Apify if your crawler needs custom logic, platform storage, scheduling, and hosted execution as a packaged Actor.
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
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader&apos;s extraction fits naturally into AI agent and data workflows because the structured record can live alongside the source Markdown.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Apify extraction depends on the Actor. Some Actors are built for specific websites and return structured data out of the box. Custom Actors can extract data with selectors, browser automation, parsing libraries, LLM calls, or any logic the developer implements.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is stronger when extraction should be attached to clean source context from a page.</li>
                <li>Apify is stronger when extraction should be packaged as a reusable custom scraper or ready made Actor.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                For agent workflows, keeping source Markdown next to extracted JSON is useful because your system can inspect, verify, and debug the output later.
              </p>
            </motion.div>

            {/* Browser automation comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Browser automation comparison
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
                Apify can run browser automation inside Actors. This can include browser based scraping, custom scripts, crawlers, screenshots, workflows, and longer automation jobs. Apify is also useful when the browser task should be scheduled, logged, retried, and stored as a platform run.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Browser is best when browser control is one capability inside your AI web context workflow.</li>
                <li>Apify browser automation is best when the browser job should run as a hosted actor.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader gives your application a browser when the page needs interaction.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Apify gives developers an environment to build and run browser automation programs.
              </p>
            </motion.div>

            {/* Ready made scrapers versus focused API */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Ready made scrapers versus focused API
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                This is one of Apify&apos;s biggest advantages.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Apify Store includes many public Actors for specific sites and workflows. If a ready made Actor exists for your target and returns the fields you need, Apify can be much faster than building your own scraper.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader does not try to be a marketplace of site specific scrapers. It gives you a general web context API that works across workflows where the page content itself matters.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Use Reader when you want a general API that turns web pages into context.</li>
                <li>Use Apify when you want a ready made scraper or hosted Actor for a specific task.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                A ready made Actor can be excellent for a narrow job.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                A focused API can be better when your product needs consistent web context across many page types.
              </p>
            </motion.div>

            {/* Scheduling and storage comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Scheduling and storage comparison
              </h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader does not try to own your application workflow.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader gives your product page results, Markdown, structured JSON, crawl output, and browser sessions. Your application handles scheduling, storage, comparison, alerts, dashboards, and downstream logic.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Apify includes more platform workflow tools. Actor tasks let you save reusable configurations for a single Actor. Schedules let you run Actors or tasks at specific times. Datasets, key value stores, and request queues help store structured outputs, files, state, and crawl requests.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader fits teams that want to own workflow infrastructure in their own application.</li>
                <li>Apify fits teams that want scraping jobs, storage, and scheduling on the same platform.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                That makes Apify especially attractive for standalone scraping automation. Reader is more natural when web context is one part of a larger product.
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
                Apify can support AI agents too. An Actor can run an AI workflow, call models, scrape pages, process data, and store outputs. Apify can also be connected through API, webhooks, integrations, and agent workflows.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                A typical Apify workflow looks like this:
              </p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 text-sm text-fg-muted font-mono whitespace-pre-wrap leading-relaxed">
{`Workflow needs a scraping or automation job
  → Run an Actor with structured input
  → Actor performs scraping, browser automation, or data processing
  → Apify stores output in dataset or key value store
  → Application reads results or triggers next step`}
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The difference is the layer each product is built to own.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader owns the web context layer.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Apify owns more of the hosted job execution layer.
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
                Apify usage depends on the Actor and platform resources. Runs may consume compute units, data transfer, proxy usage, dataset reads and writes, key value store operations, request queue operations, and other platform resources. Actors in Apify Store may also have different pricing models depending on how the creator configured the Actor.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical planning difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>With Reader, estimate pages scraped, pages crawled, extraction usage, and browser minutes.</li>
                <li>With Apify, estimate Actor run behavior and platform resources consumed.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is simpler to estimate when your workflow is mostly page, crawl, extraction, and browser context based.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Apify can be harder to estimate before a test run, but it offers more platform flexibility for hosted jobs.
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
                Apify reduces the work needed to host and operate scraping jobs. It provides actors, tasks, schedules, storage, logs, APIs, proxies, and a marketplace.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader asks your team to think in terms of source context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Apify asks your team to think in terms of actors and runs.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Choose Reader when your product architecture is centered on agents, RAG, source documents, structured records, and page snapshots.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Choose Apify when your product architecture is centered on reusable scraping jobs, platform hosted automations, ready made actors, and scheduled data collection.
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
                If you are evaluating Reader as an Apify alternative, start by mapping the workflow.
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
                Reader is a good alternative when your Apify workflow is mainly about turning pages into AI ready context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If your workflow depends heavily on Apify Actors, schedules, datasets, request queues, or ready made scrapers, Apify may remain the better fit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Choose Reader if / Choose Apify if */}
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
                When Apify may be the better fit
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-3">
                Apify may be a better fit when your team needs:
              </p>
              <ul className="list-disc pl-5 text-sm text-fg-muted leading-relaxed space-y-1">
                <li>Ready made scrapers from a marketplace</li>
                <li>Custom hosted scraping jobs</li>
                <li>Serverless actor execution</li>
                <li>Scheduled scraping tasks</li>
                <li>Platform datasets and key value stores</li>
                <li>Request queues for crawler state</li>
                <li>Proxy access as part of the platform</li>
                <li>Browser automation as a hosted job</li>
                <li>Reusable scraping configurations</li>
                <li>Publishing or monetizing scraping tools</li>
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-3">
                Apify is strongest when the scraping or automation workflow should live as a platform hosted Actor.
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
              Choose the right workflow layer
            </h2>
            <p className="text-base text-fg-muted mb-4">
              Use Reader when your AI agent needs clean web context from URLs, websites, structured fields, and occasional browser sessions.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Use Apify when your product needs an actor platform for hosted scraping jobs, ready made scrapers, scheduling, platform storage, and automation workflows.
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
                href="/blog/reader-vs-apify"
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
