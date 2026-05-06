"use client";

import { motion } from "framer-motion";

export function MarkdownBottomCTA() {
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
            Paste a URL. Get clean data. That&apos;s it.
          </h2>

          <p className="text-lg text-fg-muted mb-8">
            Free to use with 1,000 pages every month. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://md.reader.dev"
              className="px-8 py-3 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors text-base glow"
            >
              Try Reader Markdown
            </a>
            <a
              href="https://docs.reader.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-edge hover:border-edge-hover text-fg-secondary font-semibold rounded-md transition-colors text-base"
            >
              View Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
