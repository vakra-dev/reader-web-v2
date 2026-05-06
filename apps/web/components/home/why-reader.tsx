"use client";

import { motion } from "framer-motion";
import { Cloud, CreditCard, Code2, Monitor, Cpu, Package } from "lucide-react";

const valueProps = [
  {
    icon: Cloud,
    title: "No infrastructure to manage",
    description:
      "No proxies to rotate, no browsers to run, no servers to scale. Reader handles the complexity. You get clean data.",
  },
  {
    icon: CreditCard,
    title: "One API, one credit pool",
    description:
      "Read, crawl, browse - all through one API key, one credit pool. No separate billing tracks, no hidden multipliers. One credit, one page. Always.",
  },
  {
    icon: Code2,
    title: "Open source at the core",
    description:
      "Reader is open source and Apache 2.0 licensed. Run it on your infrastructure, inspect every line, contribute back. The managed platform builds on this foundation.",
  },
  {
    icon: Monitor,
    title: "Browser automation included",
    description:
      "Full Playwright and Puppeteer compatibility via CDP. Spin up cloud browsers, connect your existing scripts, automate authenticated workflows. No new APIs to learn.",
  },
  {
    icon: Cpu,
    title: "Built for the AI era",
    description:
      "Every output is optimized for LLMs. Clean markdown, structured data, no boilerplate. Whether you're feeding a model or reading it yourself, the content is ready.",
  },
  {
    icon: Package,
    title: "SDKs for every stack",
    description:
      "JavaScript and Python SDKs, a REST API, and a CLI. Pick the interface that fits your workflow and start building in minutes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WhyReader() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Why Reader
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {valueProps.map((prop) => (
            <motion.div
              key={prop.title}
              variants={cardVariants}
              className="group relative p-6 border border-edge rounded-md bg-transparent transition-all duration-300 hover:border-edge-hover overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-500/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-accent-500/15" />
              <div className="relative z-10 flex gap-4">
                <prop.icon className="w-6 h-6 text-fg-muted flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-accent-500" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-fg">
                    {prop.title}
                  </h3>
                  <p className="text-base text-fg-muted leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
