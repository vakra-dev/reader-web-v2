"use client";

import { motion } from "framer-motion";

export function MarkdownHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {/* White fade over grid center so text stays crisp */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at center, rgb(var(--page)) 0%, rgb(var(--page) / 0.85) 40%, transparent 70%)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-6"
        >
          Reader Markdown
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-fg"
        >
          Clean markdown from any URL.
          <br />
          Just add the prefix.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-surface border border-edge rounded-md px-5 py-3 mb-8"
        >
          <code className="text-base md:text-lg font-mono text-fg-secondary">
            <span className="text-accent-500">https://md.reader.dev/</span>
            <span className="text-fg-muted">https://example.com</span>
          </code>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-fg-tertiary mb-10 max-w-2xl mx-auto"
        >
          Raw HTML is noisy. Full of scripts, nav bars, ads, and markup that
          confuses language models. Reader strips it all away and returns clean,
          structured markdown that LLMs can actually understand.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-fg-muted"
        >
          No API key needed. No setup. No code.
        </motion.p>
      </div>
    </section>
  );
}
