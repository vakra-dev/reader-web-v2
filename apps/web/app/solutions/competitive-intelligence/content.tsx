"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Reader for competitive intelligence?",
    answer:
      "Reader helps teams collect clean public web content from competitor websites so their own systems can store snapshots, extract signals, compare changes, and summarize updates.",
  },
  {
    question: "Can Reader monitor competitor websites automatically?",
    answer:
      "Reader provides the web data layer. Your application should handle scheduling, storage, comparison, alerting, and reporting.",
  },
  {
    question: "What competitor pages should I track?",
    answer:
      "Common pages include homepages, pricing pages, product pages, feature pages, documentation, changelogs, integration pages, comparison pages, and careers pages.",
  },
  {
    question: "Can Reader extract pricing page details?",
    answer:
      "Yes. Reader can extract structured fields such as plan names, feature lists, usage limits, trial language, and enterprise messaging when those details appear on the page.",
  },
  {
    question: "Can Reader crawl competitor websites?",
    answer:
      "Yes. Reader Crawl can start from a URL and collect related public pages based on limits, depth, and URL filters.",
  },
  {
    question: "Should I store Markdown snapshots?",
    answer:
      "Yes. Markdown snapshots make it easier to compare versions, inspect changes, summarize updates, and preserve source context.",
  },
  {
    question: "Can Reader help with AI competitive analysis?",
    answer:
      "Yes. Reader can collect the source context an AI agent needs. Your agent can then summarize changes, compare competitors, and produce reports with source links.",
  },
  {
    question: "How do credits work for competitive intelligence?",
    answer:
      "Usage depends on pages scraped or crawled, refresh frequency, premium mode usage, extraction usage, and browser session time.",
  },
  {
    question: "When should I use Browser?",
    answer:
      "Use Browser when the page requires interaction, such as pricing toggles, tabs, filters, screenshots, PDFs, or rendered page state.",
  },
  {
    question: "Is Reader a full competitive intelligence platform?",
    answer:
      "No. Reader is the web context API. Your product owns monitoring schedules, analysis logic, dashboards, alerts, and strategy workflows.",
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

export function CompetitiveIntelligenceContent() {
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
              Competitive intelligence web data API for AI agents
            </h1>
            <p className="text-lg text-accent-500 font-medium mb-4">
              Turn public competitor websites into clean context your team can
              analyze.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps competitive intelligence workflows scrape pages,
              crawl websites, extract structured signals, and collect clean
              Markdown snapshots from public web content. Use Reader for the web
              data layer, then use your own application to compare changes,
              summarize updates, and surface insights.
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

      {/* Competitive intelligence starts with better source material */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Competitive intelligence starts with better source material
            </h2>
            <div className="space-y-4 text-base text-fg-secondary leading-relaxed">
              <p>Competitive intelligence usually starts with public web pages.</p>
              <p>
                A competitor changes their homepage. A pricing page adds a new
                plan. A product page highlights a new feature. A documentation
                page reveals a new integration. A careers page suggests where the
                company is investing. A changelog shows product velocity. A
                comparison page shows how they position against the market.
              </p>
              <p>
                Those signals are useful, but collecting them manually does not
                scale.
              </p>
              <p>
                Teams often end up checking websites by hand, subscribing to
                scattered alerts, saving screenshots, or building custom scrapers
                for every competitor. The result is inconsistent. Some changes are
                missed. Some alerts are noisy. Some pages are hard to compare
                because the stored content includes navigation, ads, scripts, and
                layout noise.
              </p>
              <p>
                Reader gives competitive intelligence workflows a cleaner
                foundation.
              </p>
              <p>
                Use Reader to collect public competitor pages as clean Markdown,
                metadata, crawl results, screenshots, or structured JSON. Your
                application can store snapshots, compare versions, summarize
                changes, and decide which updates matter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reader powers the collection layer */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Reader powers the collection layer
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A competitive intelligence system usually has several parts.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Competitor URLs
  → Reader scrape or crawl
  → Clean Markdown and metadata
  → Snapshot storage
  → Change comparison
  → AI summary or analyst review
  → Alerts, reports, or dashboards`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader handles the web collection and cleanup layer.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Your application should own:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Which competitors to track",
                "Which pages matter",
                "How often pages are refreshed",
                "How snapshots are stored",
                "How versions are compared",
                "Which changes should trigger alerts",
                "How summaries are generated",
                "Which updates need human review",
                "How insights are shared with teams",
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
              That separation keeps the workflow flexible. Reader gives you clean
              public web context. Your product decides what to do with it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What teams track with Reader */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              What teams track with Reader
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Competitive intelligence is not only about pricing.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              The most useful signals often come from several types of public
              pages.
            </p>

            {/* Homepage and positioning pages */}
            <h3 className="text-xl font-semibold mb-3 text-fg">
              Homepage and positioning pages
            </h3>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Homepages show how competitors describe themselves, which personas
              they target, and what value propositions they emphasize.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Track changes in:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Headline and subheadline",
                "Product positioning",
                "Customer segments",
                "Social proof",
                "Use case language",
                "Calls to action",
                "New pages linked from the homepage",
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

            {/* Pricing and packaging pages */}
            <h3 className="text-xl font-semibold mb-3 text-fg">
              Pricing and packaging pages
            </h3>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Pricing pages can reveal changes in plans, limits, trials, feature
              gates, usage language, and enterprise positioning.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Track changes in:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Plan names",
                "Feature lists",
                "Usage limits",
                "Trial language",
                "Add ons",
                "Enterprise messaging",
                "Comparison tables",
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

            {/* Product and feature pages */}
            <h3 className="text-xl font-semibold mb-3 text-fg">
              Product and feature pages
            </h3>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Product pages show what a company is actively selling and how it
              explains the value.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Track changes in:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "New feature pages",
                "Removed features",
                "Updated product language",
                "New screenshots",
                "Integration claims",
                "Technical positioning",
                "Persona specific messaging",
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

            {/* Documentation and changelog pages */}
            <h3 className="text-xl font-semibold mb-3 text-fg">
              Documentation and changelog pages
            </h3>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Docs and changelogs often reveal product changes before they appear
              in marketing copy.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Track changes in:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "New API endpoints",
                "SDK updates",
                "Deprecated features",
                "New integrations",
                "Platform limits",
                "Setup guides",
                "Release notes",
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

            {/* Careers pages */}
            <h3 className="text-xl font-semibold mb-3 text-fg">
              Careers pages
            </h3>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Hiring pages can reveal investment areas.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Track changes in:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "New roles",
                "Team growth areas",
                "Location strategy",
                "Skills being hired for",
                "Product or infrastructure priorities",
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
              Reader helps collect the source content. Your team turns those
              signals into strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store clean page snapshots */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Store clean page snapshots
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A competitive intelligence workflow should not only store the
              latest page content. It should store snapshots over time.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A useful snapshot might include:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "competitor": "ExampleCo",
  "page_type": "pricing",
  "url": "https://example.com/pricing",
  "title": "Pricing",
  "markdown": "# Pricing\\n\\nChoose the plan that fits your team...",
  "captured_at": "2026-04-04T12:00:00Z",
  "metadata": {
    "statusCode": 200,
    "cached": false
  }
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              With snapshots, your system can compare the current version against
              the previous version.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              That comparison can answer questions such as:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "What changed on this page?",
                "Did the headline change?",
                "Was a plan added or removed?",
                "Did a feature move to another tier?",
                "Did the company change its target customer?",
                "Did the docs add a new integration?",
                "Did a competitor launch a new use case page?",
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
              Reader makes the source content easier to store and compare by
              returning clean Markdown instead of noisy page HTML.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use structured extraction for signals */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use structured extraction for signals
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Some competitive intelligence workflows need full page snapshots.
              Others need structured fields.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader Extract can turn public page content into JSON that your
              system can compare over time.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              For example, a pricing page extraction schema might look like this:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "url": "https://example.com/pricing",
  "formats": ["markdown"],
  "extract": {
    "schema": {
      "plans": "array",
      "free_trial": "string",
      "enterprise_message": "string",
      "usage_limits": "array",
      "notable_features": "array",
      "primary_cta": "string"
    }
  }
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A positioning page schema might look like this:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "extract": {
    "schema": {
      "headline": "string",
      "subheadline": "string",
      "target_customer": "string",
      "main_value_props": "array",
      "use_cases": "array",
      "primary_cta": "string"
    }
  }
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Structured extraction is useful when your system needs fields it
              can compare, filter, or display in a dashboard. Markdown snapshots
              are useful when your team needs the full source context.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Most strong competitive intelligence workflows use both.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Crawl competitor websites for broader context */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Crawl competitor websites for broader context
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Some tasks need more than one page.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              If you are researching a competitor deeply, start from the homepage
              or a product section and use Reader Crawl to collect related public
              pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Crawl is useful for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Discovering new product pages",
                "Collecting all pricing related pages",
                "Tracking docs and changelogs",
                "Finding integration pages",
                "Mapping use case pages",
                "Collecting public comparison pages",
                "Building a competitor knowledge base",
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
              A focused crawl might look like this:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "url": "https://example.com",
  "maxPages": 100,
  "maxDepth": 3,
  "includePatterns": ["/product", "/pricing", "/docs", "/changelog"],
  "excludePatterns": ["/login", "/signup", "/careers"],
  "formats": ["markdown"]
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              The goal is not to crawl everything. The goal is to collect the
              pages that are likely to contain meaningful market, product, or
              positioning signals.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Use clear limits so your workflow stays focused and predictable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compare changes with your own logic */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Compare changes with your own logic
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader gives you clean page content. Your application should decide
              what changed and why it matters.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Change comparison can happen at several levels:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Text diff between two Markdown snapshots",
                "Field comparison between structured extraction results",
                "Page title and metadata comparison",
                "Section level comparison",
                "Link change detection",
                "Screenshot review for visual changes",
                "AI summary of meaningful differences",
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
              Not every page edit matters. A footer link changing is not the same
              as a new product launch. A typo fix is not the same as a pricing
              package update.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Your system should define rules around what is important.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Useful rules might include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Alert when a pricing plan is added or removed",
                "Alert when the homepage headline changes",
                "Alert when new integration pages appear",
                "Alert when documentation adds a new endpoint",
                "Alert when a competitor publishes a new comparison page",
                "Summarize changelog updates weekly",
                "Send low importance changes to a review queue",
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
              Reader provides the page content. Your product provides the
              judgment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common competitive intelligence workflows */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-fg text-center">
              Common competitive intelligence workflows
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Competitor website research",
                  description:
                    "Crawl a competitor website and summarize product areas, use cases, target customers, positioning, and visible proof points.",
                },
                {
                  title: "Pricing page tracking",
                  description:
                    "Scrape pricing pages on a schedule, store Markdown snapshots, extract plan details, and compare changes over time.",
                },
                {
                  title: "Product launch detection",
                  description:
                    "Track product pages, changelogs, docs, and integration pages to identify new capabilities or messaging shifts.",
                },
                {
                  title: "Documentation monitoring",
                  description:
                    "Crawl docs or developer pages to watch for new endpoints, SDK updates, platform changes, and setup guides.",
                },
                {
                  title: "Market map research",
                  description:
                    "Collect public pages from a list of companies and extract structured fields such as category, use case, ICP, product claims, and integrations.",
                },
                {
                  title: "AI analyst workflow",
                  description:
                    "Give an agent a set of competitor URLs, let it collect clean context with Reader, then produce a weekly summary with source links and notable changes.",
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

      {/* Use Browser when the page needs interaction */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use Browser when the page needs interaction
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Most competitive intelligence workflows should start with Scrape or
              Crawl.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Browser only when the page requires interaction before the
              useful context appears.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Browser can help when you need to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Click pricing toggles",
                "Open feature tabs",
                "Select regions",
                "Use search or filters",
                "Capture screenshots",
                "Generate PDFs",
                "Inspect rendered page state",
                "Run an existing Playwright or Puppeteer script",
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
              Browser sessions are powerful, but they are heavier than normal
              scraping. Use them when interaction changes the information your
              workflow needs to collect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for competitive intelligence */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for competitive intelligence
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
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              For competitive intelligence, usage usually depends on:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Number of competitors tracked",
                "Number of pages per competitor",
                "Refresh frequency",
                "Whether pages need premium mode",
                "Whether structured extraction is used",
                "Whether browser sessions are needed",
                "How broad crawls are allowed to become",
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
              Start with the pages most likely to matter: homepage, pricing,
              product, docs, changelog, integrations, and careers. Expand only
              when the workflow proves useful.
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
              Reader is a strong fit when your competitive intelligence workflow
              needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Scrape public competitor pages",
                "Crawl competitor websites",
                "Store clean Markdown snapshots",
                "Extract structured signals",
                "Feed page context into AI agents",
                "Compare versions over time",
                "Track pricing, positioning, product, and docs changes",
                "Use browser sessions for interactive pages",
                "Keep collection separate from analysis and alerts",
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
              Reader is not a complete competitive intelligence platform by
              itself. It does not decide which competitors matter, classify every
              market signal, send alerts, or write strategy recommendations on
              its own.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              It gives your system the clean public web context needed to build
              those workflows.
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
              Build competitive intelligence on clean web context
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Use Reader to collect public competitor pages, store clean
              snapshots, extract structured signals, and power your own analysis
              workflows. Start with the pages that matter most, then expand your
              monitoring from there.
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
