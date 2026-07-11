export interface ComparisonRow {
  feature: string;
  reader: string;
  competitor: string;
}

export interface ComparisonDifference {
  title: string;
  description: string;
}

export interface ComparisonPage {
  slug: string;
  competitor: string;
  meta: {
    title: string;
    description: string;
  };
  intro: string;
  table: ComparisonRow[];
  differences: ComparisonDifference[];
  whenCompetitor: {
    heading: string;
    points: string;
  };
  whenReader: string;
  blogSlug: string;
}

export const comparisons: ComparisonPage[] = [
  {
    slug: "firecrawl",
    competitor: "Firecrawl",
    meta: {
      title: "Reader vs Firecrawl: Feature Comparison (2026)",
      description:
        "Compare Reader and Firecrawl side by side. Open source licensing, browser automation, markdown output, and self hosting compared.",
    },
    intro:
      "Both Reader and Firecrawl turn web pages into clean markdown for AI applications. They take different approaches to licensing, browser automation, and self hosting.",
    table: [
      { feature: "License", reader: "Apache 2.0", competitor: "AGPL 3.0" },
      {
        feature: "Self host (full features)",
        reader: "Yes, no feature gaps",
        competitor: "Partial (Fire Engine, Agent excluded)",
      },
      {
        feature: "Browser sessions (CDP)",
        reader: "Full Playwright/Puppeteer via CDP",
        competitor: "Interact endpoint (actions before scrape)",
      },
      {
        feature: "Markdown output",
        reader: "Default via Supermarkdown (Rust)",
        competitor: "Default",
      },
      {
        feature: "Structured extraction",
        reader: "Schema or natural language",
        competitor: "Extract endpoint with Pydantic",
      },
      {
        feature: "Crawling",
        reader: "BFS with depth/page limits",
        competitor: "Crawl + Map endpoints",
      },
      {
        feature: "Search endpoint",
        reader: "Not available",
        competitor: "Yes",
      },
      {
        feature: "Site monitoring",
        reader: "Not available",
        competitor: "Yes",
      },
      { feature: "MCP server", reader: "9 tools", competitor: "12 tools" },
      {
        feature: "SDKs",
        reader: "JavaScript, Python",
        competitor: "JavaScript, Python, Go, Rust",
      },
    ],
    differences: [
      {
        title: "Licensing and self hosting",
        description:
          "Reader is Apache 2.0 with no copyleft requirements. Self host the entire engine with no feature gaps. Firecrawl is AGPL 3.0, which requires sharing source code if deployed as a network service. Firecrawl's self hosted version excludes Fire Engine (their proprietary anti-bot and proxy layer), the Agent endpoint, and the dashboard.",
      },
      {
        title: "Browser automation",
        description:
          "Reader provides full CDP browser sessions. Connect Playwright or Puppeteer with one line and drive the browser directly. Login, navigate, interact, extract. Firecrawl offers an Interact endpoint for pre scrape actions (click, scroll, type) but does not expose persistent CDP sessions.",
      },
      {
        title: "Ecosystem breadth",
        description:
          "Firecrawl has a larger community (148K+ GitHub stars) and broader framework integrations with LangChain, LlamaIndex, and CrewAI. Reader's ecosystem is growing but is not as broad today.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Firecrawl",
      points:
        "You need the broadest AI framework ecosystem available today. You want search and site monitoring endpoints. You prefer the largest developer community and most third party resources.",
    },
    whenReader:
      "You need Apache 2.0 licensing without copyleft restrictions. You want full self hosting with no feature gaps. You need CDP browser sessions for authenticated workflows. You want the Supermarkdown Rust engine for fastest conversion.",
    blogSlug: "reader-vs-firecrawl",
  },
  {
    slug: "scrapingbee",
    competitor: "ScrapingBee",
    meta: {
      title: "Reader vs ScrapingBee: Feature Comparison (2026)",
      description:
        "Compare Reader and ScrapingBee. Browser automation, markdown output, open source licensing, and dedicated APIs compared.",
    },
    intro:
      "Reader is an open source web infrastructure platform. ScrapingBee is a managed scraping API with dedicated endpoints for specific platforms.",
    table: [
      {
        feature: "License",
        reader: "Apache 2.0 (open source)",
        competitor: "Closed source",
      },
      {
        feature: "Self host",
        reader: "Yes, full platform",
        competitor: "No",
      },
      {
        feature: "Browser sessions (CDP)",
        reader: "Full Playwright/Puppeteer",
        competitor: "No (JavaScript scenarios only)",
      },
      {
        feature: "Markdown output",
        reader: "Default",
        competitor: "HTML default",
      },
      {
        feature: "Dedicated site APIs",
        reader: "No",
        competitor: "Google, Amazon, Walmart, YouTube, ChatGPT",
      },
      {
        feature: "Crawling",
        reader: "Built in BFS",
        competitor: "CLI only",
      },
      {
        feature: "Structured extraction",
        reader: "Schema or natural language",
        competitor: "AI Query",
      },
      {
        feature: "MCP server",
        reader: "9 tools",
        competitor: "Yes (hosted)",
      },
    ],
    differences: [
      {
        title: "Open source vs closed",
        description:
          "Reader is fully open source under Apache 2.0. Self host on your infrastructure, audit every line of code, modify as needed. ScrapingBee is closed source with no self hosting option.",
      },
      {
        title: "Browser automation",
        description:
          "Reader provides full CDP browser sessions for authenticated workflows. ScrapingBee offers JavaScript scenarios (click, scroll, type before extraction) but each request is stateless with no persistent sessions.",
      },
      {
        title: "Dedicated site APIs",
        description:
          "ScrapingBee offers purpose built APIs for Google Search, Amazon, Walmart, YouTube, and ChatGPT. These are optimized endpoints for those specific platforms. Reader does not have dedicated site APIs.",
      },
    ],
    whenCompetitor: {
      heading: "When to use ScrapingBee",
      points:
        "You need dedicated APIs for Google, Amazon, Walmart, or YouTube data. You prefer a fully managed service with no infrastructure to maintain and established operational track record.",
    },
    whenReader:
      "You need open source licensing and self hosting. You need persistent browser sessions with CDP access. You need clean markdown output for LLM pipelines. You want to audit and control your scraping infrastructure.",
    blogSlug: "reader-vs-scrapingbee",
  },
  {
    slug: "zenrows",
    competitor: "ZenRows",
    meta: {
      title: "Reader vs ZenRows: Feature Comparison (2026)",
      description:
        "Compare Reader and ZenRows. Anti-bot capabilities, browser automation, open source licensing, and markdown output compared.",
    },
    intro:
      "Reader is an open source web infrastructure platform. ZenRows is a managed scraping platform specializing in anti-bot bypass.",
    table: [
      {
        feature: "License",
        reader: "Apache 2.0 (open source)",
        competitor: "Closed source",
      },
      {
        feature: "Self host",
        reader: "Yes, full platform",
        competitor: "No",
      },
      {
        feature: "Anti-bot specialization",
        reader: "Good (Playwright + fingerprint-generator)",
        competitor: "Strongest (Adaptive Stealth Mode)",
      },
      {
        feature: "Browser sessions",
        reader: "Full CDP",
        competitor: "Scraping Browser product",
      },
      {
        feature: "Markdown output",
        reader: "Default",
        competitor: "Yes (multiple formats)",
      },
      {
        feature: "Residential proxies",
        reader: "Datacenter and residential pools",
        competitor: "55M+ IPs, 185+ countries",
      },
      {
        feature: "Crawling",
        reader: "Built in BFS",
        competitor: "No built in crawler",
      },
      { feature: "MCP server", reader: "9 tools", competitor: "Yes" },
    ],
    differences: [
      {
        title: "Anti-bot depth",
        description:
          "ZenRows specializes in bypassing Cloudflare, Akamai, DataDome, and PerimeterX. Adaptive Stealth Mode automatically selects optimal configurations per request. Reader handles common anti-bot scenarios through Playwright with fingerprint-generator but is not as deeply specialized.",
      },
      {
        title: "Open source and self hosting",
        description:
          "Reader is Apache 2.0 and fully self hostable. ZenRows is closed source with no self hosting option.",
      },
      {
        title: "Crawling",
        description:
          "Reader includes BFS crawling as a core capability. ZenRows focuses on single page scraping and browser sessions without a built in crawler.",
      },
    ],
    whenCompetitor: {
      heading: "When to use ZenRows",
      points:
        "You scrape heavily protected sites where anti-bot bypass is the primary challenge. You need 55M+ residential IPs with geo targeting. You want Adaptive Stealth Mode for automatic configuration.",
    },
    whenReader:
      "You need open source licensing and self hosting. You need built in crawling for multi page extraction. You want clean markdown output from a Rust engine. You need CDP browser sessions as a general purpose automation tool.",
    blogSlug: "reader-vs-zenrows",
  },
  {
    slug: "browserbase",
    competitor: "Browserbase",
    meta: {
      title: "Reader vs Browserbase: Feature Comparison (2026)",
      description:
        "Compare Reader and Browserbase for cloud browser sessions. CDP access, scraping, crawling, AI SDK, and open source licensing compared.",
    },
    intro:
      "Reader is a web infrastructure platform with browser sessions alongside scraping and crawling. Browserbase is a cloud browser platform with an AI automation SDK.",
    table: [
      {
        feature: "License",
        reader: "Apache 2.0 (full platform)",
        competitor: "Stagehand MIT, platform closed",
      },
      {
        feature: "Self host",
        reader: "Yes, full platform",
        competitor: "No (Stagehand runs locally)",
      },
      {
        feature: "Browser sessions",
        reader: "CDP (raw Playwright/Puppeteer)",
        competitor: "CDP + Stagehand AI SDK",
      },
      {
        feature: "Scraping endpoint",
        reader: "Yes (clean markdown)",
        competitor: "No",
      },
      {
        feature: "Crawling endpoint",
        reader: "Yes (BFS)",
        competitor: "No",
      },
      {
        feature: "Structured extraction",
        reader: "Yes (schema based)",
        competitor: "Via Stagehand extract",
      },
      {
        feature: "AI browser control",
        reader: "No (raw CDP)",
        competitor: "Yes (act/extract/observe/agent)",
      },
      {
        feature: "Session replay",
        reader: "No",
        competitor: "Yes",
      },
      { feature: "MCP server", reader: "9 tools", competitor: "Yes" },
    ],
    differences: [
      {
        title: "Scraping and crawling",
        description:
          "Reader includes scraping and crawling as core capabilities. Browserbase is browser infrastructure only. To scrape a page to markdown with Browserbase, you build the extraction logic yourself on top of Stagehand.",
      },
      {
        title: "AI browser automation",
        description:
          "Browserbase's Stagehand provides natural language browser control with self healing selectors. Reader provides raw CDP access where you write the automation logic yourself with Playwright or Puppeteer.",
      },
      {
        title: "Open source",
        description:
          "Reader's full platform is Apache 2.0 and self hostable. Browserbase's Stagehand SDK is MIT and works locally, but the cloud infrastructure is closed and not self hostable.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Browserbase",
      points:
        "You are building AI browser agents that need natural language control. You want self healing selectors and session replay for debugging. You prefer the Stagehand SDK over raw Playwright.",
    },
    whenReader:
      "You need scraping, crawling, and browser sessions in one platform. You want raw CDP control with stealth built in. You need Apache 2.0 licensing with full self hosting. You want clean markdown output for LLM pipelines.",
    blogSlug: "reader-vs-browserbase",
  },
  {
    slug: "apify",
    competitor: "Apify",
    meta: {
      title: "Reader vs Apify: Feature Comparison (2026)",
      description:
        "Compare Reader and Apify. Unified API vs Actor marketplace. Open source licensing, browser sessions, and crawling compared.",
    },
    intro:
      "Reader provides a unified API for any URL. Apify provides a marketplace of pre built scrapers for specific sites.",
    table: [
      {
        feature: "Approach",
        reader: "Unified API (one endpoint, any URL)",
        competitor: "Actor marketplace (per site scrapers)",
      },
      {
        feature: "License",
        reader: "Apache 2.0 (full platform)",
        competitor: "Crawlee Apache 2.0, platform closed",
      },
      {
        feature: "Self host",
        reader: "Yes, full platform",
        competitor: "Crawlee only",
      },
      {
        feature: "Pre built site scrapers",
        reader: "No",
        competitor: "Tens of thousands of Actors",
      },
      {
        feature: "Browser sessions",
        reader: "Full CDP",
        competitor: "Via Actors",
      },
      {
        feature: "Markdown output",
        reader: "Default",
        competitor: "Via Actors",
      },
      {
        feature: "Crawling",
        reader: "Built in BFS",
        competitor: "Via Actors and Crawlee",
      },
      { feature: "MCP server", reader: "9 tools", competitor: "Yes" },
    ],
    differences: [
      {
        title: "Unified API vs marketplace",
        description:
          "Reader gives you one API endpoint that works on any URL. Apify gives you a marketplace of Actors, each optimized for a specific site. Apify's advantage is site specific optimization. Reader's advantage is simplicity and consistency.",
      },
      {
        title: "Open source",
        description:
          "Reader's full platform is Apache 2.0. Apify's Crawlee library is Apache 2.0, but the platform (scheduling, storage, Actor marketplace) is closed.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Apify",
      points:
        "You need ready made scrapers for specific sites without writing custom logic. You want scheduling, storage, and monitoring built into the platform. You prefer a marketplace model.",
    },
    whenReader:
      "You scrape many different sites and want one consistent API. You need Apache 2.0 licensing with full self hosting. You want clean markdown output by default. You need CDP browser sessions for authenticated workflows.",
    blogSlug: "reader-vs-apify",
  },
  {
    slug: "bright-data",
    competitor: "Bright Data",
    meta: {
      title: "Reader vs Bright Data: Feature Comparison (2026)",
      description:
        "Compare Reader and Bright Data. Scraping platform vs proxy infrastructure. Open source, browser sessions, and compliance compared.",
    },
    intro:
      "Reader is a developer first scraping platform with an open source core. Bright Data is an enterprise proxy and data infrastructure provider.",
    table: [
      {
        feature: "Approach",
        reader: "Scraping platform",
        competitor: "Proxy infrastructure + scraping tools",
      },
      {
        feature: "License",
        reader: "Apache 2.0 (open source)",
        competitor: "Closed source",
      },
      {
        feature: "Self host",
        reader: "Yes, full platform",
        competitor: "No",
      },
      {
        feature: "Proxy network",
        reader: "Datacenter and residential pools",
        competitor: "400M+ IPs, 195 countries",
      },
      {
        feature: "Browser sessions",
        reader: "Full CDP",
        competitor: "Scraping Browser",
      },
      {
        feature: "Markdown output",
        reader: "Default",
        competitor: "Yes",
      },
      {
        feature: "Compliance certs",
        reader: "Self host for data sovereignty",
        competitor: "SOC 2, GDPR, CCPA, ISO 27701",
      },
      { feature: "MCP server", reader: "9 tools", competitor: "60+ tools" },
      {
        feature: "Ready made datasets",
        reader: "No",
        competitor: "350+ datasets",
      },
    ],
    differences: [
      {
        title: "Scale and proxy depth",
        description:
          "Bright Data operates the largest proxy network in the industry. For targets that block everything else, Bright Data's IP diversity can make the difference. Reader's proxy infrastructure is datacenter and residential pools but does not match Bright Data's scale.",
      },
      {
        title: "Simplicity vs breadth",
        description:
          "Reader is one API with one credit model. Bright Data has multiple products (Web Unlocker, SERP API, Scraping Browser, Datasets) each with separate billing. Reader is simpler to start with. Bright Data covers more ground.",
      },
      {
        title: "Compliance",
        description:
          "Bright Data has SOC 2, GDPR, CCPA, and ISO 27701 certifications. Reader does not have compliance certifications but offers Apache 2.0 self hosting for teams that need data to stay on their infrastructure.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Bright Data",
      points:
        "You need the largest proxy network for the hardest targets. You require enterprise compliance certifications. You want ready made datasets without scraping. You need 60+ MCP tools.",
    },
    whenReader:
      "You want a simpler, developer first platform. You need Apache 2.0 licensing with full self hosting. You want one API with one credit model. You need clean markdown output for LLM pipelines.",
    blogSlug: "reader-vs-bright-data",
  },
];

export function getComparison(slug: string): ComparisonPage | undefined {
  return comparisons.find((c) => c.slug === slug);
}
