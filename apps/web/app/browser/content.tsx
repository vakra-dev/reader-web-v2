"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const codeTabs = [
  {
    label: "cURL",
    code: `# Create a browser session
curl -X POST https://api.reader.dev/v1/sessions \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: $READER_KEY"

# Returns { "wsEndpoint": "wss://..." }
# Connect with Playwright or Puppeteer using the endpoint`,
  },
  {
    label: "JavaScript",
    code: `import { ReaderClient } from "@vakra-dev/reader-js";
import { chromium } from "playwright";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });
const session = await reader.sessions.create();

// Connect with one line
const browser = await chromium.connectOverCDP(session.wsEndpoint);
const page = await browser.newPage();

await page.goto("https://example.com");
await page.click("text=Sign in");
await page.fill("input[name='email']", "user@example.com");
await page.screenshot({ path: "page.png", fullPage: true });

await browser.close();`,
  },
  {
    label: "Python",
    code: `from reader_py import ReaderClient
from playwright.sync_api import sync_playwright

reader = ReaderClient(api_key="rdr_your_api_key")
session = reader.sessions.create()

with sync_playwright() as p:
    browser = p.chromium.connect_over_cdp(session.ws_endpoint)
    page = browser.new_page()

    page.goto("https://example.com")
    page.click("text=Sign in")
    page.fill("input[name='email']", "user@example.com")
    page.screenshot(path="page.png", full_page=True)

    browser.close()`,
  },
];

const steps = [
  {
    title: "Create a browser session.",
    description:
      "Your application creates a browser session through Reader. Reader launches a cloud browser and returns a WebSocket endpoint.",
  },
  {
    title: "Connect with Playwright or Puppeteer.",
    description:
      "Use your existing automation tools to connect to the session. One line change from launching a local browser to connecting to a cloud session.",
  },
  {
    title: "Navigate, click, type, and capture.",
    description:
      "Your automation code controls the browser. Navigate to pages, fill forms, click buttons, scroll, take screenshots, generate PDFs, or extract content.",
  },
  {
    title: "Return output to your application.",
    description:
      "Your workflow decides what to capture: text from the page, HTML from elements, screenshot files, PDF output, URLs visited, or extracted values.",
  },
  {
    title: "Close the session.",
    description:
      "Close the browser connection and stop the session when done. Sessions time out automatically if not stopped.",
  },
];

const features = [
  {
    title: "Playwright and Puppeteer compatible",
    description:
      "Reader Browser is designed to work with the browser automation tools developers already use. Connect with connectOverCDP or Puppeteer's connect method. Your existing scripts work without modification.",
  },
  {
    title: "Interactive page context",
    description:
      "Click through tabs or filters, submit search forms, select product variants, navigate multi step flows, and capture screenshots or PDFs after the page reaches the right state.",
  },
  {
    title: "Browser as a fallback for web context",
    description:
      "Use Scrape for one page. Use Crawl for many pages. Use Extract for fields. Use Browser when interaction is required. Browser should often be the fallback, not the starting point.",
  },
  {
    title: "Time based credit usage",
    description:
      "Browser sessions use 1 credit per minute. Close sessions when the workflow is complete. Keep scripts focused and avoid idle waiting to control costs.",
  },
  {
    title: "Agent design patterns",
    description:
      "Give your agent a browser tool only for tasks that need interaction. Use Browser after a failed scrape. Use Browser for verification screenshots. Use Browser to reach the right state before extraction.",
  },
  {
    title: "Full session control",
    description:
      "Cookies, local storage, and authentication persist for the duration of the session. Your automation code has full control over the browser environment.",
  },
];

const useCases = [
  {
    title: "Interactive product pages",
    description:
      "Some product pages require selecting a size, location, or variant before showing availability, price, or shipping details. Use Browser to interact with the page state.",
  },
  {
    title: "Search and filter flows",
    description:
      "Some websites expose useful data only after a search form, filter selection, or multi step navigation. Use Browser when the URL alone is not enough.",
  },
  {
    title: "Screenshots and visual review",
    description:
      "Capture screenshots after the page has rendered or after your workflow has taken specific actions. Useful for QA, monitoring, customer support, and audits.",
  },
  {
    title: "PDF capture",
    description:
      "Render pages as PDFs when the output depends on rendered page state. Browser sessions are a natural fit for PDF generation workflows.",
  },
  {
    title: "Existing automation scripts",
    description:
      "If your team already has Playwright or Puppeteer scripts, Reader Browser can provide hosted sessions for those workflows without running browser infrastructure yourself.",
  },
  {
    title: "Authenticated workflows",
    description:
      "Support flows where your system owns the session and credentials. Log into vendor portals, customer dashboards, or internal tools to extract content from authenticated pages.",
  },
];

