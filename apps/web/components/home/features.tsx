"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Monitor, Braces } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Read",
    description:
      "Give Reader a URL. Get back clean markdown, HTML, or structured data. JavaScript rendering, anti-bot protection, proxy rotation. All handled automatically. One credit, one page, every time.",
    badge: null,
  },
  {
    icon: Layers,
    title: "Crawl",
    description:
      "Map and extract content across thousands of pages. Set your depth, define patterns, get structured output at scale. No infrastructure to manage.",
    badge: null,
  },
  {
    icon: Monitor,
    title: "Browse",
    description:
      "Spin up cloud browser sessions with full Playwright/Puppeteer compatibility. Log into portals, navigate authenticated dashboards, hold sessions for hours. Your scripts connect over CDP - zero new APIs to learn.",
    badge: null,
  },
  {
    icon: Braces,
    title: "Extract",
    description:
      "Pull structured data from any page with a JSON schema or natural language prompt. Prices, contacts, product specs - returned as typed JSON. Powered by AI, validated on output.",
    badge: null,
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

export function Features() {
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
            What Reader Does
          </h2>
          <p className="text-lg text-fg-muted max-w-xl mx-auto">
            Four primitives. One platform. Complete web access.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={cardVariants}
              className="group relative p-6 border border-edge rounded-md bg-transparent transition-all duration-300 hover:border-edge-hover overflow-hidden"
            >
              {/* Accent glow on hover */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-500/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-accent-500/15" />

              <div className="relative z-10">
                {cap.badge && (
                  <span className="absolute top-0 right-0 text-xs font-medium px-2 py-0.5 rounded-full bg-accent-50 text-accent-500 border border-accent-200">
                    {cap.badge}
                  </span>
                )}
                <cap.icon className="w-6 h-6 text-fg-muted mb-4 transition-colors duration-300 group-hover:text-accent-500" />
                <h3 className="text-lg font-semibold mb-2 text-fg">
                  {cap.title}
                </h3>
                <p className="text-base text-fg-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
