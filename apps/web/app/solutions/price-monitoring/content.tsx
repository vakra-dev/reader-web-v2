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

export function PriceMonitoringContent() {
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
              Price Monitoring
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
              Price monitoring web scraping API for AI agents
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Turn public product pages into price and availability snapshots
              your system can track.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps teams scrape product pages, extract structured price
              data, and collect clean web context for price monitoring
              workflows. Use Reader for the web data layer, then use your own
              application to store snapshots, compare changes, and trigger
              alerts.
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

      {/* Price monitoring starts with reliable page data */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Price monitoring starts with reliable page data
            </h2>
            <div className="space-y-4">
              <p className="text-base text-fg-secondary leading-relaxed">
                Price monitoring sounds simple until you build it.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                A product page may show a base price, sale price, discount text,
                coupon message, stock status, variant pricing, shipping text,
                subscription price, regional price, or member only promotion.
                Some details are visible in the first page load. Others appear
                after JavaScript runs. Some pages show different values
                depending on location, selected variant, or availability.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                If your monitoring system starts with messy page data,
                everything downstream becomes harder.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Your snapshots become inconsistent. Your comparison logic gets
                noisy. Your alerts become unreliable. Your team spends more time
                debugging scrapers than improving the monitoring product.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Reader gives price monitoring workflows a cleaner starting
                point.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Use Reader to retrieve product pages, convert them into clean
                Markdown, and extract structured fields such as price,
                availability, currency, discount text, and product metadata.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Your application owns the monitoring logic. Reader gives it
                better web data to work with.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reader powers the web data layer */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Reader powers the web data layer
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A price monitoring system usually has several parts.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Product URL list
  → Page retrieval
  → Price and availability extraction
  → Snapshot storage
  → Change comparison
  → Threshold logic
  → Alerts or updates`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader is responsible for the page retrieval and extraction layer.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              It helps your system answer questions such as:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "What does this product page currently say?",
                "What price text appears on the page?",
                "Is the product listed as available?",
                "Is there a sale price or discount?",
                "Which variant or product name does this price belong to?",
                "What page metadata should be stored with the snapshot?",
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
              Your application should handle the rest:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Scheduling",
                "Snapshot storage",
                "Product matching",
                "Change detection",
                "Alert rules",
                "Notification delivery",
                "Review workflows",
                "Business logic",
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
              That separation keeps Reader focused and keeps your product in
              control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to extract from product pages */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              What to extract from product pages
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Price monitoring is not just about one number.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A useful product snapshot should include enough context to
              understand what changed and whether the change matters.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Common fields include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Product name",
                "Brand",
                "Product URL",
                "Canonical URL",
                "Current price",
                "Original price",
                "Sale price",
                "Currency",
                "Discount text",
                "Availability",
                "Stock status",
                "Variant name",
                "Rating",
                "Review count",
                "Shipping text",
                "Promotion text",
                "Page title",
                "Scrape timestamp",
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
              For some workflows, price text is better than a normalized number
              because product pages may display values such as &quot;From
              $29,&quot; &quot;Starting at $99,&quot; &quot;2 for $40,&quot; or
              &quot;Contact for price.&quot; Your application can decide how
              aggressively to normalize the data.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader can return both the extracted fields and the source
              Markdown. That makes it easier to inspect edge cases when a page
              changes or an alert looks unusual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example price extraction schema */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Example price extraction schema
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A price monitoring workflow can request the fields it needs with
              Reader Extract.
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "url": "https://example.com/products/wireless-headphones",
  "formats": ["markdown"],
  "extract": {
    "schema": {
      "product_name": "string",
      "brand": "string",
      "current_price": "string",
      "original_price": "string",
      "currency": "string",
      "availability": "string",
      "discount_text": "string",
      "variant": "string",
      "rating": "number",
      "review_count": "number"
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
  "product_name": "Wireless Headphones",
  "brand": "Example Audio",
  "current_price": "$79",
  "original_price": "$99",
  "currency": "USD",
  "availability": "In stock",
  "discount_text": "20% off",
  "variant": "Black",
  "rating": 4.6,
  "review_count": 1284
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              This structured record can become a snapshot in your database. The
              source URL, scrape time, and Markdown should be stored with it so
              your team can review the page context later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Build price snapshots, not just scrapes */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Build price snapshots, not just scrapes
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A scrape gives you the current page. A monitoring system needs
              history.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader helps you collect the current state of a product page. Your
              application should turn that state into a snapshot.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A useful snapshot record might include:
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "product_id": "prod_123",
  "source_url": "https://example.com/products/wireless-headphones",
  "product_name": "Wireless Headphones",
  "current_price": "$79",
  "currency": "USD",
  "availability": "In stock",
  "captured_at": "2026-04-04T12:00:00Z",
  "source_markdown_hash": "sha256:...",
  "reader_metadata": {
    "statusCode": 200,
    "cached": false
  }
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              With snapshots, your system can compare the current state against
              the previous state.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              That comparison can power:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Price drop alerts",
                "Price increase alerts",
                "Stock change alerts",
                "Sale detection",
                "Discount tracking",
                "Availability monitoring",
                "Promotion tracking",
                "Product page change review",
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
              Reader gives you the page data. Your application decides which
              changes are meaningful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price change logic belongs in your product */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Price change logic belongs in your product
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Every business handles price changes differently.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A one dollar change may matter for a low priced item and mean
              nothing for a high priced product. A temporary coupon may matter
              to one customer but not another. A product going from &quot;Out of
              stock&quot; to &quot;Limited stock&quot; may be more important
              than a small price movement.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              That is why Reader should not own your alert logic.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Your product should define rules such as:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Alert when price drops by more than 10 percent",
                "Alert when a product becomes available",
                "Ignore changes under $1",
                "Alert only for selected brands",
                "Track sale price separately from base price",
                "Require review before sending customer notifications",
                'Treat "Contact for price" as a separate state',
                "Compare only equivalent variants",
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
              Reader&#39;s job is to collect clean source data so those rules
              can run on a better foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Handle variants and regional pricing carefully */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Handle variants and regional pricing carefully
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Price monitoring gets harder when prices vary by variant,
              location, account state, or shipping option.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A product may have different prices for different colors, sizes,
              bundles, quantities, or delivery regions. Some pages show the
              lowest variant price by default. Others show a price only after a
              user selects an option.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Your workflow should decide what it is monitoring:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "The default page price",
                "A specific variant",
                "A specific location",
                "A specific seller",
                "A sale price",
                "A subscription price",
                "A quantity based price",
                "A shipping inclusive price",
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
              Reader Scrape and Extract are a good starting point when the price
              is visible in the page content.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Use Reader Browser when the workflow needs interaction, such as
              selecting a size, applying a location, opening a variant menu,
              submitting a search, or capturing a rendered page state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Crawl when product URLs need discovery */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use Crawl when product URLs need discovery
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Some price monitoring workflows start with a known product URL
              list. Others need to discover products from category pages,
              collection pages, or public catalogs.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use the right Reader capability for the job:
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
                    <td className="p-3">Monitor one product page</td>
                    <td className="p-3">Scrape plus Extract</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Monitor a known URL list</td>
                    <td className="p-3">Batch scrape plus Extract</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">
                      Discover products from category pages
                    </td>
                    <td className="p-3">Crawl</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">
                      Select variants or location first
                    </td>
                    <td className="p-3">Browser</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="p-3">Store readable source context</td>
                    <td className="p-3">Markdown</td>
                  </tr>
                  <tr>
                    <td className="p-3">Store price records</td>
                    <td className="p-3">Structured JSON</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Crawl is useful when the URL list changes over time or when
              products are organized across public category pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Once URLs are discovered, your application can decide which
              products should enter the monitoring workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common price monitoring workflows */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fg">
              Common price monitoring workflows
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Product price tracking
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Track current price, original price, sale price, and currency
                  for selected product URLs. Store snapshots and compare them
                  over time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Availability monitoring
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Extract stock status, availability text, preorder status, or
                  out of stock messages from public product pages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Discount and promotion tracking
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Collect sale text, discount labels, coupon language, and
                  promotional messages that appear on product pages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Competitive price research
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Monitor public product pages across competitor or marketplace
                  sites and compare price changes in your own system.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Catalog refresh workflows
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Refresh price and availability fields for an internal catalog
                  by scraping public product URLs on a schedule controlled by
                  your application.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Agent powered price research
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Give an AI agent a product URL or product group, let it
                  collect page context, extract price data, and summarize
                  relevant changes with source links.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for price monitoring */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for price monitoring
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
                For price monitoring, usage depends on:
              </p>
              <ul className="space-y-2">
                {[
                  "Number of product pages checked",
                  "Frequency of checks",
                  "Number of pages that need premium mode",
                  "Whether extraction is used",
                  "Whether browser sessions are needed",
                  "How much discovery is done through crawl",
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
                Start with a small URL set and inspect the output. Once the
                schema and workflow look stable, scale with clear limits and
                refresh rules.
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
              Reader is a strong fit when your price monitoring workflow needs
              to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Scrape public product pages",
                "Extract price and availability fields",
                "Store readable source snapshots",
                "Monitor known product URLs",
                "Discover product URLs from public category pages",
                "Feed product context into AI agents",
                "Handle JavaScript rendered product pages",
                "Use browser sessions for variants, filters, or location based state",
                "Keep the web data layer separate from alert logic",
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
              Reader is not a complete price monitoring product by itself. It
              does not manage your product database, alert thresholds, customer
              notifications, product matching, or historical analytics.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              It gives your system the web context and structured data needed to
              build those workflows.
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
                question: "What is Reader for price monitoring?",
                answer:
                  "Reader helps price monitoring systems scrape public product pages, convert them into clean Markdown, and extract structured price and availability fields.",
              },
              {
                question:
                  "Can Reader extract prices from product pages?",
                answer:
                  "Yes. Reader can extract price text and related fields when those values appear in the public page content.",
              },
              {
                question:
                  "Can Reader track price changes automatically?",
                answer:
                  "Reader provides the web data layer. Your application should store snapshots, compare changes, and trigger alerts based on your own rules.",
              },
              {
                question: "Can Reader monitor availability?",
                answer:
                  "Yes. Reader can extract availability or stock text when it appears on the product page.",
              },
              {
                question: "Can Reader handle product variants?",
                answer:
                  "Reader can extract visible variant information. Use Browser when your workflow needs to select a variant before the correct price appears.",
              },
              {
                question: "Can Reader crawl category pages?",
                answer:
                  "Yes. Reader Crawl can help discover related pages from public category or collection pages using the limits and filters you set.",
              },
              {
                question:
                  "Should I store Markdown with price snapshots?",
                answer:
                  "Yes. Keeping source Markdown and URL metadata makes it easier to inspect changes, debug alerts, and review unusual results.",
              },
              {
                question:
                  "How do credits work for price monitoring?",
                answer:
                  "Usage depends on pages scraped or crawled, whether premium mode is needed, whether extraction is used, and whether browser sessions are required.",
              },
              {
                question: "Is Reader only for ecommerce prices?",
                answer:
                  "No. Reader can support any workflow where public web pages contain price or availability information your system needs to collect and compare.",
              },
              {
                question:
                  "When should I use Browser for price monitoring?",
                answer:
                  "Use Browser when the page requires interaction, such as selecting variants, setting location, applying filters, clicking tabs, or capturing a specific rendered state.",
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
              Build price monitoring on cleaner web data
            </h2>
            <p className="text-base text-fg-muted mb-4">
              Use Reader to collect product page context, extract price and
              availability fields, and power the monitoring workflow inside your
              own application.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Start with one product URL, store the first snapshot, and build
              from there.
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
