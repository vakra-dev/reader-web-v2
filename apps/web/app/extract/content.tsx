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
    "url": "https://example.com/product",
    "formats": ["markdown"],
    "extract": {
      "schema": {
        "name": "string",
        "price": "string",
        "availability": "string",
        "rating": "number",
        "summary": "string"
      }
    }
  }'`,
  },
  {
    label: "JavaScript",
    code: `import { ReaderClient } from "@vakra-dev/reader-js";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });

const result = await reader.read({
  url: "https://example.com/product",
  formats: ["markdown"],
  extract: {
    schema: {
      name: "string",
      price: "string",
      availability: "string",
      rating: "number",
      summary: "string",
    },
  },
});

console.log(result.data.extracted);`,
  },
  {
    label: "Python",
    code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")

result = reader.read(
    url="https://example.com/product",
    formats=["markdown"],
    extract={
        "schema": {
            "name": "string",
            "price": "string",
            "availability": "string",
            "rating": "number",
            "summary": "string"
        }
    }
)

print(result.data.extracted)`,
  },
];

const steps = [
  {
    title: "Send a URL and an extraction definition.",
    description:
      "The URL is the page to extract from. The extraction definition can be a JSON Schema, shorthand schema, natural language prompt, or prompt plus schema.",
  },
  {
    title: "Reader scrapes and cleans the page.",
    description:
      "The full scrape pipeline runs. The page is rendered, content is extracted, and the result is converted to clean Markdown.",
  },
  {
    title: "Extraction runs on the cleaned content.",
    description:
      "Reader applies your schema or instruction to the cleaned Markdown and returns structured JSON alongside the page context.",
  },
  {
    title: "Missing fields return null.",
    description:
      "If a field is not found in the page content, it returns null. Reader does not invent data for missing fields. Your application can decide how to handle missing values.",
  },
  {
    title: "Your application receives structured data and source context.",
    description:
      "The response includes both the extracted JSON and the normal Reader outputs such as Markdown and metadata. Use the fields for your database, API, or pipeline.",
  },
];

const features = [
  {
    title: "Four ways to define what you want",
    description:
      "Full JSON Schema for detailed control. Shorthand schema for quick prototyping. Prompt only for exploratory extraction. Prompt plus schema for guided extraction with natural language context.",
  },
  {
    title: "Better than brittle selectors",
    description:
      "CSS selectors break when pages change layout. Reader Extract works semantically. Instead of finding text inside a CSS class, you define the fields you need and Reader finds them in the content.",
  },
  {
    title: "Markdown alongside JSON",
    description:
      "Every extract response includes both the clean Markdown and the structured JSON. Use the Markdown for context, display, or storage. Use the JSON for your database, API, or pipeline.",
  },
  {
    title: "Explicit null for missing fields",
    description:
      "Real web pages are inconsistent. Some pages will not include every field your schema asks for. Reader returns null for fields that are not found. Missing values are explicit, never hallucinated.",
  },
  {
    title: "Works on any page type",
    description:
      "Product pages, company profiles, job listings, articles, documentation, event pages, recipe pages, real estate listings. The extraction works on any content because it reads clean Markdown, not raw HTML.",
  },
  {
    title: "Credit usage you can predict",
    description:
      "A standard scrape plus extract costs 3 credits. A premium scrape plus extract costs 5 credits. Use extraction when the structured fields are worth the extra step.",
  },
];

const useCases = [
  {
    title: "Product data extraction",
    description:
      "Extract product name, brand, price, currency, availability, variants, rating, review count, and description from public product pages.",
  },
  {
    title: "Company research",
    description:
      "Extract company name, description, location, industry, product categories, contact page links, hiring signals, and public website details.",
  },
  {
    title: "Pricing page analysis",
    description:
      "Extract plan names, feature lists, limits, price text, trial details, and call to action copy from public pricing pages.",
  },
  {
    title: "Real estate listings",
    description:
      "Extract address, price, beds, baths, square footage, description, amenities, listing status, and public broker information.",
  },
  {
    title: "Article and content metadata",
    description:
      "Extract title, author, publish date, topic, summary, tags, and canonical URL from articles, blogs, and news pages.",
  },
  {
    title: "Job posts",
    description:
      "Extract job title, company, location, salary range, requirements, responsibilities, benefits, and application details from public job pages.",
  },
];

const faqs = [
  {
    question: "What is Reader Extract?",
    answer:
      "Reader Extract is a structured data extraction API that turns web page content into JSON using a schema or natural language instruction.",
  },
  {
    question: "Is Extract built for AI agents?",
    answer:
      "Yes. Extract helps agents move from reading web pages to using structured fields in workflows, tools, databases, and downstream actions.",
  },
  {
    question: "Does Extract use the same Reader endpoint?",
    answer:
      "Yes. Extract is an optional parameter on the Reader read endpoint. The page is scraped first, then extraction runs on the cleaned content.",
  },
  {
    question: "What schema formats does Reader support?",
    answer:
      "Reader supports full JSON Schema, shorthand schema, prompt only extraction, and prompt plus schema extraction.",
  },
  {
    question: "Can Reader extract product data?",
    answer:
      "Yes. Reader can extract product details such as name, price, availability, rating, description, and other fields that appear in the page content.",
  },
  {
    question: "What happens when a field is missing?",
    answer:
      "Reader returns null for fields that are not found in the page content.",
  },
  {
    question: "Can Extract run on crawls or batch jobs?",
    answer:
      "Extract is currently designed for scrape mode. For larger workflows, collect or discover URLs first, then run extraction on the pages that need structured fields.",
  },
  {
    question: "Does Extract return the original page content too?",
    answer:
      "Yes. Extracted JSON is returned alongside normal Reader outputs such as Markdown and metadata.",
  },
  {
    question: "How many credits does extraction use?",
    answer:
      "Extract adds 2 credits on top of the scrape. A standard scrape plus extract is 3 credits. A premium scrape plus extract is 5 credits.",
  },
  {
    question: "When should I use Extract instead of selectors?",
    answer:
      "Use selectors when the page layout is stable and exact. Use Extract when the data is semantic, pages vary in structure, or your workflow needs fields from messy web content.",
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

export function ExtractContent() {
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
                Structured data extraction API for AI agents
              </h1>
              <p className="text-lg text-accent-500 font-medium mb-4">
                Turn web pages into structured JSON your agent can use.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed mb-8">
                Reader Extract scrapes a page, converts it into clean Markdown,
                applies your schema or instruction, and returns structured data
                alongside the original page context.
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
              From web context to usable fields
            </h2>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                AI agents often need to do more than read a web page. They need
                to pull out the details that matter and pass them into another
                system. A research agent may need a company name, description,
                location, and industry. A shopping workflow may need product
                name, price, and availability. A real estate workflow may need
                address, price, beds, baths, and square footage.
              </p>
              <p>
                You can scrape the page and ask a model to find those fields
                yourself, but that creates repeated work. You still need to
                fetch the page, clean the content, decide what text to send to
                the model, define the output shape, validate the result, handle
                missing values, and store the final record.
              </p>
              <p>
                Reader Extract brings that workflow into the same API you use
                for scraping. Send Reader a URL and an extraction definition.
                Reader handles the scrape, turns the page into clean Markdown,
                runs extraction, validates the shape, and returns structured
                JSON with the page context.
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
            How Reader Extract works
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

      {/* Schema Formats */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Four ways to define what you want
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-10">
              Reader supports different extraction styles depending on how much
              control your workflow needs.
            </p>

            <div className="space-y-10">
              {/* Full JSON Schema */}
              <div>
                <h3 className="text-lg font-semibold text-fg mb-2">
                  Full JSON Schema
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-4">
                  Use full JSON Schema when you want detailed control over field
                  names, types, descriptions, nested objects, and validation
                  behavior. This is a good fit for production workflows where
                  the output needs to match a database model, API payload, or
                  internal data contract.
                </p>
                <div className="rounded-md border border-edge overflow-hidden">
                  <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                    <code className="text-fg-secondary">{`{
  "extract": {
    "schema": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "The product name"
        },
        "price": {
          "type": "number",
          "description": "Price without currency symbol"
        },
        "in_stock": {
          "type": "boolean"
        }
      }
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Shorthand Schema */}
              <div>
                <h3 className="text-lg font-semibold text-fg mb-2">
                  Shorthand schema
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-4">
                  Use shorthand schema when you want a faster way to define
                  common fields. Useful when you want clean structure without
                  writing full JSON Schema by hand.
                </p>
                <div className="rounded-md border border-edge overflow-hidden">
                  <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                    <code className="text-fg-secondary">{`{
  "extract": {
    "schema": {
      "title": "string",
      "price": "number",
      "in_stock": "boolean"
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Prompt Only */}
              <div>
                <h3 className="text-lg font-semibold text-fg mb-2">
                  Prompt only
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-4">
                  Use prompt only when the output is exploratory or does not
                  need a strict schema. Useful for research workflows,
                  summarization, categorization, and first pass analysis.
                </p>
                <div className="rounded-md border border-edge overflow-hidden">
                  <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                    <code className="text-fg-secondary">{`{
  "extract": {
    "prompt": "List the 3 main topics discussed on this page"
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Prompt + Schema */}
              <div>
                <h3 className="text-lg font-semibold text-fg mb-2">
                  Prompt plus schema
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-4">
                  Use prompt plus schema when you want both control and
                  guidance. This is often the best option for real world pages
                  because the schema defines the output shape while the prompt
                  clarifies how the model should interpret the page.
                </p>
                <div className="rounded-md border border-edge overflow-hidden">
                  <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                    <code className="text-fg-secondary">{`{
  "extract": {
    "schema": {
      "title": "string",
      "price": "number"
    },
    "prompt": "Focus on the primary product and ignore accessories"
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extraction Across Different Layouts */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Extraction across different layouts
            </h2>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                CSS selectors are useful when pages have stable structure. They
                are also fragile. If a product page moves the price from{" "}
                <code className="text-sm bg-surface/50 px-1.5 py-0.5 rounded border border-edge">
                  .price
                </code>{" "}
                to{" "}
                <code className="text-sm bg-surface/50 px-1.5 py-0.5 rounded border border-edge">
                  .product-price
                </code>
                , your selector may fail. If a website has several templates,
                you may need different selectors for each layout. If you are
                collecting from many websites, maintaining selectors can become
                its own product.
              </p>
              <p>
                Reader Extract works semantically. Instead of telling your
                scraper to find the text inside a CSS class, you define the
                fields you need and Reader finds them in the content. That does
                not mean extraction is magic. You should still validate
                important outputs, review edge cases, and keep source context.
                But for heterogeneous pages, schema based extraction can reduce
                the amount of custom parsing logic your team needs to maintain.
              </p>
              <p>
                Use selectors when the page structure is stable and exact. Use
                Extract when your workflow needs to understand fields across
                messy or varied web pages.
              </p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Credit usage for extraction
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Extraction adds credits on top of the scrape. If the scrape
              succeeds but extraction fails, the scrape result is still returned
              and the extraction attempt still consumes credits.
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
                    <td className="px-5 py-3">Standard scrape</td>
                    <td className="px-5 py-3">1 credit</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Standard scrape plus extract</td>
                    <td className="px-5 py-3">3 credits</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">Premium scrape plus extract</td>
                    <td className="px-5 py-3">5 credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-fg-muted leading-relaxed">
              Use extraction when the structured fields are worth the extra
              step. If your agent only needs to read or summarize a page,
              Markdown may be enough. If your product needs to store fields,
              compare values, or trigger workflow logic, extraction is usually
              worth it.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fg">
              When to use another capability
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Scrape when you need page context
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your agent needs to read, summarize, cite, or reason over
                  a page, start with Scrape. Markdown is often enough for
                  research and RAG workflows.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Crawl when you need many related pages
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your workflow needs context from an entire website,
                  documentation site, help center, or product catalog, use Crawl
                  first. Extract is best when applied to pages where you know
                  which fields matter.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Browser when the page needs interaction
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If the data only appears after clicks, filters, form input,
                  login flows your system controls, or multi step navigation,
                  use Browser to create the page state first.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Extract when fields matter
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your application needs typed output such as product
                  details, company data, listing fields, job post details, or
                  pricing information, Extract is the right capability.
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
              Turn web pages into structured data
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Give your agent the fields it needs, with the source page context
              beside them. Extract product data, company details, listing
              information, pricing fields, article metadata, and more from one
              API.
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
