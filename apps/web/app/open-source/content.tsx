"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-edge rounded-md overflow-hidden">
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
    </div>
  );
}

export function OpenSourceContent() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
              Open source web context for AI agents
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Reader is built for developers who want to understand, inspect, and
              build with the web context layer behind their AI agents.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              Reader turns URLs into clean Markdown, structured JSON, crawl
              results, and browser sessions so agents can read, research,
              extract, and act on public web content. The project is built around
              a simple idea: AI agents need reliable web context, and developers
              should be able to see how that context is produced.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/vakra-dev/reader"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                View GitHub
              </a>
              <a
                href="https://docs.reader.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Read docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why open source matters */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            Why open source matters for web context
          </motion.h2>
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-fg-muted leading-relaxed"
            >
              Web data is messy. A page may include useful content, navigation,
              scripts, ads, cookie banners, tracking code, repeated layout
              sections, hidden text, JavaScript rendered content, or
              inconsistent HTML. Before an AI agent can use that page, your
              system has to turn it into something readable, structured, and
              reliable.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-fg-muted leading-relaxed"
            >
              For many teams, that web context layer becomes a black box. They
              send a URL to a tool, get text back, and hope the output is clean
              enough for an agent, retrieval system, extractor, or dataset
              pipeline.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-fg-muted leading-relaxed"
            >
              Open source changes that relationship. With Reader, developers can
              inspect the ideas behind the system, understand the product model,
              test real URLs, review the output, and build workflows with more
              confidence. That matters because web context is not just an
              implementation detail. It is the source material your agent reasons
              over.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            Reader's open source philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-fg-muted leading-relaxed mb-6"
          >
            Reader is not trying to be a black box scraping product. It is
            designed around a transparent developer workflow: URL or website to
            clean web context to Markdown, JSON, crawl results, or browser
            session to your agent, RAG pipeline, dataset, or application.
          </motion.p>
          <div className="space-y-8">
            {[
              {
                title: "Clean outputs matter",
                description:
                  "Markdown quality, source URLs, and metadata are core to the product model. Structured extraction should be inspectable.",
              },
              {
                title: "Start with the lightest tool",
                description:
                  "Crawls should be scoped and understandable. Browser sessions should be used when interaction is actually needed, not as a default.",
              },
              {
                title: "Your application stays in control",
                description:
                  "Reader gives your system the web context. Your application decides what to do with it, including business logic, storage, alerts, and decisions.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-fg">
                  {item.title}
                </h3>
                <p className="text-base text-fg-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            The core capabilities
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Capability
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      What it does
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Why it matters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      capability: "Scrape",
                      what: "Turns one URL into clean page context",
                      why: "Give an agent readable source material",
                    },
                    {
                      capability: "Crawl",
                      what: "Collects related pages from a website",
                      why: "Build site context for RAG, research, or datasets",
                    },
                    {
                      capability: "Extract",
                      what: "Turns page content into structured JSON",
                      why: "Store fields your application can use",
                    },
                    {
                      capability: "Browser",
                      what: "Opens a cloud browser session",
                      why: "Handle pages that need interaction",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.capability}
                      className={i < 3 ? "border-b border-edge/50" : ""}
                    >
                      <td className="px-4 py-3 text-fg font-medium">
                        {row.capability}
                      </td>
                      <td className="px-4 py-3 text-fg-muted">{row.what}</td>
                      <td className="px-4 py-3 text-fg-muted">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-fg-tertiary mt-4">
              Start with Scrape when you have one page. Use Crawl when you need
              many related pages. Use Extract when you need fields instead of
              full page text. Use Browser when the page requires interaction.
              Most workflows should start with the lightest capability that
              solves the problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built for developers */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            Built for developers building agents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-fg-muted leading-relaxed mb-6"
          >
            Reader is built for people who are building real AI workflows, not
            just testing scraping examples. Common use cases include:
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-x-8 gap-y-2"
          >
            {[
              "AI agents that need to read live pages",
              "RAG pipelines that need clean website content",
              "Research agents that need source context",
              "Product data workflows",
              "Price monitoring systems",
              "Competitive intelligence tools",
              "Lead research workflows",
              "Real estate listing extraction",
              "LLM dataset collection",
              "Documentation ingestion",
              "Internal knowledge systems",
            ].map((item) => (
              <p key={item} className="text-sm text-fg-muted py-1">
                {item}
              </p>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-fg-muted leading-relaxed mt-6"
          >
            These workflows all need the same foundation: useful web context
            from public pages. Instead of forcing developers to stitch together
            separate scraping, crawling, extraction, and browser tools, Reader
            provides the core capabilities in one web context API.
          </motion.p>
        </div>
      </section>

      {/* What developers can build */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            What developers can build with Reader
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Agent web research",
                description:
                  "Give an agent a URL or website and let it collect clean source context before answering, summarizing, extracting, or planning.",
              },
              {
                title: "RAG ingestion",
                description:
                  "Crawl public documentation, help centers, or knowledge bases into Markdown that can be chunked, embedded, and searched.",
              },
              {
                title: "Product data extraction",
                description:
                  "Turn public product pages into structured records with source context attached.",
              },
              {
                title: "Competitive intelligence",
                description:
                  "Store snapshots of public competitor pages and compare positioning, pricing, product, docs, and hiring changes over time.",
              },
              {
                title: "Lead research",
                description:
                  "Collect public company website context and extract structured business details for account research.",
              },
              {
                title: "Dataset preparation",
                description:
                  "Collect public pages as clean Markdown and metadata before filtering, reviewing, labeling, and versioning them in your own pipeline.",
              },
              {
                title: "Browser fallback workflows",
                description:
                  "Use browser sessions when scraping does not capture the state your workflow needs.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border border-edge rounded-md bg-surface/30 hover:border-edge-hover transition-colors"
              >
                <h3 className="text-base font-semibold mb-2 text-fg">
                  {item.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open source and hosted */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            Open source and hosted API together
          </motion.h2>
          <div className="space-y-4 mb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-fg-muted leading-relaxed"
            >
              Open source helps developers inspect, understand, and trust the
              system. A hosted API helps developers move faster without
              operating scraping, crawling, rendering, extraction, and browser
              infrastructure themselves.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-fg-muted leading-relaxed"
            >
              Reader is designed to support a practical middle ground.
              Developers can understand the product model and build with the
              open source ecosystem, while still using a hosted API for
              production workflows that need reliability, credits, browser
              sessions, extraction, and developer tooling.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-edge rounded-md bg-surface/30"
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Open source
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                Inspect the system, understand the output model, test real URLs,
                review the output, and build with confidence. Your team should
                be able to test outputs, inspect the source context, and decide
                how Reader fits into your own architecture.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-accent-500/30 rounded-md bg-accent-500/5"
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Hosted API
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                Move faster without operating infrastructure. Sign up at
                reader.dev. 1,000 free pages per month. Same engine, same
                output. Zero ops.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What open source does not replace */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            What open source does not replace
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-fg-muted leading-relaxed mb-4"
          >
            Open source is valuable, but it does not remove the need for
            product decisions. Reader gives your application clean web context,
            but your product still owns:
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {[
              "Source selection",
              "Scheduling",
              "Storage",
              "Deduplication",
              "Refresh logic",
              "Change comparison",
              "Alerts",
              "Dataset policy",
              "Privacy review",
              "User experience",
              "Agent orchestration",
              "Business rules",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-sm text-fg-muted border border-edge rounded-md"
              >
                {item}
              </span>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-fg-muted leading-relaxed"
          >
            That separation is healthy. Reader gives you the web context layer.
            Your application owns the workflow.
          </motion.p>
        </div>
      </section>

      {/* When Reader is a good fit */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-fg"
          >
            When Reader is a good fit
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "An open source oriented web context layer",
                "Clean Markdown from public pages",
                "Website crawling for RAG or research",
                "Structured JSON extraction",
                "Browser sessions for interaction",
                "A developer first API",
                "Agent friendly outputs",
                "Source snapshots with metadata",
                "A workflow that keeps your application in control",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 border border-edge rounded-md bg-surface/30"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  <span className="text-sm text-fg-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-fg-muted leading-relaxed mt-6"
          >
            Reader is especially useful when your AI system needs source context
            from the live web, but your team does not want to build and maintain
            the full web data layer from scratch.
          </motion.p>
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
          <div className="space-y-3">
            <FAQItem
              question="Is Reader open source?"
              answer="Reader is built with an open source oriented developer workflow and provides resources for developers who want to inspect, use, and build with the project."
            />
            <FAQItem
              question="Why does open source matter for web context?"
              answer="Web context is the source material your AI agent reasons over. Open source helps developers inspect the system, understand the output model, and build with more confidence."
            />
            <FAQItem
              question="What does Reader return?"
              answer="Reader can return clean Markdown, metadata, HTML, raw HTML, screenshots, structured JSON, crawl results, and browser sessions depending on the workflow."
            />
            <FAQItem
              question="Is Reader only for AI agents?"
              answer="No. Reader is designed around AI agent workflows, but it is also useful for RAG pipelines, research tools, data workflows, monitoring systems, and dataset collection."
            />
            <FAQItem
              question="Can I use Reader for RAG?"
              answer="Yes. Reader can scrape and crawl public websites into clean Markdown and metadata that your pipeline can chunk, embed, store, and search."
            />
            <FAQItem
              question="Can I use Reader for structured extraction?"
              answer="Yes. Reader can extract structured JSON from page content using schemas or instructions."
            />
            <FAQItem
              question="Does Reader replace my database or agent framework?"
              answer="No. Reader provides the web context layer. Your application owns storage, retrieval, orchestration, alerts, review, and product logic."
            />
            <FAQItem
              question="When should I use Browser?"
              answer="Use Browser when a page needs interaction, such as clicks, forms, filters, screenshots, PDFs, or rendered page state."
            />
            <FAQItem
              question="How should I get started?"
              answer="Start with one public URL. Inspect the Markdown output. Add extraction if you need fields. Use Crawl when you need related pages. Use Browser only when the page requires interaction."
            />
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
              Build with an inspectable web context layer
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Reader gives AI agents and data workflows clean web context from
              public pages, websites, structured fields, and browser sessions.
              Use it when your system needs to understand the web, not just
              retrieve HTML.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/vakra-dev/reader"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                View GitHub
              </a>
              <a
                href="https://docs.reader.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Read docs
              </a>
              <a
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Get Started with Cloud
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
