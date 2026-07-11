import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PrimitivePage } from "@/components/primitive/primitive-page";
import type { PrimitivePageData } from "@/components/primitive/primitive-page";

export const metadata: Metadata = {
  title: "Cloud Browser API — Stealth Chrome over CDP | Reader",
  description:
    "Launch stealth Chrome sessions and connect with Playwright or Puppeteer over CDP. Anti-bot protection built in. Open source.",
  alternates: { canonical: "https://reader.dev/browser" },
  openGraph: {
    title: "Cloud Browser API — Stealth Chrome over CDP | Reader",
    description:
      "Launch stealth Chrome sessions and connect with Playwright or Puppeteer over CDP. Anti-bot protection built in.",
    url: "https://reader.dev/browser",
    type: "website",
  },
};

const data: PrimitivePageData = {
  eyebrow: "Browser",
  headline: "Cloud Browser API",
  subheadline: "Stealth Chrome you drive with Playwright or Puppeteer.",
  description:
    "Launch a hosted, stealthed Chromium session and connect your existing scripts over CDP. One line change. Anti-bot stealth is always on. Login, navigate, interact, extract.",
  trustLine:
    "Apache 2.0 · Open Source · Full CDP Access · 1,000 free pages/month",
  codeTabs: [
    {
      label: "JavaScript",
      language: "javascript",
      code: `import { ReaderClient } from "@vakra-dev/reader-js";
import { chromium } from "playwright";

const reader = new ReaderClient({ apiKey: "rdr_your_api_key" });
const session = await reader.sessions.create();

// Connect your existing Playwright scripts
const browser = await chromium.connectOverCDP(session.wsEndpoint);
const page = await browser.newPage();
await page.goto("https://example.com");

// Your automation logic works unchanged
const content = await page.content();`,
    },
    {
      label: "Python",
      language: "python",
      code: `from reader_py import ReaderClient
from playwright.sync_api import sync_playwright

reader = ReaderClient(api_key="rdr_your_api_key")
session = reader.sessions.create()

with sync_playwright() as p:
    browser = p.chromium.connect_over_cdp(session.ws_endpoint)
    page = browser.new_page()
    page.goto("https://example.com")

    content = page.content()`,
    },
    {
      label: "cURL",
      language: "bash",
      code: `# Create a browser session
curl -X POST https://api.reader.dev/v1/sessions \\
  -H "x-api-key: rdr_your_api_key" \\
  -H "Content-Type: application/json"

# Response includes wsEndpoint for CDP connection`,
    },
  ],
  features: [
    {
      title: "One line CDP connect",
      description:
        "Reader returns a standard CDP WebSocket endpoint. Playwright, Puppeteer, and any CDP compatible tool connect with a single line change. No new APIs to learn.",
    },
    {
      title: "Always on stealth",
      description:
        "Every browser session runs with navigator.webdriver set to false, WebGL and canvas fingerprint randomization, and full browser identity generation. Anti detection is not an option you enable. It is the default.",
    },
    {
      title: "Isolated sessions",
      description:
        "Each session gets its own browser profile. Cookies, local storage, and session state are isolated. No cross contamination between sessions.",
    },
    {
      title: "Sessions up to 60 minutes",
      description:
        "Hold sessions for extended workflows. Login to a portal, navigate through multiple pages, fill forms, download files. The session persists for as long as you need it.",
    },
    {
      title: "Proxy infrastructure",
      description:
        "Datacenter and residential proxy pools. Choose standard or premium proxies depending on the target site's protection level.",
    },
    {
      title: "Works with AI agent frameworks",
      description:
        "Expose browser sessions to AI agents through the MCP server or directly through the SDK. Agents can login, navigate, and interact with authenticated web applications.",
    },
  ],
  faqs: [
    {
      question: "How do I connect to a Reader browser?",
      answer:
        "Create a session via the API or SDK. You get back a wsEndpoint (WebSocket URL). Connect with Playwright's connectOverCDP or Puppeteer's connect method.",
    },
    {
      question: "Which tools work with Reader browsers?",
      answer:
        "Any tool that supports the Chrome DevTools Protocol: Playwright, Puppeteer, Selenium (via CDP), and custom CDP clients.",
    },
    {
      question: "Is stealth mode automatic?",
      answer:
        "Yes. Every browser session includes anti detection features by default. There is no toggle to disable it.",
    },
    {
      question: "How long can a session last?",
      answer: "Sessions can run for up to 60 minutes.",
    },
    {
      question: "How are browser sessions billed?",
      answer: "1 credit per minute of active session time.",
    },
  ],
};

export default function BrowserPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PrimitivePage data={data} />
      </main>
      <Footer />
    </>
  );
}
