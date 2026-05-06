"use client";

import { motion } from "framer-motion";
import { Database, Bot, BookOpen, FileText } from "lucide-react";

const useCases = [
  {
    icon: Database,
    title: "RAG pipelines",
    description:
      "Feed clean web content into your retrieval system without preprocessing.",
  },
  {
    icon: Bot,
    title: "AI agents",
    description:
      "Give your agents the ability to read any webpage as part of their tool chain.",
  },
  {
    icon: BookOpen,
    title: "Research",
    description:
      "Pull content from sources without copy-pasting or fighting with HTML parsers.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Convert any docs site into markdown for local reference or fine-tuning datasets.",
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

export function UseCases() {
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
            Use cases
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.title}
              variants={cardVariants}
              className="group relative p-6 border border-edge rounded-md bg-transparent transition-all duration-300 hover:border-edge-hover overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-500/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-accent-500/15" />
              <div className="relative z-10 flex gap-4">
                <uc.icon className="w-6 h-6 text-fg-muted flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-accent-500" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-fg">
                    {uc.title}
                  </h3>
                  <p className="text-base text-fg-muted leading-relaxed">
                    {uc.description}
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
