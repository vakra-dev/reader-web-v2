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
    competitor: "Web access and data infrastructure platform",
  },
  {
    area: "Main user",
    reader: "Developers building agents, RAG, and data workflows",
    competitor: "Teams that need scalable public web data access and unblocking",
  },
  {
    area: "Product surface",
    reader: "Scrape, Crawl, Extract, Browser",
    competitor:
      "Unlocker API, Browser API, Crawl API, scrapers, SERP tools, proxies, datasets",
  },
  {
    area: "Primary output",
    reader: "Clean Markdown, structured JSON, metadata, crawl results, browser sessions",
    competitor:
      "HTML, JSON, scraped data, browser results, SERP data, dataset outputs",
  },
  {
    area: "Browser role",
    reader: "Fallback when page context needs interaction",
    competitor: "Full browser based scraping and unblocking infrastructure",
  },
  {
    area: "Operational focus",
    reader: "Simple web context collection",
    competitor:
      "Scalable access, proxy management, CAPTCHA solving, fingerprinting, retries",
  },
];

const featureRows = [
  { feature: "Single page scraping", reader: "Yes", competitor: "Yes" },
  { feature: "Clean Markdown output", reader: "Yes", competitor: "Not the primary product model" },
  { feature: "HTML output", reader: "Yes", competitor: "Yes" },
  { feature: "Raw HTML output", reader: "Yes", competitor: "Yes" },
  { feature: "Metadata", reader: "Yes", competitor: "Yes" },
  { feature: "Screenshots", reader: "Yes", competitor: "Yes through browser workflows" },
  { feature: "JavaScript rendering", reader: "Yes", competitor: "Yes" },
  { feature: "Website crawling", reader: "Yes", competitor: "Yes" },
  { feature: "Structured extraction", reader: "Yes", competitor: "Yes through scraping and data products" },
  { feature: "Browser automation", reader: "Yes", competitor: "Yes" },
  { feature: "Playwright support", reader: "Yes", competitor: "Yes" },
  { feature: "Puppeteer support", reader: "Yes", competitor: "Yes" },
  { feature: "Selenium support", reader: "Not core Reader positioning", competitor: "Yes" },
  { feature: "Proxy infrastructure", reader: "Managed inside Reader workflow", competitor: "Major platform capability" },
  { feature: "CAPTCHA solving", reader: "Not core Reader positioning", competitor: "Major platform capability" },
  { feature: "Search engine data APIs", reader: "Not core Reader positioning", competitor: "Yes" },
  { feature: "Ready made scrapers", reader: "Not core Reader positioning", competitor: "Yes" },
  { feature: "Dataset products", reader: "Not core Reader positioning", competitor: "Yes" },
  { feature: "AI agent context", reader: "Core positioning", competitor: "Supported through web data infrastructure" },
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
  { need: "Crawl a documentation site", capability: "Crawl" },
  { need: "Extract fields from a page", capability: "Extract" },
  { need: "Run a Playwright or Puppeteer workflow", capability: "Browser" },
  { need: "Store page snapshots", capability: "Reader output plus your database" },
  { need: "Build RAG from public pages", capability: "Crawl plus your retrieval pipeline" },
  { need: "Track public page changes", capability: "Reader output plus your scheduler and diff logic" },
  { need: "Use proxy networks directly", capability: "Bright Data may be stronger" },
  { need: "Solve difficult blocking at scale", capability: "Bright Data may be stronger" },
  { need: "Use ready made scrapers or datasets", capability: "Bright Data may be stronger" },
];

const verdictTableRows = [
  {
    reader: "Your agent needs clean web context",
    competitor: "Your team needs broad web access infrastructure",
  },
  {
    reader: "You want a focused scrape, crawl, extract, browser model",
    competitor: "You need proxies, unblocking, scraping APIs, and browser automation together",
  },
  {
    reader: "Markdown and structured JSON are core outputs",
    competitor: "Large scale access and unblocking are core problems",
  },
  {
    reader: "Your application owns the workflow logic",
    competitor: "You want more web access infrastructure handled by the platform",
  },
];

