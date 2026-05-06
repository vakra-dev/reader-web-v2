"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["humans", "machines"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at center, rgb(var(--page)) 0%, rgb(var(--page) / 0.85) 40%, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-6"
        >
          AI Web Infrastructure Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-fg"
        >
          Access the web
          <br />
          without the complexity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-fg-tertiary mb-10 max-w-2xl mx-auto"
        >
          Reader gives your AI agents, workflows, and applications full
          access to the web. Scraping, crawling, and browser automation
          through one platform. Use the API, the platform, or self-host.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://app.reader.dev"
            className="px-8 py-3 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors text-base"
          >
            Get Started
          </a>
          <a
            href="https://docs.reader.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-edge hover:border-edge-hover text-fg-secondary font-semibold rounded-md transition-colors text-base"
          >
            View Docs
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base text-fg-muted"
        >
          Making the web readable for{" "}
          <span className="inline-block relative w-[80px] text-left align-bottom overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="inline-block text-accent-500 font-semibold"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>
      </div>
    </section>
  );
}
