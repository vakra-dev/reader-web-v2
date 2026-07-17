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
  problem?: string;
  why: {
    title: string;
    description: string;
  }[];
  capabilityGuide?: string;
  workflowDiagram?: string;
  extractable: {
    heading: string;
    items: string;
  };
  codeExample?: {
    language: string;
    code: string;
  };
  faqs?: { question: string; answer: string }[];
  cta: {
    heading: string;
  };
}

export const solutions: SolutionPage[] = [
  {
    slug: "competitive-intelligence",
    meta: {
      title: "Competitive Intelligence Web Data API for AI Agents | Reader",
      description:
        "Use Reader to collect clean website content from public competitor pages and power competitive intelligence workflows with Markdown, structured data, and page snapshots.",
    },
    hero: {
      eyebrow: "Competitive Intelligence",
      headline: "Turn public competitor websites into clean context your team can analyze",
      bullets: [
        "Scrape competitor pages into clean Markdown snapshots for version comparison",
        "Extract structured signals from pricing, positioning, product, and docs pages",
        "Crawl competitor websites for broader research and page discovery",
        "Store snapshots over time and use your own logic for change detection and alerts",
      ],
    },
    problem:
      "Competitive intelligence usually starts with public web pages.\n\nA competitor changes their homepage. A pricing page adds a new plan. A product page highlights a new feature. A documentation page reveals a new integration. A careers page suggests where the company is investing.\n\nThose signals are useful, but collecting them manually does not scale. Teams often end up checking websites by hand, saving screenshots, or building custom scrapers for every competitor. The result is inconsistent.\n\nReader gives competitive intelligence workflows a cleaner foundation. Use Reader to collect public competitor pages as clean Markdown, metadata, crawl results, screenshots, or structured JSON.",
    why: [
      {
        title: "Clean Markdown snapshots",
        description:
          "Reader returns clean Markdown instead of noisy page HTML, making it easier to store page snapshots, compare versions, and identify what changed on a competitor's homepage, pricing page, product page, or docs.",
      },
      {
        title: "Structured extraction for signals",
        description:
          "Extract structured fields such as plan names, feature lists, usage limits, trial language, enterprise messaging, headlines, value propositions, and use cases from public competitor pages.",
      },
      {
        title: "Crawl competitor websites",
        description:
          "Start from a homepage or product section and use Crawl to collect related public pages. Discover new product pages, integration pages, comparison pages, changelogs, and documentation updates.",
      },
    ],
    capabilityGuide:
      "Start with Scrape for specific competitor pages. Use Crawl for broader website research. Add Extract when you need structured fields for comparison. Use Browser only when the page requires interaction such as pricing toggles, tabs, or filters.",
    workflowDiagram:
      "Competitor URLs\n  -> Reader scrape or crawl\n  -> Clean Markdown and metadata\n  -> Snapshot storage\n  -> Change comparison\n  -> AI summary or analyst review\n  -> Alerts, reports, or dashboards",
    extractable: {
      heading: "What you can monitor",
      items:
        "Homepage positioning and headlines, pricing plans and feature lists, product feature pages and messaging, documentation and changelog updates, integration and partnership pages, careers and hiring signals, comparison pages, use case pages, trial and enterprise language.",
    },
    faqs: [
      {
        question: "What is Reader for competitive intelligence?",
        answer:
          "Reader helps teams collect clean public web content from competitor websites so their own systems can store snapshots, extract signals, compare changes, and summarize updates.",
      },
      {
        question: "Can Reader monitor competitor websites automatically?",
        answer:
          "Reader provides the web data layer. Your application should handle scheduling, storage, comparison, alerting, and reporting.",
      },
      {
        question: "What competitor pages should I track?",
        answer:
          "Common pages include homepages, pricing pages, product pages, feature pages, documentation, changelogs, integration pages, comparison pages, and careers pages.",
      },
      {
        question: "Can Reader extract pricing page details?",
        answer:
          "Yes. Reader can extract structured fields such as plan names, feature lists, usage limits, trial language, and enterprise messaging when those details appear on the page.",
      },
      {
        question: "Can Reader crawl competitor websites?",
        answer:
          "Yes. Reader Crawl can start from a URL and collect related public pages based on limits, depth, and URL filters.",
      },
      {
        question: "Should I store Markdown snapshots?",
        answer:
          "Yes. Markdown snapshots make it easier to compare versions, inspect changes, summarize updates, and preserve source context.",
      },
      {
        question: "Can Reader help with AI competitive analysis?",
        answer:
          "Yes. Reader can collect the source context an AI agent needs. Your agent can then summarize changes, compare competitors, and produce reports with source links.",
      },
      {
        question: "How do credits work for competitive intelligence?",
        answer:
          "Usage depends on pages scraped or crawled, refresh frequency, premium mode usage, extraction usage, and browser session time.",
      },
      {
        question: "When should I use Browser?",
        answer:
          "Use Browser when the page requires interaction, such as pricing toggles, tabs, filters, screenshots, PDFs, or rendered page state.",
      },
    ],
    cta: {
      heading: "Build competitive intelligence on clean web context",
    },
  },
  {
    slug: "rag-pipelines",
    meta: {
      title: "Crawl Websites for RAG Pipelines | Reader",
      description:
        "Use Reader to scrape and crawl websites into clean Markdown, metadata, and source linked content for RAG pipelines, AI search, and knowledge ingestion.",
    },
    hero: {
      eyebrow: "RAG Pipelines",
      headline: "Turn public websites into clean Markdown your retrieval system can use",
      bullets: [
        "Scrape and crawl websites into page level Markdown and metadata",
        "Preserve headings, lists, tables, code blocks, and links for better chunking",
        "Keep source URLs and metadata with every page for citations and refresh",
        "Handle JavaScript rendered documentation and help center pages",
      ],
    },
    problem:
      "A RAG pipeline is only as good as the content it retrieves.\n\nIf your source data is noisy, incomplete, duplicated, or hard to chunk, the retrieval layer will struggle. The model may receive the wrong context, miss important details, or answer from boilerplate instead of the actual page content.\n\nWeb content makes this harder. A useful page may be surrounded by navigation links, sidebars, scripts, cookie banners, footers, tracking code, and styling. Documentation sites may use client side rendering.\n\nReader gives your RAG pipeline a cleaner starting point. Use Reader to turn URLs and websites into Markdown that keeps useful structure while removing much of the noise that raw HTML introduces.",
    why: [
      {
        title: "Markdown chunks better",
        description:
          "Clean Markdown has explicit structural markers (headings, lists, tables, code blocks) that make semantic chunking straightforward. Raw HTML buries structure in tag attributes and wastes tokens on navigation, scripts, and styling.",
      },
      {
        title: "Source metadata for citations",
        description:
          "Reader responses include page metadata such as title, description, URL, status, and scrape time. Your ingestion pipeline can carry that metadata forward into chunk records for citations, debugging, and refresh workflows.",
      },
      {
        title: "Crawl entire knowledge bases",
        description:
          "Crawl documentation sites, help centers, and content libraries from a seed URL. Use depth limits, page limits, include patterns, and exclude patterns to keep the crawl focused on the pages that should become part of the retrieval index.",
      },
    ],
    capabilityGuide:
      "Use Scrape when you need one page. Use batch scraping when you already have a URL list. Use Crawl when you need Reader to discover pages from a starting URL. Use Browser only when content appears after direct interaction.",
    workflowDiagram:
      "Website URL\n  -> Reader scrape or crawl\n  -> Clean Markdown and metadata\n  -> Chunking\n  -> Embeddings\n  -> Vector store or search index\n  -> Retrieval\n  -> Answer generation with source links",
    extractable: {
      heading: "What you get",
      items:
        "Clean Markdown with preserved headings, lists, tables, code blocks, and links. Page level metadata including title, URL, status, and scrape time. Consistent output format across any source website. Structural markers that enable semantic chunking.",
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
    faqs: [
      {
        question: "What is Reader for RAG pipelines?",
        answer:
          "Reader helps RAG pipelines scrape and crawl websites into clean Markdown, metadata, and page level results that can be chunked, embedded, stored, and retrieved.",
      },
      {
        question: "Can Reader crawl documentation for RAG?",
        answer:
          "Yes. Reader can start from a documentation URL, discover related pages, and return clean Markdown for each page collected.",
      },
      {
        question: "Why use Markdown for RAG?",
        answer:
          "Markdown preserves useful structure such as headings, lists, links, tables, and code blocks while removing much of the noise found in raw HTML.",
      },
      {
        question: "Does Reader replace my vector database?",
        answer:
          "No. Reader handles web scraping, crawling, and cleanup. Your application still owns chunking, embeddings, vector storage, retrieval, reranking, and answer generation.",
      },
      {
        question: "Can Reader handle JavaScript heavy docs?",
        answer:
          "Reader can render modern pages before returning content, which is useful for documentation sites and frontend applications.",
      },
      {
        question: "Can I keep source URLs with chunks?",
        answer:
          "Yes. Reader returns page level data and metadata that your pipeline can carry into chunk records for citations, debugging, and refreshes.",
      },
      {
        question: "How do credits work for RAG ingestion?",
        answer:
          "RAG usage is usually based on pages scraped or crawled. Standard scrapes cost 1 credit per page, premium scrapes cost 3 credits per page, and crawls cost based on pages discovered and scraped.",
      },
      {
        question: "Should I crawl an entire website?",
        answer:
          "Only if the whole website is useful to the retrieval task. Use limits, depth controls, include patterns, and exclude patterns to keep your index focused.",
      },
      {
        question: "Can Reader extract structured data for RAG?",
        answer:
          "Yes. Reader can extract structured JSON from pages when your workflow needs fields in addition to Markdown.",
      },
    ],
    cta: {
      heading: "Build RAG on cleaner web content",
    },
  },
  {
    slug: "ai-agents",
    meta: {
      title: "Web Context API for AI Agents | Reader",
      description:
        "Give AI agents reliable web context with scraping, crawling, structured extraction, browser sessions, clean Markdown, and developer friendly APIs.",
    },
    hero: {
      eyebrow: "AI Agents",
      headline: "Give your AI agent reliable access to live web content",
      bullets: [
        "Scrape pages into clean Markdown for source reading, summarization, and research",
        "Crawl websites for broader context sets across documentation, products, and help centers",
        "Extract structured JSON fields from public pages using a schema or instruction",
        "Use browser sessions when pages need interaction before content appears",
      ],
    },
    problem:
      "AI agents are only as useful as the context they can access.\n\nA model can reason, summarize, compare, and decide what to do next, but it still needs reliable input. When the task involves the web, that input is rarely clean. Search results are shallow. Raw HTML is noisy. JavaScript heavy pages may not include the useful content in the first response. Multi page research requires crawling. Some workflows require clicking, filtering, or navigating before the right information appears.\n\nTeams end up building scrapers, crawlers, browser workers, content cleaners, Markdown converters, extraction prompts, retry logic, queues, and usage controls before the agent can do useful work.\n\nReader gives agents a cleaner path to the web.",
    why: [
      {
        title: "Read, research, extract, and interact",
        description:
          "Reader gives agent workflows four core capabilities: Scrape (read a page), Crawl (research a website), Extract (get structured JSON fields), and Browser (interact with pages that need clicks, forms, or navigation). One API, one key.",
      },
      {
        title: "Clean Markdown as agent context",
        description:
          "Reader converts web pages into clean Markdown that preserves useful structure such as headings, lists, links, tables, and code blocks. Markdown gives agents a better middle ground between raw HTML and plain text.",
      },
      {
        title: "Controlled and predictable web access",
        description:
          "Start with the lightest tool that solves the problem. If the agent needs one page, scrape it. If it needs many pages, crawl them. If it needs fields, extract them. If it needs interaction, open a browser session. That structure makes agents easier to control and debug.",
      },
    ],
    capabilityGuide:
      "Use Scrape to read one source URL or summarize a page. Use Crawl to research a full website or ingest documentation. Use Extract to pull fields from a page or store structured records. Use Browser to work with dynamic page state or click, type, and navigate. Use the API, SDK, CLI, or MCP server to connect web context to your assistant.",
    workflowDiagram:
      "User request\n  -> Agent decides it needs web context\n  -> Reader scrapes, crawls, extracts, or opens a browser session\n  -> Your system stores or filters the result\n  -> Agent reasons over the context\n  -> Product returns an answer, record, alert, or action",
    extractable: {
      heading: "What Reader gives your agent",
      items:
        "Clean Markdown from any web page. Crawl results from full websites. Structured JSON extraction with a schema or instruction. Browser sessions with Playwright or Puppeteer compatibility. Page metadata including title, URL, status, and scrape time. API, SDK, CLI, and MCP server access.",
    },
    codeExample: {
      language: "bash",
      code: `# Claude Code
claude mcp add reader -- npx -y @vakra-dev/reader-mcp

# Cursor / VS Code (settings.json)
{
  "mcpServers": {
    "reader": {
      "command": "npx",
      "args": ["-y", "@vakra-dev/reader-mcp"],
      "env": { "READER_API_KEY": "rdr_your_api_key" }
    }
  }
}`,
    },
    faqs: [
      {
        question: "What is a web context API for AI agents?",
        answer:
          "A web context API helps agents collect usable information from the web. That context can be clean Markdown, metadata, structured JSON, crawl results, or browser controlled page state.",
      },
      {
        question: "How is Reader different from a normal scraper?",
        answer:
          "A normal scraper usually fetches a page and returns HTML. Reader is designed for agent workflows, with clean Markdown, crawling, extraction, browser sessions, async jobs, SDKs, and MCP support.",
      },
      {
        question: "Can Reader give my agent live web access?",
        answer:
          "Yes. Reader can scrape pages, crawl websites, extract structured data, and create browser sessions that your agent workflow can use.",
      },
      {
        question: "Does Reader work with RAG pipelines?",
        answer:
          "Yes. Reader can crawl or scrape web pages into clean Markdown that your system can chunk, embed, store, and retrieve.",
      },
      {
        question: "Can Reader extract structured data for agents?",
        answer:
          "Yes. Reader can extract JSON fields from web pages using a schema or instruction, then return the result with the page context.",
      },
      {
        question: "When should an agent use Browser?",
        answer:
          "Use Browser when the page requires interaction, such as clicks, forms, navigation, screenshots, PDFs, or rendered page state. Use Scrape or Crawl when the agent only needs content.",
      },
      {
        question: "Does Reader replace my agent framework?",
        answer:
          "No. Reader provides the web context layer. Your product still controls the agent framework, prompts, tools, memory, storage, user experience, and business logic.",
      },
      {
        question: "Can I control how much web context an agent collects?",
        answer:
          "Yes. Use limits, crawl depth, filters, tool selection, and credit checks to keep workflows focused.",
      },
    ],
    cta: {
      heading: "Give your agent reliable web context",
    },
  },
  {
    slug: "llm-dataset-collection",
    meta: {
      title: "Web Data Collection for LLM Datasets | Reader",
      description:
        "Use Reader to collect clean Markdown from public web pages for LLM evaluation datasets, fine tuning preparation, research corpora, and AI data workflows.",
    },
    hero: {
      eyebrow: "LLM Dataset Collection",
      headline: "Turn public web pages into clean Markdown for model datasets and AI data workflows",
      bullets: [
        "Scrape and crawl public websites into clean Markdown and page level metadata",
        "Preserve headings, lists, tables, code blocks, and links for inspectable dataset records",
        "Keep source URLs and provenance with every record for audit and refresh",
        "Use crawl limits, depth controls, and URL filters to collect the right source material",
      ],
    },
    problem:
      "Web pages are one of the most useful sources of language data. They contain documentation, product information, articles, help center content, policies, tutorials, listings, reviews, technical references, and public company pages.\n\nBut raw web pages are not ready to become model data. A single page may include navigation links, cookie banners, sidebars, scripts, styles, ads, footer content, tracking code, and content that only appears after JavaScript runs.\n\nEvaluation examples may include irrelevant text. Fine tuning examples may include boilerplate. Retrieval datasets may contain duplicate chunks. Research corpora may be hard to inspect or reproduce.\n\nReader gives AI data workflows a cleaner starting point.",
    why: [
      {
        title: "Consistent, clean Markdown output",
        description:
          "Reader produces consistent Markdown across any website. Navigation, ads, scripts, and boilerplate are stripped. What remains is clean text with structural markers preserved for headings, lists, tables, code blocks, and links.",
      },
      {
        title: "Source provenance with every record",
        description:
          "Each page retains source metadata such as URL, title, scrape time, status, and cache information. Your dataset pipeline can carry that provenance through filtering, labeling, and transformation for audit, refresh, and removal.",
      },
      {
        title: "Crawl with control",
        description:
          "Crawl documentation, help centers, and public websites with configurable depth, page limits, include patterns, and exclude patterns. Collect the right source material for your dataset without collecting everything.",
      },
    ],
    capabilityGuide:
      "Use Scrape when you know the exact pages. Use batch scraping when your workflow has a URL list. Use Crawl to discover related pages from a seed URL such as a documentation site, help center, or public knowledge base. Use Extract when records need structured fields in addition to Markdown.",
    workflowDiagram:
      "Source URLs\n  -> Reader scrape or crawl\n  -> Clean Markdown and metadata\n  -> Filtering and review\n  -> Deduplication\n  -> Labeling or transformation\n  -> Dataset storage\n  -> Evaluation, fine tuning, retrieval, or analysis",
    extractable: {
      heading: "What you get",
      items:
        "Clean, consistent Markdown from any website. Page level metadata including URL, title, status, and scrape time. Configurable crawling with depth limits, page limits, and URL pattern filtering. Structured extraction for records that need searchable fields or labels.",
    },
    faqs: [
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
    ],
    cta: {
      heading: "Build LLM datasets from cleaner web content",
    },
  },
];

export function getSolution(slug: string): SolutionPage | undefined {
  return solutions.find((s) => s.slug === slug);
}
