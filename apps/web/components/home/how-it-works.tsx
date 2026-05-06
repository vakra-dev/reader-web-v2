"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Give Reader a URL, or connect to a cloud browser",
    description: "A single page, an entire site, or a live browser session. Reader handles all three.",
  },
  {
    number: "02",
    title: "Reader handles the hard part",
    description:
      "Rendering, anti-bot bypass, content extraction, session management.",
  },
  {
    number: "03",
    title: "Get clean, structured data",
    description:
      "Through the platform or the API. Ready for your agents, your workflows, or your next report.",
  },
];

export function HowItWorks() {
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
            How It Works
          </h2>
          <p className="text-lg text-fg-muted">
            Three steps. That&apos;s it.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5 p-6 border border-edge rounded-md bg-surface/30 hover:border-edge-hover transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">{step.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-fg">
                  {step.title}
                </h3>
                <p className="text-base text-fg-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
