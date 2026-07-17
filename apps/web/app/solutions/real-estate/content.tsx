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

export function RealEstateContent() {
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
              Real Estate
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
              Real estate web scraping API for AI agents
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed mb-4">
              Turn public property pages into clean listing context and
              structured data.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps real estate workflows scrape public listing pages,
              extract structured property fields, crawl listing collections, and
              give AI agents clean web context for research, analysis, and
              monitoring workflows.
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

      {/* Real estate pages are full of useful context */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Real estate pages are full of useful context
            </h2>
            <div className="space-y-4">
              <p className="text-base text-fg-secondary leading-relaxed">
                Real estate listings contain more than a price and address.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                A listing page may include property description, asking price,
                rent, beds, baths, square footage, amenities, neighborhood text,
                availability, agent or broker details, property type, images,
                fees, open house notes, and listing status.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                That information is valuable for agents, investors, renters,
                buyers, market research teams, property technology products, and
                internal data workflows.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                But listing pages are not always easy to process.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Different sites use different layouts. Some pages load content
                after JavaScript runs. Some details are hidden in tabs,
                accordions, maps, or variant views. A field that appears clearly
                on one page may be missing or written differently on another
                page.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Reader gives real estate workflows a cleaner way to collect
                public listing context.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed">
                Use Reader to turn public listing URLs into clean Markdown,
                structured JSON, crawl results, or browser controlled workflows.
                Your application can then store the result, compare changes,
                summarize listings, enrich a database, or power an AI agent.
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
              Reader can help your workflow collect information that appears on
              public real estate pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Common fields include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Listing title",
                "Property address",
                "City",
                "State or region",
                "Price or rent",
                "Currency",
                "Beds",
                "Baths",
                "Square footage",
                "Property type",
                "Listing status",
                "Availability date",
                "Description",
                "Amenities",
                "Neighborhood text",
                "Agent or broker name when public",
                "Contact page or listing page link",
                "Image URLs when available in page content",
                "Page title and metadata",
                "Source URL",
                "Capture time",
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
              Reader is useful when your workflow needs both the full listing
              context and structured fields. Markdown helps an agent understand
              the listing. JSON helps your application store and compare the
              details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How a real estate workflow works with Reader */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              How a real estate workflow works with Reader
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A typical listing workflow starts with a public property URL.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Listing URL
  → Reader Scrape
  → Clean Markdown and metadata
  → Reader Extract
  → Structured property JSON
  → Your database, agent, or analysis workflow`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              For broader research, your workflow may start with a search result
              page, category page, or known list of listing URLs.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Listing collection or URL list
  → Reader Crawl or batch scrape
  → Page level listing context
  → Structured extraction
  → Research, monitoring, or enrichment workflow`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader handles the web context layer. Your application decides how
              to store listings, detect duplicates, compare changes, match
              properties, enrich records, or create reports.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              That separation is important. Reader gives your system clean
              public listing context. Your product owns the real estate workflow
              around it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example property extraction schema */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Example property extraction schema
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Use Reader Extract when your workflow needs structured property
              fields.
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "url": "https://example.com/listings/123-main-street",
  "formats": ["markdown"],
  "extract": {
    "schema": {
      "listing_title": "string",
      "address": "string",
      "city": "string",
      "region": "string",
      "price": "string",
      "property_type": "string",
      "beds": "number",
      "baths": "number",
      "square_feet": "number",
      "availability": "string",
      "amenities": "array",
      "description": "string",
      "agent_or_broker": "string"
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
  "listing_title": "Modern 2 Bedroom Apartment Near Downtown",
  "address": "123 Main Street",
  "city": "Austin",
  "region": "TX",
  "price": "$2,400 per month",
  "property_type": "Apartment",
  "beds": 2,
  "baths": 2,
  "square_feet": 980,
  "availability": "Available now",
  "amenities": ["Parking", "In unit laundry", "Pool"],
  "description": "A bright apartment close to restaurants, transit, and parks.",
  "agent_or_broker": "Example Realty"
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              Your application can store the structured fields with the source
              URL and Markdown. That makes the result easier to inspect, review,
              and refresh later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clean Markdown for listing understanding */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Clean Markdown for listing understanding
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Structured property fields are useful, but real estate workflows
              often need the full context too.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A listing description can explain things that do not fit neatly
              into a field: layout, neighborhood feel, nearby transit,
              renovation quality, building rules, pet policy, amenities,
              parking, fees, or open house details.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader&#39;s Markdown output helps preserve that context in a
              readable form.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Markdown when your agent needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Summarize a listing",
                "Compare multiple properties",
                "Identify amenities",
                "Explain why a listing matches a user preference",
                "Extract neighborhood context",
                "Review listing descriptions",
                "Store source snapshots",
                "Power property research workflows",
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
              For AI agents, clean Markdown is often a better input than raw
              HTML because it removes much of the surrounding page noise while
              keeping useful structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Real estate research workflows built with Reader */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fg">
              Real estate research workflows built with Reader
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Listing enrichment
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Start with a public listing URL and extract structured details
                  such as price, beds, baths, square footage, amenities,
                  description, and availability.
                </p>
                <p className="text-base text-fg-secondary leading-relaxed mt-2">
                  This is useful when your product already has a listing record
                  but needs richer context from the source page.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Rental market research
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Collect public rental listings from selected pages or known
                  URL lists. Store listing snapshots and compare price,
                  availability, amenities, and property types across time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Property comparison agents
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Give an agent several listing URLs and let it summarize
                  differences in price, location, amenities, size, and listing
                  description.
                </p>
                <p className="text-base text-fg-secondary leading-relaxed mt-2">
                  This is useful for renter, buyer, or investor research tools.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Listing change tracking
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Scrape selected listing pages over time and store snapshots.
                  Your application can compare changes in price, availability,
                  description, status, and amenities.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Neighborhood and property context
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Use listing descriptions and related public pages to collect
                  context about neighborhoods, building features, transit,
                  parking, schools, and local amenities when that information
                  appears on the page.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-fg">
                  Internal review workflows
                </h3>
                <p className="text-base text-fg-secondary leading-relaxed">
                  Store clean Markdown and screenshots so a human reviewer can
                  inspect listing details, page state, and extracted fields.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Crawl for listing collections */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use Crawl for listing collections
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Some real estate workflows start with a known URL. Others need to
              discover related pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader Crawl can help when listings are organized across public
              collection pages, search pages, category pages, or property
              directories.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Crawl when you need to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Discover listing pages from a collection",
                "Collect pages from a public directory",
                "Crawl a property management website",
                "Gather listings from a specific section",
                "Build a small market research dataset",
                "Refresh public property pages over time",
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
  "url": "https://example.com/rentals",
  "maxPages": 100,
  "maxDepth": 3,
  "includePatterns": ["/rentals", "/properties"],
  "excludePatterns": ["/login", "/account", "/apply"],
  "formats": ["markdown"]
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              The goal is to collect the pages relevant to your workflow, not to
              crawl everything. Use page limits, depth controls, and URL filters
              to keep the crawl focused.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Browser when listing data depends on interaction */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use Browser when listing data depends on interaction
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Many listing pages can be handled with Scrape, Crawl, and Extract.
              Some cannot.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Use Reader Browser when the workflow needs interaction before the
              useful information appears.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Browser may be useful when you need to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Open listing tabs or accordions",
                "Click through photo galleries",
                "Apply filters",
                "Select date or availability options",
                "Submit a public search form",
                "Capture a screenshot",
                "Generate a PDF",
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
              Browser is powerful, but it should not be the default for every
              listing workflow. Use Scrape when the page content is visible. Use
              Browser when interaction changes what your system needs to
              collect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store snapshots for market analysis */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Store snapshots for market analysis
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A real estate data workflow should not only capture the latest page
              content. It should preserve what the listing looked like at a
              specific time.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              A useful listing snapshot might include:
            </p>
            <div className="mb-6">
              <CodeBlock
                language="json"
                code={`{
  "source_url": "https://example.com/listings/123-main-street",
  "address": "123 Main Street",
  "price": "$2,400 per month",
  "beds": 2,
  "baths": 2,
  "square_feet": 980,
  "availability": "Available now",
  "captured_at": "2026-04-04T12:00:00Z",
  "source_markdown_hash": "sha256:...",
  "metadata": {
    "statusCode": 200,
    "cached": false
  }
}`}
              />
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              With snapshots, your application can compare changes over time.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              This can support:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Price change tracking",
                "Availability monitoring",
                "Listing status changes",
                "Amenity updates",
                "Description changes",
                "Market research",
                "Review workflows",
                "Agent generated summaries",
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
              Reader gives you clean source content. Your application owns
              storage, comparison, matching, and analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keep real estate workflows responsible */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Keep real estate workflows responsible
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader should be used for public web context your workflow is
              allowed to access.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Good real estate data workflows should be clear about what they
              collect, where it came from, and how it is used.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Reader for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Public listing pages",
                "Public property descriptions",
                "Public pricing and availability text",
                "Public amenities and listing details",
                "Public agent or broker text when visible",
                "Public page metadata",
                "Public collection pages",
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
                "Personal information",
                "Authenticated pages",
                "Access controlled data",
                "Private owner details",
                "Terms of use",
                "Local data rules",
                "Automated actions on listing platforms",
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
              Reader gives your system the web context layer. Your product
              should define the rules for collection, storage, review, and
              usage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for real estate workflows */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for real estate workflows
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
                Real estate workflows usually depend on:
              </p>
              <ul className="space-y-2">
                {[
                  "Number of listing pages processed",
                  "Number of pages per market or collection",
                  "Whether crawls are used",
                  "Whether structured extraction is added",
                  "Whether premium mode is needed",
                  "Whether browser sessions are required",
                  "How often listings are refreshed",
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
                Start with a small set of listings, inspect the output, refine
                the schema, then scale with clear limits.
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
              Reader is a strong fit when your real estate workflow needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Scrape public listing pages",
                "Extract structured property fields",
                "Store clean listing snapshots",
                "Crawl public property collections",
                "Feed listing context into AI agents",
                "Compare property pages over time",
                "Build rental or sales market research workflows",
                "Use browser sessions for interactive listing pages",
                "Keep web data collection separate from analysis logic",
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
              Reader is not a complete real estate data platform by itself. It
              does not verify listings, match properties across platforms,
              estimate valuations, manage alerts, or replace your database.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              It gives your product the clean public web context needed to build
              those workflows.
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
                question: "What is Reader for real estate?",
                answer:
                  "Reader helps real estate workflows scrape public listing pages, convert them into clean Markdown, and extract structured property details.",
              },
              {
                question: "Can Reader extract property data?",
                answer:
                  "Yes. Reader can extract fields such as address, price, beds, baths, square footage, property type, amenities, description, and availability when those fields appear on the page.",
              },
              {
                question: "Can Reader scrape rental listings?",
                answer:
                  "Yes. Reader can scrape public rental listing pages and return Markdown, metadata, screenshots, or structured JSON.",
              },
              {
                question:
                  "Can Reader crawl real estate listing collections?",
                answer:
                  "Yes. Reader Crawl can collect related public pages from listing collections, property directories, or public search result sections based on the limits and filters you set.",
              },
              {
                question: "Can Reader track listing changes?",
                answer:
                  "Reader provides the web data layer. Your application should store snapshots, compare changes, and decide what updates matter.",
              },
              {
                question: "Can Reader handle dynamic listing pages?",
                answer:
                  "Reader can render modern pages before returning content. Use Browser when the workflow requires clicks, filters, tabs, screenshots, or other interaction.",
              },
              {
                question:
                  "Should I store Markdown with property records?",
                answer:
                  "Yes. Source Markdown makes it easier to review extracted fields, debug changes, and preserve context from the original listing.",
              },
              {
                question:
                  "How do credits work for real estate workflows?",
                answer:
                  "Usage depends on pages scraped or crawled, extraction usage, premium mode, browser session time, and refresh frequency.",
              },
              {
                question: "Is Reader a real estate data provider?",
                answer:
                  "No. Reader is the web context API. Your product owns data storage, verification, matching, analysis, alerts, and user experience.",
              },
              {
                question:
                  "What kinds of real estate pages can Reader process?",
                answer:
                  "Reader is useful for public listing pages, property pages, rental pages, property management websites, directories, and other public pages your workflow is allowed to access.",
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
              Turn property pages into usable listing context
            </h2>
            <p className="text-base text-fg-muted mb-4">
              Use Reader to scrape public real estate pages, extract structured
              property data, and give your agents clean listing context for
              research and analysis.
            </p>
            <p className="text-base text-fg-muted mb-8">
              Start with one listing URL or crawl a collection of public
              property pages.
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
