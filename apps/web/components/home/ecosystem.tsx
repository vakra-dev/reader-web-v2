"use client";

import { motion } from "framer-motion";

const tools = [
  "Python",
  "JavaScript",
  "Playwright",
  "Puppeteer",
  "LangChain",
  "LlamaIndex",
  "CrewAI",
  "Claude Code",
  "Cursor",
  "VS Code",
  "Zapier",
  "Make",
];

export function Ecosystem() {
  return (
    <section className="py-24 border-t border-edge/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Works with your stack
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {tools.map((name) => (
            <span
              key={name}
              className="px-4 py-2 text-sm font-medium text-fg-muted border border-edge rounded-md"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