const faqs = [
  {
    question: "What is the main difference between Reader and Bright Data?",
    answer:
      "Reader is a focused web context API for AI agents. Bright Data is a broad web access and data infrastructure platform with products for unblocking, proxies, browser scraping, crawling, SERP data, and datasets.",
  },
  {
    question: "Is Reader a Bright Data alternative?",
    answer:
      "Reader can be a Bright Data alternative when your main need is clean web context, Markdown output, structured extraction, crawling, and occasional browser sessions for AI or data workflows.",
  },
  {
    question: "Is Bright Data broader than Reader?",
    answer:
      "Yes. Bright Data has a much broader product surface, including Web Unlocker, Browser API, proxy infrastructure, scraping APIs, SERP tools, and dataset products.",
  },
  {
    question: "Which tool is better for AI agents?",
    answer:
      "Reader is better when the agent needs clean web context from pages and websites. Bright Data may be better when the main challenge is reliable access to difficult public web targets at scale.",
  },
  {
    question: "Which tool is better for browser automation?",
    answer:
      "Bright Data is deeper for browser based scraping and unblocking at scale. Reader Browser is useful when browser sessions are needed as part of a broader web context workflow.",
  },
  {
    question: "Does Reader offer proxy infrastructure like Bright Data?",
    answer:
      "Reader manages access inside its own workflow, but it is not positioned as a proxy infrastructure platform. Bright Data is much stronger if direct proxy infrastructure is the main need.",
  },
  {
    question: "Does Reader have ready made datasets?",
    answer:
      "No. Reader focuses on collecting web context that your application can store, process, and use. Bright Data offers dataset products and ready made data workflows.",
  },
  {
    question: "Which tool is better for RAG pipelines?",
    answer:
      "Reader is a strong fit for RAG ingestion because it focuses on clean Markdown, crawling, source metadata, and page level context. Bright Data can support data collection for RAG, but it is broader than that use case.",
  },
  {
    question: "Do these tools have the same usage model?",
    answer:
      "No. Reader usage is based on pages, extraction, crawl results, cache behavior, and browser minutes. Bright Data usage depends on the specific product, such as proxies, Web Unlocker, Browser API, Crawl API, datasets, or scraping APIs.",
  },
  {
    question: "Should I choose based on features alone?",
    answer:
      "No. Choose based on your workflow. If your main need is web context for AI agents, Reader is a strong fit. If your main need is large scale web access infrastructure, Bright Data may be a better fit.",
  },
];

