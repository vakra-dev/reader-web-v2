"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const useCases = [
  {
    tab: "E-commerce",
    description:
      "Monitor product prices, track inventory, and extract product data across thousands of stores. Reader handles JavaScript rendering and anti-bot protection on e-commerce platforms automatically. One API call returns clean, structured data from any product page.",
    href: "/solutions/ecommerce",
  },
  {
    tab: "Lead Research",
    description:
      "Scrape company websites for enrichment data. Extract structured business details, hiring signals, and public context from company pages. Feed clean data into your CRM, AI agents, or sales workflows.",
    href: "/solutions/lead-research",
  },
  {
    tab: "Price Monitoring",
    description:
      "Track competitor pricing across any website on a schedule. Detect price changes, promotions, and availability shifts automatically. Export structured data for analysis and dynamic pricing decisions.",
    href: "/solutions/price-monitoring",
  },
  {
    tab: "RAG Pipelines",
    description:
      "Crawl documentation sites and knowledge bases to clean markdown. Output optimized for chunking, embedding, and retrieval. 67 to 87 percent fewer tokens than raw HTML means lower embedding costs and more content per context window.",
    href: "/solutions/rag-pipelines",
  },
  {
    tab: "AI Agents",
    description:
      "Give your AI agents real web access through the MCP server. 9 tools for scraping, crawling, browsing, and extracting structured data. Works with Claude Code, Cursor, VS Code, and every MCP compatible client.",
    href: "/solutions/ai-agents",
  },
  {
    tab: "Competitive Intelligence",
    description:
      "Monitor competitor websites for pricing changes, feature launches, content updates, and hiring signals. Automated crawling with change detection. Feed changes to an LLM for automated analysis and summarization.",
    href: "/solutions/competitive-intelligence",
  },
  {
    tab: "Real Estate",
    description:
      "Extract property listings, prices, details, and market data from real estate platforms. Browser sessions handle JavaScript heavy property sites that static scrapers cannot reach.",
    href: "/solutions/real-estate",
  },
  {
    tab: "LLM Dataset Collection",
    description:
      "Collect clean Markdown from public web pages for LLM evaluation datasets, fine tuning preparation, research corpora, and AI data workflows. Keep source provenance with every record.",
    href: "/solutions/llm-dataset-collection",
  },
];

export function UseCaseTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 border-t border-edge/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Solutions for every team
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {useCases.map((uc, i) => (
              <button
                key={uc.tab}
                onClick={() => setActive(i)}
                className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
                  active === i
                    ? "bg-accent-500 text-white border-accent-500"
                    : "text-fg-muted border-edge hover:border-edge-hover hover:text-fg-secondary"
                }`}
              >
                {uc.tab}
              </button>
            ))}
          </motion.div>

          {/* Active tab content */}
          <div className="border border-edge rounded-md p-8 bg-surface/30 min-h-[160px]">
            <p className="text-base text-fg-secondary leading-relaxed mb-6">
              {useCases[active].description}
            </p>
            <a
              href={useCases[active].href}
              className="text-sm font-medium text-accent-500 hover:text-accent-400 transition-colors"
            >
              Learn more &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
