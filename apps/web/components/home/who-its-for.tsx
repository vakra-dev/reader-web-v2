"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    title: "Agent research",
    description:
      "Let an agent read public websites, crawl related pages, extract structured fields, and summarize findings with source context.",
  },
  {
    title: "RAG ingestion",
    description:
      "Convert documentation, blogs, help centers, and public websites into clean Markdown for chunking, embedding, retrieval, and answer generation.",
  },
  {
    title: "Product data workflows",
    description:
      "Collect product names, prices, availability, variants, reviews, and metadata from public product pages.",
  },
  {
    title: "Price monitoring",
    description:
      "Retrieve product pages, extract price and availability fields, store snapshots, and compare changes in your own system.",
  },
  {
    title: "Competitive intelligence",
    description:
      "Crawl public competitor pages and feed clean content into your own change detection, summarization, and alerting workflows.",
  },
  {
    title: "Lead research",
    description:
      "Collect public company descriptions, product pages, location information, contact page links, hiring signals, and website content for research workflows.",
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
            Built for real agent workflows
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-edge rounded-md overflow-hidden bg-surface/30 hover:border-edge-hover transition-colors p-6"
            >
              <h3 className="text-base font-semibold text-fg mb-2">
                {useCase.title}
              </h3>
              <p className="text-base text-fg-muted leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