export function BrightDataComparisonContent() {
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
              Reader vs Bright Data
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Compare a focused web context API with a broad web access platform.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader and Bright Data both help teams collect web data, but they are built for different kinds of users and workflows.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader is the web context API for AI agents. It helps teams scrape pages, crawl websites, extract structured data, and use browser sessions when a page needs interaction.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Bright Data is a much broader web access and data infrastructure platform. Its Web Access APIs include products for unblocking, browser based scraping, crawling, dynamic content, search engine data collection, proxy rotation, fingerprinting, CAPTCHA solving, and ready made data workflows.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              This page compares Reader and Bright Data by product model, feature surface, output model, browser workflow, developer experience, and operational fit.
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
              Choose Reader if you want a focused API for web context inside AI agents, RAG pipelines, research tools, and data workflows.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Reader is a strong fit when your product needs clean Markdown, structured JSON, crawl results, and occasional browser sessions without adopting a large web access platform.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose Bright Data if you need a broader web data infrastructure suite.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-4">
              Bright Data is a strong fit when your team needs advanced unblocking, proxy infrastructure, CAPTCHA handling, browser automation at scale, search engine data collection, ready made scrapers, and enterprise grade web access operations.
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
                      Choose Bright Data when
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
              Reader and Bright Data solve overlapping problems from very different starting points.
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
                      Bright Data
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
                Reader is a narrower product by design. It is built for teams that want to give AI agents and applications reliable web context without managing scraping infrastructure themselves.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Bright Data is broader. Its docs describe Web Access APIs that handle public web access at scale, including unblocking, crawling, dynamic content, SERP data, proxy rotation, sessions, fingerprinting, and CAPTCHA solving. That breadth is useful when the access layer itself is the hardest part of the problem.
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
                      Bright Data
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
                This table shows the core difference.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Reader gives you the focused web context layer your AI agent needs.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Bright Data gives you a larger suite of public web access infrastructure and data products.
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
                Reader is optimized for content that agents and AI workflows can use directly.
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
                This makes Reader useful when web content needs to become model context, RAG input, a structured record, a research note, or a source snapshot.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data&apos;s output model depends on the product being used. Web Unlocker returns clean HTML or JSON responses after handling access challenges. Browser API workflows can return whatever your browser script captures. Ready made scrapers and dataset products can return structured data for supported targets.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader starts from the question, &ldquo;What context does the agent need from this page?&rdquo;</li>
                <li>Bright Data starts from the question, &ldquo;How do we reliably access and collect data from this target at scale?&rdquo;</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                Both questions are valid. They lead to different product choices.
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
                Reader Scrape is built for turning a public URL into clean web context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Use it when your workflow needs to read a page, summarize it, extract fields, store a source snapshot, or send the content into a retrieval pipeline. The default mental model is simple: send a URL, get usable page context back.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data&apos;s scraping products are built for robust access to public web data, especially when targets use blocking, rate limiting, dynamic content, proxy restrictions, or other access challenges.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data&apos;s Web Unlocker API is designed to handle proxy rotation, headers, fingerprints, CAPTCHA solving, and retries behind one request. This is useful when the main challenge is reliable access to difficult sites.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is better when your main need is clean web context for agents and applications.</li>
                <li>Bright Data is better when your main need is advanced public web access and unblocking at scale.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                If you are building an AI agent that needs to read and reason over web pages, Reader is more direct. If you are building a large scale scraping operation where access reliability is the hardest problem, Bright Data is more specialized.
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
                Reader Crawl turns a starting URL into a website context set.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                It is useful for:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Documentation ingestion</li>
                <li>Help center ingestion</li>
                <li>Public website research</li>
                <li>Competitive intelligence</li>
                <li>Product page collection</li>
                <li>RAG pipelines</li>
                <li>Agent research workflows</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader&apos;s crawl model focuses on collecting page level results your application can store, search, embed, summarize, compare, or pass into an agent.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data also offers crawl and scraper products as part of its broader web access platform. These are designed for teams that need scale, unblocking, and operational breadth across many sites and data workflows.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Crawl is best when your product needs clean page results for your own AI or data workflow.</li>
                <li>Bright Data is best when your team needs a larger web access stack around crawling, unblocking, proxy management, and data extraction.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                Reader gives your product the website context. Bright Data gives your team more of the access infrastructure.
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
                Reader Browser gives your workflow a cloud browser session when scraping is not enough.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                Use Reader Browser for:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clicks</li>
                <li>Forms</li>
                <li>Navigation</li>
                <li>Screenshots</li>
                <li>PDFs</li>
                <li>Rendered page state</li>
                <li>Existing Playwright or Puppeteer scripts</li>
                <li>Interactive pages inside a broader web context workflow</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data&apos;s Browser API is a deeper browser scraping product. Its docs describe fully managed cloud browsers with automatic proxy rotation, browser fingerprint management, custom headers, session handling, CAPTCHA detection and solving, intelligent retries, and support for Puppeteer, Playwright, and Selenium.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Browser is best when browser control is one capability inside your web context workflow.</li>
                <li>Bright Data Browser API is best when large scale browser based data collection and unblocking are central to the workflow.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                If your agent only occasionally needs interaction, Reader is simpler. If your operation depends on browser automation across difficult targets at scale, Bright Data has more specialized infrastructure.
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
                Reader is built around AI agent context.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                A Reader based agent workflow often looks like this:
              </p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 text-sm text-fg-muted font-mono whitespace-pre-wrap leading-relaxed">
{`Agent needs web context
  → Reader scrapes, crawls, extracts, or opens a browser session
  → Your application stores or filters the result
  → Agent reasons over the context
  → Product returns an answer, record, alert, or action`}
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data can support AI workflows too, but its product model is broader and more infrastructure oriented.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                A Bright Data based workflow may focus on:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Unlocking difficult public pages</li>
                <li>Running browser scraping at scale</li>
                <li>Collecting SERP data</li>
                <li>Using ready made scraping APIs</li>
                <li>Managing proxy backed access</li>
                <li>Producing structured datasets</li>
                <li>Integrating web data into analytics or business workflows</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                The decision depends on where the hard problem is.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                If the hard problem is giving your agent clean context, Reader is the better fit.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If the hard problem is reliably accessing difficult web targets at scale, Bright Data may be the better fit.
              </p>
            </motion.div>

            {/* Credit and usage shape */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                Credit and usage shape
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
                Bright Data usage varies by product. Its platform includes proxy products, Web Unlocker, Browser API, Crawl API, SERP tools, scraping APIs, and datasets. Usage can depend on request volume, bandwidth, browser usage, proxy type, dataset consumption, or the specific API used.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-2">
                The practical planning difference:
              </p>
              <ul className="list-disc pl-5 text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>With Reader, estimate pages scraped, pages crawled, extraction usage, and browser minutes.</li>
                <li>With Bright Data, estimate which product you are using and how that product measures consumption.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">
                Reader is easier to reason about for focused AI agent and RAG workflows. Bright Data is more flexible for large scale web access operations, but the usage model depends more heavily on the specific product surface.
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
                Reader reduces the work needed to turn web pages into usable context. Your application still owns the product workflow around that context, such as storage, scheduling, retrieval, comparison, alerts, and agent logic.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data reduces the work needed to operate a serious public web access stack. It handles more of the infrastructure needed for proxies, unblocking, browser automation, CAPTCHA solving, retries, and scaled access.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                That creates a clear tradeoff.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Reader is simpler and more focused.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Bright Data is broader and more infrastructure heavy.
              </p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">
                Choose Reader when your product team wants a clean web context layer that fits into your own architecture.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                Choose Bright Data when your data operation needs advanced public web access infrastructure and the scale or target complexity justifies a larger platform.
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
                If you are evaluating Reader as a Bright Data alternative, start by separating your workflows.
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
                Reader is a good alternative when your Bright Data workflow is mostly about getting clean page context into an AI or data product.
              </p>
              <p className="text-base text-fg-muted leading-relaxed">
                If your workflow depends heavily on Bright Data&apos;s proxy infrastructure, unblocking systems, ready made datasets, or scraping APIs for specific targets, Bright Data may remain the better fit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Choose Reader if / Choose Bright Data if */}
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
                <li>A simpler product model</li>
                <li>Page and browser minute based usage planning</li>
                <li>Source snapshots for agent workflows</li>
                <li>Control over your own storage, retrieval, alerts, and analysis</li>
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-3">
                Reader is especially useful when your team wants to build agent, RAG, research, monitoring, or data products without adopting a large web access platform.
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
                When Bright Data may be the better fit
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-3">
                Bright Data may be a better fit when your team needs:
              </p>
              <ul className="list-disc pl-5 text-sm text-fg-muted leading-relaxed space-y-1">
                <li>Advanced public web access infrastructure</li>
                <li>Large scale unblocking</li>
                <li>Proxy rotation across multiple proxy networks</li>
                <li>CAPTCHA solving</li>
                <li>Browser fingerprint management</li>
                <li>Search engine data collection</li>
                <li>Ready made scraping APIs</li>
                <li>Dataset products</li>
                <li>Browser based scraping at scale</li>
                <li>Enterprise level web data operations</li>
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-3">
                Bright Data is the stronger fit when public web access and unblocking are the main operational challenge.
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
              Choose the right web access layer
            </h2>
            <p className="text-base text-fg-muted mb-4">
              Use Reader when your AI agent needs clean web context from pages, websites, structured fields, and occasional browser sessions.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Use Bright Data when your team needs a broad web access platform with advanced unblocking, proxy infrastructure, browser scraping, SERP data, and dataset products.
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
                href="/blog/reader-vs-bright-data"
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
