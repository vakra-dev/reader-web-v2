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

export function EcommerceContent() {
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
              Ecommerce
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
              Ecommerce web scraping API for AI agents
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Turn public product pages into clean web context and structured
              product data.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps teams scrape ecommerce pages into clean Markdown,
              extract structured JSON, crawl product collections, and use
              browser sessions when a product workflow needs interaction.
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

      {/* Product pages are useful, but messy */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Product pages are useful, but messy
            </h2>
            <div className="space-y-4">
              <p className="text-base text-fg-secondary leading-relaxed">
                Ecommerce pages contain valuable information, but they are
                rarely simple to process.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                A single product page may include a product title, brand, price,
                sale price, availability, variants, reviews, ratings, images,
                shipping text, product specs, comparison tables, related
                products, recommendations, promotions, and content loaded after
                JavaScript runs.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                For humans, that is fine. For an AI agent or data workflow, it
                creates a problem.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Raw HTML is noisy. Product details may be spread across the
                page. The same field may appear in different places on different
                sites. A normal fetch may miss content loaded by JavaScript. A
                selector that works today can break when the site changes its
                layout.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Reader gives ecommerce workflows a cleaner way to work with
                product pages.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Use Reader to turn public product URLs into clean Markdown,
                structured JSON, crawl results, or browser controlled workflows.
                Your product can then store the result, compare changes, enrich
                a catalog, run analysis, or pass the context into an agent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Reader helps you collect */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              What Reader helps you collect
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader can help your workflow collect content and fields that are
              visible on public ecommerce pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Common fields include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Product name",
                "Brand",
                "Category",
                "Description",
                "Price text",
                "Currency",
                "Sale price",
                "Availability",
                "Variant options",
                "Rating",
                "Review count",
                "Product specifications",
                "Shipping text",
                "Return policy text",
                "Image URLs when available in the page content",
                "Canonical URL",
                "Page title and metadata",
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
              Reader is not limited to a single ecommerce template. It is useful
              when you need to collect product context from pages that do not
              all share the same layout.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Use Markdown when your agent needs to read or summarize a product
              page. Use Extract when your application needs structured fields it
              can store in a database.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How an ecommerce workflow works with Reader */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              How an ecommerce workflow works with Reader
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A typical ecommerce data workflow starts with a product URL.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Product URL
  → Reader Scrape
  → Clean Markdown and metadata
  → Reader Extract
  → Structured product JSON
  → Your database, agent, or workflow`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              For product collections, your workflow may start with a category
              page or known URL list.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Category page or product URL list
  → Reader Crawl or batch scrape
  → Page level product context
  → Structured extraction
  → Catalog, monitoring system, or analysis workflow`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader handles the web context step. Your application decides how
              to store records, deduplicate products, compare price changes,
              enrich catalog data, or trigger alerts.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              That separation matters. Reader gives your system clean product
              context. Your product owns the business workflow around it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example product extraction */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Example product extraction
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              When you need structured product data, send Reader a URL with an
              extraction schema.
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "url": "https://example.com/products/wireless-headphones",
  "formats": ["markdown"],
  "extract": {
    "schema": {
      "name": "string",
      "brand": "string",
      "price": "string",
      "currency": "string",
      "availability": "string",
      "rating": "number",
      "review_count": "number",
      "description": "string",
      "variants": "array"
    }
  }
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader returns the structured fields alongside the page context.
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "name": "Wireless Headphones",
  "brand": "Example Audio",
  "price": "$79",
  "currency": "USD",
  "availability": "In stock",
  "rating": 4.6,
  "review_count": 1284,
  "description": "Noise reducing wireless headphones with long battery life.",
  "variants": ["Black", "Silver", "Blue"]
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Your application can store this record, send it to an agent,
              compare it with a previous snapshot, or pass it into another
              workflow.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              For critical use cases, keep the source Markdown and URL with the
              extracted data. That makes results easier to inspect and debug
              later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clean Markdown for product understanding */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Clean Markdown for product understanding
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Structured fields are useful, but agents often need the full
              product context too.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A shopping assistant may need to compare descriptions. A research
              agent may need to summarize reviews or product claims. A catalog
              workflow may need to understand specifications, compatibility,
              warranties, and return policy text.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader&#39;s Markdown output helps preserve useful product page
              structure while removing much of the noise around it.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Markdown is helpful for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Product summaries",
                "Product comparison agents",
                "Review analysis workflows",
                "Catalog enrichment",
                "Search indexing",
                "RAG over product documentation",
                "Competitive product research",
                "Human review interfaces",
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
              A product page should not be reduced to a price alone. Markdown
              gives your system enough context to understand what the product
              is, how it is described, and what information appears around it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product catalog enrichment */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Product catalog enrichment
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can help teams enrich product catalogs with public page
              context.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              For example, your system may already have SKU, internal product
              name, and supplier URL. Reader can scrape the public page and
              extract missing details such as product description,
              specifications, images mentioned in the page, availability text,
              rating, and review count.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A catalog enrichment workflow may look like this:
            </p>
            <ol className="space-y-2 mb-6 list-decimal list-inside">
              <li className="text-base text-fg-secondary leading-relaxed">
                Start with product URLs from your catalog.
              </li>
              <li className="text-base text-fg-secondary leading-relaxed">
                Batch scrape the URLs with Reader.
              </li>
              <li className="text-base text-fg-secondary leading-relaxed">
                Extract fields that are missing or need refresh.
              </li>
              <li className="text-base text-fg-secondary leading-relaxed">
                Store page Markdown and metadata with the product record.
              </li>
              <li className="text-base text-fg-secondary leading-relaxed">
                Flag low confidence or missing fields for review.
              </li>
              <li className="text-base text-fg-secondary leading-relaxed">
                Refresh selected products on a schedule controlled by your
                application.
              </li>
            </ol>
            <p className="text-base text-fg-secondary leading-relaxed">
              This is useful when product information changes often or when your
              internal catalog needs better descriptions, metadata, or source
              context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price and availability workflows */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Price and availability workflows
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader is also useful for price and availability tracking.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader can retrieve product pages and extract fields such as
              price, sale price, currency, availability, and stock text. Your
              application can store snapshots and compare them over time.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A simple workflow:
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Product URL list
  → Reader scrape and extract
  → Store product snapshot
  → Compare against previous snapshot
  → Trigger your own alert or update`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader does not need to own your scheduling, storage, comparison
              logic, or alerts. Those should live in your application where you
              control business rules.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Use Reader for the web data layer. Use your own system to decide
              when a price changed, whether the change matters, and what action
              should happen next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitive product research */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Competitive product research
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Teams often need to understand how products are described across
              public websites.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can help collect product pages, category pages, and public
              comparison pages so your system can analyze:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Product positioning",
                "Feature claims",
                "Pricing text",
                "Availability language",
                "Bundles and promotions",
                "Category structure",
                "Review signals",
                "Product specs",
                "Similar products",
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
              This is useful for product teams, growth teams, market
              researchers, and ecommerce operators who need clean source
              material for analysis.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              An AI agent can use Reader to read pages, extract structured
              details, summarize differences, and produce a report with source
              URLs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When to use Scrape, Crawl, Extract, or Browser */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              When to use Scrape, Crawl, Extract, or Browser
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader&#39;s ecommerce workflows are strongest when you use the
              right capability for the task.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/30">
                    <th className="text-left p-3 text-fg font-semibold">
                      Need
                    </th>
                    <th className="text-left p-3 text-fg font-semibold">
                      Use
                    </th>
                  </tr>
                </thead>
                <tbody className="text-fg-secondary">
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Read one product page</td>
                    <td className="p-3">Scrape</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">
                      Extract fields from one product page
                    </td>
                    <td className="p-3">Extract</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">
                      Process a known list of product URLs
                    </td>
                    <td className="p-3">Batch scrape</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">
                      Discover products from a category page
                    </td>
                    <td className="p-3">Crawl</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Select variants or filters</td>
                    <td className="p-3">Browser</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">
                      Capture a visual product page state
                    </td>
                    <td className="p-3">Browser</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Store readable source context</td>
                    <td className="p-3">Markdown</td>
                  </tr>
                  <tr>
                    <td className="p-3">Store product records</td>
                    <td className="p-3">Structured JSON</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4">
              <p className="text-base text-fg-secondary leading-relaxed">
                Start with Scrape when you need clean product page content.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Add Extract when you need product fields.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Use Crawl when you need to discover related product pages from a
                category, collection, or public listing page.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Use Browser when product details depend on interaction, such as
                selecting a size, choosing a location, applying a filter, or
                opening a tab.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Handling dynamic ecommerce pages */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Handling dynamic ecommerce pages
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Many ecommerce pages are dynamic. Prices, variants, stock states,
              shipping text, and product recommendations may load after the
              first response.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can render modern pages before returning content. This
              helps when product information appears after JavaScript runs.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              For pages where the content appears only after interaction, use
              Browser.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Browser is useful when your workflow needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Select a size or variant",
                "Change a delivery location",
                "Click a product tab",
                "Apply filters",
                "Submit a search",
                "Capture a screenshot",
                "Generate a PDF",
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
              Scrape is best for readable page content. Browser is best for
              interactive page state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for ecommerce workflows */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for ecommerce workflows
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
                For ecommerce workflows, usage usually depends on the number of
                product pages processed, how many require premium mode, whether
                extraction is used, and whether browser sessions are needed.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                A simple product research workflow may only need standard
                scrapes. A structured catalog workflow may need scrape plus
                extraction. A variant or location based workflow may need
                browser minutes.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Start small, inspect the output, then scale the workflow with
                clear page limits and credit expectations.
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
              Reader is a strong fit when your ecommerce workflow needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Turn product URLs into clean Markdown",
                "Extract structured product fields",
                "Collect public category or product pages",
                "Feed product context into an AI agent",
                "Build product research workflows",
                "Enrich internal catalogs",
                "Store product snapshots",
                "Compare product or pricing pages",
                "Use browser sessions for interactive product states",
                "Keep web data collection separate from business logic",
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
              Reader is not a complete ecommerce monitoring platform by itself.
              It does not decide your alert rules, deduplicate your catalog,
              match products across retailers, or manage your product database.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              It gives your system the web context and structured data layer
              those workflows need.
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
                question: "What is Reader for ecommerce?",
                answer:
                  "Reader helps ecommerce workflows scrape public product pages, convert them into clean Markdown, and extract structured product data.",
              },
              {
                question: "Can Reader extract product prices?",
                answer:
                  "Yes. Reader can extract price text and related fields when those fields appear in the public page content.",
              },
              {
                question: "Can Reader extract availability?",
                answer:
                  "Yes. Reader can extract availability or stock text when it is visible on the page.",
              },
              {
                question: "Can Reader scrape dynamic ecommerce pages?",
                answer:
                  "Reader can render modern pages before returning content. Use Browser when the workflow requires interaction such as selecting variants, filters, or location.",
              },
              {
                question: "Can Reader crawl product category pages?",
                answer:
                  "Yes. Reader Crawl can start from a category or collection URL and collect related pages based on the limits and filters you set.",
              },
              {
                question: "Does Reader replace my price monitoring system?",
                answer:
                  "No. Reader provides the web data layer. Your application should handle scheduling, storage, comparisons, alerts, and business rules.",
              },
              {
                question: "Can Reader return product data as JSON?",
                answer:
                  "Yes. Use Extract to define the product fields you want and receive structured JSON alongside the page context.",
              },
              {
                question: "Can Reader help with catalog enrichment?",
                answer:
                  "Yes. Reader can collect public product context and fields that your system can use to enrich catalog records.",
              },
              {
                question: "How do credits work for ecommerce workflows?",
                answer:
                  "Usage depends on the number of pages scraped or crawled, whether premium mode is needed, whether extraction is added, and whether browser sessions are used.",
              },
              {
                question: "Should I use Browser for every product page?",
                answer:
                  "No. Use Scrape or Extract for normal product pages. Use Browser only when the product data requires interaction or rendered page state that a normal scrape cannot capture.",
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
              Turn product pages into usable web data
            </h2>
            <p className="text-base text-fg-muted mb-4">
              Use Reader to scrape public ecommerce pages, extract structured
              product fields, and give your agents clean product context.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Start with one product URL or crawl a collection of pages.
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
