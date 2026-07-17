"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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

function CodeBlock({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  return (
    <div className="rounded-md border border-edge overflow-hidden">
      <div className="px-4 py-2 bg-surface/50 border-b border-edge">
        <span className="text-xs text-fg-tertiary font-mono">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-fg-secondary">{code}</code>
      </pre>
    </div>
  );
}

export function LeadResearchContent() {
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
            <span className="text-sm font-medium text-accent-500 mb-4 block">
              Lead Research
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
              Lead research web data API for AI agents
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Turn public company websites into clean context for lead research.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps sales, research, and enrichment workflows scrape
              company websites, crawl public pages, extract structured business
              details, and give AI agents clean source context for account
              research.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
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

      {/* Better lead research starts with better company context */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Better lead research starts with better company context
            </h2>
            <div className="space-y-4">
              <p className="text-base text-fg-secondary leading-relaxed">
                Lead research is not only about finding contact details.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                The most useful sales and research workflows need to understand
                the company behind the lead. What does the company sell? Who
                does it serve? Where is it located? What products does it
                highlight? Is it hiring? What industries does it mention? What
                problems does it talk about? Does the website show signs of
                growth, change, or urgency?
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                That information usually lives across public website pages.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                A homepage explains positioning. Product pages show what the
                company sells. Case studies show customer segments. Careers
                pages reveal hiring priorities. Blog posts show topics and
                initiatives. Contact pages show locations or support channels.
                Documentation pages can reveal technical maturity.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Collecting this manually takes time. Building a custom scraper
                for every company website takes even longer.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Reader gives lead research workflows a cleaner way to collect
                public company context.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Use Reader to scrape company pages into clean Markdown, crawl
                related public pages, and extract structured fields your
                application or AI agent can use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reader is the web context layer for lead research */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Reader is the web context layer for lead research
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A lead research workflow usually has several steps.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Company URL
  → Reader scrape or crawl
  → Clean Markdown and metadata
  → Structured extraction
  → Lead or account record
  → Agent summary, scoring, or CRM workflow`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader handles the web data collection step.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Your product should own:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Which companies to research",
                "Which pages are relevant",
                "Which fields matter",
                "How records are scored",
                "How data enters your CRM",
                "When humans should review results",
                "How outreach is personalized",
                "Which compliance rules apply to your workflow",
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
              This separation matters. Reader gives you clean public website
              context. Your application decides how to use that context
              responsibly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What you can collect from public company websites */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              What you can collect from public company websites
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader can help your workflow collect business context that
              appears on public web pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Useful fields include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Company name",
                "Website URL",
                "Company description",
                "Product categories",
                "Services offered",
                "Target customer segments",
                "Industries served",
                "Locations",
                "Contact page URL",
                "Careers page URL",
                "Hiring signals",
                "Blog topics",
                "Case study industries",
                "Integration mentions",
                "Technology references",
                "Pricing page availability",
                "Public social links",
                "Page metadata",
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
              This is different from scraping private contact information or
              trying to bypass access controls. Reader is best used for
              collecting visible public context that helps your team understand
              a company.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              For lead research, that context is often more valuable than a
              generic lead record because it helps your agent explain why the
              account may be relevant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example company extraction schema */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Example company extraction schema
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Use Reader Extract when your workflow needs structured account
              fields.
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "url": "https://example.com",
  "formats": ["markdown"],
  "extract": {
    "schema": {
      "company_name": "string",
      "description": "string",
      "industry": "string",
      "products": "array",
      "target_customers": "array",
      "locations": "array",
      "contact_page": "string",
      "careers_page": "string",
      "hiring_signals": "array",
      "notable_keywords": "array"
    }
  }
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Example output:
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "company_name": "ExampleCo",
  "description": "ExampleCo builds workflow software for field service teams.",
  "industry": "Field service software",
  "products": ["Scheduling", "Dispatch", "Customer messaging"],
  "target_customers": ["Home services", "Contractors", "Local operators"],
  "locations": ["Austin, TX"],
  "contact_page": "https://example.com/contact",
  "careers_page": "https://example.com/careers",
  "hiring_signals": ["Hiring for customer success and product marketing"],
  "notable_keywords": ["field service", "dispatch", "automation"]
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              Your application can store this output with the source URL and
              Markdown so a human or agent can review the original context
              later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clean Markdown for account research */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Clean Markdown for account research
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Structured fields are useful, but lead research often needs
              narrative context too.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A sales agent may need to understand how the company describes
              itself. A founder may want to see the exact wording on the
              homepage. A go to market workflow may need to summarize the
              company&#39;s product, audience, and positioning in a few
              sentences.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader&#39;s Markdown output is useful because it gives your agent
              readable source material.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Markdown to generate:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Account summaries",
                "Company research notes",
                "ICP fit explanations",
                "Personalized outreach context",
                "Competitor or category labels",
                "Product positioning summaries",
                "Hiring signal summaries",
                "Website based qualification notes",
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
              The goal is not to replace human judgment. The goal is to give
              your system better source material so people and agents can make
              faster, more informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Crawl company websites for deeper research */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Crawl company websites for deeper research
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A homepage is helpful, but it rarely tells the full story.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Use Reader Crawl when a lead research workflow needs to collect
              related public pages from a company website.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Useful pages to crawl include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Homepage",
                "Product pages",
                "Services pages",
                "About page",
                "Pricing page",
                "Contact page",
                "Careers page",
                "Blog posts",
                "Case studies",
                "Integration pages",
                "Documentation pages",
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
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A focused crawl might look like this:
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "url": "https://example.com",
  "maxPages": 50,
  "maxDepth": 2,
  "includePatterns": [
    "/product",
    "/solutions",
    "/customers",
    "/careers",
    "/about",
    "/pricing"
  ],
  "excludePatterns": ["/login", "/signup", "/legal"],
  "formats": ["markdown"]
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              The goal is not to crawl every page. The goal is to collect the
              pages that help your workflow understand the account.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              After the crawl, your application can summarize the company,
              extract fields, label the account, or route it to the right
              workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead research workflows built with Reader */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fg">
              Lead research workflows built with Reader
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Account enrichment
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Start with a company URL and collect public business context.
                  Extract fields such as company description, product
                  categories, target customers, locations, and hiring signals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  ICP qualification
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Use website context to decide whether a company fits your
                  ideal customer profile. Your agent can compare public website
                  language against your target segments, use cases, and
                  qualification criteria.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Personalized outreach research
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Collect source context before drafting outreach. An agent can
                  reference the company&#39;s product, market, recent content,
                  hiring signals, or website messaging without relying on
                  generic personalization.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Market mapping
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Crawl and extract information from a list of company websites
                  to build a structured view of a market, category, or
                  competitor set.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  CRM context updates
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Use Reader to refresh public account context in your CRM or
                  internal database. Your system can update company
                  descriptions, product categories, public links, and research
                  notes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Sales research agents
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Give an agent a company URL and let it collect public pages,
                  extract structured details, and produce a concise account
                  brief with source links.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Browser only when research needs interaction */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use Browser only when research needs interaction
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Most lead research workflows should use Scrape, Crawl, and
              Extract.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Use Browser when the page requires interaction before the relevant
              context appears.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Browser may be useful when you need to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Open tabs or accordions",
                "Use a search or filter interface",
                "Navigate a multi step public directory",
                "Capture a screenshot for review",
                "Run an existing Playwright or Puppeteer script",
                "Inspect page state after interaction",
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
              For normal company pages, Scrape and Crawl are usually the better
              starting point. Browser is the fallback when public web context
              depends on interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keep lead research responsible */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Keep lead research responsible
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader should be used to collect public web context your workflow
              is allowed to access.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Good lead research workflows should avoid overclaiming and avoid
              collecting information in ways that create risk.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Reader for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Public company descriptions",
                "Product and service pages",
                "Public contact page links",
                "Public location information",
                "Public careers information",
                "Public blog and case study content",
                "Public page metadata",
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
              Be careful with:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Personal data",
                "Private contact details",
                "Authenticated pages",
                "Pages behind access controls",
                "Outreach compliance",
                "Data retention policies",
                "Regional privacy rules",
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
              Reader gives your application the web context layer. Your product
              should define the rules for collection, storage, review, and
              outreach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for lead research */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for lead research
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader uses credits based on the type of web context workflow.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/30">
                    <th className="text-left p-3 text-fg font-semibold">
                      Operation
                    </th>
                    <th className="text-left p-3 text-fg font-semibold">
                      Credit usage
                    </th>
                  </tr>
                </thead>
                <tbody className="text-fg-secondary">
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Standard scrape</td>
                    <td className="p-3">1 credit per page</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Premium scrape</td>
                    <td className="p-3">3 credits per page</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Cache hit</td>
                    <td className="p-3">0 credits</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Failed scrape</td>
                    <td className="p-3">0 credits</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Crawl</td>
                    <td className="p-3">
                      1 credit per page discovered and scraped
                    </td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Browser session</td>
                    <td className="p-3">1 credit per minute</td>
                  </tr>
                  <tr>
                    <td className="p-3">Extract</td>
                    <td className="p-3">
                      Additional credits on top of the scrape
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4">
              <p className="text-base text-fg-secondary leading-relaxed">
                Lead research workflows usually depend on:
              </p>
              <ul className="space-y-2">
                {[
                  "Number of companies researched",
                  "Number of pages per company",
                  "Whether crawls are used",
                  "Whether extraction is added",
                  "Whether premium mode is needed",
                  "Whether browser sessions are required",
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
                A lightweight workflow may scrape one homepage per company. A
                deeper workflow may crawl 10 to 50 pages per account. A
                structured enrichment workflow may add extraction on top of
                selected pages.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Start with the smallest useful page set, inspect quality, then
                expand.
              </p>
            </div>
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
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader is a strong fit when your lead research workflow needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Scrape public company websites",
                "Crawl relevant company pages",
                "Extract structured business details",
                "Generate account summaries from source context",
                "Enrich lead or account records",
                "Feed company context into AI agents",
                "Build market maps from public websites",
                "Store clean Markdown with source URLs",
                "Keep web data collection separate from CRM and outreach logic",
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
              Reader is not a complete lead generation platform by itself. It
              does not find private contacts, verify emails, score leads, manage
              outreach, or replace your CRM.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              It gives your product the public web context needed to build
              better research, enrichment, and sales workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {[
              {
                question: "What is Reader for lead research?",
                answer:
                  "Reader helps lead research workflows collect public company website context, convert pages into clean Markdown, and extract structured business details.",
              },
              {
                question: "Is this the same as email scraping?",
                answer:
                  "No. This page is about public company research and account enrichment, not scraping private emails or bypassing access controls.",
              },
              {
                question: "Can Reader scrape company websites?",
                answer:
                  "Yes. Reader can scrape public company pages and return clean Markdown, metadata, HTML, screenshots, or structured JSON.",
              },
              {
                question: "Can Reader crawl a company website?",
                answer:
                  "Yes. Reader can crawl from a company URL and collect related public pages based on limits, depth, and filters.",
              },
              {
                question: "What fields can Reader extract?",
                answer:
                  "Reader can extract fields such as company name, description, industry, products, locations, contact page, careers page, hiring signals, and public website topics when they appear on the page.",
              },
              {
                question: "Can Reader help with CRM enrichment?",
                answer:
                  "Yes. Reader can provide public website context and structured fields that your application can review, transform, and send into a CRM.",
              },
              {
                question:
                  "Can Reader generate personalized outreach?",
                answer:
                  "Reader provides the source context an agent can use. Your application should control outreach generation, review, sending, and compliance.",
              },
              {
                question: "How do credits work for lead research?",
                answer:
                  "Usage depends on the number of companies, pages per company, crawl depth, extraction usage, premium mode, and browser session time.",
              },
              {
                question:
                  "When should I use Crawl instead of Scrape?",
                answer:
                  "Use Scrape for one company page. Use Crawl when you need related pages such as products, about, careers, pricing, blog, and case studies.",
              },
              {
                question:
                  "Is Reader a full lead generation platform?",
                answer:
                  "No. Reader is the web context API. Your product owns lead scoring, contact data, CRM workflows, outreach, and compliance.",
              },
            ].map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
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
              Build lead research on public web context
            </h2>
            <p className="text-base text-fg-muted mb-4">
              Use Reader to collect company website context, extract structured
              business details, and give your agents better source material for
              account research.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Start with a company URL and build from there.
            </p>
            <p className="text-sm text-fg-tertiary mb-6">
              1,000 free credits every month. No card required.
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
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
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
