"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Reader for LLM datasets?",
    answer:
      "Reader helps teams collect public web pages as clean Markdown and metadata for LLM evaluation datasets, fine tuning preparation, research corpora, retrieval systems, and AI workflows.",
  },
  {
    question: "Can Reader collect web data for model training?",
    answer:
      "Reader can collect public web content your workflow is allowed to access. Your team should review, filter, deduplicate, and prepare that content before using it in any model training workflow.",
  },
  {
    question: "Why use Markdown for LLM datasets?",
    answer:
      "Markdown preserves useful page structure such as headings, lists, links, tables, and code blocks while removing much of the noise found in raw HTML.",
  },
  {
    question: "Can Reader crawl documentation for datasets?",
    answer:
      "Yes. Reader can crawl documentation and return page level Markdown and metadata that your pipeline can review, chunk, label, or store.",
  },
  {
    question: "Does Reader create fine tuning examples automatically?",
    answer:
      "No. Reader provides source content. Your pipeline should transform reviewed content into fine tuning examples if that is your intended use case.",
  },
  {
    question: "Can Reader help with evaluation datasets?",
    answer:
      "Yes. Reader can collect realistic source content that your team can use to build grounded evaluation tasks, questions, expected answers, or extraction checks.",
  },
  {
    question: "Should I keep source URLs with dataset records?",
    answer:
      "Yes. Source URLs and metadata help with review, refresh, debugging, provenance, and removal requests.",
  },
  {
    question: "Can Reader extract structured fields for datasets?",
    answer:
      "Yes. Reader Extract can return JSON fields from web pages when your dataset needs structured records in addition to Markdown.",
  },
  {
    question: "How do credits work for dataset collection?",
    answer:
      "Usage depends on pages scraped or crawled, premium mode usage, extraction usage, browser session time, and refresh frequency.",
  },
  {
    question: "Is Reader a full data governance platform?",
    answer:
      "No. Reader is the web context API. Your team owns dataset policy, review, filtering, labeling, storage, versioning, and downstream model use.",
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

export function LlmDatasetCollectionContent() {
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
              Web data collection for LLM datasets
            </h1>
            <p className="text-lg text-accent-500 font-medium mb-4">
              Turn public web pages into clean Markdown for model datasets and AI
              data workflows.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Reader helps teams scrape and crawl public websites into clean
              Markdown, metadata, and page level records for LLM evaluation
              datasets, fine tuning preparation, research corpora, retrieval
              systems, and agent workflows.
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

      {/* Good model datasets start with clean source content */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Good model datasets start with clean source content
            </h2>
            <div className="space-y-4 text-base text-fg-secondary leading-relaxed">
              <p>
                Web pages are one of the most useful sources of language data.
                They contain documentation, product information, articles, help
                center content, policies, tutorials, listings, reviews, technical
                references, and public company pages.
              </p>
              <p>
                But raw web pages are not ready to become model data.
              </p>
              <p>
                A single page may include navigation links, cookie banners,
                sidebars, scripts, styles, ads, footer content, related links,
                repeated menus, tracking code, and content that only appears
                after JavaScript runs. A dataset built directly from raw HTML can
                contain too much noise and not enough usable signal.
              </p>
              <p>That creates problems later.</p>
              <p>
                Evaluation examples may include irrelevant text. Fine tuning
                examples may include boilerplate. Retrieval datasets may contain
                duplicate chunks. Research corpora may be hard to inspect or
                reproduce. Agents may receive context that looks complete but is
                actually missing rendered content.
              </p>
              <p>
                Reader gives AI data workflows a cleaner starting point.
              </p>
              <p>
                Use Reader to scrape and crawl public pages into clean Markdown
                and metadata, then use your own pipeline to filter, review,
                deduplicate, label, version, and store the dataset.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reader is the web collection layer */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Reader is the web collection layer
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A strong dataset pipeline has more than one step.
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Source URLs
  → Reader scrape or crawl
  → Clean Markdown and metadata
  → Filtering and review
  → Deduplication
  → Labeling or transformation
  → Dataset storage
  → Evaluation, fine tuning, retrieval, or analysis`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader handles the web collection and cleanup layer.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Your application owns the dataset decisions:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Which sources are allowed",
                "Which pages should be included",
                "Which pages should be excluded",
                "How content is filtered",
                "How duplicates are removed",
                "How records are labeled",
                "How versions are stored",
                "How sensitive data is handled",
                "How the dataset is reviewed",
                "How the dataset is used downstream",
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
              This separation matters. Reader gives you clean source material.
              Your team controls the dataset policy, quality bar, and model
              workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Reader helps collect */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              What Reader helps collect
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can help collect public web content that your workflow is
              allowed to access.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Common dataset sources include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Documentation pages",
                "API references",
                "Help center articles",
                "Blog posts",
                "Tutorials",
                "Product pages",
                "Public company pages",
                "Changelogs",
                "FAQ pages",
                "Support articles",
                "Public listings",
                "Public policies",
                "Knowledge base content",
                "Research pages",
                "Technical guides",
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
              Reader converts those pages into Markdown, which is easier to
              inspect, clean, chunk, label, and store than raw HTML.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Each page can also retain source metadata such as URL, title,
              scrape time, status, and cache information. That makes the dataset
              easier to audit and refresh later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Markdown as the dataset source format */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use Markdown as the dataset source format
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Markdown is a practical format for AI data workflows.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Raw HTML is too noisy for many use cases. Plain text can remove
              useful structure. Markdown gives you a middle ground that keeps
              important page structure while making the content easier to
              process.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Markdown can preserve:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Headings",
                "Paragraphs",
                "Lists",
                "Tables",
                "Links",
                "Code blocks",
                "Section structure",
                "Source context",
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
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              This is useful for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Creating evaluation examples",
                "Preparing fine tuning data",
                "Building retrieval datasets",
                "Curating research corpora",
                "Creating instruction examples from documentation",
                "Building agent memory or knowledge datasets",
                "Reviewing web content before model use",
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
              A good dataset should be inspectable. Markdown makes the collected
              content easier for humans and tools to review before it enters a
              model workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scrape known pages or crawl source websites */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Scrape known pages or crawl source websites
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Some dataset projects start with a known list of URLs. Others
              start with a website or documentation section and need discovery.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader supports both patterns.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/30">
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Dataset need
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-fg">
                      Reader capability
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-secondary">
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Collect one known page</td>
                    <td className="px-4 py-3">Scrape</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Process a known URL list</td>
                    <td className="px-4 py-3">Batch scrape</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">
                      Discover pages from a website
                    </td>
                    <td className="px-4 py-3">Crawl</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">
                      Collect documentation sections
                    </td>
                    <td className="px-4 py-3">Crawl with include patterns</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <td className="px-4 py-3">Extract fields from pages</td>
                    <td className="px-4 py-3">Extract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      Interact with rendered pages
                    </td>
                    <td className="px-4 py-3">Browser</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Scrape when you know the exact pages.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use batch scraping when your workflow already has a list of source
              URLs.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Use Crawl when you need to discover related pages from a seed URL,
              such as a documentation site, help center, product section, or
              public knowledge base.
            </p>
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
  "url": "https://docs.example.com",
  "maxPages": 500,
  "maxDepth": 4,
  "includePatterns": ["/docs", "/guides", "/reference"],
  "excludePatterns": ["/login", "/signup", "/billing"],
  "formats": ["markdown"]
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              The goal is not to collect every possible page. The goal is to
              collect the right source material for your dataset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keep provenance with every record */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Keep provenance with every record
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Dataset provenance matters.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              If a model evaluation result looks wrong, your team should be able
              to inspect the source. If a dataset needs to be refreshed, you
              should know which URL each record came from. If a page should be
              removed, you should be able to find all derived records.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A useful dataset record might include:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "source_url": "https://docs.example.com/guides/authentication",
  "title": "Authentication Guide",
  "content": "# Authentication Guide\\n\\nUse API keys to authenticate requests...",
  "content_type": "documentation",
  "captured_at": "2026-04-04T12:00:00Z",
  "metadata": {
    "statusCode": 200,
    "cached": false
  }
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              For downstream datasets, you may also store:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Source domain",
                "Page type",
                "Language",
                "Content hash",
                "Dataset version",
                "Review status",
                "License or usage notes",
                "Transformation steps",
                "Derived examples",
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
              Reader provides the source content and metadata. Your dataset
              pipeline should keep that context attached as the content moves
              through filtering, labeling, and transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Build evaluation datasets from web content */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Build evaluation datasets from web content
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              LLM evaluation datasets often need realistic examples from the
              domains your product serves.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can help collect the source material for those evaluations.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              For example, a developer tool might crawl its documentation and
              create question answer examples. A support product might collect
              help center articles and generate test questions from known
              policies. A market research product might collect public company
              pages and evaluate whether an agent extracts the right fields.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A simple evaluation dataset workflow:
            </p>
            <div className="rounded-md border border-edge bg-surface/30 p-6 mb-6">
              <pre className="text-sm text-fg-secondary leading-relaxed whitespace-pre-wrap font-mono">
{`Collect source pages
  → Clean Markdown
  → Select useful sections
  → Create questions or tasks
  → Store expected answers or checks
  → Run model evaluation
  → Review failures against source URLs`}
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader does not create the evaluation framework for you. It gives
              you better source material so your tests are grounded in real web
              content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prepare fine tuning data carefully */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Prepare fine tuning data carefully
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Some teams use public web content to prepare fine tuning examples
              or domain specific datasets.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can help with the collection and cleanup step, but fine
              tuning data requires extra care.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              A good fine tuning preparation workflow should include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Source selection",
                "Content review",
                "Deduplication",
                "Quality filtering",
                "Removal of irrelevant boilerplate",
                "Formatting into training examples",
                "Human review where needed",
                "Version control",
                "Evaluation before and after training",
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
              Reader gives you Markdown and metadata. Your pipeline should decide
              which content is appropriate to use, how it should be transformed,
              and whether it meets your quality and usage requirements.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Do not treat raw collected pages as training data by default. Treat
              them as source material that needs review and preparation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Create research corpora and knowledge datasets */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Create research corpora and knowledge datasets
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader can also support research and internal data workflows that
              are not model training.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Teams may want to collect public web content to build:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Domain research corpora",
                "Product knowledge datasets",
                "Documentation archives",
                "Market maps",
                "Policy datasets",
                "Public website snapshots",
                "Agent research memory",
                "Internal search indexes",
                "Content classification datasets",
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
              In these workflows, the value is often not just the text. It is the
              source URL, page type, collection date, and ability to refresh or
              audit the dataset.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Reader helps make public web content easier to collect and
              normalize before your team applies its own analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Extract when records need fields */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Use Extract when records need fields
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Some dataset workflows need full Markdown pages. Others need
              structured records.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              Reader Extract can turn source pages into JSON fields that are
              easier to store, filter, and label.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              For example, a documentation dataset may extract:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "page_title": "string",
  "section_titles": "array",
  "product_area": "string",
  "has_code_examples": "boolean",
  "summary": "string"
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              A company research dataset may extract:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                <span className="text-xs text-fg-tertiary font-mono">json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">
{`{
  "company_name": "string",
  "description": "string",
  "industry": "string",
  "products": "array",
  "target_customers": "array"
}`}
                </code>
              </pre>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Structured extraction is useful when your dataset needs searchable
              fields or labels. Markdown is useful when your dataset needs full
              source content.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              Most serious workflows use both.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Responsible dataset collection */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Responsible dataset collection
            </h2>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Reader should be used for public web content your workflow is
              allowed to access.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-4">
              Dataset collection needs stronger review than a one time scrape
              because collected data may be stored, transformed, and reused
              later.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-3">
              Good practices include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Keep source URLs with records",
                "Review source selection before collection",
                "Avoid pages behind access controls",
                "Respect site rules and applicable policies",
                "Remove irrelevant boilerplate",
                "Watch for personal or sensitive data",
                "Keep dataset versions",
                "Document transformation steps",
                "Review samples before downstream use",
                "Delete records when they should no longer be used",
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
              Reader provides the web context layer. Your team should define
              collection policy, storage rules, review steps, and downstream
              usage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credit usage for dataset workflows */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fg">
              Credit usage for dataset workflows
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
              For dataset collection, usage is usually driven by:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Number of pages collected",
                "Whether pages are scraped or crawled",
                "How broad the crawl scope is",
                "Whether premium mode is needed",
                "Whether structured extraction is used",
                "Whether browser sessions are needed",
                "How often the dataset is refreshed",
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
              Use page limits, depth controls, include patterns, and sample runs
              before collecting at larger scale.
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
              Reader is a strong fit when your dataset workflow needs to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Collect public web pages",
                "Convert pages into clean Markdown",
                "Crawl documentation or help centers",
                "Preserve source URLs and metadata",
                "Build evaluation datasets",
                "Prepare fine tuning source material",
                "Create research corpora",
                "Extract structured fields",
                "Feed web content into agents or retrieval systems",
                "Keep collection separate from review and training logic",
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
              Reader is not a complete dataset governance platform. It does not
              decide which data you may use, remove sensitive information
              automatically for every workflow, label your dataset, train your
              model, or evaluate model quality.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed">
              It gives your team cleaner public web source material so your
              dataset pipeline can start from a better foundation.
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
              Build LLM datasets from cleaner web content
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Use Reader to collect public web pages as clean Markdown, metadata,
              and structured records for evaluation, fine tuning preparation,
              research, and AI data workflows. Start with a focused source list,
              review the output, and build your dataset pipeline from there.
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
