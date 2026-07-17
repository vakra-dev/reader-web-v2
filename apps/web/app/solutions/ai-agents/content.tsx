"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is a web context API for AI agents?",
    answer:
      "A web context API helps agents collect usable information from the web. That context can be clean Markdown, metadata, structured JSON, crawl results, or browser controlled page state.",
  },
  {
    question: "How is Reader different from a normal scraper?",
    answer:
      "A normal scraper usually fetches a page and returns HTML. Reader is designed for agent workflows, with clean Markdown, crawling, extraction, browser sessions, async jobs, SDKs, and MCP support.",
  },
  {
    question: "Can Reader give my agent live web access?",
    answer:
      "Yes. Reader can scrape pages, crawl websites, extract structured data, and create browser sessions that your agent workflow can use.",
  },
  {
    question: "Does Reader work with RAG pipelines?",
    answer:
      "Yes. Reader can crawl or scrape web pages into clean Markdown that your system can chunk, embed, store, and retrieve.",
  },
  {
    question: "Can Reader extract structured data for agents?",
    answer:
      "Yes. Reader can extract JSON fields from web pages using a schema or instruction, then return the result with the page context.",
  },
  {
    question: "When should an agent use Browser?",
    answer:
      "Use Browser when the page requires interaction, such as clicks, forms, navigation, screenshots, PDFs, or rendered page state. Use Scrape or Crawl when the agent only needs content.",
  },
  {
    question: "Does Reader replace my agent framework?",
    answer:
      "No. Reader provides the web context layer. Your product still controls the agent framework, prompts, tools, memory, storage, user experience, and business logic.",
  },
  {
    question: "Can I control how much web context an agent collects?",
    answer:
      "Yes. Use limits, crawl depth, filters, tool selection, and credit checks to keep workflows focused.",
  },
];

