export interface ComparisonRow {
  feature: string;
  reader: string;
  competitor: string;
}

export interface ComparisonDifference {
  title: string;
  description: string;
}

export interface ComparisonFaq {
  question: string;
  answer: string;
}

export interface ComparisonPage {
  slug: string;
  competitor: string;
  meta: {
    title: string;
    description: string;
  };
  intro: string;
  verdict?: string;
  table: ComparisonRow[];
  differences: ComparisonDifference[];
  whenCompetitor: {
    heading: string;
    points: string;
  };
  whenReader: string;
  faqs?: ComparisonFaq[];
  blogSlug: string;
}

export const comparisons: ComparisonPage[] = [
  {
    slug: "firecrawl",
    competitor: "Firecrawl",
    meta: {
      title: "Reader vs Firecrawl | AI Web Data API Comparison",
      description:
        "Compare Reader and Firecrawl by product model, scraping, crawling, Markdown output, structured extraction, browser workflows, agent tooling, and credit usage.",
    },
    intro:
      "Reader and Firecrawl both help developers turn web pages into usable content for AI agents, RAG pipelines, research tools, and data workflows. Reader is built as a focused web context API for AI agents, centering around scraping pages, crawling websites, extracting structured data, and opening browser sessions when a page needs interaction. Firecrawl is a broader web data platform with more endpoint types, including scraping, crawling, mapping, searching, monitoring, interacting with pages, and agent style workflows. This page compares the two by workflow fit, feature surface, output model, developer experience, and credit usage.",
    verdict:
      "Choose Reader if you want one focused API for the core web context jobs AI agents need most: scrape a page, crawl a website, extract structured JSON, and use a browser session when interaction is required. Choose Firecrawl if you want a broader web data platform with additional surfaces such as search, map, monitor, interact, and agent oriented workflows. Both tools can be useful. The better choice depends on what you are building. If your product needs clean web context inside an AI agent or RAG workflow, Reader is designed around that path. If your product needs more endpoint categories around discovery, monitoring, and agent automation, Firecrawl may offer more built in surfaces.",
    table: [
      {
        feature: "Core positioning",
        reader: "Web context API for AI agents",
        competitor:
          "Broader web data API for AI products and automation",
      },
      {
        feature: "API model",
        reader:
          "One read endpoint for scrape, batch, and crawl, plus browser sessions",
        competitor:
          "Multiple endpoint families for different web data jobs",
      },
      {
        feature: "Single page scraping",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Clean Markdown output",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Website crawling",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Structured JSON extraction",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Search endpoint",
        reader: "Not the core product surface",
        competitor: "Yes",
      },
      {
        feature: "Map or URL discovery endpoint",
        reader: "Crawl and discovery oriented workflows",
        competitor: "Yes",
      },
      {
        feature: "Monitoring endpoint",
        reader: "Customer built workflow with Reader data",
        competitor: "Yes",
      },
      {
        feature: "Browser interaction",
        reader: "Browser sessions with automation control",
        competitor: "Interact endpoint and action based workflows",
      },
      {
        feature: "MCP support",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "SDKs and API access",
        reader: "Yes",
        competitor: "Yes",
      },
    ],
    differences: [
      {
        title: "Product model",
        description:
          "Reader keeps the core workflow centered on four jobs: scrape, crawl, extract, and browse. The same read primitive handles a single URL, known URL batches, and crawls based on the request shape. That makes the API easier to reason about when your main goal is web context. Firecrawl expands the product surface into more endpoint categories, which can be useful if your product needs search, map, monitor, interact, or agent flows as first class product surfaces.",
      },
      {
        title: "Output model",
        description:
          "Reader is designed around clean Markdown as the default context format. It also supports metadata, HTML, raw HTML, screenshots, and structured JSON extraction. Firecrawl also supports Markdown and multiple formats, including HTML, raw HTML, screenshots, links, images, JSON, and other scrape formats. Use Reader when you want a simpler content model focused on agent context. Use Firecrawl when you want more format and endpoint variety in one broader platform.",
      },
      {
        title: "Scraping approach",
        description:
          "Reader Scrape is centered on turning one URL into clean web context. The most common output is Markdown, with metadata and optional additional formats. Firecrawl's scrape endpoint also handles page retrieval and supports multiple response formats with additional request options such as actions, location settings, proxy mode, cache settings, and zero data retention options.",
      },
      {
        title: "Crawling approach",
        description:
          "Reader uses crawl when a request includes a starting URL with crawl scope controls such as page limits or depth. The goal is to turn a website or section into page level results your system can store, search, summarize, or embed. Firecrawl also supports crawling and has a broader platform around related web data workflows such as map, search, monitor, and agent behavior.",
      },
      {
        title: "Browser and interaction",
        description:
          "Reader Browser provides cloud browser sessions that your automation code can control with tools such as Playwright or Puppeteer. This is useful when your system needs clicks, forms, navigation, screenshots, PDFs, or rendered page state. Firecrawl supports interaction through its Interact endpoint and scrape related action options.",
      },
      {
        title: "Credit usage",
        description:
          "Reader's usage model is easiest to understand when your workflow is page based or browser minute based: pages scraped, pages crawled, extraction added, or browser minutes used. Firecrawl's usage model is broader because it has more endpoint categories. If your product needs scrape, crawl, extract, and occasional browser sessions, Reader's model is straightforward. If your product needs search, monitor, interact, or agent endpoints, Firecrawl's broader credit model may map better.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Firecrawl",
      points:
        "You need a broader web data platform. You want search as a first class endpoint. You want map or discovery as a first class endpoint. You need built in monitoring endpoint behavior. You want interaction through Firecrawl's endpoint model. You want agent style workflows inside the platform. You need more endpoint specific configuration.",
    },
    whenReader:
      "You need a web context API for AI agents. You want clean Markdown from URLs. You need website crawling for RAG or research. You want structured JSON from known pages. You need browser sessions when interaction is required. You want a focused product model. You want a simple way to estimate page and browser usage. You want control over your own storage, retrieval, alerts, and agent logic.",
    faqs: [
      {
        question: "What is the main difference between Reader and Firecrawl?",
        answer:
          "Reader is a focused web context API for AI agents. Firecrawl is a broader web data platform with more endpoint categories such as scrape, crawl, map, search, monitor, interact, and agent workflows.",
      },
      {
        question: "Is Reader a Firecrawl alternative?",
        answer:
          "Yes, Reader can be a Firecrawl alternative when your main needs are scraping, crawling, Markdown output, structured extraction, and browser sessions for AI agents or RAG workflows.",
      },
      {
        question: "Which tool is better for AI agents?",
        answer:
          "Reader is a strong fit when your agent needs clean web context from pages and websites. Firecrawl may be a better fit if your agent workflow needs Firecrawl's broader endpoint surface.",
      },
      {
        question: "Which tool is better for RAG?",
        answer:
          "Reader is a strong fit for RAG ingestion because it focuses on clean Markdown, page level context, and website crawling. Firecrawl can also support RAG workflows, especially when you want its broader web data platform.",
      },
      {
        question: "Do these tools have the same credit model?",
        answer:
          "No. Reader's usage model is centered on pages, extraction, crawl results, cache behavior, and browser minutes. Firecrawl's usage model is endpoint based and includes additional endpoint categories.",
      },
      {
        question: "Should I choose based on features alone?",
        answer:
          "No. Choose based on the workflow you are building. Test real URLs, inspect output quality, estimate credit usage, and decide how much of the workflow your application should own.",
      },
    ],
    blogSlug: "reader-vs-firecrawl",
  },
  {
    slug: "scrapingbee",
    competitor: "ScrapingBee",
    meta: {
      title: "Reader vs ScrapingBee | Web Context API vs Scraping API",
      description:
        "Compare Reader and ScrapingBee by product model, scraping, crawling, Markdown output, structured extraction, proxies, browser workflows, and AI agent fit.",
    },
    intro:
      "Reader and ScrapingBee both help developers retrieve content from web pages. Reader is the web context API for AI agents, helping teams scrape pages, crawl websites, extract structured data, and use browser sessions when interaction is required. ScrapingBee is a web scraping API focused on page retrieval, JavaScript rendering, proxies, screenshots, selector extraction, AI extraction, proxy mode, and specialized scraper APIs. This page compares Reader and ScrapingBee by workflow fit, feature surface, output model, extraction, crawling, developer experience, and usage shape.",
    verdict:
      "Choose Reader if your product needs clean web context for AI agents, RAG pipelines, research workflows, structured extraction, and website crawling. Reader is a strong fit when Markdown, metadata, crawl results, and structured JSON are the main outputs your application needs. Choose ScrapingBee if your product needs a traditional scraping API with more controls around rendering, proxies, request parameters, screenshots, selector extraction, and site specific scraping workflows. ScrapingBee is a strong fit when the main challenge is retrieving HTML from pages with the right browser, proxy, header, cookie, wait, screenshot, or extraction settings.",
    table: [
      {
        feature: "Core positioning",
        reader: "Web context API for AI agents",
        competitor: "Web scraping API",
      },
      {
        feature: "Main product surface",
        reader: "Scrape, Crawl, Extract, Browser",
        competitor:
          "HTML API, proxy mode, extraction, CLI, specialized scraper APIs",
      },
      {
        feature: "Single page scraping",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Clean Markdown output",
        reader: "Yes",
        competitor: "Yes, with Markdown option",
      },
      {
        feature: "Website crawling",
        reader: "Yes",
        competitor: "CLI crawl and custom crawler workflows",
      },
      {
        feature: "Structured extraction",
        reader: "Yes",
        competitor: "CSS, XPath, and AI extraction",
      },
      {
        feature: "Browser sessions",
        reader: "Yes",
        competitor: "Headless browser rendering and browser style workflows",
      },
      {
        feature: "Proxy mode",
        reader: "Not the core product surface",
        competitor: "Yes",
      },
      {
        feature: "Premium proxies",
        reader: "Managed inside Reader workflow",
        competitor: "Yes",
      },
      {
        feature: "Specialized scraper APIs",
        reader: "Not core Reader positioning",
        competitor: "Yes",
      },
      {
        feature: "MCP support",
        reader: "Yes",
        competitor: "Remote MCP listed in docs",
      },
      {
        feature: "CLI",
        reader: "Yes",
        competitor: "Yes",
      },
    ],
    differences: [
      {
        title: "Product model",
        description:
          "Reader is built around the idea that modern AI systems need web context, not just page retrieval. ScrapingBee is built around the idea that developers need a simple API for scraping web pages without managing headless browsers and proxies directly. If your output needs to go directly into an agent or RAG pipeline, Reader is more aligned. If your output needs to feed a custom scraper or parsing system, ScrapingBee may feel more familiar.",
      },
      {
        title: "Output model",
        description:
          "Reader is designed to return web context that an AI workflow can use directly: clean Markdown, metadata, HTML, raw HTML, screenshots, structured JSON, crawl results, and browser session output. ScrapingBee returns scraped page content and supports options such as page source, text, Markdown, screenshots, JSON responses, CSS selector extraction, XPath extraction, and AI extraction. Reader starts from 'What web context does my agent need?' ScrapingBee starts from 'How should this page be scraped?'",
      },
      {
        title: "Crawling",
        description:
          "Reader includes crawling as a core product workflow. A Reader crawl starts from a URL, discovers related pages within limits, and returns page level results. ScrapingBee's core API is a page scraping API. Its CLI includes crawl commands, but for application level crawling, your system usually owns URL discovery, queueing, deduplication, crawl limits, and storage.",
      },
      {
        title: "Extraction",
        description:
          "Reader Extract turns page context into structured JSON and fits naturally into AI agent workflows because the structured result can live alongside the source Markdown. ScrapingBee supports extraction through CSS selectors, XPath rules, and AI based extraction options. Reader is stronger when extraction is part of a broader web context workflow. ScrapingBee is stronger when extraction is part of a traditional scraper request with selectors or XPath.",
      },
      {
        title: "Proxy and unblocking",
        description:
          "ScrapingBee exposes proxy related controls such as premium proxy, stealth proxy, geolocation, session IDs, proxy mode, and request level options. Reader handles modern web pages inside its own workflow but is not positioned as a proxy infrastructure product. Reader is better when the output needs to become agent context. ScrapingBee is better when proxy behavior and scrape configuration are central to the workflow.",
      },
    ],
    whenCompetitor: {
      heading: "When to use ScrapingBee",
      points:
        "You need a traditional web scraping API. You want detailed request parameters. You need JavaScript rendering controls. You want premium or stealth proxy options. You need CSS or XPath extraction. You want screenshot controls. You need header and cookie forwarding. You want specialized scraper APIs. You need a scraping layer behind your own crawler or parser.",
    },
    whenReader:
      "You need a web context API for AI agents. You want clean Markdown from URLs. You need website crawling for RAG or research. You want structured JSON extraction from public pages. You need browser sessions as a fallback for interaction. You want page snapshots with source context. You want a focused API for scrape, crawl, extract, and browser workflows. You want control over your own storage, retrieval, alerts, and analysis.",
    faqs: [
      {
        question:
          "What is the main difference between Reader and ScrapingBee?",
        answer:
          "Reader is a web context API for AI agents. ScrapingBee is a traditional web scraping API focused on page retrieval, JavaScript rendering, proxies, screenshots, and extraction options.",
      },
      {
        question: "Is Reader a ScrapingBee alternative?",
        answer:
          "Reader can be a ScrapingBee alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows.",
      },
      {
        question: "Which tool is better for AI agents?",
        answer:
          "Reader is better when the agent needs clean web context from pages and websites. ScrapingBee can support AI workflows, but its core model is more scrape configuration focused.",
      },
      {
        question: "Which tool is better for traditional scraping?",
        answer:
          "ScrapingBee may be better when you need detailed scrape parameters, proxy options, selector extraction, screenshots, and scraping specific controls.",
      },
      {
        question: "Does ScrapingBee return Markdown?",
        answer:
          "Yes. ScrapingBee supports returning page content in Markdown format.",
      },
      {
        question: "Do these tools have the same usage model?",
        answer:
          "No. Reader usage is centered on pages, extraction, crawl results, cache behavior, and browser minutes. ScrapingBee usage depends heavily on request configuration such as JavaScript rendering, proxy type, and AI query usage.",
      },
    ],
    blogSlug: "reader-vs-scrapingbee",
  },
  {
    slug: "zenrows",
    competitor: "ZenRows",
    meta: {
      title:
        "Reader vs ZenRows | Web Context API vs Scraping Infrastructure",
      description:
        "Compare Reader and ZenRows by product model, scraping, crawling, Markdown output, structured extraction, proxies, browser workflows, and AI agent fit.",
    },
    intro:
      "Reader and ZenRows both help developers collect content from web pages. Reader is the web context API for AI agents, helping teams scrape pages, crawl websites, extract structured data, and use browser sessions when interaction is required. ZenRows is a web scraping platform focused on reliable page access, JavaScript rendering, premium proxies, stealth behavior, browser scraping, residential proxies, and site specific scraper APIs. This page compares Reader and ZenRows by product model, workflow fit, output model, crawling, extraction, browser workflows, developer experience, and usage shape.",
    verdict:
      "Choose Reader if your product needs clean web context for AI agents, RAG pipelines, research tools, structured extraction, and website crawling. Reader is a strong fit when the main output should be Markdown, structured JSON, crawl results, screenshots, or browser sessions that your application can feed into an AI workflow. Choose ZenRows if your product needs scraping infrastructure with strong controls around unblocking, JavaScript rendering, premium proxies, residential proxies, scraping browser workflows, and protected page access. ZenRows is a strong fit when the main challenge is getting access to difficult pages reliably.",
    table: [
      {
        feature: "Core positioning",
        reader: "Web context API for AI agents",
        competitor: "Web scraping and unblocking platform",
      },
      {
        feature: "Main product surface",
        reader: "Scrape, Crawl, Extract, Browser",
        competitor:
          "Universal Scraper API, Scraping Browser, Residential Proxies, Scraper APIs",
      },
      {
        feature: "Single page scraping",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Clean Markdown output",
        reader: "Yes",
        competitor: "Not the primary product model",
      },
      {
        feature: "Website crawling",
        reader: "Yes",
        competitor: "Your application usually owns crawl logic",
      },
      {
        feature: "Structured extraction",
        reader: "Yes",
        competitor: "Possible through scraper workflows and APIs",
      },
      {
        feature: "Browser sessions",
        reader: "Yes",
        competitor: "Yes, through Scraping Browser",
      },
      {
        feature: "Residential proxies",
        reader: "Managed inside Reader workflow",
        competitor: "Major product surface",
      },
      {
        feature: "Premium proxy controls",
        reader: "Not the core product surface",
        competitor: "Yes",
      },
      {
        feature: "Adaptive stealth behavior",
        reader: "Not the core Reader positioning",
        competitor: "Yes",
      },
      {
        feature: "Site specific scraper APIs",
        reader: "Not the core Reader positioning",
        competitor: "Yes",
      },
      {
        feature: "AI agent context",
        reader: "Core positioning",
        competitor: "Possible, but not the main product model",
      },
    ],
    differences: [
      {
        title: "Product model",
        description:
          "Reader is built around the idea that AI products need usable web context. ZenRows is built around the idea that scraping teams need reliable access to web pages without managing proxies, browser infrastructure, retries, and anti bot issues themselves. If the hard part is giving an agent clean context, Reader is the more direct fit. If the hard part is reliably accessing difficult public pages, ZenRows may be the better fit.",
      },
      {
        title: "Output model",
        description:
          "Reader is designed to return content that AI workflows can use directly: clean Markdown, metadata, HTML, raw HTML, screenshots, structured JSON, crawl results, and browser session output. ZenRows is designed to return scraped page responses through its scraping infrastructure. Reader starts from 'What context does my agent need from this page?' ZenRows starts from 'How do I access and retrieve this page reliably?'",
      },
      {
        title: "Crawling",
        description:
          "Reader includes crawling as a core workflow. A Reader crawl starts from a URL, follows related links within limits, and returns page level results. ZenRows is not primarily organized around website crawling in the same way. It is better understood as the access and scraping layer that your own crawler can call.",
      },
      {
        title: "Proxy and unblocking",
        description:
          "ZenRows is built around scraping infrastructure. Its platform includes premium proxies, residential proxies, adaptive stealth behavior, JavaScript rendering, proxy country selection, browser scraping, and automatic handling of many access related details. Reader handles modern web pages inside its workflow but is not positioned as a proxy infrastructure platform.",
      },
      {
        title: "Browser workflows",
        description:
          "Reader Browser gives your workflow a cloud browser session when normal scraping is not enough, useful for clicks, forms, navigation, screenshots, PDFs, and rendered page state. ZenRows also offers browser scraping infrastructure. Its Scraping Browser is designed for teams that need browser based scraping, proxy handling, and interaction workflows in a scraping platform.",
      },
    ],
    whenCompetitor: {
      heading: "When to use ZenRows",
      points:
        "You need a scraping infrastructure platform. You want advanced unblocking. You need premium proxies. You want residential proxies. You need JavaScript rendering controls. You want adaptive stealth behavior. You need browser based scraping infrastructure. You want site specific scraper APIs. You need more control over scraping access settings.",
    },
    whenReader:
      "You need a web context API for AI agents. You want clean Markdown from URLs. You need website crawling for RAG or research. You want structured JSON extraction from public pages. You need browser sessions as a fallback for interaction. You want page snapshots with source context. You want a focused API for scrape, crawl, extract, and browser workflows. You want control over your own storage, retrieval, alerts, and analysis.",
    faqs: [
      {
        question: "What is the main difference between Reader and ZenRows?",
        answer:
          "Reader is a web context API for AI agents. ZenRows is a scraping infrastructure platform focused on page access, JavaScript rendering, proxies, stealth behavior, browser scraping, and scraper APIs.",
      },
      {
        question: "Is Reader a ZenRows alternative?",
        answer:
          "Reader can be a ZenRows alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows.",
      },
      {
        question: "Which tool is better for AI agents?",
        answer:
          "Reader is better when the agent needs clean web context from pages and websites. ZenRows can support AI workflows, but its core model is more focused on scraping access infrastructure.",
      },
      {
        question: "Which tool is better for difficult pages?",
        answer:
          "ZenRows may be better when the main challenge is protected page access, proxy behavior, browser based scraping, or advanced unblocking.",
      },
      {
        question: "Does Reader replace ZenRows proxies?",
        answer:
          "No. Reader is not a proxy infrastructure product. If direct proxy infrastructure is the main need, ZenRows may be the better fit.",
      },
      {
        question: "Should I choose based on features alone?",
        answer:
          "No. Choose based on workflow. If the goal is clean web context for agents, Reader is a strong fit. If the goal is advanced scraping infrastructure, ZenRows may be a better fit.",
      },
    ],
    blogSlug: "reader-vs-zenrows",
  },
  {
    slug: "browserbase",
    competitor: "Browserbase",
    meta: {
      title:
        "Reader vs Browserbase | Web Context API vs Browser Agent Platform",
      description:
        "Compare Reader and Browserbase by product model, scraping, crawling, browser sessions, agent workflows, output formats, developer experience, and usage fit.",
    },
    intro:
      "Reader and Browserbase both help developers build AI agents that work with the web. Reader starts with web context, helping agents scrape pages, crawl websites, extract structured data, and open browser sessions when interaction is required. Browserbase starts with the browser, giving agents cloud browsers, browser automation, Stagehand, search, fetch, functions, model access, contexts, live view, and session recordings. This page compares Reader and Browserbase by product model, workflow fit, output model, browser automation, developer experience, and usage shape.",
    verdict:
      "Choose Reader if your agent mostly needs clean web context. Reader is a strong fit when the job is to turn URLs and websites into Markdown, structured JSON, crawl results, and occasional browser sessions. It is best when scraping, crawling, extraction, and readable page context are core to your workflow. Choose Browserbase if your agent mostly needs to operate a browser. Browserbase is a strong fit when the browser is the main product surface, best for agents that need persistent sessions, live browser observation, session recordings, natural language browser actions, deployed browser functions, and browser first automation workflows.",
    table: [
      {
        feature: "Core positioning",
        reader: "Web context API for AI agents",
        competitor:
          "Platform for agents that browse and interact with the web",
      },
      {
        feature: "Main product surface",
        reader: "Scrape, Crawl, Extract, Browser",
        competitor:
          "Browsers, Stagehand, Search, Fetch, Functions, Model Gateway, Contexts",
      },
      {
        feature: "Single page scraping",
        reader: "Yes",
        competitor: "Fetch API supports page content workflows",
      },
      {
        feature: "Clean Markdown output",
        reader: "Yes",
        competitor: "Fetch can retrieve page content as Markdown",
      },
      {
        feature: "Website crawling",
        reader: "Yes",
        competitor: "Not the primary product model",
      },
      {
        feature: "Structured extraction",
        reader: "Yes",
        competitor: "Stagehand supports extraction inside browser workflows",
      },
      {
        feature: "Cloud browser sessions",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Playwright support",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Puppeteer support",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Browser session observability",
        reader: "Basic workflow control",
        competitor: "Live view and session recordings",
      },
      {
        feature: "Persistent contexts",
        reader: "Not the main product surface",
        competitor: "Yes",
      },
      {
        feature: "Browser agent SDK",
        reader: "API and browser automation clients",
        competitor: "Stagehand for AI browser agents",
      },
      {
        feature: "Deployed browser functions",
        reader: "Not the core product surface",
        competitor: "Yes",
      },
    ],
    differences: [
      {
        title: "Web context versus browser control",
        description:
          "Reader asks 'What context does your agent need from this web page or website?' Browserbase asks 'What does your agent need to do inside a browser?' If your workflow starts with reading pages, crawling websites, and extracting fields, Reader is the more direct fit. If your workflow starts with logging in, navigating a portal, submitting forms, or working through multi step flows, Browserbase is more naturally aligned.",
      },
      {
        title: "Scraping and crawling",
        description:
          "Reader's core product includes Scrape and Crawl. Browserbase has Fetch for page content and Search for discovery, but its central product motion is browser driven automation and browser agent execution. For RAG ingestion, documentation crawling, and page level datasets, Reader's crawl model is the more direct path.",
      },
      {
        title: "Browser automation depth",
        description:
          "Reader Browser is designed for teams that sometimes need a real browser inside a broader web context workflow. Browserbase is designed for teams where browser automation is the core workflow, supporting browser sessions, popular automation frameworks, Stagehand, live view, session recordings, persistent contexts, functions, and agent browser tooling.",
      },
      {
        title: "Agent workflow",
        description:
          "Reader works well when an agent needs to read URLs, crawl websites, extract fields, and store page context. Browserbase works well when an agent needs to navigate portals, fill out forms, use a browser like a human, persist login state, and observe or debug browser behavior. The difference is not 'agent or not agent.' Both products serve agent workflows. The difference is what the agent is doing.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Browserbase",
      points:
        "You are building AI browser agents that need to browse and interact like a human. You want large scale cloud browser sessions. You need persistent browser contexts. You want live browser view and session recordings. You want natural language browser actions through Stagehand. You need browser functions deployed to platform infrastructure. You want stronger debugging and observability for browser runs.",
    },
    whenReader:
      "You need scraping, crawling, and browser sessions in one platform. You want a web context API for AI agents. You want clean Markdown from URLs. You need website crawling for RAG or research. You want structured JSON extraction from pages. You need browser sessions as a fallback for interaction. You want a focused API instead of a browser first platform. You want control over your own storage, retrieval, scheduling, and alerts.",
    faqs: [
      {
        question:
          "What is the main difference between Reader and Browserbase?",
        answer:
          "Reader is a web context API for AI agents. Browserbase is a platform for agents that browse and interact with the web through cloud browsers and browser agent tooling.",
      },
      {
        question: "Is Reader a Browserbase alternative?",
        answer:
          "Reader can be a Browserbase alternative when your workflow mainly needs scraping, crawling, structured extraction, and occasional browser sessions. It is not a full replacement for Browserbase's browser agent platform.",
      },
      {
        question: "Which tool is better for AI agents?",
        answer:
          "Reader is better when the agent needs clean web context. Browserbase is better when the agent needs to operate a browser as the main workflow.",
      },
      {
        question: "Which tool is better for browser automation?",
        answer:
          "Browserbase is deeper for browser automation. Reader Browser is useful when browser sessions are needed inside a broader web context workflow.",
      },
      {
        question: "Which tool is better for RAG pipelines?",
        answer:
          "Reader is the better fit when the RAG workflow needs website scraping, crawling, clean Markdown, and source metadata. Browserbase can support browser based research workflows, but it is more browser centered.",
      },
      {
        question: "Should I use both Reader and Browserbase?",
        answer:
          "Some teams may use both. Reader can handle web context collection, while Browserbase can handle browser heavy workflows that need deeper browser infrastructure.",
      },
    ],
    blogSlug: "reader-vs-browserbase",
  },
  {
    slug: "apify",
    competitor: "Apify",
    meta: {
      title: "Reader vs Apify | Web Context API vs Actor Platform",
      description:
        "Compare Reader and Apify by product model, scraping, crawling, browser automation, actor workflows, storage, scheduling, AI agent fit, and usage shape.",
    },
    intro:
      "Reader and Apify both help developers collect and use web data, but they are built around different product models. Reader is the web context API for AI agents, helping teams scrape pages, crawl websites, extract structured data, and use browser sessions when interaction is required. Apify is a cloud platform for running Actors, which are serverless programs that can perform tasks such as web scraping, browser automation, data processing, and AI agent workflows. Apify also includes a large Actor Store, reusable tasks, schedules, datasets, key value stores, request queues, proxies, API access, and automation workflows.",
    verdict:
      "Choose Reader if your product needs clean web context for AI agents, RAG pipelines, research workflows, structured extraction, and website crawling through one focused API. Reader is a strong fit when the main output should be Markdown, structured JSON, crawl results, screenshots, or browser sessions that your application can use directly. Choose Apify if your product needs an actor platform with ready made scrapers, scheduled jobs, hosted automation, platform storage, reusable tasks, proxies, and the ability to build or run full scraping workflows as cloud programs. Apify is a strong fit when you want the scraping or automation job itself to run as a hosted actor.",
    table: [
      {
        feature: "Core positioning",
        reader: "Web context API for AI agents",
        competitor: "Cloud platform for Actors and automation",
      },
      {
        feature: "Main product surface",
        reader: "Scrape, Crawl, Extract, Browser",
        competitor:
          "Actors, Store, tasks, schedules, datasets, key value stores, request queues, proxies",
      },
      {
        feature: "Single page scraping",
        reader: "Yes",
        competitor: "Yes, through Actors",
      },
      {
        feature: "Clean Markdown output",
        reader: "Yes",
        competitor: "Depends on the Actor",
      },
      {
        feature: "Website crawling",
        reader: "Yes",
        competitor: "Yes, through Actors and crawler frameworks",
      },
      {
        feature: "Structured extraction",
        reader: "Yes",
        competitor: "Yes, through Actors or custom extraction logic",
      },
      {
        feature: "Browser sessions",
        reader: "Yes",
        competitor: "Yes, through browser automation Actors",
      },
      {
        feature: "Ready made scrapers",
        reader: "Not the core product model",
        competitor: "Yes, through Apify Store",
      },
      {
        feature: "Hosted automation jobs",
        reader: "Not the core product model",
        competitor: "Yes",
      },
      {
        feature: "Schedules",
        reader: "Your application owns scheduling",
        competitor: "Built in schedules",
      },
      {
        feature: "Platform storage",
        reader: "Your application owns storage",
        competitor: "Datasets, key value stores, request queues",
      },
      {
        feature: "Marketplace",
        reader: "No",
        competitor: "Yes",
      },
    ],
    differences: [
      {
        title: "Unified API vs marketplace",
        description:
          "Reader gives you one focused API for web context. Apify gives you a platform to run and manage scraping or automation programs. Reader is narrower by design, giving your application the web context layer. Apify is broader, offering a platform where you can run scraping jobs, browser automation, data processing, or agent workflows as hosted programs.",
      },
      {
        title: "Output model",
        description:
          "Reader gives a consistent product model with clean Markdown, metadata, HTML, raw HTML, screenshots, structured JSON, crawl results, and browser session output. Apify output depends on the Actor. That flexibility is powerful, but the output model is not always consistent across workflows. Reader starts from 'What web context does my agent need?' Apify starts from 'Which Actor should run this job?'",
      },
      {
        title: "Crawling approach",
        description:
          "Reader includes crawling as a core workflow for collecting website context. Apify can support crawling through Actors and crawler libraries, a strong fit when your team wants custom crawling logic, request queues, persistent storage, retries, browser automation, and scheduled runs inside a hosted platform.",
      },
      {
        title: "Ready made scrapers",
        description:
          "Apify Store includes many public Actors for specific sites and workflows. If a ready made Actor exists for your target and returns the fields you need, Apify can be much faster than building your own scraper. Reader does not try to be a marketplace of site specific scrapers. It gives you a general web context API that works across workflows where the page content itself matters.",
      },
      {
        title: "Scheduling and storage",
        description:
          "Reader gives your product page results, Markdown, structured JSON, crawl output, and browser sessions. Your application handles scheduling, storage, comparison, alerts, and downstream logic. Apify includes more platform workflow tools: Actor tasks, schedules, datasets, key value stores, and request queues.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Apify",
      points:
        "You need ready made scrapers from a marketplace. You want custom hosted scraping jobs. You need serverless actor execution. You want scheduled scraping tasks. You need platform datasets and key value stores. You want browser automation as a hosted job. You need reusable scraping configurations.",
    },
    whenReader:
      "You scrape many different sites and want one consistent API. You need a web context API for AI agents. You want clean Markdown from URLs. You need website crawling for RAG or research. You want structured JSON extraction from public pages. You need browser sessions as a fallback for interaction. You want a focused API for scrape, crawl, extract, and browser workflows. You want control over your own storage, retrieval, alerts, and analysis.",
    faqs: [
      {
        question: "What is the main difference between Reader and Apify?",
        answer:
          "Reader is a web context API for AI agents. Apify is a cloud platform for running Actors, which are hosted programs for scraping, browser automation, data processing, and workflow automation.",
      },
      {
        question: "Is Reader an Apify alternative?",
        answer:
          "Reader can be an Apify alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows.",
      },
      {
        question: "Which tool is better for AI agents?",
        answer:
          "Reader is better when the agent needs clean web context from pages and websites. Apify is better when the agent workflow should run as a hosted Actor or automation job.",
      },
      {
        question: "Which tool is better for ready made scrapers?",
        answer:
          "Apify is stronger for ready made scrapers because Apify Store has many public Actors for specific sites and workflows.",
      },
      {
        question: "Does Reader include scheduling and platform storage?",
        answer:
          "No. Reader provides the web context layer. Your application owns scheduling, storage, alerts, dashboards, and product workflow logic.",
      },
      {
        question: "Should I choose based on features alone?",
        answer:
          "No. Choose based on workflow. If the goal is clean web context for agents, Reader is a strong fit. If the goal is hosted scraping automation with actors, tasks, schedules, and storage, Apify may be a better fit.",
      },
    ],
    blogSlug: "reader-vs-apify",
  },
  {
    slug: "bright-data",
    competitor: "Bright Data",
    meta: {
      title:
        "Reader vs Bright Data | Web Context API vs Web Access Platform",
      description:
        "Compare Reader and Bright Data by product model, scraping, crawling, browser automation, unblocking, output formats, AI agent workflows, and operational fit.",
    },
    intro:
      "Reader and Bright Data both help teams collect web data, but they are built for different kinds of users and workflows. Reader is the web context API for AI agents, helping teams scrape pages, crawl websites, extract structured data, and use browser sessions when a page needs interaction. Bright Data is a much broader web access and data infrastructure platform. Its Web Access APIs include products for unblocking, browser based scraping, crawling, dynamic content, search engine data collection, proxy rotation, fingerprinting, CAPTCHA solving, and ready made data workflows.",
    verdict:
      "Choose Reader if you want a focused API for web context inside AI agents, RAG pipelines, research tools, and data workflows. Reader is a strong fit when your product needs clean Markdown, structured JSON, crawl results, and occasional browser sessions without adopting a large web access platform. Choose Bright Data if you need a broader web data infrastructure suite. Bright Data is a strong fit when your team needs advanced unblocking, proxy infrastructure, CAPTCHA handling, browser automation at scale, search engine data collection, ready made scrapers, and enterprise grade web access operations.",
    table: [
      {
        feature: "Core positioning",
        reader: "Web context API for AI agents",
        competitor: "Web access and data infrastructure platform",
      },
      {
        feature: "Product surface",
        reader: "Scrape, Crawl, Extract, Browser",
        competitor:
          "Unlocker API, Browser API, Crawl API, scrapers, SERP tools, proxies, datasets",
      },
      {
        feature: "Single page scraping",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Clean Markdown output",
        reader: "Yes",
        competitor: "Not the primary product model",
      },
      {
        feature: "Website crawling",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Structured extraction",
        reader: "Yes",
        competitor: "Yes through scraping and data products",
      },
      {
        feature: "Browser automation",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Proxy infrastructure",
        reader: "Managed inside Reader workflow",
        competitor: "Major platform capability",
      },
      {
        feature: "CAPTCHA solving",
        reader: "Not core Reader positioning",
        competitor: "Major platform capability",
      },
      {
        feature: "Search engine data APIs",
        reader: "Not core Reader positioning",
        competitor: "Yes",
      },
      {
        feature: "Ready made scrapers",
        reader: "Not core Reader positioning",
        competitor: "Yes",
      },
      {
        feature: "Dataset products",
        reader: "Not core Reader positioning",
        competitor: "Yes",
      },
    ],
    differences: [
      {
        title: "Scale and scope",
        description:
          "Reader is a narrower product by design, built for teams that want to give AI agents and applications reliable web context without managing scraping infrastructure themselves. Bright Data is broader, with Web Access APIs that handle public web access at scale, including unblocking, crawling, dynamic content, SERP data, proxy rotation, sessions, fingerprinting, and CAPTCHA solving.",
      },
      {
        title: "Simplicity vs breadth",
        description:
          "Reader is one API with one credit model. Bright Data has multiple products (Web Unlocker, Browser API, Crawl API, scrapers, SERP tools, proxies, datasets) each with different usage patterns. Reader is simpler to start with. Bright Data covers more ground.",
      },
      {
        title: "Browser automation",
        description:
          "Reader Browser gives your workflow a cloud browser session when scraping is not enough, useful for clicks, forms, navigation, screenshots, PDFs, and rendered page state. Bright Data's Browser API is a deeper browser scraping product with fully managed cloud browsers, automatic proxy rotation, browser fingerprint management, CAPTCHA detection, intelligent retries, and support for Puppeteer, Playwright, and Selenium.",
      },
      {
        title: "Scraping and unblocking",
        description:
          "Reader Scrape is built for turning a public URL into clean web context for agents and applications. Bright Data's scraping products are built for robust access to public web data, especially when targets use blocking, rate limiting, dynamic content, proxy restrictions, or other access challenges.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Bright Data",
      points:
        "You need advanced public web access infrastructure. You want large scale unblocking. You need proxy rotation across multiple proxy networks. You want CAPTCHA solving. You need browser fingerprint management. You want search engine data collection. You need ready made scraping APIs. You want dataset products. You need enterprise level web data operations.",
    },
    whenReader:
      "You want a simpler, developer first platform. You need a web context API for AI agents. You want clean Markdown from URLs. You need website crawling for RAG or research. You want structured JSON extraction from public pages. You need browser sessions as a fallback for interaction. You want one API with one credit model. You want control over your own storage, retrieval, alerts, and analysis.",
    faqs: [
      {
        question:
          "What is the main difference between Reader and Bright Data?",
        answer:
          "Reader is a focused web context API for AI agents. Bright Data is a broad web access and data infrastructure platform with products for unblocking, proxies, browser scraping, crawling, SERP data, and datasets.",
      },
      {
        question: "Is Reader a Bright Data alternative?",
        answer:
          "Reader can be a Bright Data alternative when your main need is clean web context, Markdown output, structured extraction, crawling, and occasional browser sessions for AI or data workflows.",
      },
      {
        question: "Is Bright Data broader than Reader?",
        answer:
          "Yes. Bright Data has a much broader product surface, including Web Unlocker, Browser API, proxy infrastructure, scraping APIs, SERP tools, and dataset products.",
      },
      {
        question: "Which tool is better for AI agents?",
        answer:
          "Reader is better when the agent needs clean web context from pages and websites. Bright Data may be better when the main challenge is reliable access to difficult public web targets at scale.",
      },
      {
        question: "Does Reader offer proxy infrastructure like Bright Data?",
        answer:
          "Reader manages access inside its own workflow, but it is not positioned as a proxy infrastructure platform. Bright Data is much stronger if direct proxy infrastructure is the main need.",
      },
      {
        question: "Should I choose based on features alone?",
        answer:
          "No. Choose based on your workflow. If your main need is web context for AI agents, Reader is a strong fit. If your main need is large scale web access infrastructure, Bright Data may be a better fit.",
      },
    ],
    blogSlug: "reader-vs-bright-data",
  },
  {
    slug: "zyte",
    competitor: "Zyte",
    meta: {
      title:
        "Reader vs Zyte | Web Context API vs Scraping and Extraction Platform",
      description:
        "Compare Reader and Zyte by product model, scraping, crawling, browser automation, automatic extraction, AI agent workflows, output formats, and usage fit.",
    },
    intro:
      "Reader and Zyte both help developers collect data from public web pages. Reader is the web context API for AI agents, helping teams scrape pages, crawl websites, extract structured data, and use browser sessions when interaction is required. Zyte is a mature web scraping and extraction platform. Zyte API supports HTTP requests, browser rendered HTML, screenshots, browser automation actions, geolocation, sessions, metadata, and automatic extraction for common data types such as products, articles, job postings, page content, and search engine results.",
    verdict:
      "Choose Reader if your product needs clean web context for AI agents, RAG pipelines, research tools, structured extraction, and website crawling. Reader is a strong fit when the main output should be Markdown, structured JSON, crawl results, screenshots, or browser sessions that your application can feed into an AI workflow. Choose Zyte if your product needs a mature scraping API with browser rendering, HTTP response control, automatic extraction for supported data types, browser automation actions, geolocation, sessions, and scraping focused infrastructure. Zyte is a strong fit when the main challenge is extracting data reliably from web pages using a scraping platform built for production data collection.",
    table: [
      {
        feature: "Core positioning",
        reader: "Web context API for AI agents",
        competitor: "Scraping and extraction platform",
      },
      {
        feature: "Main product surface",
        reader: "Scrape, Crawl, Extract, Browser",
        competitor:
          "Zyte API requests, browser automation, automatic extraction, request controls",
      },
      {
        feature: "Single page scraping",
        reader: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Clean Markdown output",
        reader: "Yes",
        competitor: "Not the primary product model",
      },
      {
        feature: "Website crawling",
        reader: "Yes",
        competitor: "Your crawler or app usually owns crawl logic",
      },
      {
        feature: "Structured extraction",
        reader: "Yes",
        competitor: "Yes, through automatic extraction fields",
      },
      {
        feature: "Product extraction",
        reader: "Schema based extraction",
        competitor: "Supported automatic extraction type",
      },
      {
        feature: "Article extraction",
        reader: "Schema based extraction",
        competitor: "Supported automatic extraction type",
      },
      {
        feature: "SERP extraction",
        reader: "Not the core product surface",
        competitor: "Supported automatic extraction type",
      },
      {
        feature: "Browser automation actions",
        reader: "Through Browser sessions",
        competitor: "Yes",
      },
      {
        feature: "Geolocation controls",
        reader: "Managed inside Reader workflow",
        competitor: "Yes",
      },
      {
        feature: "Cookies and sessions",
        reader: "Browser workflow dependent",
        competitor: "Yes",
      },
    ],
    differences: [
      {
        title: "Product model",
        description:
          "Reader is built around the idea that AI products need usable web context. Zyte is built around the idea that scraping teams need a robust API for retrieving pages, rendering pages, controlling request behavior, and extracting structured data from common page types. If the hard part is giving an AI agent clean source context, Reader is the more direct fit. If the hard part is production scraping and automatic extraction across supported data types, Zyte may be the better fit.",
      },
      {
        title: "Output model",
        description:
          "Reader is designed to return content that AI workflows can use directly: clean Markdown, metadata, HTML, raw HTML, screenshots, structured JSON, crawl results, and browser session output. Zyte is designed to return scraping and extraction outputs based on request fields: browser rendered HTML, HTTP response body, headers, screenshots, or automatic extraction results. Reader is stronger when the output is meant for an LLM or agent. Zyte is stronger when the output is part of a scraping and extraction pipeline.",
      },
      {
        title: "Extraction approach",
        description:
          "Reader Extract turns page context into structured JSON using schemas or instructions, with the structured record alongside the source Markdown. Zyte automatic extraction is more category oriented, supporting extraction fields for products, product lists, articles, article lists, forum threads, job postings, page content, and search engine results. Reader is stronger when you want flexible schema based extraction tied to source context. Zyte is stronger when your target fits one of its supported categories.",
      },
      {
        title: "Crawling",
        description:
          "Reader includes crawling as a core workflow for collecting website context. Zyte is usually used as the scraping and extraction layer inside a crawler or application. Your system decides which URLs to visit, how to queue them, and how to store results. Zyte API handles the individual page requests and extraction outputs.",
      },
      {
        title: "Browser workflows",
        description:
          "Reader Browser gives your workflow a cloud browser session for clicks, forms, navigation, screenshots, PDFs, and rendered page state. Zyte supports browser rendered requests and browser automation actions, returning browser HTML, screenshots, and data extracted after browser actions run, with related features such as geolocation, cookies, sessions, and network capture.",
      },
    ],
    whenCompetitor: {
      heading: "When to use Zyte",
      points:
        "You need a mature scraping and extraction API. You want HTTP response body and header control. You need browser rendered HTML. You want screenshots from browser requests. You need browser automation actions. You want geolocation controls. You need automatic extraction for supported page categories. You want SERP extraction. You need scraping pipeline infrastructure.",
    },
    whenReader:
      "You need a web context API for AI agents. You want clean Markdown from URLs. You need website crawling for RAG or research. You want structured JSON extraction from public pages. You need custom schema based extraction. You want browser sessions as a fallback for interaction. You want a focused API for scrape, crawl, extract, and browser workflows. You want control over your own storage, retrieval, alerts, and analysis.",
    faqs: [
      {
        question: "What is the main difference between Reader and Zyte?",
        answer:
          "Reader is a web context API for AI agents. Zyte is a scraping and extraction platform with HTTP response retrieval, browser rendering, screenshots, automatic extraction, browser actions, geolocation, cookies, sessions, and metadata.",
      },
      {
        question: "Is Reader a Zyte alternative?",
        answer:
          "Reader can be a Zyte alternative when your main needs are clean Markdown, structured extraction, crawling, and browser sessions for AI agents, RAG pipelines, or data workflows.",
      },
      {
        question: "Which tool is better for AI agents?",
        answer:
          "Reader is better when the agent needs clean web context from pages and websites. Zyte can support AI workflows, but its product model is more focused on scraping and extraction requests.",
      },
      {
        question: "Which tool is better for automatic extraction?",
        answer:
          "Zyte is strong when your target fits its supported automatic extraction categories such as products, articles, job postings, page content, or SERP data. Reader is strong when you want flexible schema based extraction with source Markdown.",
      },
      {
        question: "Does Reader replace Zyte's SERP extraction?",
        answer:
          "No. SERP extraction is not Reader's core product surface. If SERP extraction is central to your workflow, Zyte may be a better fit.",
      },
      {
        question: "Should I choose based on features alone?",
        answer:
          "No. Choose based on workflow. If the goal is clean web context for agents, Reader is a strong fit. If the goal is production scraping and automatic extraction, Zyte may be a better fit.",
      },
    ],
    blogSlug: "reader-vs-zyte",
  },
];

export function getComparison(slug: string): ComparisonPage | undefined {
  return comparisons.find((c) => c.slug === slug);
}