const faqs = [
  {
    question: "What is Reader Browser?",
    answer:
      "Reader Browser is a cloud browser API that lets your workflow create browser sessions and control them with tools such as Playwright, Puppeteer, or CDP based automation.",
  },
  {
    question: "Is Browser built for AI agents?",
    answer:
      "Yes. Browser is useful when an agent workflow needs interaction, rendered state, screenshots, PDFs, forms, navigation, or an existing browser automation script.",
  },
  {
    question: "When should I use Browser instead of Scrape?",
    answer:
      "Use Browser when the workflow requires clicks, typing, forms, navigation, screenshots after actions, PDFs, or page state. Use Scrape when you only need content from a URL.",
  },
  {
    question: "Does Reader Browser work with Playwright?",
    answer:
      "Yes. Reader Browser is designed to work with Playwright style browser automation through a cloud browser session.",
  },
  {
    question: "Does Reader Browser work with Puppeteer?",
    answer:
      "Yes. Reader Browser can support Puppeteer style automation through a browser session connection.",
  },
  {
    question: "Is Browser the same as Extract?",
    answer:
      "No. Extract turns page content into structured JSON. Browser gives your code control over a live page. You can use Browser to prepare page state before capturing or extracting data.",
  },
  {
    question: "How are Browser sessions billed in credits?",
    answer:
      "Browser sessions use 1 credit per minute. Close sessions when the workflow is complete.",
  },
  {
    question: "Should every agent use Browser?",
    answer:
      "No. Most agent workflows should start with Scrape, Crawl, or Extract. Use Browser only when the page requires interaction or browser controlled state.",
  },
  {
    question: "Can Browser capture screenshots?",
    answer:
      "Yes. Browser workflows can capture screenshots through your automation code.",
  },
  {
    question: "Can Browser generate PDFs?",
    answer:
      "Yes. Browser workflows can generate PDFs when your automation code captures the rendered page as a PDF.",
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

export function BrowserContent() {
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
                Cloud browser API for AI agents
              </h1>
              <p className="text-lg text-accent-500 font-medium mb-4">
                Give your agent a real browser when page context requires
                interaction.
              </p>
              <p className="text-base text-fg-secondary leading-relaxed mb-8">
                Reader Browser lets your workflow launch a cloud browser session
                and connect with Playwright, Puppeteer, or CDP based automation
                so agents can click, type, navigate, capture screenshots,
                generate PDFs, and work with rendered page state.
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
              When scraping is not enough
            </h2>
            <div className="space-y-4 text-base text-fg-muted leading-relaxed">
              <p>
                Most agent workflows should start with Scrape or Crawl. If your
                agent only needs to read a page, summarize content, ingest
                documentation, or extract fields from visible page content, a
                normal scrape is usually the best tool. It is simpler, faster,
                and returns clean Markdown or structured data directly.
              </p>
              <p>
                But some web workflows need a browser. A page may require a
                click before the right content appears. A product page may need
                a variant selected. A dashboard may need navigation. A search
                page may need a form submission. A report may need to be
                downloaded as a PDF. A visual review workflow may need a
                screenshot after a page finishes rendering.
              </p>
              <p>
                Reader Browser is for those moments. It gives your application a
                real cloud browser session that your automation code can control.
                Use it when page context depends on interaction, state, or an
                existing browser automation script.
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
            What Reader Browser does
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

      {/* Browser vs Scrape */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Browser versus Scrape
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Browser and Scrape solve related but different problems. The
              simplest rule: start with Scrape when you need content. Use Browser
              when the page needs actions.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-edge rounded-md">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Need
                    </th>
                    <th className="px-5 py-3 text-sm font-semibold text-fg">
                      Use
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-fg-muted">
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Read a public page</td>
                    <td className="px-5 py-3">Scrape</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Convert a URL to Markdown</td>
                    <td className="px-5 py-3">Scrape</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">
                      Extract fields from visible content
                    </td>
                    <td className="px-5 py-3">Extract</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">
                      Collect many pages from a site
                    </td>
                    <td className="px-5 py-3">Crawl</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Click through a page</td>
                    <td className="px-5 py-3">Browser</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Fill a form</td>
                    <td className="px-5 py-3">Browser</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">
                      Capture a screenshot after interaction
                    </td>
                    <td className="px-5 py-3">Browser</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">
                      Generate a PDF from rendered state
                    </td>
                    <td className="px-5 py-3">Browser</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">
                      Run an existing Playwright script
                    </td>
                    <td className="px-5 py-3">Browser</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Session Lifecycle */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Session lifecycle
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              Reader Browser gives your workflow a hosted browser session.
              Instead of running Chromium workers on your own infrastructure,
              your application creates a session through Reader, connects to it
              with your automation client, performs the steps it needs, and
              closes the session when the task is done.
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">{`Create browser session
  → Connect with Playwright or Puppeteer
  → Navigate to the page
  → Click, type, wait, screenshot, or extract
  → Return output to your application
  → Close the session`}</code>
              </pre>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              A local Playwright workflow usually starts by launching a browser:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">{`const browser = await chromium.launch();`}</code>
              </pre>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              With a cloud browser session, your workflow connects to an
              existing browser endpoint:
            </p>
            <div className="rounded-md border border-edge overflow-hidden mb-6">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">{`const browser = await chromium.connectOverCDP(session.wsEndpoint);`}</code>
              </pre>
            </div>
            <p className="text-base text-fg-muted leading-relaxed mb-6">
              From there, your code can use normal browser automation patterns:
            </p>
            <div className="rounded-md border border-edge overflow-hidden">
              <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary">{`const page = await browser.newPage();

await page.goto("https://example.com");
await page.click("text=Sign in");
await page.fill("input[name='email']", "user@example.com");
await page.screenshot({ path: "page.png", fullPage: true });

await browser.close();`}</code>
              </pre>
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
              Credit usage for Browser
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8">
              Browser sessions use credits based on time. Your workflow should
              close sessions when they are no longer needed.
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
                    <td className="px-5 py-3">Browser session</td>
                    <td className="px-5 py-3">1 credit per minute</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Standard scrape</td>
                    <td className="px-5 py-3">1 credit per page</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Premium scrape</td>
                    <td className="px-5 py-3">3 credits per page</td>
                  </tr>
                  <tr className="border-b border-edge/50">
                    <td className="px-5 py-3">Cache hit</td>
                    <td className="px-5 py-3">0 credits</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">Failed scrape</td>
                    <td className="px-5 py-3">0 credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-3 text-base text-fg-muted leading-relaxed">
              <p>Good browser usage patterns include:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Open the session only when interaction is required</li>
                <li>Keep the script focused on the task</li>
                <li>Avoid idle waiting where possible</li>
                <li>Capture the needed output quickly</li>
                <li>Close the session after completion</li>
                <li>Use Scrape or Extract for simple page reads</li>
              </ul>
            </div>
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
                  Use Scrape when you need page content
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your agent only needs to read a page, summarize content,
                  or get clean Markdown from a URL, Scrape is simpler, faster,
                  and cheaper. Start with Scrape and only move to Browser if
                  the content requires interaction.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Crawl when you need many pages
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If your workflow needs context from an entire website,
                  documentation site, or product catalog, use Crawl. Browser
                  sessions are for individual interactive pages, not bulk
                  collection.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Extract when you need structured fields
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If the data you need is already visible on the page and you
                  want it as JSON, use Extract. Browser is for reaching page
                  state that a normal scrape cannot access.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-fg mb-2">
                  Use Browser when interaction is required
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  If the page needs clicks, form input, navigation, or
                  screenshot capture after rendering, Browser is the right
                  tool. Use it as a fallback when simpler capabilities are not
                  enough.
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
              Give your agent a browser when it needs one
            </h2>
            <p className="text-base text-fg-muted mb-8">
              Use Scrape for pages your agent can read directly. Use Crawl for
              websites. Use Extract for fields. Use Browser when the web page
              needs interaction.
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