function FAQItem({
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
      className="border border-edge rounded-md overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors"
      >
        <span className="text-base font-medium text-fg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-fg-muted flex-shrink-0 ml-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`px-5 pb-5 ${open ? "" : "hidden"}`}>
        <p className="text-base text-fg-muted leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
}

export function AiAgentsContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
              Web context API for AI agents
            </h1>
            <p className="text-lg text-accent-500 font-medium mb-4">
              Give your AI agent reliable access to live web content.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps AI agents scrape pages, crawl websites, extract
              structured data, and use browser sessions when a page requires
              interaction. Turn URLs into clean Markdown, JSON, crawl results,
              and browser controlled workflows from one focused API.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                Start free
              </a>
              <a
                href="https://docs.reader.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                View docs
              </a>
            </div>
            <p className="text-sm text-fg-tertiary">
              1,000 free credits every month. No card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agents need web context they can actually use */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Agents need web context they can actually use
            </h2>
            <div className="space-y-4 text-base text-fg-secondary leading-relaxed">
              <p>
                AI agents are only as useful as the context they can access.
              </p>
              <p>
                A model can reason, summarize, compare, and decide what to do
                next, but it still needs reliable input. When the task involves
                the web, that input is rarely clean. Search results are shallow.
                Raw HTML is noisy. JavaScript heavy pages may not include the
                useful content in the first response. Multi page research
                requires crawling. Some workflows require clicking, filtering, or
                navigating before the right information appears.
              </p>
              <p>
                That creates a common problem for teams building agents.
              </p>
              <p>
                The agent logic may be ready, but the web context layer becomes
                the bottleneck.
              </p>
              <p>
                Teams end up building scrapers, crawlers, browser workers,
                content cleaners, Markdown converters, extraction prompts, retry
                logic, queues, and usage controls before the agent can do useful
                work.
              </p>
              <p>Reader gives agents a cleaner path to the web.</p>
              <p>
                Use Reader when your agent needs to read a page, research a
                website, extract fields, collect source context, or open a
                browser session for pages that require interaction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Reader gives your agent */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              What Reader gives your agent
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader gives agent workflows four core web context capabilities.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-fg">
                  Read a page
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed mb-2">
                  Use Scrape when the agent needs content from one URL.
                </p>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Reader converts the page into clean Markdown, metadata, HTML,
                  screenshots, or other requested outputs. This is useful for
                  source reading, summarization, research, answer generation, and
                  first pass analysis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-fg">
                  Research a website
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed mb-2">
                  Use Crawl when the agent needs a broader context set.
                </p>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Start from one URL and collect related pages with limits, depth
                  controls, and filters. This is useful for documentation
                  research, company research, help center ingestion, competitor
                  analysis, and RAG pipelines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-fg">
                  Extract structured data
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed mb-2">
                  Use Extract when the agent needs fields instead of full page
                  text.
                </p>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Define a schema or instruction and receive structured JSON from
                  the page content. This is useful for product details, company
                  profiles, pricing pages, real estate listings, job posts,
                  article metadata, and other public web data workflows.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-fg">
                  Use a browser session
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed mb-2">
                  Use Browser when the page needs interaction.
                </p>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Create a cloud browser session and connect with automation
                  tools such as Playwright or Puppeteer. This is useful for
                  clicks, forms, navigation, screenshots, PDFs, and workflows
                  where rendered page state matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A simple model for agent web tools */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              A simple model for agent web tools
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A good agent should not use the heaviest tool for every task.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader helps you design a clear tool model:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/30">
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Agent task
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Reader capability
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-secondary">
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Read one source URL</td>
                    <td className="px-4 py-3">Scrape</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Summarize a page</td>
                    <td className="px-4 py-3">Scrape</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Research a full website</td>
                    <td className="px-4 py-3">Crawl</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Ingest documentation</td>
                    <td className="px-4 py-3">Crawl</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Pull fields from a page</td>
                    <td className="px-4 py-3">Extract</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Store structured records</td>
                    <td className="px-4 py-3">Extract</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">
                      Work with dynamic page state
                    </td>
                    <td className="px-4 py-3">Browser</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Click, type, or navigate</td>
                    <td className="px-4 py-3">Browser</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      Use web context inside an assistant
                    </td>
                    <td className="px-4 py-3">API, SDK, CLI, or MCP server</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              This keeps the workflow predictable.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              The agent can start with the lightest tool that solves the problem.
              If it needs one page, scrape it. If it needs many pages, crawl
              them. If it needs fields, extract them. If it needs interaction,
              open a browser session.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              That structure makes the agent easier to control, easier to debug,
              and easier to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clean Markdown as agent context */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Clean Markdown as agent context
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Most agents do not need raw HTML.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Raw HTML includes scripts, styles, navigation, unrelated links,
              tracking code, cookie banners, and layout markup that can confuse
              the model or waste tokens. Plain text can remove too much
              structure. Markdown gives agents a better middle ground.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader converts web pages into clean Markdown that preserves useful
              structure such as headings, lists, links, tables, and code blocks.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Clean Markdown is useful when an agent needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Read a source page",
                "Summarize an article",
                "Answer a question from documentation",
                "Compare two product or pricing pages",
                "Build a research brief",
                "Extract facts with source context",
                "Create retrieval chunks",
                "Store readable page snapshots",
                "Keep traceable source URLs",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-fg-secondary leading-relaxed">
              The goal is not just to fetch a page. The goal is to give the
              agent context that is easier to reason over.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Structured extraction for agent actions */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Structured extraction for agent actions
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reading is often only the first step.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Once an agent understands a page, it may need to take action with
              the information it found. That usually requires structured data.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              For example:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "A research agent needs company name, category, location, and description",
                "A product agent needs price, availability, rating, and product details",
                "A monitoring workflow needs plan names, limits, and pricing text",
                "A real estate workflow needs address, price, beds, baths, and amenities",
                "A content agent needs title, author, publish date, summary, and topic",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader Extract lets your workflow request the fields it needs and
              return JSON alongside the page context.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Example extraction schema:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "company_name": "string",
  "description": "string",
  "industry": "string",
  "location": "string",
  "products": "array",
  "contact_page": "string"
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              This helps your agent move from reading to workflow execution.
              Instead of passing around long page text every time, your system
              can store and reuse structured fields.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Crawling for deeper research */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Crawling for deeper research
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Many agent tasks cannot be completed from a single page.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A company research agent may need the homepage, product pages,
              about page, blog, careers page, and docs. A support agent may need
              the full help center. A developer agent may need an entire
              documentation site before it can answer questions accurately.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader Crawl lets your system collect a website context set from a
              starting URL.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Use Crawl for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Documentation research",
                "Help center ingestion",
                "Company website research",
                "Competitor website analysis",
                "Product catalog collection",
                "Public content datasets",
                "RAG ingestion",
                "Website change workflows",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Your application still controls the agent, storage, embeddings,
              prompts, and user experience. Reader handles the web context
              collection layer.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              That separation matters. Reader gives your agent the source
              material. Your product decides how to reason over it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Browser sessions when the web is interactive */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Browser sessions when the web is interactive
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Some pages need more than reading.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              An agent workflow may need to click a button, open a tab, submit a
              search, select a filter, capture a screenshot, or run an existing
              browser automation script.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader Browser gives your system a cloud browser session for those
              cases.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Use Browser when:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "The content appears after interaction",
                "The page requires navigation",
                "The workflow needs forms or filters",
                "A screenshot is needed for review",
                "A PDF needs to be generated",
                "Your team already has Playwright or Puppeteer scripts",
                "A normal scrape does not reach the right state",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Browser should not be the default for every agent task. It is the
              fallback when web context depends on interaction.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Start with Scrape or Crawl. Add Extract when fields matter. Use
              Browser when the page requires action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common agent workflows built with Reader */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-fg text-center">
              Common agent workflows built with Reader
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Research agents",
                  description:
                    "Give an agent a company URL and let it collect public context from the website. The agent can scrape the homepage, crawl related pages, extract structured company details, and generate a summary with source URLs.",
                },
                {
                  title: "Documentation agents",
                  description:
                    "Crawl a documentation site, store clean Markdown, and let an agent answer questions from the indexed content. This is useful for developer tools, support workflows, internal enablement, and customer facing assistants.",
                },
                {
                  title: "Lead research agents",
                  description:
                    "Use Reader to collect public company descriptions, product pages, team pages, contact page links, hiring signals, and other website context. Your agent can enrich accounts, summarize fit, and prepare research notes.",
                },
                {
                  title: "Competitive intelligence agents",
                  description:
                    "Crawl public competitor pages and feed the results into your own comparison workflow. Your system can store snapshots, compare changes, summarize updates, and surface meaningful differences.",
                },
                {
                  title: "Product data agents",
                  description:
                    "Scrape public product pages and extract structured fields such as product name, price, availability, rating, description, and variants. Your product can store the results and use them in downstream workflows.",
                },
                {
                  title: "Browser assisted agents",
                  description:
                    "Use Browser when the agent workflow needs interaction before it can collect the right context. This is useful for filters, forms, screenshots, PDFs, and rendered page states.",
                },
              ].map((workflow, i) => (
                <motion.div
                  key={workflow.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 border border-edge rounded-md"
                >
                  <h3 className="text-base font-semibold mb-2 text-fg">
                    {workflow.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {workflow.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Reader fits into your agent stack */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              How Reader fits into your agent stack
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader is not an agent framework. It does not force you into one
              reasoning system, vector database, orchestration layer, or model
              provider.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader gives your stack the web context layer.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              You can use Reader with:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Your own agent loop",
                "Tool calling workflows",
                "MCP based assistants",
                "RAG pipelines",
                "JavaScript or TypeScript applications",
                "Python data workflows",
                "Browser automation scripts",
                "Internal research tools",
                "Workflow automation systems",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A typical architecture looks like this:
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`User request
  → Agent decides it needs web context
  → Reader scrapes, crawls, extracts, or opens a browser session
  → Your system stores or filters the result
  → Agent reasons over the context
  → Product returns an answer, record, alert, or action`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader handles the web context step. Your application owns the
              product logic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design safer and more predictable web agents */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Design safer and more predictable web agents
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Agent web access should be controlled.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader gives you the building blocks, but your product should still
              define clear boundaries around how agents use the web.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Good patterns include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Limit the number of pages an agent can read",
                "Set crawl depth and page limits",
                "Use allowlists for trusted domains",
                "Store source URLs with every result",
                "Prefer Scrape before Browser",
                "Use Extract only when structured fields are needed",
                "Check credit usage before large workflows",
                "Review sensitive or high impact actions",
                "Keep browser sessions focused and short",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              The best agent systems do not give a model unlimited web access.
              They give it the right tools with the right constraints.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader is designed to fit that model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for agent workflows */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for agent workflows
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader uses credits so your team can understand usage across web
              context workflows.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/30">
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Operation
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Credit usage
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-secondary">
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Standard scrape</td>
                    <td className="px-4 py-3">1 credit per page</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Premium scrape</td>
                    <td className="px-4 py-3">3 credits per page</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Cache hit</td>
                    <td className="px-4 py-3">0 credits</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Failed scrape</td>
                    <td className="px-4 py-3">0 credits</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Crawl</td>
                    <td className="px-4 py-3">
                      1 credit per page discovered and scraped
                    </td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Browser session</td>
                    <td className="px-4 py-3">1 credit per minute</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Extract</td>
                    <td className="px-4 py-3">
                      Additional credits on top of the scrape
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Agent workflows should be designed with credit usage in mind.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              If an agent reads one page, that is a small scrape workflow. If it
              crawls a documentation site, usage depends on the number of pages
              collected. If it opens a browser session, usage depends on time. If
              it extracts fields, extraction adds to the scrape cost.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Use limits, filters, and tool selection to keep agent behavior
              predictable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When Reader is a good fit */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              When Reader is a good fit
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Reader is a strong fit when your agent needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Read live web pages",
                "Work with clean Markdown",
                "Crawl websites for broader context",
                "Extract structured JSON from public pages",
                "Use browser sessions for interaction",
                "Feed web content into RAG pipelines",
                "Collect public company, product, pricing, or listing data",
                "Use web context through an API, SDK, CLI, or MCP server",
                "Keep the web context layer separate from the agent framework",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader is not trying to be the whole agent platform. It is the web
              context API that helps your agent get useful source material.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-fg text-center"
          >
            Frequently asked questions
          </motion.h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
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
              Give your agent reliable web context
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Build agents that can read, research, extract, and interact with
              the web without maintaining scraping and browser infrastructure
              yourself. Start with one URL and give your agent the context it
              needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://console.reader.dev"
                className="inline-block px-8 py-3 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors text-base"
              >
                Start free
              </a>
              <a
                href="https://docs.reader.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-edge text-fg-muted font-semibold rounded-md hover:border-edge-hover hover:text-fg-secondary transition-colors text-base"
              >
                View docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
