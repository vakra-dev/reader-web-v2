"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Reader?",
    answer:
      "Reader is a cloud web infrastructure platform for AI. It scrapes, crawls, and automates the web through a single API, returning clean markdown optimized for LLMs, RAG pipelines, and AI agents. The core engine is open source under the Apache 2.0 license.",
  },
  {
    question: "Does Reader render JavaScript?",
    answer:
      "Yes. Reader uses a headless browser to render JavaScript automatically. Single page applications built with React, Vue, Next.js, Angular, and other frameworks are handled without any additional configuration.",
  },
  {
    question: "Does Reader bypass anti-bot protection?",
    answer:
      "Reader includes anti-bot handling through browser fingerprint generation, identity randomization, and proxy rotation. The stealth stack is built on Playwright with fingerprint-generator and handles common protection systems including Cloudflare.",
  },
  {
    question: "Can I self host Reader?",
    answer:
      "Yes. The entire engine is open source under Apache 2.0 on GitHub. Clone the repository and deploy on your own infrastructure. There are no feature gaps between the open source and managed versions.",
  },
  {
    question: "Does Reader have an MCP server?",
    answer:
      "Reader's MCP server exposes 9 tools for AI coding assistants. Install it in Claude Code, Cursor, VS Code, Windsurf, or any MCP compatible tool to give your AI agent web scraping, crawling, and browser automation capabilities.",
  },
  {
    question: "What output formats does Reader support?",
    answer:
      "Reader returns clean markdown by default, optimized for LLM consumption. HTML and structured JSON (via the extract capability) are also available.",
  },
  {
    question: "Does Reader have a CLI?",
    answer:
      "Yes. The Reader CLI lets you scrape and crawl from your terminal. Install it globally with npm (npm install -g @vakra-dev/reader-cli) and run commands like reader scrape and reader crawl. Supports extract schemas, output formatting, and all the same features as the API.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-edge rounded-md overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors"
      >
        <span className="text-base font-medium text-fg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-fg-muted flex-shrink-0 ml-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p
            className="text-base text-fg-muted leading-relaxed"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
