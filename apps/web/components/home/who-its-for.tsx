"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, Search } from "lucide-react";

const personas = [
  {
    icon: Code2,
    title: "For developers building AI apps",
    body: "Your agents need live web data, not stale training sets. Reader gives you clean markdown and browser sessions from any URL. One API key, one credit pool, four primitives.",
    detail:
      "Plug Reader into your RAG pipelines, agent workflows, or any LLM-powered app. Connect with Playwright or Puppeteer for browser automation. SDKs for JavaScript and Python. Self-host the open source core or use the managed platform.",
    quote: "Stop writing scrapers. Start shipping features.",
    color: "text-emerald-500",
  },
  {
    icon: BarChart3,
    title: "For enterprise teams automating workflows",
    body: "Insurance quoting, vendor portal monitoring, competitive intelligence, compliance checks. Reader handles the browser automation so your team doesn't build scraping infrastructure from scratch.",
    detail:
      "Authenticated sessions persist across runs. Proxy rotation and anti-bot bypass included. Schedule jobs, monitor changes, export structured data to your existing tools.",
    quote: "Automate what your team does manually on the web, at scale.",
    color: "text-blue-500",
  },
  {
    icon: Search,
    title: "For researchers and analysts",
    body: "Crawl entire domains, scrape hundreds of pages, and get structured output ready for spreadsheets, notebooks, or your BI tools. No scraping expertise needed. No engineering tickets required.",
    detail: "Monitor sources across the web, build datasets for reports, or track changes over time. Reader handles the infrastructure so you can focus on the analysis.",
    quote: "From URL to dataset, without the detours.",
    color: "text-violet-500",
  },
];

export function WhoItsFor() {
  return (
    <section className="py-24 border-t border-edge/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Built for teams that need the web to work for them
          </h2>
          <p className="text-lg text-fg-muted max-w-xl mx-auto">
            Developers, enterprise teams, and researchers. Reader speaks your language.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-edge rounded-md overflow-hidden bg-surface/30 hover:border-edge-hover transition-colors flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <persona.icon className={`w-5 h-5 ${persona.color}`} />
                  <h3 className="text-base font-semibold text-fg">
                    {persona.title}
                  </h3>
                </div>
                <p className="text-base text-fg-secondary leading-relaxed mb-3">
                  {persona.body}
                </p>
                {persona.detail && (
                  <p className="text-base text-fg-tertiary leading-relaxed">
                    {persona.detail}
                  </p>
                )}
              </div>
              <div className="border-t border-edge bg-surface/50 px-6 py-4">
                <p className="text-sm text-fg-tertiary italic">
                  &ldquo;{persona.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
