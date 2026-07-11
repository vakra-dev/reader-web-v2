export interface SolutionPage {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    bullets: string[];
  };
  why: {
    title: string;
    description: string;
  }[];
  extractable: {
    heading: string;
    items: string;
  };
  codeExample?: {
    language: string;
    code: string;
  };
  cta: {
    heading: string;
  };
}

export const solutions: SolutionPage[] = [
  {
    slug: "ecommerce",
    meta: {
      title: "E-commerce Data Extraction API | Reader",
      description:
        "Extract product data, prices, and inventory from any e-commerce site. JavaScript rendering and anti-bot bypass handled. 1,000 free pages per month.",
    },
    hero: {
      eyebrow: "E-commerce",
      headline: "Extract product data from any e-commerce site",
      bullets: [
        "Monitor competitor prices across thousands of product pages",
        "Track inventory availability and stock changes",
        "Extract product details, specifications, and reviews at scale",
        "Clean output ready for analysis, databases, and AI pipelines",
      ],
    },
    why: [
      {
        title: "JavaScript rendering",
        description:
          "E-commerce sites are built with React, Next.js, and other JavaScript frameworks. Reader renders every page in a real browser so dynamic prices, stock status, and product details are captured completely.",
      },
      {
        title: "Anti-bot bypass",
        description:
          "Amazon, Shopify, Walmart, and other platforms use aggressive bot detection. Reader handles TLS fingerprinting, browser identity generation, and proxy rotation automatically.",
      },
      {
        title: "Scale with crawling",
        description:
          "Crawl entire product catalogs with BFS discovery. Set depth and page limits to target specific categories. URL pattern filtering focuses on product pages and skips admin and checkout flows.",
      },
    ],
    extractable: {
      heading: "What you can extract",
      items:
        "Product titles, prices (base and sale), descriptions, specifications, images, ratings, review counts, availability status, seller information, variant data, category tags, and SKU identifiers.",
    },
    codeExample: {
      language: "python",
      code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")

# Scrape a product page with structured extraction
result = reader.read(
    url="https://store.example.com/product/123",
    extract={
        "schema": {
            "title": "string",
            "price": "number",
            "in_stock": "boolean",
            "rating": "number"
        }
    }
)

print(result.data.extracted)`,
    },
    cta: {
      heading: "Start extracting e-commerce data today",
    },
  },
  {
    slug: "real-estate",
    meta: {
      title: "Real Estate Data Extraction API | Reader",
      description:
        "Extract property listings, prices, and market data from real estate platforms. Browser sessions handle JavaScript heavy sites.",
    },
    hero: {
      eyebrow: "Real Estate",
      headline: "Extract property data from real estate platforms",
      bullets: [
        "Pull listing prices, property details, and market data at scale",
        "Handle JavaScript heavy property sites with browser sessions",
        "Track price changes and new listings with automated crawling",
        "Clean structured output for analysis and investment research",
      ],
    },
    why: [
      {
        title: "Browser sessions for heavy JavaScript",
        description:
          "Real estate platforms render listings dynamically. Reader's browser sessions provide full Chromium rendering with CDP access for sites that require scrolling, clicking, and interaction.",
      },
      {
        title: "Anti-bot protection handling",
        description:
          "Property sites use protection systems that block standard scrapers. Reader handles TLS fingerprinting, browser fingerprint generation, and proxy rotation automatically.",
      },
      {
        title: "Crawl listings at scale",
        description:
          "Discover and extract data from hundreds of property listings with BFS crawling. Filter by URL patterns to target specific neighborhoods, price ranges, or property types.",
      },
    ],
    extractable: {
      heading: "What you can extract",
      items:
        "Listing prices, addresses, bedrooms and bathrooms, square footage, property type, listing status, price history, tax records, agent information, neighborhood data, and property photos.",
    },
    cta: {
      heading: "Start extracting real estate data today",
    },
  },
  {
    slug: "lead-generation",
    meta: {
      title: "Web Scraping for Lead Generation | Reader",
      description:
        "Automate lead data collection from company websites and directories. Extract contacts and business signals at scale.",
    },
    hero: {
      eyebrow: "Lead Generation",
      headline: "Automate lead data collection from the web",
      bullets: [
        "Scrape company websites for enrichment data and contact information",
        "Crawl business directories and listings for prospect discovery",
        "Extract firmographics, technology stacks, and business signals",
        "Feed clean data into your CRM through the API or no code integrations",
      ],
    },
    why: [
      {
        title: "Crawl directories and listings",
        description:
          "Discover target companies across business directories and industry listings automatically. BFS crawling with URL pattern filtering focuses on the pages that contain the data you need.",
      },
      {
        title: "Structured extraction",
        description:
          "Pull specific fields from company pages: names, addresses, phone numbers, team members, technology stacks. Define a schema and get validated JSON back.",
      },
      {
        title: "Browser sessions for portals",
        description:
          "Some directories and business platforms require login or interaction before showing data. Reader's browser sessions handle authenticated access through full CDP compatibility.",
      },
    ],
    extractable: {
      heading: "What you can extract",
      items:
        "Company names, addresses, phone numbers, email patterns, employee counts, technology stacks, social profiles, job postings, revenue signals, founding dates, and industry classifications.",
    },
    cta: {
      heading: "Start building your lead pipeline today",
    },
  },
  {
    slug: "price-monitoring",
    meta: {
      title: "Automated Price Monitoring with Web Scraping | Reader",
      description:
        "Track competitor prices automatically across any website. Detect price changes, promotions, and availability shifts.",
    },
    hero: {
      eyebrow: "Price Monitoring",
      headline: "Track competitor prices automatically",
      bullets: [
        "Monitor pricing across competitor websites on a schedule",
        "Detect price changes, promotions, and availability shifts",
        "Extract pricing data from JavaScript heavy e-commerce platforms",
        "Export structured data for analysis and dynamic pricing decisions",
      ],
    },
    why: [
      {
        title: "Scheduled scraping at scale",
        description:
          "Set up automated scraping on your cadence. Daily, weekly, or hourly. Reader handles the infrastructure so you focus on the pricing strategy.",
      },
      {
        title: "Structured price extraction",
        description:
          "Define a schema for the price fields you need. Reader returns validated JSON with the current price, original price, discount percentage, and availability status.",
      },
      {
        title: "Anti-bot for e-commerce",
        description:
          "Competitor pricing pages are among the most heavily protected pages on the web. Reader's stealth stack and proxy rotation handle the protection automatically.",
      },
    ],
    extractable: {
      heading: "What you can track",
      items:
        "Current prices, original prices, discount amounts and percentages, stock availability, shipping costs, promotional offers, variant pricing, and bundle deals.",
    },
    cta: {
      heading: "Start monitoring prices today",
    },
  },
  {
    slug: "competitive-intelligence",
    meta: {
      title: "Competitive Intelligence Automation | Reader",
      description:
        "Monitor competitor websites for pricing changes, feature launches, and content updates. Automated crawling with change detection.",
    },
    hero: {
      eyebrow: "Competitive Intelligence",
      headline: "Monitor competitors without manual research",
      bullets: [
        "Track competitor website changes, feature launches, and messaging updates",
        "Monitor pricing pages, product updates, and content strategy shifts",
        "Detect hiring signals from job postings",
        "Automated crawling with change detection and LLM summarization",
      ],
    },
    why: [
      {
        title: "Automated crawling",
        description:
          "Crawl competitor domains on a schedule. Reader discovers and extracts content from every page, giving you a complete snapshot of their public web presence.",
      },
      {
        title: "Clean markdown for LLM analysis",
        description:
          "Reader returns clean markdown that you can feed directly to an LLM for automated summarization, comparison, and trend analysis. No HTML parsing needed.",
      },
      {
        title: "Change detection",
        description:
          "Compare current crawl results with previous snapshots. Identify what changed: new pages, updated pricing, modified features, new job postings.",
      },
    ],
    extractable: {
      heading: "What you can monitor",
      items:
        "Pricing and packaging pages, product feature lists, marketing messaging and positioning, blog and content strategy, job postings and hiring signals, technology stack changes, and partnership announcements.",
    },
    cta: {
      heading: "Start monitoring competitors today",
    },
  },
  {
    slug: "rag-pipelines",
    meta: {
      title: "Web Data for RAG Pipelines | Reader",
      description:
        "Crawl websites to clean markdown for retrieval augmented generation. 67 to 87 percent fewer tokens than raw HTML. Built for LLM pipelines.",
    },
    hero: {
      eyebrow: "RAG Pipelines",
      headline: "Feed live web data into your RAG pipeline",
      bullets: [
        "Crawl documentation sites and knowledge bases to clean markdown",
        "Output optimized for chunking, embedding, and retrieval",
        "67 to 87 percent fewer tokens than raw HTML input",
        "Keep your pipeline fresh with scheduled re crawls",
      ],
    },
    why: [
      {
        title: "Markdown chunks better",
        description:
          "Clean markdown has explicit structural markers (headings, lists, tables) that make semantic chunking straightforward. Raw HTML buries structure in tag attributes and wastes tokens on navigation, scripts, and styling.",
      },
      {
        title: "Token efficiency at scale",
        description:
          "A typical 3,000 word article uses roughly 8,000 tokens as HTML but only 2,800 as clean markdown. At scale, this 67 percent reduction directly lowers embedding costs and fits more content per context window.",
      },
      {
        title: "Crawl entire knowledge bases",
        description:
          "BFS crawling with depth and page limits lets you index entire documentation sites, help centers, and content libraries. URL pattern filtering targets the content sections and skips navigation pages.",
      },
    ],
    extractable: {
      heading: "What you get",
      items:
        "Clean markdown with preserved headings, lists, tables, and code blocks. Structural markers that enable semantic chunking. Consistent output format across any source website.",
    },
    codeExample: {
      language: "python",
      code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_api_key")

# Crawl a docs site for RAG ingestion
result = reader.read(
    url="https://docs.example.com",
    max_depth=3,
    max_pages=200
)

# Each page is clean markdown, ready for chunking
for page in result.data:
    chunks = split_by_headers(page.markdown)
    embeddings = embed(chunks)
    store(embeddings)`,
    },
    cta: {
      heading: "Start building your RAG pipeline today",
    },
  },
  {
    slug: "ai-agents",
    meta: {
      title: "Web Access for AI Agents via MCP | Reader",
      description:
        "Give AI agents web access with 9 MCP tools. Scrape, crawl, browse, and extract from any website. Works with Claude Code, Cursor, and VS Code.",
    },
    hero: {
      eyebrow: "AI Agents",
      headline: "Give your AI agents real web access",
      bullets: [
        "9 MCP tools for scraping, crawling, browsing, and extracting",
        "Works with Claude Code, Cursor, VS Code, Windsurf, and every MCP client",
        "Browser sessions for authenticated workflows and interactive pages",
        "Clean markdown context that fits more information per token",
      ],
    },
    why: [
      {
        title: "MCP server with 9 tools",
        description:
          "Reader's MCP server exposes scrape, batch scrape, crawl, discover, extract, browser session creation, job status, job cancellation, and credit checking. Install once, use from any MCP compatible AI tool.",
      },
      {
        title: "Browser sessions for agent actions",
        description:
          "When your agent needs to log in, fill forms, or navigate multi step workflows, Reader provides full CDP browser sessions. Your agent drives a real, stealthed Chrome browser.",
      },
      {
        title: "Token efficient context",
        description:
          "Clean markdown uses 67 to 87 percent fewer tokens than raw HTML. Your agent gets more useful web content per context window, improving comprehension and reducing API costs.",
      },
    ],
    extractable: {
      heading: "Install in one command",
      items: "",
    },
    codeExample: {
      language: "bash",
      code: `claude mcp add reader -- npx -y @vakra-dev/reader-mcp`,
    },
    cta: {
      heading: "Give your agents web access today",
    },
  },
  {
    slug: "llm-training-data",
    meta: {
      title: "Web Data for LLM Training and Fine Tuning | Reader",
      description:
        "Collect training data from the web at scale. Clean, consistent markdown output. Self host for data sovereignty. Apache 2.0 open source.",
    },
    hero: {
      eyebrow: "LLM Training Data",
      headline: "Collect training data from the web at scale",
      bullets: [
        "Crawl domains at scale with configurable depth and page limits",
        "Clean, consistent markdown output through Supermarkdown",
        "URL pattern filtering to target specific content types",
        "Self host on your infrastructure for full data sovereignty",
      ],
    },
    why: [
      {
        title: "Consistent, clean output",
        description:
          "Supermarkdown, Reader's Rust HTML to markdown engine, produces consistent output across any website. Navigation, ads, scripts, and boilerplate are stripped. What remains is clean text with structural markers preserved.",
      },
      {
        title: "Scale with control",
        description:
          "Crawl up to 10,000 pages per job with configurable depth. Include and exclude URL patterns target specific content types. Rate limiting protects both your infrastructure and the target site.",
      },
      {
        title: "Self host for data sovereignty",
        description:
          "The engine is Apache 2.0 on GitHub. Deploy on your own infrastructure. Data never leaves your network. No third party API calls for sensitive training pipelines.",
      },
    ],
    extractable: {
      heading: "What you get",
      items:
        "Clean, consistent markdown from any website. Structural markers preserved for downstream processing. Configurable crawling with depth limits, page limits, and URL pattern filtering.",
    },
    cta: {
      heading: "Start collecting training data today",
    },
  },
];

export function getSolution(slug: string): SolutionPage | undefined {
  return solutions.find((s) => s.slug === slug);
}
