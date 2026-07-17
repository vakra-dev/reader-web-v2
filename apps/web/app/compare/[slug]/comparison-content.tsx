"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ComparisonPage } from "../data";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-edge/50 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-fg pr-4">{question}</span>
        <svg
          className={`w-4 h-4 text-fg-muted flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`pb-4 ${open ? "" : "hidden"}`}>
        <p className="text-sm text-fg-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function ComparisonContent({
  comparison,
}: {
  comparison: ComparisonPage;
}) {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
              Reader vs {comparison.competitor}
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed">
              {comparison.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Verdict */}
      {comparison.verdict && (
        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-accent-500/20 rounded-md bg-accent-500/5"
            >
              <h2 className="text-lg font-semibold mb-3 text-fg">
                Quick verdict
              </h2>
              <p className="text-sm text-fg-muted leading-relaxed">
                {comparison.verdict}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-fg">
              Feature comparison
            </h2>
            <div className="border border-edge rounded-md overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge bg-surface/50">
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      Feature
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-accent-500">
                      Reader
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-fg-secondary">
                      {comparison.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.table.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i < comparison.table.length - 1
                          ? "border-b border-edge/50"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-fg-muted font-medium">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-fg-secondary">
                        {row.reader}
                      </td>
                      <td className="px-4 py-3 text-fg-secondary">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-fg"
          >
            Key differences
          </motion.h2>
          <div className="space-y-8">
            {comparison.differences.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-fg">
                  {diff.title}
                </h3>
                <p className="text-base text-fg-muted leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to use each */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* When competitor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-edge rounded-md"
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                {comparison.whenCompetitor.heading}
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                {comparison.whenCompetitor.points}
              </p>
            </motion.div>

            {/* When Reader */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-accent-500/30 rounded-md bg-accent-500/5"
            >
              <h3 className="text-lg font-semibold mb-3 text-fg">
                When to use Reader
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                {comparison.whenReader}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {comparison.faqs && comparison.faqs.length > 0 && (
        <section className="py-20 border-t border-edge/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 text-fg"
            >
              Frequently asked questions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-edge rounded-md divide-y-0 px-4"
            >
              {comparison.faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">
              Try Reader free
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
                href={`/blog/${comparison.blogSlug}`}
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Read the full comparison
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
