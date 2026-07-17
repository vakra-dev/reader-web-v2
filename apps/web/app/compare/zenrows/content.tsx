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

export function ZenRowsContent() {
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
              Reader vs ZenRows
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Compare a web context API for AI agents with a scraping
              infrastructure platform.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader and ZenRows both help developers collect content from web
              pages. The difference is what each product is optimized to do.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader is the web context API for AI agents. It helps teams scrape
              pages, crawl websites, extract structured data, and use browser
              sessions when interaction is required.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              ZenRows is a web scraping platform focused on reliable page access,
              JavaScript rendering, premium proxies, stealth behavior, browser
              scraping, residential proxies, and site specific scraper APIs.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              This page compares Reader and ZenRows by product model, workflow
              fit, output model, crawling, extraction, browser workflows,
              developer experience, and usage shape.
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
              agents, RAG pipelines, research tools, structured extraction, and
              website crawling.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Reader is a strong fit when the main output should be Markdown,
              structured JSON, crawl results, screenshots, or browser sessions
              that your application can feed into an AI workflow.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose ZenRows if your product needs scraping infrastructure with
              strong controls around unblocking, JavaScript rendering, premium
              proxies, residential proxies, scraping browser workflows, and
              protected page access.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-4">
              ZenRows is a strong fit when the main challenge is getting access
              to difficult pages reliably.
            </p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">Choose Reader when</th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Choose ZenRows when</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { reader: "Your agent needs clean web context", competitor: "Your scraper needs stronger access infrastructure" },
                    { reader: "Markdown and structured JSON are core outputs", competitor: "Proxies, stealth behavior, and rendering are core needs" },
                    { reader: "You need scrape, crawl, extract, and browser workflows", competitor: "You need a scraping platform with unblocking controls" },
                    { reader: "Your app owns storage, monitoring, and analysis", competitor: "Your app owns parsing, crawling logic, and downstream workflows" },
                  ].map((row, i, arr) => (
                    <tr key={i} className={i < arr.length - 1 ? "border-b border-edge/50" : ""}>
                      <td className="px-4 py-3 text-fg-secondary">{row.reader}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.competitor}</td>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-fg">Product model comparison</h2>
            <p className="text-base text-fg-muted leading-relaxed mb-6">Reader and ZenRows overlap around scraping, rendering, and browser workflows, but their product models are different.</p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Area</th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">Reader</th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">ZenRows</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "Core positioning", reader: "Web context API for AI agents", competitor: "Web scraping and unblocking platform" },
                    { area: "Starting point", reader: "URL to clean context", competitor: "URL to scraped response through scraping infrastructure" },
                    { area: "Main product surface", reader: "Scrape, Crawl, Extract, Browser", competitor: "Universal Scraper API, Scraping Browser, Residential Proxies, Scraper APIs" },
                    { area: "Primary output", reader: "Markdown, metadata, JSON, crawl results, screenshots, browser sessions", competitor: "HTML, rendered responses, scraped data, browser results, scraper API outputs" },
                    { area: "Best fit", reader: "Agents, RAG, research, page snapshots, structured data workflows", competitor: "Protected page access, proxy backed scraping, browser scraping, large scale scraping" },
                    { area: "Crawl model", reader: "Built into Reader's read workflow", competitor: "Usually handled through your application or scraping architecture" },
                    { area: "Application ownership", reader: "Your app owns product logic around context", competitor: "Your app owns parsing, crawl strategy, storage, monitoring, and analysis" },
                  ].map((row, i, arr) => (
                    <tr key={row.area} className={i < arr.length - 1 ? "border-b border-edge/50" : ""}>
                      <td className="px-4 py-3 text-fg-muted font-medium">{row.area}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.reader}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mt-4">Reader is built around the idea that AI products need usable web context.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">ZenRows is built around the idea that scraping teams need reliable access to web pages without managing proxies, browser infrastructure, retries, and anti bot issues themselves.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">That difference should guide the choice.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">If the hard part is giving an agent clean context, Reader is the more direct fit.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">If the hard part is reliably accessing difficult public pages, ZenRows may be the better fit.</p>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6 text-fg">Feature comparison</h2>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Capability</th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">Reader</th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">ZenRows</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Single page scraping", reader: "Yes", competitor: "Yes" },
                    { feature: "Clean Markdown output", reader: "Yes", competitor: "Not the primary product model" },
                    { feature: "HTML output", reader: "Yes", competitor: "Yes" },
                    { feature: "Raw HTML output", reader: "Yes", competitor: "Yes" },
                    { feature: "Metadata", reader: "Yes", competitor: "Response and request details depend on workflow" },
                    { feature: "Screenshots", reader: "Yes", competitor: "Available through browser workflows" },
                    { feature: "JavaScript rendering", reader: "Yes", competitor: "Yes" },
                    { feature: "Wait and interaction support", reader: "Yes", competitor: "Yes, through JavaScript instructions and browser workflows" },
                    { feature: "Website crawling", reader: "Yes", competitor: "Your application usually owns crawl logic" },
                    { feature: "Batch URL workflows", reader: "Yes", competitor: "Your application can orchestrate request batches" },
                    { feature: "Structured extraction", reader: "Yes", competitor: "Possible through scraper workflows and APIs" },
                    { feature: "Browser sessions", reader: "Yes", competitor: "Yes, through Scraping Browser" },
                    { feature: "Playwright support", reader: "Yes", competitor: "Supported in browser scraping workflows" },
                    { feature: "Puppeteer support", reader: "Yes", competitor: "Supported in browser scraping workflows" },
                    { feature: "Residential proxies", reader: "Managed inside Reader workflow", competitor: "Major product surface" },
                    { feature: "Premium proxy controls", reader: "Not the core product surface", competitor: "Yes" },
                    { feature: "Adaptive stealth behavior", reader: "Not the core Reader positioning", competitor: "Yes" },
                    { feature: "Site specific scraper APIs", reader: "Not the core Reader positioning", competitor: "Yes" },
                    { feature: "AI agent context", reader: "Core positioning", competitor: "Possible, but not the main product model" },
                  ].map((row, i, arr) => (
                    <tr key={row.feature} className={i < arr.length - 1 ? "border-b border-edge/50" : ""}>
                      <td className="px-4 py-3 text-fg-muted font-medium">{row.feature}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.reader}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mt-4">The table shows the main distinction.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">Reader organizes the workflow around AI ready context.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">ZenRows organizes the workflow around scraping infrastructure, access reliability, rendering, and unblocking.</p>
          </motion.div>
        </div>
      </section>

      {/* Difference sections */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-8 text-fg">Key differences</motion.h2>
          <div className="space-y-10">
            {/* Output model */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Output model comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader is designed to return content that AI workflows can use directly.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Common Reader outputs include:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clean Markdown</li><li>Metadata</li><li>HTML</li><li>Raw HTML</li><li>Screenshots</li><li>Structured JSON</li><li>Crawl results</li><li>Browser session output controlled by your code</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This makes Reader useful when page content needs to become model context, a RAG document, a source snapshot, an extracted record, or an agent tool result.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows is designed to return scraped page responses through its scraping infrastructure. Depending on the workflow, that may mean HTML, rendered content, browser results, or outputs from a scraper API.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader starts from &quot;What context does my agent need from this page?&quot;</li>
                <li>ZenRows starts from &quot;How do I access and retrieve this page reliably?&quot;</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Both questions matter. They usually appear at different layers of the product.</p>
              <p className="text-base text-fg-muted leading-relaxed">Reader is the stronger fit for AI context. ZenRows is the stronger fit for scraping access infrastructure.</p>
            </motion.div>

            {/* Scraping */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Scraping comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Both Reader and ZenRows can scrape individual web pages.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader Scrape is best when the goal is to turn a public URL into clean Markdown, metadata, optional HTML, screenshot output, or structured fields. It is designed for workflows where the page becomes context for an agent, a record in a database, or a document in a retrieval pipeline.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows Universal Scraper API is best when the goal is reliable page retrieval with access controls such as JavaScript rendering, premium proxies, proxy country selection, custom headers, and adaptive stealth behavior.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is more direct for AI ready page context.</li>
                <li>ZenRows is more direct for protected page access and scrape configuration.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">If your agent needs to read a page, summarize it, extract information, or store a clean source snapshot, Reader keeps the workflow simple.</p>
              <p className="text-base text-fg-muted leading-relaxed">If your scraper needs to tune access behavior for difficult targets, ZenRows gives more infrastructure controls.</p>
            </motion.div>

            {/* Crawling */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Crawling comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader includes crawling as a core workflow.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">A Reader crawl starts from a URL, follows related links within limits, and returns page level results. This is useful for documentation ingestion, help center ingestion, public website research, RAG pipelines, competitive intelligence, and dataset collection.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows is not primarily organized around website crawling in the same way. It is better understood as the access and scraping layer that your own crawler can call. Your application usually owns URL discovery, deduplication, queues, crawl limits, retry strategy, storage, and change detection.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Crawl is a first class workflow for collecting website context.</li>
                <li>ZenRows is strongest as the retrieval and unblocking layer inside a custom crawler.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Choose Reader if crawling and page level context are part of your AI product. Choose ZenRows if your team already has a crawler and mainly needs stronger scraping infrastructure behind it.</p>
            </motion.div>

            {/* Extraction */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Extraction comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader Extract is designed to turn page context into structured JSON.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Use Reader Extract when your workflow needs fields such as:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Product name</li><li>Price</li><li>Availability</li><li>Company description</li><li>Listing details</li><li>Article metadata</li><li>Pricing plan details</li><li>Job post fields</li><li>Documentation sections</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader&apos;s extraction fits naturally into AI agent and data workflows because the structured record can live alongside the source Markdown.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows can support extraction through scraper workflows and site specific scraping APIs. Its strength is often in getting the page or target data reliably, especially when rendering, proxies, or unblocking are required.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is stronger when extraction is part of a broader web context workflow.</li>
                <li>ZenRows is stronger when extraction depends on difficult access, scraping infrastructure, or target specific scraper APIs.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">For agent workflows, keeping source Markdown next to extracted JSON is useful because your system can inspect, verify, and debug the output later.</p>
            </motion.div>

            {/* Proxy and unblocking */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Proxy and unblocking comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This is one of ZenRows&apos; strongest areas.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows is built around scraping infrastructure. Its platform includes premium proxies, residential proxies, adaptive stealth behavior, JavaScript rendering, proxy country selection, browser scraping, and automatic handling of many access related details.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader handles modern web pages inside its workflow, including dynamic rendering and modes for harder pages, but it is not positioned as a proxy infrastructure platform.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader is better when the output needs to become agent context.</li>
                <li>ZenRows is better when access reliability and proxy backed scraping are the main challenge.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">If the workflow is &quot;collect clean content for my AI agent,&quot; start with Reader.</p>
              <p className="text-base text-fg-muted leading-relaxed">If the workflow is &quot;retrieve this difficult page through the right proxy and browser configuration,&quot; ZenRows may be the more specialized fit.</p>
            </motion.div>

            {/* Browser workflow */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Browser workflow comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader Browser gives your workflow a cloud browser session when normal scraping is not enough.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Use Reader Browser when your agent or application needs:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clicks</li><li>Forms</li><li>Navigation</li><li>Screenshots</li><li>PDFs</li><li>Rendered page state</li><li>Playwright or Puppeteer workflows</li><li>A browser fallback inside a web context pipeline</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows also offers browser scraping infrastructure. Its Scraping Browser is designed for teams that need browser based scraping, proxy handling, and interaction workflows in a scraping platform.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Reader Browser is best when browser control is one capability inside your AI web context workflow.</li>
                <li>ZenRows Scraping Browser is best when browser based scraping infrastructure is the workflow itself.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Reader gives your application a browser when the page needs interaction. ZenRows gives scraping teams browser infrastructure for more access heavy workflows.</p>
            </motion.div>

            {/* AI agent workflow */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">AI agent workflow comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader is built around AI agent workflows.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">A typical Reader workflow looks like this:</p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 font-mono text-sm text-fg-muted">
                <p>Agent needs web context</p>
                <p className="pl-4">&rarr; Reader scrapes, crawls, extracts, or opens a browser session</p>
                <p className="pl-4">&rarr; Your application stores or filters the result</p>
                <p className="pl-4">&rarr; Agent reasons over the source context</p>
                <p className="pl-4">&rarr; Product returns an answer, record, alert, or action</p>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows can support AI workflows too, especially when an agent or pipeline needs access to pages that are hard to retrieve. But the product model is still centered on scraping infrastructure.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">A typical ZenRows workflow looks like this:</p>
              <div className="bg-surface/50 border border-edge rounded-md p-4 mb-3 font-mono text-sm text-fg-muted">
                <p>Application needs a page</p>
                <p className="pl-4">&rarr; ZenRows retrieves it with the right rendering and access settings</p>
                <p className="pl-4">&rarr; Your parser or extraction logic processes the response</p>
                <p className="pl-4">&rarr; Your application stores or uses the result</p>
              </div>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The difference is not whether either tool can be used with AI.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The difference is the layer each product is built to own.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader owns the web context layer.</p>
              <p className="text-base text-fg-muted leading-relaxed">ZenRows owns more of the scraping access layer.</p>
            </motion.div>

            {/* Usage shape */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Usage shape comparison</h3>
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
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows usage depends on the product and request configuration. Its Universal Scraper API usage is shaped by basic versus protected results and by options such as JavaScript rendering, premium proxies, and protected page handling. Its Scraping Browser and Residential Proxies have different usage shapes.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical planning difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>With Reader, estimate pages scraped, pages crawled, extraction usage, and browser minutes.</li>
                <li>With ZenRows, estimate request volume, protected page needs, rendering needs, proxy usage, browser usage, and the product surface you plan to use.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Reader is simpler to estimate when your workflow is mostly page, crawl, extraction, and browser context based. ZenRows is more infrastructure oriented, which can be useful when page access complexity varies by target.</p>
            </motion.div>

            {/* Operational tradeoffs */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Operational tradeoffs</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader reduces the work needed to collect clean web context. Your application still owns storage, scheduling, retrieval, comparison, alerts, dashboards, and agent logic.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows reduces the work needed to run scraping infrastructure. Your application still owns crawl logic, parsing, storage, monitoring, retries beyond the platform behavior, and downstream analysis.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader asks your team to think in terms of source context.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">ZenRows asks your team to think in terms of scrape access configuration.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Choose Reader when your product architecture is centered on agents, RAG, source documents, structured records, and page snapshots.</p>
              <p className="text-base text-fg-muted leading-relaxed">Choose ZenRows when your product architecture is centered on scraping difficult targets with strong infrastructure support.</p>
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
                {["A web context API for AI agents", "Clean Markdown from URLs", "Website crawling for RAG or research", "Structured JSON extraction from public pages", "Browser sessions as a fallback for interaction", "Page snapshots with source context", "A focused API for scrape, crawl, extract, and browser workflows", "Control over your own storage, retrieval, alerts, and analysis"].map((point) => (
                  <li key={point} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />{point}</li>
                ))}
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">Reader is especially useful when the scraped output should be read by an LLM, embedded in a retrieval system, or stored as clean source context.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 border border-edge rounded-md">
              <h3 className="text-lg font-semibold mb-3 text-fg">Choose ZenRows if you need</h3>
              <ul className="space-y-2 text-sm text-fg-muted">
                {["A scraping infrastructure platform", "Advanced unblocking", "Premium proxies", "Residential proxies", "JavaScript rendering controls", "Adaptive stealth behavior", "Browser based scraping infrastructure", "Site specific scraper APIs", "Proxy country selection", "More control over scraping access settings"].map((point) => (
                  <li key={point} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />{point}</li>
                ))}
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">ZenRows is strongest when page access reliability is the center of the workflow.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration notes */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-fg">Migration notes</h2>
            <p className="text-base text-fg-muted leading-relaxed mb-4">If you are evaluating Reader as a ZenRows alternative, start by mapping the workflow.</p>
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
                    { need: "Use Playwright or Puppeteer", capability: "Browser" },
                    { need: "Tune proxy behavior directly", capability: "ZenRows may fit better" },
                    { need: "Use residential proxies as the product surface", capability: "ZenRows may fit better" },
                    { need: "Use site specific scraper APIs", capability: "ZenRows may fit better" },
                  ].map((row, i, arr) => (
                    <tr key={row.need} className={i < arr.length - 1 ? "border-b border-edge/50" : ""}>
                      <td className="px-4 py-3 text-fg-muted font-medium">{row.need}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.capability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mt-4">Reader is a good alternative when your ZenRows workflow is mainly about turning pages into AI ready context.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">If your workflow depends heavily on ZenRows specific proxy controls, protected page access, or scraper APIs, ZenRows may remain the better fit.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-6 text-fg">Frequently asked questions</motion.h2>
          <div className="border border-edge rounded-md px-4">
            <FaqItem index={0} question="What is the main difference between Reader and ZenRows?" answer="Reader is a web context API for AI agents. ZenRows is a scraping infrastructure platform focused on page access, JavaScript rendering, proxies, stealth behavior, browser scraping, and scraper APIs." />
            <FaqItem index={1} question="Is Reader a ZenRows alternative?" answer="Reader can be a ZenRows alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows." />
            <FaqItem index={2} question="Which tool is better for AI agents?" answer="Reader is better when the agent needs clean web context from pages and websites. ZenRows can support AI workflows, but its core model is more focused on scraping access infrastructure." />
            <FaqItem index={3} question="Which tool is better for difficult pages?" answer="ZenRows may be better when the main challenge is protected page access, proxy behavior, browser based scraping, or advanced unblocking." />
            <FaqItem index={4} question="Does Reader support crawling?" answer="Yes. Reader supports crawling as part of its read workflow when your request includes crawl limits such as depth or page count." />
            <FaqItem index={5} question="Does ZenRows support crawling?" answer="ZenRows can be used as the scraping layer inside a crawler, but its primary product model is scraping infrastructure rather than website context crawling." />
            <FaqItem index={6} question="Which tool is better for structured extraction?" answer="Reader is better when structured extraction should sit alongside clean Markdown and source metadata for agent workflows. ZenRows may be better when extraction depends on access heavy scraping workflows or scraper APIs." />
            <FaqItem index={7} question="Does Reader replace ZenRows proxies?" answer="No. Reader is not a proxy infrastructure product. If direct proxy infrastructure is the main need, ZenRows may be the better fit." />
            <FaqItem index={8} question="Do these tools have the same usage model?" answer="No. Reader usage is centered on pages, extraction, crawl results, cache behavior, and browser minutes. ZenRows usage depends on product surface and request configuration, such as basic results, protected results, rendering, proxies, and browser usage." />
            <FaqItem index={9} question="Should I choose based on features alone?" answer="No. Choose based on workflow. If the goal is clean web context for agents, Reader is a strong fit. If the goal is advanced scraping infrastructure, ZenRows may be a better fit." />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">Choose the right scraping layer</h2>
            <p className="text-base text-fg-muted mb-3">Use Reader when your AI agent needs clean web context from URLs, websites, structured fields, and occasional browser sessions.</p>
            <p className="text-base text-fg-muted mb-8">Use ZenRows when your product needs scraping infrastructure with stronger controls around rendering, proxies, protected page access, and browser based scraping.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://console.reader.dev" className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors">Start free</a>
              <a href="https://docs.reader.dev" className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors">View docs</a>
              <a href="/blog/reader-vs-zenrows" className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors">Read the full comparison</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
