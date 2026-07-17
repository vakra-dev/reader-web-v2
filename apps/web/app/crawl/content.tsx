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
    "url": "https://docs.example.com",
    "maxPages": 100,
    "maxDepth": 3,
    "formats": ["markdown"]
  }'`,
  },
  {
    label: "JavaScript",
    code: `import { ReaderClient } from "@vakra-dev/reader-js";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });

const result = await reader.read({
  url: "https://docs.example.com",
  maxPages: 100,
  maxDepth: 3,
  formats: ["markdown"],
});

for (const page of result.data) {
  console.log(\`\${page.url}: \${page.markdown.length} chars\`);
}`,
  },
  {
    label: "Python",
    code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")

result = reader.read(
    url="https://docs.example.com",
    max_pages=100,
    max_depth=3,
    formats=["markdown"]
)

for page in result.data:
    print(f"{page.url}: {len(page.markdown)} chars")`,
  },
];

const steps = [
  {
    title: "Start with a URL.",
    description:
      "One URL is all Reader needs. This is the seed from which the crawler begins discovery.",
  },
  {
    title: "Reader discovers related pages.",
    description:
      "Reader follows links from the seed page, applies the limits and filters you provide, and adds discovered pages to the crawl queue.",
  },
  {
    title: "Scope controls keep the crawl focused.",
    description:
      "Set maximum pages, maximum depth, URL include patterns, and URL exclude patterns to define exactly how much of a website to collect.",
  },
  {
    title: "Every page is scraped and converted.",
    description:
      "Each discovered page is scraped and converted to clean Markdown. Reader handles rendering, content extraction, and format conversion for every page.",
  },
  {
    title: "Results return as an async job.",
    description:
      "Your application does not need to wait for every page to finish. Poll for results, stream progress where supported, or use async job handling in the SDK.",
  },
];

const features = [
  {
    title: "Clean Markdown across every page",
    description:
      "Reader converts crawled pages into clean Markdown so your system does not have to process raw HTML from every URL. Headings, lists, links, tables, and code blocks are preserved. Page noise is removed.",
  },
  {
    title: "Explicit scope controls",
    description:
      "Define the starting URL, maximum number of pages, maximum crawl depth, URL patterns to include, URL patterns to exclude, output formats, and whether to focus on main page content.",
  },
  {
    title: "Page level results with source URLs",
    description:
      "Every page result keeps its source URL. That makes the context easier to cite, refresh, compare, and debug. Results include Markdown, metadata, status code, scrape duration, and error details for failed pages.",
  },
  {
    title: "Crawl versus scrape versus batch",
    description:
      "Use Scrape when you have one URL. Use Batch when you already have many known URLs. Use Crawl when you have a starting URL and need Reader to discover related pages.",
  },
  {
    title: "Credit usage you can predict",
    description:
      "Credits are tied to the number of pages discovered and scraped. Use maxPages, maxDepth, include patterns, and exclude patterns to keep crawl usage predictable. Test on a small crawl before scaling.",
  },
  {
    title: "Async with job handling",
    description:
      "Large crawls run asynchronously. The SDK handles job polling automatically. You can check job status, monitor progress, and retrieve results when the crawl completes.",
  },
];

const useCases = [
  {
    title: "RAG over documentation",
    description:
      "Crawl a documentation site, convert each page into Markdown, chunk the content, embed it, and store it in your retrieval system. Documentation structure makes for strong retrieval context.",
  },
  {
    title: "Support and help center ingestion",
    description:
      "Crawl public support articles, help center pages, and knowledge base content so a support agent can answer questions from current documentation.",
  },
  {
    title: "Company research",
    description:
      "Start with a company homepage and collect related public pages. Your agent can summarize what the company does and extract structured fields from the collected context.",
  },
  {
    title: "Competitive intelligence",
    description:
      "Crawl public competitor pages and store clean snapshots. Compare versions, summarize changes, and alert your team when important pages change.",
  },
  {
    title: "Product and listing collection",
    description:
      "Crawl public category pages or listing collections, then extract fields from individual pages. Useful for e-commerce, real estate, directories, and marketplaces.",
  },
];

const faqs = [
  {
    question: "What is Reader Crawl?",
    answer:
      "Reader Crawl is a web crawler API that starts from a URL, discovers related pages, scrapes them, and returns clean page level results for AI agents and web data workflows.",
  },
  {
    question: "Is Reader Crawl built for AI agents?",
    answer:
      "Yes. Reader Crawl helps agents collect broader web context from websites, documentation, help centers, public pages, and research sources.",
  },
  {
    question: "Does Reader Crawl return Markdown?",
    answer:
      "Yes. Reader can return clean Markdown for each crawled page, which is useful for agents, RAG pipelines, search, summarization, and storage.",
  },
  {
    question: "When should I use Crawl instead of Scrape?",
    answer:
      "Use Crawl when your workflow needs many related pages from a website. Use Scrape when you only need one URL.",
  },
  {
    question: "Can I limit how many pages Reader crawls?",
    answer:
      "Yes. Use page limits, depth limits, and URL patterns to control crawl scope.",
  },
  {
    question: "Can I crawl documentation for RAG?",
    answer:
      "Yes. Crawl is a strong fit for documentation ingestion because it can collect multiple pages and return clean Markdown for downstream chunking and embedding.",
  },
  {
    question: "Does Reader handle JavaScript heavy pages during crawls?",
    answer:
      "Reader can render modern pages before returning results. Use Browser if the workflow needs direct interaction such as clicking, typing, navigation, screenshots after actions, or forms.",
  },
  {
    question: "How do crawl credits work?",
    answer:
      "Crawl credits are based on the pages discovered and scraped. Use crawl limits and filters to keep usage predictable.",
  },
  {
    question: "Can I extract structured data from crawled pages?",
    answer:
      "Yes. Use Extract when you need fields such as product data, company data, listing details, article metadata, or pricing information from the collected pages.",
  },
  {
    question: "Is Crawl useful for monitoring?",
    answer:
      "Yes. Reader can collect clean page snapshots for monitoring workflows. Your application should handle scheduling, storage, comparison, summarization, and alerts.",
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

export function CrawlContent() {
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
                Web crawler API for AI agents
              </h1>
              <p className="text-lg text-accent-500 font-medium mb-4">
                Turn websites into clean web context your agent can use.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed mb-8">
                Reader Crawl starts from a URL, discovers related pages, and
                returns clean Markdown, metadata, and page level results for AI
                agents, RAG pipelines, research tools, and web data workflows.
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
              From one URL to a website context set
            </h2>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                A single page is often not enough for an AI agent. If an agent
                needs to answer questions about a product, understand a company,
                ingest documentation, compare competitors, or research a topic,
                it usually needs context from many pages.
              </p>
              <p>
                Building that crawler yourself is more work than it first
                appears. You need to discover links, avoid crawling forever,
                respect page limits, render modern websites, remove boilerplate,
                convert HTML into useful text, handle failures, store page
                results, and keep the workflow moving asynchronously.
              </p>
              <p>
                Reader Crawl gives your system a simpler path. Start with a URL.
                Set the scope. Reader discovers and scrapes pages, then returns
                clean results your agent or pipeline can use.
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
            What Reader Crawl does
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

      {/* Crawl vs Scrape vs Batch */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Crawl versus scrape versus batch
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Reader uses the same read primitive for scrape, batch, and crawl,
              but each mode serves a different job.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Workflow
                    </th>
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Use this when
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-muted">
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">Scrape</td>
                    <td className="px-5 py-3">
                      You have one URL and need content back quickly
                    </td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3 font-medium text-fg">Batch</td>
                    <td className="px-5 py-3">
                      You already have many known URLs
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-medium text-fg">Crawl</td>
                    <td className="px-5 py-3">
                      You have a starting URL and need Reader to discover
                      related pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                Use Scrape when your agent needs one page. Use Batch when your
                system already has a list of URLs, such as 500 product pages,
                100 blog posts, or a saved list of company pages. Use Crawl when
                your system does not yet know every URL.
              </p>
              <p>
                This distinction keeps your workflows predictable. Do not crawl
                when you already have a clean URL list. Do not batch scrape when
                discovery is the real problem. Do not scrape one page at a time
                when the task clearly needs a website context set.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope Controls */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Control the crawl scope
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              Open ended crawls are risky. They can collect irrelevant pages,
              waste credits, and create messy datasets. Reader Crawl is designed
              around explicit scope controls so your application can decide how
              much of a website to collect.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Use crawl controls to define:
            </p>
            <ul className="list-disc list-inside space-y-1 text-base text-fg-muted leading-relaxed mb-6">
              <li>The starting URL</li>
              <li>The maximum number of pages</li>
              <li>The maximum crawl depth</li>
              <li>Which URL patterns to include</li>
              <li>Which URL patterns to exclude</li>
              <li>Which output formats to return</li>
              <li>Whether to focus on main page content</li>
              <li>How your application handles async results</li>
            </ul>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              For example, a documentation crawl may include only{" "}
              <code className="text-sm bg-surface/50 px-1.5 py-0.5 rounded border border-edge/50">
                /docs
              </code>{" "}
              pages and exclude account pages, changelogs, marketing pages, or
              blog posts.
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
                  {`{
  "url": "https://example.com/docs",
  "maxPages": 250,
  "maxDepth": 4,
  "includePatterns": ["/docs"],
  "excludePatterns": ["/login", "/signup", "/pricing"],
  "formats": ["markdown"]
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-muted leading-relaxed">
              Good crawl scope is part of good agent design. Give your agent the
              context it needs, not the entire internet.
            </p>
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
              Credit usage for crawling
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Reader uses credits so teams can understand usage by workflow. For
              crawl workflows, credits are tied to the number of pages
              discovered and scraped. A crawl that processes 100 pages uses more
              credits than a crawl that processes 10 pages.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-4">
              Use limits to control crawl usage:
            </p>
            <ul className="list-disc list-inside space-y-1 text-base text-fg-muted leading-relaxed mb-6">
              <li>
                Set{" "}
                <code className="text-sm bg-surface/50 px-1.5 py-0.5 rounded border border-edge/50">
                  maxPages
                </code>{" "}
                before running a large crawl
              </li>
              <li>
                Set{" "}
                <code className="text-sm bg-surface/50 px-1.5 py-0.5 rounded border border-edge/50">
                  maxDepth
                </code>{" "}
                to avoid collecting unrelated pages
              </li>
              <li>Use include patterns to focus on relevant sections</li>
              <li>
                Use exclude patterns to skip pages your agent does not need
              </li>
              <li>Test on a small crawl before scaling</li>
            </ul>
            <p className="text-base text-fg-muted leading-relaxed">
              This makes crawl usage easier to predict and keeps agents from
              collecting more context than the task requires.
            </p>
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
              Crawl is powerful, but it should not be the default for every
              workflow.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Scrape when you only need one URL
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your agent already knows the exact page it needs to read,
                  use Scrape. It is simpler, faster, and easier to reason about.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Batch when you already have the URL list
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your database already contains the URLs, batch scraping is
                  usually a better fit than discovery based crawling.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Extract when you need structured fields
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If the workflow needs product name, price, company
                  description, location, title, author, or listing details, add
                  extraction to turn page context into JSON.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Browser when pages require interaction
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If the workflow needs clicks, forms, filters, screenshots
                  after interaction, PDFs, or an existing Playwright or
                  Puppeteer script, use Browser. Crawl is best for collecting
                  website context. Browser is best for interacting with
                  websites.
                </p>
              </div>
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
              Turn a website into agent context
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Start with one URL. Collect clean page results your agent can
              read, search, store, summarize, or use in a RAG pipeline.
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
