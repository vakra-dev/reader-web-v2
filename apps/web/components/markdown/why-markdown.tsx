"use client";

import { motion } from "framer-motion";

export function WhyMarkdown() {
  return (
    <section className="py-24 border-t border-edge/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-fg">
            Why markdown matters for LLMs
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-fg-secondary"
            >
              <span className="font-semibold text-fg">HTML wastes tokens.</span>{" "}
              A typical webpage is 80% markup and 20% content. Navigation menus,
              script tags, style blocks, tracking pixels, cookie banners. Your model
              processes all of it and extracts meaning from almost none of it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-fg-secondary"
            >
              <span className="font-semibold text-fg">Markdown is pure signal.</span>{" "}
              Headings convey structure. Lists convey hierarchy. Links are preserved
              with context. Nothing is wasted. Every token carries meaning.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-fg-secondary"
            >
              <span className="font-semibold text-fg">Reader converts any public webpage into markdown</span>{" "}
              that is optimized for language models. Fewer tokens, better comprehension,
              more accurate outputs.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
