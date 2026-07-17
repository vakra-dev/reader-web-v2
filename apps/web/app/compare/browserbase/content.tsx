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

export function BrowserbaseContent() {
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
              Reader vs Browserbase
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Compare a web context API with a browser agent platform.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader and Browserbase both help developers build AI agents that
              work with the web. The difference is where each product starts.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Reader starts with web context. It helps agents scrape pages, crawl
              websites, extract structured data, and open browser sessions when
              interaction is required.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Browserbase starts with the browser. It gives agents cloud
              browsers, browser automation, Stagehand, search, fetch, functions,
              model access, contexts, live view, and session recordings.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              This page compares Reader and Browserbase by product model,
              workflow fit, output model, browser automation, developer
              experience, and usage shape.
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
              Choose Reader if your agent mostly needs clean web context.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Reader is a strong fit when the job is to turn URLs and websites
              into Markdown, structured JSON, crawl results, and occasional
              browser sessions. It is best when scraping, crawling, extraction,
              and readable page context are core to your workflow.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-3">
              Choose Browserbase if your agent mostly needs to operate a browser.
            </p>
            <p className="text-sm text-fg-muted leading-relaxed mb-4">
              Browserbase is a strong fit when the browser is the main product
              surface. It is best for agents that need persistent sessions, live
              browser observation, session recordings, natural language browser
              actions, deployed browser functions, and browser first automation
              workflows.
            </p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">Choose Reader when</th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Choose Browserbase when</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { reader: "Your agent needs web context from pages and websites", competitor: "Your agent needs to browse and interact like a human" },
                    { reader: "Clean Markdown is the primary output", competitor: "Browser state and interaction are the primary output" },
                    { reader: "You need scrape, crawl, extract, and browser fallback", competitor: "You need browser fleets, observability, and agent browser tooling" },
                    { reader: "Your app owns storage, retrieval, and workflow logic", competitor: "You want more browser agent infrastructure in the platform" },
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
            <p className="text-base text-fg-muted leading-relaxed mb-6">Reader and Browserbase overlap around browser sessions, but they are not the same kind of product.</p>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Area</th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">Reader</th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Browserbase</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "Core positioning", reader: "Web context API for AI agents", competitor: "Platform for agents that browse and interact with the web" },
                    { area: "Starting point", reader: "URL to Markdown, JSON, crawl results, or browser session", competitor: "Cloud browser session and browser agent workflow" },
                    { area: "Main product surface", reader: "Scrape, Crawl, Extract, Browser", competitor: "Browsers, Stagehand, Search, Fetch, Functions, Model Gateway, Contexts" },
                    { area: "Best fit", reader: "Agents that need readable web content and structured data", competitor: "Agents that need browser automation as the core workflow" },
                    { area: "Browser role", reader: "Fallback when scraping is not enough", competitor: "Primary platform capability" },
                    { area: "Application ownership", reader: "Your app owns storage, retrieval, scheduling, alerts, and agent logic", competitor: "Browserbase provides more browser infrastructure and agent execution surfaces" },
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
            <p className="text-base text-fg-muted leading-relaxed mt-4">Reader is focused on the web data layer. It helps your system collect content and fields from web pages.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">Browserbase is focused on the browser agent layer. It helps your system create, control, observe, and deploy agents that use browsers.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">That difference should guide the decision.</p>
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
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">Browserbase</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Single page scraping", reader: "Yes", competitor: "Fetch API supports page content workflows" },
                    { feature: "Clean Markdown output", reader: "Yes", competitor: "Fetch can retrieve page content as Markdown" },
                    { feature: "Website crawling", reader: "Yes", competitor: "Not the primary product model" },
                    { feature: "Batch URL workflows", reader: "Yes", competitor: "Browser and platform workflows can be parallelized" },
                    { feature: "Structured extraction", reader: "Yes", competitor: "Stagehand supports extraction inside browser workflows" },
                    { feature: "Cloud browser sessions", reader: "Yes", competitor: "Yes" },
                    { feature: "Playwright support", reader: "Yes", competitor: "Yes" },
                    { feature: "Puppeteer support", reader: "Yes", competitor: "Yes" },
                    { feature: "Selenium support", reader: "Not the core Reader positioning", competitor: "Yes" },
                    { feature: "Browser session observability", reader: "Basic workflow control", competitor: "Live view and session recordings" },
                    { feature: "Persistent contexts", reader: "Not the main product surface", competitor: "Yes" },
                    { feature: "Browser agent SDK", reader: "API and browser automation clients", competitor: "Stagehand for AI browser agents" },
                    { feature: "Search API", reader: "Not the core product surface", competitor: "Yes" },
                    { feature: "Fetch API", reader: "Scrape through Reader read workflow", competitor: "Yes" },
                    { feature: "Deployed browser functions", reader: "Not the core product surface", competitor: "Yes" },
                    { feature: "Model gateway", reader: "Not the core product surface", competitor: "Yes" },
                    { feature: "MCP and coding agent workflows", reader: "Yes", competitor: "Browserbase supports agent setup and coding agent workflows" },
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
            <p className="text-base text-fg-muted leading-relaxed mt-4">The table shows why these products are compared, but it also shows why they should not be treated as identical.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">Reader is broader across web content workflows. Browserbase is deeper around browser agent infrastructure.</p>
          </motion.div>
        </div>
      </section>

      {/* Difference sections */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-8 text-fg">Key differences</motion.h2>
          <div className="space-y-10">
            {/* Web context vs browser control */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Web context versus browser control</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The biggest difference is the default workflow.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader asks: What context does your agent need from this web page or website?</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase asks: What does your agent need to do inside a browser?</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Those are related but different questions.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">If your workflow starts with reading pages, crawling websites, extracting fields, and building source context for an agent, Reader is the more direct fit.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">If your workflow starts with actions such as logging in, navigating a portal, submitting forms, working through multi step flows, or observing browser behavior, Browserbase is more naturally aligned.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">A good agent system may use both kinds of thinking. Most tasks should start with the lightest tool that solves the problem. If a page can be scraped into clean Markdown, do not start a browser. If the page requires interaction, use a browser.</p>
              <p className="text-base text-fg-muted leading-relaxed">Reader&apos;s model makes Browser a capability inside a broader web context workflow. Browserbase&apos;s model makes the browser the center of the platform.</p>
            </motion.div>

            {/* Output model */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Output model comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader is designed to return usable web context.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Common Reader outputs include:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Clean Markdown</li><li>Metadata</li><li>HTML</li><li>Raw HTML</li><li>Screenshots</li><li>Structured JSON</li><li>Crawl results</li><li>Browser session output controlled by your code</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This makes Reader useful when the output should become model context, retrieval content, a database record, a source snapshot, or a page level result.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase is designed to let agents work through browsers.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Common Browserbase outputs depend on the browser workflow:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Browser session state</li><li>Screenshots</li><li>Extracted data from Stagehand or automation scripts</li><li>Results from browser actions</li><li>Session recordings</li><li>Live view inspection</li><li>Search and fetch results</li><li>Function outputs</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This makes Browserbase useful when the browser run itself is the important unit of work.</p>
              <p className="text-base text-fg-muted leading-relaxed">If your application needs clean Markdown and structured records from pages, Reader is the more natural starting point. If your application needs to watch, debug, replay, or deploy browser agents, Browserbase is the more natural starting point.</p>
            </motion.div>

            {/* Scraping and crawling */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Scraping and crawling comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader&apos;s core product includes Scrape and Crawl.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Use Reader Scrape when your agent needs one page as clean Markdown, metadata, HTML, screenshot, or structured data.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Use Reader Crawl when your agent needs many related pages from a website, such as documentation, help center articles, competitor pages, public product pages, or a research source.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase has Fetch for page content and Search for discovery, but its central product motion is browser driven automation and browser agent execution. That does not make Browserbase weaker. It means the product is optimized for a different starting point.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">For RAG ingestion, documentation crawling, public website research, and page level datasets, Reader&apos;s crawl model is the more direct path.</p>
              <p className="text-base text-fg-muted leading-relaxed">For browser based research agents that need to search, fetch, inspect, interact, and observe browser sessions, Browserbase has more built in browser agent infrastructure.</p>
            </motion.div>

            {/* Browser automation */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Browser automation comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Both Reader and Browserbase support browser automation, but the depth is different.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader Browser is designed for teams that sometimes need a real browser inside a broader web context workflow. It is useful when scraping is not enough and the page needs clicks, forms, navigation, screenshots, PDFs, or rendered state.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase is designed for teams where browser automation is the core workflow. It supports browser sessions, popular automation frameworks, Stagehand, live view, session recordings, persistent contexts, functions, and agent browser tooling.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Use Reader Browser when:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>The page needs interaction before content is useful</li>
                <li>You already use Reader for scrape, crawl, or extract</li>
                <li>Browser control is a fallback path</li>
                <li>You want Playwright or Puppeteer style control</li>
                <li>You do not need a full browser agent platform</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Use Browserbase when:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Browser automation is the main product</li>
                <li>You need persistent browser contexts</li>
                <li>You need live browser observation</li>
                <li>You need session recordings for debugging</li>
                <li>You want Stagehand for natural language browser automation</li>
                <li>You want deployed browser functions</li>
                <li>You want more browser first infrastructure</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Reader gives you browser sessions as part of web context. Browserbase gives you a platform for browser agents.</p>
            </motion.div>

            {/* Agent workflow */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Agent workflow comparison</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader works well when an agent needs tools like:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Read this URL</li><li>Crawl this website</li><li>Extract these fields</li><li>Store this page context</li><li>Build a RAG index</li><li>Compare these public pages</li><li>Open a browser only if needed</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase works well when an agent needs workflows like:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>Navigate this portal</li><li>Fill out this form</li><li>Use a browser like a human</li><li>Persist login state across sessions</li><li>Observe and debug browser behavior</li><li>Run browser agents as deployed functions</li><li>Use natural language actions through Stagehand</li><li>Search, fetch, browse, and interact inside one browser agent platform</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The difference is not &quot;agent or not agent.&quot; Both products serve agent workflows.</p>
              <p className="text-base text-fg-muted leading-relaxed">The difference is what the agent is doing. If the agent needs web context, Reader is the stronger fit. If the agent needs browser operation, Browserbase is the stronger fit.</p>
            </motion.div>

            {/* Credit and usage shape */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Credit and usage shape</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">This section compares usage shape, not money pricing.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-4">Reader usage is tied to web context units:</p>
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
                      { workflow: "Crawl", shape: "Page discovered and scraped" },
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
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase usage is shaped around browser sessions and platform capabilities. Its free plan documentation mentions limited browser time and one browser session running at a time. Browserbase&apos;s broader platform also includes Search, Fetch, Functions, Model Gateway, and browser agent features that should be evaluated based on the workflow you plan to run.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">The practical planning difference:</p>
              <ul className="list-disc list-inside text-base text-fg-muted leading-relaxed mb-3 space-y-1">
                <li>With Reader, estimate pages scraped, pages crawled, extraction calls, and browser minutes.</li>
                <li>With Browserbase, estimate browser sessions, browser time, function usage, search or fetch usage, and agent platform needs.</li>
              </ul>
              <p className="text-base text-fg-muted leading-relaxed">Reader is simpler to estimate when your workflow is mostly page and crawl based. Browserbase is more natural to estimate when browser sessions are the main unit of work.</p>
            </motion.div>

            {/* Operational tradeoffs */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 text-fg">Operational tradeoffs</h3>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader reduces the work needed to turn web pages into usable context. Your application still owns storage, scheduling, retrieval, comparison, alerts, and agent orchestration.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase reduces the work needed to run and observe browser agents. It gives more infrastructure around browser sessions, debugging, functions, contexts, and Stagehand.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Reader asks your team to own more of the surrounding product workflow.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">Browserbase gives more of the browser execution environment, but your workflow may become more centered around browser sessions.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">That tradeoff matters.</p>
              <p className="text-base text-fg-muted leading-relaxed mb-3">If your team wants a lightweight web context API that fits into your own product architecture, Reader is a strong choice.</p>
              <p className="text-base text-fg-muted leading-relaxed">If your team wants a full browser agent platform with observability, deployed functions, persistent sessions, and browser native agent tooling, Browserbase is a strong choice.</p>
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
                  "Structured JSON extraction from pages",
                  "Browser sessions as a fallback for interaction",
                  "A focused API instead of a browser first platform",
                  "Agent workflows built around source context",
                  "Data workflows built around page results",
                  "Control over your own storage, retrieval, scheduling, and alerts",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />{point}</li>
                ))}
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">Reader is especially useful when browser automation is sometimes needed, but most of the workflow is about collecting, cleaning, structuring, and using web content.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 border border-edge rounded-md">
              <h3 className="text-lg font-semibold mb-3 text-fg">Choose Browserbase if you need</h3>
              <ul className="space-y-2 text-sm text-fg-muted">
                {[
                  "A browser agent platform",
                  "Large scale cloud browser sessions",
                  "Persistent browser contexts",
                  "Live browser view",
                  "Session recordings",
                  "Natural language browser actions through Stagehand",
                  "Browser functions deployed to platform infrastructure",
                  "Search, fetch, browser, model gateway, and browser agent features under one platform",
                  "Stronger debugging and observability for browser runs",
                  "Agents that interact with websites like humans",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fg-muted/40 flex-shrink-0" />{point}</li>
                ))}
              </ul>
              <p className="text-sm text-fg-muted leading-relaxed mt-4">Browserbase is the stronger fit when the browser is not just a fallback, but the main interface your agent uses to complete work.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration notes */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-fg">Migration notes</h2>
            <p className="text-base text-fg-muted leading-relaxed mb-4">If you are evaluating Reader as a Browserbase alternative, start by separating your workflows.</p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">Map each task to the lightest tool it needs.</p>
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
                    { need: "Read a public page", capability: "Scrape" },
                    { need: "Get Markdown from a URL", capability: "Scrape" },
                    { need: "Crawl a documentation site", capability: "Crawl" },
                    { need: "Extract fields from a page", capability: "Extract" },
                    { need: "Use Playwright or Puppeteer for interaction", capability: "Browser" },
                    { need: "Capture screenshots or PDFs", capability: "Browser" },
                    { need: "Persist complex browser sessions", capability: "Browserbase may be stronger" },
                    { need: "Debug browser runs with recordings", capability: "Browserbase may be stronger" },
                    { need: "Deploy browser agents as functions", capability: "Browserbase may be stronger" },
                    { need: "Use natural language browser actions", capability: "Browserbase may be stronger" },
                  ].map((row, i, arr) => (
                    <tr key={row.need} className={i < arr.length - 1 ? "border-b border-edge/50" : ""}>
                      <td className="px-4 py-3 text-fg-muted font-medium">{row.need}</td>
                      <td className="px-4 py-3 text-fg-secondary">{row.capability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mt-4">Reader is a good replacement only when the Browserbase workflow is actually a web context workflow.</p>
            <p className="text-base text-fg-muted leading-relaxed mt-3">If your product is browser first, Browserbase may remain the better fit.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-6 text-fg">Frequently asked questions</motion.h2>
          <div className="border border-edge rounded-md px-4">
            <FaqItem index={0} question="What is the main difference between Reader and Browserbase?" answer="Reader is a web context API for AI agents. Browserbase is a platform for agents that browse and interact with the web through cloud browsers and browser agent tooling." />
            <FaqItem index={1} question="Is Reader a Browserbase alternative?" answer="Reader can be a Browserbase alternative when your workflow mainly needs scraping, crawling, structured extraction, and occasional browser sessions. It is not a full replacement for Browserbase's browser agent platform." />
            <FaqItem index={2} question="Which tool is better for AI agents?" answer="Reader is better when the agent needs clean web context. Browserbase is better when the agent needs to operate a browser as the main workflow." />
            <FaqItem index={3} question="Which tool is better for browser automation?" answer="Browserbase is deeper for browser automation. Reader Browser is useful when browser sessions are needed inside a broader web context workflow." />
            <FaqItem index={4} question="Does Reader support Playwright and Puppeteer?" answer="Yes. Reader Browser is designed for browser automation workflows such as Playwright and Puppeteer." />
            <FaqItem index={5} question="Does Browserbase support Playwright and Puppeteer?" answer="Yes. Browserbase supports popular automation frameworks including Playwright and Puppeteer." />
            <FaqItem index={6} question="Does Reader have website crawling?" answer="Yes. Reader supports crawling when the workflow needs multiple related pages from a site." />
            <FaqItem index={7} question="Does Browserbase have crawling?" answer="Browserbase has search, fetch, and browser automation capabilities, but website crawling is not its main product model in the same way it is for Reader." />
            <FaqItem index={8} question="Which tool is better for RAG pipelines?" answer="Reader is the better fit when the RAG workflow needs website scraping, crawling, clean Markdown, and source metadata. Browserbase can support browser based research workflows, but it is more browser centered." />
            <FaqItem index={9} question="Should I use both Reader and Browserbase?" answer="Some teams may use both. Reader can handle web context collection, while Browserbase can handle browser heavy workflows that need deeper browser infrastructure." />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">Choose the right tool for the job</h2>
            <p className="text-base text-fg-muted mb-3">Use Reader when your AI agent needs clean web context from URLs, websites, structured fields, and occasional browser sessions.</p>
            <p className="text-base text-fg-muted mb-8">Use Browserbase when your AI agent needs a full browser platform for interaction, observability, persistent sessions, and browser agent deployment.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://console.reader.dev" className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors">Start free</a>
              <a href="https://docs.reader.dev" className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors">View docs</a>
              <a href="/blog/reader-vs-browserbase" className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors">Read the full comparison</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
