"use client";

import { motion } from "framer-motion";

export function BottomCTA() {
  return (
    <section className="py-24 border-t border-edge/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Start with your first URL
          </h2>

          <p className="text-lg text-fg-muted mb-8">
            Give your agent the web context it needs. Scrape a page, crawl a site, extract structured data, or open a browser session from one API.
          </p>

          <a
            href="https://console.reader.dev"
            className="inline-block px-8 py-3 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors text-base glow"
          >
            Start free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
