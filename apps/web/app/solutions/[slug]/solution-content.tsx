"use client";

import { motion } from "framer-motion";
import type { SolutionPage } from "../data";

export function SolutionContent({ solution }: { solution: SolutionPage }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-accent-500 mb-4 block">
              {solution.hero.eyebrow}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-fg">
              {solution.hero.headline}
            </h1>
            <ul className="space-y-3 mb-10">
              {solution.hero.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-base text-fg-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="https://docs.reader.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Read the Docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Reader */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10 text-fg text-center"
          >
            Why Reader for {solution.hero.eyebrow.toLowerCase()}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {solution.why.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-edge rounded-md bg-surface/30 hover:border-edge-hover transition-colors"
              >
                <h3 className="text-base font-semibold mb-3 text-fg">
                  {item.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can extract + Code example */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          {solution.extractable.items && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4 text-fg">
                {solution.extractable.heading}
              </h2>
              <p className="text-base text-fg-secondary leading-relaxed">
                {solution.extractable.items}
              </p>
            </motion.div>
          )}

          {solution.codeExample && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {solution.extractable.items && (
                <h2 className="text-2xl font-bold mb-4 text-fg">
                  Code example
                </h2>
              )}
              {!solution.extractable.items && (
                <h2 className="text-2xl font-bold mb-4 text-fg">
                  {solution.extractable.heading}
                </h2>
              )}
              <div className="rounded-md border border-edge overflow-hidden">
                <div className="px-4 py-2 bg-surface/50 border-b border-edge">
                  <span className="text-xs text-fg-tertiary font-mono">
                    {solution.codeExample.language}
                  </span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                  <code className="text-fg-secondary">
                    {solution.codeExample.code}
                  </code>
                </pre>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              {solution.cta.heading}
            </h2>
            <p className="text-base text-fg-muted mb-8">
              1,000 free pages per month. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="https://docs.reader.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Read the Docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
