"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Monitor, Braces } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Scrape a page",
    description:
      "Send Reader a URL and get back clean page content. Markdown for model context, HTML for inspection, metadata for storage, screenshots for visual checks, and raw page content when your system needs lower level access.",
    badge: null,
  },
  {
    icon: Layers,
    title: "Crawl a website",
    description:
      "Start from one URL and collect multiple pages from a website. Control depth, limits, and URL patterns so your crawler collects the pages that matter without turning every task into an open ended crawl.",
    badge: null,
  },
  {
    icon: Braces,
    title: "Extract structured data",
    description:
      "When your workflow needs fields instead of full text, Reader can extract structured JSON from web content. Define the data shape you want with a schema or instruction, and get usable fields back with the page context.",
    badge: null,
  },
  {
    icon: Monitor,
    title: "Open a browser session",
    description:
      "Some pages need real interaction. Reader Browser lets your workflow launch a cloud browser session and connect with automation tools such as Playwright or Puppeteer for clicks, navigation, forms, screenshots, PDFs, and rendered state.",
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
            One API for the web context agents keep needing
          </h2>
          <p className="text-lg text-fg-muted max-w-xl mx-auto">
            Reader helps your agent work with the web in four core ways.
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
