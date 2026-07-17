"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const codeTabs = [
  {
    label: "cURL",
    code: `curl -X POST https://api.reader.dev/v1/read \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: $READER_KEY" \\
  -d '{
    "url": "https://example.com",
    "formats": ["markdown"]
  }'`,
  },
  {
    label: "JavaScript",
    code: `import { ReaderClient } from "@vakra-dev/reader-js";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });

const result = await reader.read({
  url: "https://example.com",
  formats: ["markdown"],
});

console.log(result.data.markdown);`,
  },
  {
    label: "Python",
    code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")

result = reader.read(
    url="https://example.com",
    formats=["markdown"]
)

print(result.data.markdown)`,
  },
];

const steps = [
  {
    title: "Your application sends a URL to Reader.",
    description:
      "A single POST request with the URL you want to scrape. That is the only input required.",
  },
  {
    title: "Reader loads and renders the page.",
    description:
      "The page is fully rendered so JavaScript heavy websites and modern frontend applications are handled without additional configuration.",
  },
  {
    title: "Reader extracts the useful content.",
    description:
      "Navigation, ads, cookie banners, sidebars, scripts, and boilerplate are removed. The meaningful content of the page is preserved.",
  },
  {
    title: "Reader converts the result into the formats you request.",
    description:
      "Clean Markdown, HTML, raw HTML, screenshots, metadata, or structured JSON. Request the formats your workflow needs.",
  },
  {
    title: "Your application receives the page context.",
    description:
      "The response contains the page content ready for AI agents, retrieval pipelines, databases, search indexes, or any downstream processing. Metadata is included alongside the content.",
  },
];

const features = [
  {
    title: "Clean Markdown for agents and RAG",
    description:
      "Markdown preserves headings, lists, links, tables, and code blocks while removing page noise. It gives your system a practical middle ground between raw HTML and plain text. Better chunking boundaries for retrieval. Fewer tokens for model context.",
  },
  {
    title: "Multiple output formats",
    description:
      "Markdown for AI agents and RAG pipelines. Cleaned HTML for custom parsing. Raw HTML for rendered page source. Screenshots for visual review. Metadata for filtering and indexing. Structured JSON when you add extraction.",
  },
  {
    title: "Main content extraction by default",
    description:
      "Reader focuses on the meaningful content of the page by default. Navigation menus, ads, sidebars, cookie banners, footers, and popups are removed. Turn off main content extraction or use include and exclude selectors when your workflow needs more control.",
  },
  {
    title: "Render dynamic pages",
    description:
      "JavaScript heavy websites and modern frontend applications are rendered before content is captured. Use waitForSelector when important content appears after hydration or client side loading.",
  },
  {
    title: "Standard and premium scraping modes",
    description:
      "Use standard mode for most public web content. Use premium mode when a target site needs stronger handling. Start with standard mode and switch to premium only where needed to keep credit usage predictable.",
  },
  {
    title: "Structured JSON extraction",
    description:
      "Add an extract schema and get validated JSON back alongside the Markdown. Define fields with JSON Schema, shorthand types, or plain English. Missing fields return null instead of hallucinated values.",
  },
];

const useCases = [
  {
    title: "Agent research",
    description:
      "An agent receives a source URL, scrapes the page into Markdown, extracts key facts, and writes a summary with source context.",
  },
  {
    title: "RAG ingestion",
    description:
      "Scrape documentation pages, store Markdown with metadata, chunk the content, embed it, and make it available to a retrieval pipeline.",
  },
  {
    title: "Product data collection",
    description:
      "Scrape public product pages, extract product name, price, availability, rating, and description, then store the result in your database.",
  },
  {
    title: "Competitive page review",
    description:
      "Scrape public pricing, feature, homepage, or changelog pages and store clean snapshots for comparison over time.",
  },
  {
    title: "Lead research",
    description:
      "Scrape company websites, product pages, team pages, and contact pages to collect public context for sales or research workflows.",
  },
  {
    title: "Page monitoring",
    description:
      "Scrape pages on a schedule and store clean snapshots. Compare versions to detect changes in content, pricing, or availability.",
  },
];

const faqs = [
  {
    question: "What is Reader Scrape?",
    answer:
      "Reader Scrape is a web scraping API that turns a URL into clean Markdown, HTML, metadata, screenshots, raw HTML, or structured data for AI agents and web data workflows.",
  },
  {
    question: "Is Reader Scrape built for AI agents?",
    answer:
      "Yes. Reader Scrape is designed to give agents clean web context they can read, summarize, extract from, and pass into downstream workflows.",
  },
  {
    question: "Does Reader return Markdown?",
    answer:
      "Yes. Markdown is the default output and is the best fit for most agent and RAG workflows.",
  },
  {
    question: "Can Reader scrape JavaScript heavy pages?",
    answer:
      "Reader can render dynamic pages and can wait for a selector before capturing content. Use Browser if the workflow needs direct interaction.",
  },
  {
    question: "Can Reader return HTML?",
    answer:
      "Yes. Reader can return cleaned HTML, and every response includes raw HTML from the rendered page.",
  },
  {
    question: "Can Reader return screenshots?",
    answer:
      "Yes. You can request a full page screenshot when visual context matters.",
  },
  {
    question: "Can Reader extract structured JSON?",
    answer:
      "Yes. Add extraction when you need fields such as product data, company details, listing information, article metadata, or pricing details.",
  },
  {
    question: "How much does a scrape cost?",
    answer:
      "A standard scrape costs 1 credit per page. A premium scrape costs 3 credits per page. Cache hits and failed scrapes cost 0 credits.",
  },
  {
    question: "When should I use Crawl instead of Scrape?",
    answer:
      "Use Crawl when you need many pages from a website. Use Scrape when you need one URL.",
  },
  {
    question: "When should I use Browser instead of Scrape?",
    answer:
      "Use Browser when the workflow requires interaction, such as clicks, forms, navigation, screenshots after actions, PDFs, or an existing Playwright or Puppeteer script.",
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

export function ScrapeContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-fg">
                Web scraping API for AI agents
              </h1>
              <p className="text-lg text-accent-500 font-medium mb-4">
                Turn any public URL into clean web context your agent can use.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed mb-8">
                Reader Scrape converts web pages into clean Markdown, HTML,
                metadata, screenshots, and structured data so your AI agents,
                RAG pipelines, and data workflows can work with live web content
                without maintaining scraping infrastructure.
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
            </div>

            {/* Code example */}
            <div className="rounded-md border border-edge overflow-hidden">
              <div className="flex border-b border-edge bg-surface/50">
                {codeTabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 text-xs font-mono transition-colors ${
                      activeTab === i
                        ? "text-fg bg-page border-b-2 border-accent-500"
                        : "text-fg-tertiary hover:text-fg-muted"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
                  {codeTabs[activeTab].code}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              From URL to usable web context
            </h2>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                AI agents do not need raw web pages. They need context they can
                read, reason over, search, summarize, extract from, and pass
                into downstream tools.
              </p>
              <p>
                A normal web page is full of noise. Navigation links, cookie
                banners, sidebars, scripts, style tags, unrelated footers,
                newsletter popups, and tracking code can all get mixed into the
                content your model receives. If you send that directly into an
                agent or RAG pipeline, you waste tokens and reduce the quality
                of the answer.
              </p>
              <p>
                Reader Scrape gives your system a cleaner path. Send Reader a
                URL and get back content that is ready for agent workflows:
                clean Markdown for model context, metadata for storage and
                filtering, cleaned HTML for inspection, raw HTML for the
                rendered page source, screenshots for visual context, and
                structured JSON when you add extraction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10 text-fg"
          >
            What Reader Scrape does
          </motion.h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-sm font-semibold text-accent-500">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-fg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10 text-fg text-center"
          >
            Features
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border border-edge rounded-md bg-surface/30 hover:border-edge-hover transition-colors"
              >
                <h3 className="text-base font-semibold mb-2 text-fg">
                  {feature.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10 text-fg text-center"
          >
            Use cases
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border border-edge rounded-md"
              >
                <h3 className="text-base font-semibold mb-2 text-fg">
                  {useCase.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Formats Table */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Output formats for different workflows
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Different workflows need different outputs. Reader lets you request
              the format that fits your use case.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Output
                    </th>
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Best for
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-muted">
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">Markdown</td>
                    <td className="px-5 py-3">
                      AI agents, RAG pipelines, summaries, search, storage
                    </td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">HTML</td>
                    <td className="px-5 py-3">
                      Custom parsing, inspection, debugging, fallback processing
                    </td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">Raw HTML</td>
                    <td className="px-5 py-3">
                      Lower level access to the rendered page source
                    </td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">
                      Screenshot
                    </td>
                    <td className="px-5 py-3">
                      Visual review, QA, page state capture, multimodal
                      workflows
                    </td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">Metadata</td>
                    <td className="px-5 py-3">
                      Filtering, indexing, source tracking, freshness checks
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-medium text-fg">
                      Structured JSON
                    </td>
                    <td className="px-5 py-3">
                      Product data, company data, listing data, article fields
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                Markdown is the default because it is usually the most useful
                format for AI systems. It preserves structure such as headings,
                lists, links, tables, and code blocks while removing much of the
                page noise that makes raw HTML difficult to use.
              </p>
              <p>
                HTML and raw HTML are useful when you need more control.
                Screenshots are useful when the visual state of the page
                matters. Metadata helps you store and reason about the page
                later.
              </p>
              <p>
                If your workflow needs fields instead of full text, add Extract
                and return structured JSON alongside the page context.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Extraction */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Main content extraction by default
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              Most pages include content your agent does not need. Navigation
              menus, ads, sidebars, cookie banners, footers, and popups can make
              a page look much larger and less useful than it really is. Reader
              uses main content extraction by default so the response focuses on
              the meaningful content of the page.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              This is useful for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-base text-fg-muted leading-relaxed mb-6">
              <li>Article pages</li>
              <li>Documentation pages</li>
              <li>Blog posts</li>
              <li>Help center pages</li>
              <li>Product pages</li>
              <li>Research sources</li>
              <li>RAG ingestion</li>
              <li>Agent summaries</li>
            </ul>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              There are times when you may want the full page instead. In those
              cases, turn off main content extraction:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
                  {`{
  "url": "https://example.com",
  "onlyMainContent": false
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              You can also use include and exclude selectors when your workflow
              needs more precise control over which parts of a page should stay
              or be removed.
            </p>
            <div className="rounded-md border border-edge overflow-hidden">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
                  {`{
  "url": "https://example.com",
  "includeTags": ["article", "main"],
  "excludeTags": [".ads", ".newsletter", "aside"]
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Render Dynamic Pages */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Render dynamic pages
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              Many modern websites do not send their full content in the first
              HTML response. Product grids, dashboards, search results,
              documentation apps, and marketing pages may load important content
              after JavaScript runs. Reader can render pages before returning the
              result, which makes it useful for JavaScript heavy websites and
              modern frontend applications.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              For pages where the important content appears after hydration or
              client side loading, tell Reader to wait for a selector before
              capturing the page:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
                  {`{
  "url": "https://shop.example.com/search?q=headphones",
  "waitForSelector": ".product-card"
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-muted leading-relaxed">
              Reader waits until the selector appears or the request timeout is
              reached. Use Scrape for dynamic pages when you need the rendered
              content. Use Browser when your workflow needs direct interaction,
              such as clicking filters, filling forms, navigating through steps,
              or capturing state after multiple actions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standard and Premium Modes */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Standard and premium scraping modes
            </h2>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                Reader supports different proxy modes so you can choose the
                level of handling a page needs. Use standard mode for normal
                pages. This is the default path for most public web content and
                is the most efficient way to scrape pages into Markdown or other
                formats.
              </p>
              <p>
                Use premium mode when a target site needs stronger handling.
                Premium mode costs more credits because it uses more expensive
                infrastructure. The page response includes the resolved{" "}
                <code className="text-sm bg-surface/50 px-1.5 py-0.5 rounded border border-edge/50">
                  proxyMode
                </code>{" "}
                in metadata, which helps you inspect how the request was
                handled.
              </p>
              <p>
                For large workflows, start with standard mode unless you already
                know the target pages require premium handling. If certain pages
                fail or are consistently blocked, use premium mode for those
                targets instead of applying it everywhere. This keeps credit
                usage easier to control.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When to Use Another Capability */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              When to use another Reader capability
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Scrape is not always the right tool. Reader works best when each
              capability is used for the job it is designed to handle.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Crawl when you need many pages
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your agent needs context from an entire documentation site,
                  help center, blog, competitor website, or product catalog, use
                  Crawl instead of calling Scrape one page at a time. Crawl
                  starts from a URL and collects multiple page results with
                  limits, depth controls, and URL filters.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Extract when you need fields
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your application needs product name, price, availability,
                  article title, publish date, company description, address, or
                  listing details, add structured extraction. Scrape gives you
                  page context. Extract turns that context into JSON your
                  application can store and use.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Browser when the page needs interaction
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If the workflow requires clicks, forms, navigation,
                  screenshots, PDFs, or an existing Playwright or Puppeteer
                  script, use Browser. Browser gives your automation code a real
                  session to control. Scrape is best when you need page content.
                  Browser is best when the workflow depends on interaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credit Usage */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for scraping
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Reader uses credits so you can understand usage by workflow.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Operation
                    </th>
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Credit usage
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-muted">
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">
                      Standard scrape
                    </td>
                    <td className="px-5 py-3">1 credit per page</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">
                      Premium scrape
                    </td>
                    <td className="px-5 py-3">3 credits per page</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">
                      Cache hit
                    </td>
                    <td className="px-5 py-3">0 credits</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">
                      Failed scrape
                    </td>
                    <td className="px-5 py-3">0 credits</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">Crawl</td>
                    <td className="px-5 py-3">
                      1 credit per page discovered and scraped
                    </td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">
                      Browser session
                    </td>
                    <td className="px-5 py-3">1 credit per minute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                Every account includes 1,000 free credits each month. Credits
                reset at the start of each billing period.
              </p>
              <p>
                For scraping workflows, estimate usage by the number of pages
                you expect to read and the mode those pages need. The simple
                rule is: start with standard scrape. Use premium mode only where
                it is needed. Use Browser only when the workflow requires
                interaction.
              </p>
            </div>
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

      {/* CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Turn your first URL into agent context
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Start with one URL. Get clean Markdown, metadata, HTML,
              screenshots, or structured data back from one API.
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
