"use client";

import { motion } from "framer-motion";
import { Brain, Box, FileOutput, Repeat, Settings2, Cloud } from "lucide-react";

const valueProps = [
  {
    icon: Brain,
    title: "It is built around agent context",
    description:
      "Reader is designed for workflows where web content becomes model context, structured data, crawl results, or browser controlled state.",
  },
  {
    icon: Box,
    title: "It keeps the product model simple",
    description:
      "Scrape pages, crawl websites, extract structured data, and open browser sessions without stitching together separate services.",
  },
  {
    icon: FileOutput,
    title: "It returns useful outputs",
    description:
      "Get Markdown for models, JSON for applications, metadata for storage, HTML for inspection, and browser sessions for interactive workflows.",
  },
  {
    icon: Repeat,
    title: "It works across use cases",
    description:
      "Use the same platform for agent research, RAG ingestion, product data, price monitoring, competitive intelligence, lead research, and website analysis.",
  },
  {
    icon: Settings2,
    title: "It gives developers control",
    description:
      "Use the API, SDKs, CLI, MCP server, Playwright, Puppeteer, webhooks, and your own storage or agent framework.",
  },
  {
    icon: Cloud,
    title: "No infrastructure to manage",
    description:
      "No browsers to run, no proxies to rotate, no servers to scale. Reader handles rendering, anti-bot bypass, and content extraction so your team builds the product, not the plumbing.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WhyReader() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Why teams choose Reader
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {valueProps.map((prop) => (
            <motion.div
              key={prop.title}
              variants={cardVariants}
              className="group relative p-6 border border-edge rounded-md bg-transparent transition-all duration-300 hover:border-edge-hover overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-500/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-accent-500/15" />
              <div className="relative z-10 flex gap-4">
                <prop.icon className="w-6 h-6 text-fg-muted flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-accent-500" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-fg">
                    {prop.title}
                  </h3>
                  <p className="text-base text-fg-muted leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
