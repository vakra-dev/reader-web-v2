"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "<5ms", label: "per page" },
  { value: "10–50x", label: "faster than JS alternatives" },
  { value: "O(n)", label: "single-pass conversion" },
];

export function PoweredBy() {
  return (
    <section className="py-24 border-t border-edge/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-fg">
              Powered by Supermarkdown
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-fg-secondary mb-12">
              <p>
                The conversion engine behind Reader is Supermarkdown, our
                HTML-to-markdown library built from scratch in Rust. We didn&apos;t wrap
                an existing converter or shell out to a Node.js library. We wrote a
                purpose-built parser because timing is everything when you&apos;re
                converting millions of pages.
              </p>
              <p>
                Single-pass O(n) conversion. Sub-5ms for a typical webpage. 10 to 50x
                faster than JavaScript alternatives. Because when your agent is waiting
                on web data, every millisecond counts.
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 border border-edge rounded-md bg-surface/30"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-fg-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://supermarkdown.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-fg hover:underline text-base font-medium"
            >
              Supermarkdown is open source at supermarkdown.dev →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
