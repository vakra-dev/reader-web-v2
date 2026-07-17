"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Reader for RAG pipelines?",
    answer:
      "Reader helps RAG pipelines scrape and crawl websites into clean Markdown, metadata, and page level results that can be chunked, embedded, stored, and retrieved.",
  },
  {
    question: "Can Reader crawl documentation for RAG?",
    answer:
      "Yes. Reader can start from a documentation URL, discover related pages, and return clean Markdown for each page collected.",
  },
  {
    question: "Why use Markdown for RAG?",
    answer:
      "Markdown preserves useful structure such as headings, lists, links, tables, and code blocks while removing much of the noise found in raw HTML.",
  },
  {
    question: "Does Reader replace my vector database?",
    answer:
      "No. Reader handles web scraping, crawling, and cleanup. Your application still owns chunking, embeddings, vector storage, retrieval, reranking, and answer generation.",
  },
  {
    question: "Can Reader handle JavaScript heavy docs?",
    answer:
      "Reader can render modern pages before returning content, which is useful for documentation sites and frontend applications.",
  },
  {
    question: "Can I keep source URLs with chunks?",
    answer:
      "Yes. Reader returns page level data and metadata that your pipeline can carry into chunk records for citations, debugging, and refreshes.",
  },
  {
    question: "How do credits work for RAG ingestion?",
    answer:
      "RAG usage is usually based on pages scraped or crawled. Standard scrapes cost 1 credit per page, premium scrapes cost 3 credits per page, and crawls cost based on pages discovered and scraped.",
  },
  {
    question: "Should I crawl an entire website?",
    answer:
      "Only if the whole website is useful to the retrieval task. Use limits, depth controls, include patterns, and exclude patterns to keep your index focused.",
  },
  {
    question: "Can Reader extract structured data for RAG?",
    answer:
      "Yes. Reader can extract structured JSON from pages when your workflow needs fields in addition to Markdown.",
  },
  {
    question: "Is Reader only for public websites?",
    answer:
      "Reader is designed for web content workflows. Your application should only scrape or crawl pages it is allowed to access and should handle private or authenticated sources carefully.",
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

export function RagPipelinesContent() {
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
              Crawl websites for RAG pipelines
            </h1>
            <p className="text-lg text-accent-500 font-medium mb-4">
              Turn public websites into clean Markdown your retrieval system can
              use.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps teams scrape and crawl websites into page level
              Markdown, metadata, and source linked content for RAG pipelines, AI
              search, documentation assistants, and knowledge ingestion
              workflows.
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

      {/* RAG pipelines need clean source content */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              RAG pipelines need clean source content
            </h2>
            <div className="space-y-4 text-base text-fg-secondary leading-relaxed">
              <p>
                A RAG pipeline is only as good as the content it retrieves.
              </p>
              <p>
                If your source data is noisy, incomplete, duplicated, or hard to
                chunk, the retrieval layer will struggle. The model may receive
                the wrong context, miss important details, or answer from
                boilerplate instead of the actual page content.
              </p>
              <p>Web content makes this harder.</p>
              <p>
                A useful page may be surrounded by navigation links, sidebars,
                scripts, cookie banners, footers, related posts, tracking code,
                and styling. Documentation sites may use client side rendering.
                Help centers may have many related pages. Product docs may include
                code blocks, tables, links, and headings that need to be
                preserved.
              </p>
              <p>
                Reader gives your RAG pipeline a cleaner starting point.
              </p>
              <p>
                Use Reader to turn URLs and websites into Markdown that keeps
                useful structure while removing much of the noise that raw HTML
                introduces.
              </p>
              <p>
                Your system can then chunk, embed, store, retrieve, and cite that
                content in the way that fits your product.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Where Reader fits in a RAG pipeline */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Where Reader fits in a RAG pipeline
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader is the ingestion layer for web content.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              It does not replace your vector database, embedding model,
              retriever, reranker, prompt layer, or application logic. It gives
              those systems better source material.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A typical workflow looks like this:
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Website URL
  → Reader scrape or crawl
  → Clean Markdown and metadata
  → Chunking
  → Embeddings
  → Vector store or search index
  → Retrieval
  → Answer generation with source links`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader handles the web collection and cleanup step. Your
              application handles storage, retrieval, model calls, evaluation,
              and user experience.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              That separation is important. RAG systems vary widely. Some teams
              use vector databases. Some use full text search. Some use hybrid
              retrieval. Some chunk by heading. Some chunk by token count. Reader
              gives you clean page content so you can build the retrieval
              strategy that works for your users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scrape one page or crawl a full site */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Scrape one page or crawl a full site
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Not every RAG workflow starts the same way.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Sometimes you already know the exact URLs to ingest. Other times
              you only have a starting page and need to discover related pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader supports both patterns.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/30">
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Workflow
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Use Reader for
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-secondary">
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">One known URL</td>
                    <td className="px-4 py-3">
                      Scrape the page into Markdown
                    </td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Many known URLs</td>
                    <td className="px-4 py-3">Batch scrape the URL list</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">A full website section</td>
                    <td className="px-4 py-3">Crawl from a seed URL</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Documentation ingestion</td>
                    <td className="px-4 py-3">
                      Crawl docs with limits and filters
                    </td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Help center ingestion</td>
                    <td className="px-4 py-3">
                      Crawl public support articles
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Refreshing content</td>
                    <td className="px-4 py-3">
                      Re-scrape or re-crawl selected pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Scrape when you need one page. Use batch scraping when you
              already have a URL list. Use Crawl when you need Reader to discover
              pages from a starting URL.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              For example, a documentation RAG pipeline may start with:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "url": "https://docs.example.com",
  "maxPages": 250,
  "maxDepth": 4,
  "includePatterns": ["/docs"],
  "excludePatterns": ["/login", "/signup"],
  "formats": ["markdown"]
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              This keeps the crawl focused on the pages that should become part
              of the retrieval index.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Markdown works well for RAG */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Why Markdown works well for RAG
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Raw HTML is not ideal retrieval content. It has too much noise and
              too much markup that does not help users get better answers.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Plain text can also be too flat. It often loses headings, lists,
              links, code blocks, and tables that help retrieval systems
              understand how ideas relate to each other.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Markdown is a practical middle ground.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Reader&apos;s Markdown output can help preserve:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Headings for section aware chunking",
                "Lists for grouped facts",
                "Links for source context",
                "Tables for structured information",
                "Code blocks for technical documentation",
                "Paragraph structure for readable chunks",
                "Page metadata for filtering and citations",
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
              This makes Markdown useful for documentation assistants, support
              bots, internal search, research tools, AI agents, and knowledge
              base ingestion.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              A good RAG pipeline should not just store text. It should store
              source context with enough structure to retrieve the right passage
              later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keep source metadata with every chunk */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Keep source metadata with every chunk
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Source tracking matters.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              When your system ingests web content, every chunk should be
              traceable back to the page it came from. This helps with citations,
              debugging, refreshes, deduplication, access review, and user trust.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader responses can include page metadata such as title,
              description, URL, status, cache information, and scrape time. Your
              ingestion pipeline should carry that metadata forward when it
              creates chunks.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A useful chunk record might look like this:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "id": "docs-authentication-003",
  "url": "https://docs.example.com/guides/authentication",
  "title": "Authentication Guide",
  "section": "API keys",
  "text": "Use an API key to authenticate every request...",
  "metadata": {
    "source": "docs.example.com",
    "scrapedAt": "2026-04-04T12:00:00Z",
    "contentType": "documentation"
  }
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              This makes retrieval outputs easier to inspect. If a user asks
              where an answer came from, your application can show the source
              URL. If a page changes later, your system knows which chunks need
              to be refreshed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Build a better ingestion workflow */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Build a better ingestion workflow
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader solves the web content step, but your RAG pipeline should
              still be designed carefully.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A strong ingestion workflow usually includes:
            </p>
            <div className="space-y-6 mb-6">
              {[
                {
                  step: "1. Source selection",
                  desc: "Decide which websites, docs, help centers, or pages should be included.",
                },
                {
                  step: "2. Crawl or scrape",
                  desc: "Use Reader to collect clean Markdown and metadata.",
                },
                {
                  step: "3. Filtering",
                  desc: "Remove pages that should not enter the index, such as login pages, duplicate pages, thin pages, or irrelevant paths.",
                },
                {
                  step: "4. Chunking",
                  desc: "Split Markdown into useful sections. Headings are often better boundaries than fixed token counts alone.",
                },
                {
                  step: "5. Metadata enrichment",
                  desc: "Attach URL, title, section, content type, timestamp, and any product specific fields.",
                },
                {
                  step: "6. Embedding or indexing",
                  desc: "Store chunks in your vector database, search index, or hybrid retrieval system.",
                },
                {
                  step: "7. Retrieval testing",
                  desc: "Test whether expected questions retrieve the right source passages.",
                },
                {
                  step: "8. Refresh strategy",
                  desc: "Re-scrape or re-crawl important sources on a schedule controlled by your application.",
                },
              ].map((item, i) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-sm font-semibold text-accent-500">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-fg mb-1">
                      {item.step.replace(/^\d+\.\s*/, "")}
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader gives you cleaner input, but the quality of the final RAG
              system still depends on thoughtful retrieval design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common RAG use cases */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-fg text-center">
              Common RAG use cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Documentation assistant",
                  description:
                    "Crawl public or internal documentation, store clean Markdown chunks, and let users ask questions from source linked docs. This is useful for developer tools, APIs, SaaS products, internal engineering teams, and customer support teams.",
                },
                {
                  title: "Help center search",
                  description:
                    "Ingest support articles and knowledge base pages so users can retrieve accurate answers from current public help content.",
                },
                {
                  title: "Website knowledge base",
                  description:
                    "Turn a company website, blog, changelog, and product pages into a searchable knowledge base for internal teams or AI assistants.",
                },
                {
                  title: "Research agent memory",
                  description:
                    "Let an agent crawl a group of public pages, store source context, and retrieve that context later while generating summaries or reports.",
                },
                {
                  title: "Product and policy knowledge",
                  description:
                    "Crawl product documentation, pricing pages, terms pages, support docs, and release notes so your system can answer operational questions with citations.",
                },
                {
                  title: "AI search over public pages",
                  description:
                    "Build search experiences over curated website collections using Reader for content collection and your own retrieval system for ranking and answers.",
                },
              ].map((useCase, i) => (
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
          </motion.div>
        </div>
      </section>

      {/* Refreshing web content over time */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Refreshing web content over time
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              RAG pipelines become stale when source pages change.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader helps you collect the current page content, but your
              application should decide when and how to refresh the index.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Common refresh patterns include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Re-crawl high value sources daily or weekly",
                "Re-scrape specific pages when users report stale answers",
                "Store content hashes to detect changed pages",
                "Refresh only pages that changed since the last scrape",
                "Keep previous versions for audit or comparison",
                "Re-embed only changed chunks",
                "Remove chunks for pages that no longer exist",
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
              This is especially useful for documentation, pricing pages, help
              centers, changelogs, product pages, and competitor research.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader provides the clean page content. Your application owns
              scheduling, diffing, storage, re-indexing, and alerting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Handling JavaScript heavy documentation */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Handling JavaScript heavy documentation
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Many modern documentation sites are built with frameworks that
              render content on the client side. A simple HTTP fetch may not
              return the content users see in the browser.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can render dynamic pages before returning content, which
              makes it useful for documentation sites, marketing sites, and
              frontend applications where content appears after JavaScript runs.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              For RAG pipelines, this matters because missing rendered content
              can create silent retrieval gaps. Your index may look complete, but
              important sections may never have been ingested.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader helps reduce that risk by giving you rendered page content
              in a format your pipeline can process.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              For pages that need direct interaction before content appears, use
              Browser sessions. For normal rendered documentation and public
              pages, Scrape or Crawl is usually the right starting point.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for RAG ingestion */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for RAG ingestion
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader uses credits based on the type of web context workflow.
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
              For RAG pipelines, the main usage driver is usually the number of
              pages ingested.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A small documentation site may only need a few dozen pages. A
              larger help center may need hundreds or thousands. Use crawl
              limits, depth controls, include patterns, and exclude patterns to
              keep ingestion focused.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Good RAG ingestion is not about collecting every page possible. It
              is about collecting the right pages and keeping them clean, fresh,
              and traceable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When Reader is a good fit for RAG */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              When Reader is a good fit for RAG
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Reader is a strong fit when your RAG pipeline needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Ingest public websites",
                "Crawl documentation",
                "Convert web pages into clean Markdown",
                "Preserve source URLs and metadata",
                "Handle JavaScript rendered pages",
                "Collect page level results",
                "Feed content into a vector database or search index",
                "Support agent research workflows",
                "Refresh web content over time",
                "Keep the web ingestion layer separate from the retrieval layer",
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
              Reader is not a complete RAG platform. It does not decide your
              chunking strategy, embedding model, storage system, retrieval
              ranking, evaluation framework, or answer generation prompt.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              That is intentional. Reader gives you clean web context so your
              team can build the RAG system your product actually needs.
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
              Build RAG on cleaner web content
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Give your retrieval pipeline better source material. Use Reader to
              scrape and crawl websites into clean Markdown, metadata, and page
              level results your system can chunk, embed, retrieve, and cite.
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
