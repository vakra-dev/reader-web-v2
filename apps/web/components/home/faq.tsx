"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Reader?",
    answer:
      "Reader is the web context API for AI agents. It turns URLs into clean Markdown, structured JSON, crawl results, and browser sessions.",
  },
  {
    question: "What is a web context API?",
    answer:
      "A web context API helps your system collect usable context from the web. That context can be Markdown, metadata, structured JSON, crawl results, or browser controlled page state.",
  },
  {
    question: "Is Reader a web scraping API?",
    answer:
      "Yes. Reader can scrape web pages and return clean content your application can use. It also supports crawling, structured extraction, and browser sessions.",
  },
  {
    question: "Does Reader return Markdown?",
    answer:
      "Yes. Reader can turn web pages into clean Markdown for agents, RAG pipelines, search, summarization, and internal data workflows.",
  },
  {
    question: "Can Reader crawl a website?",
    answer:
      "Yes. Reader can crawl from a starting URL and collect pages based on the limits, depth, and URL filters you set.",
  },
  {
    question: "Can Reader extract structured data?",
    answer:
      "Yes. Reader can extract structured JSON using a schema or instruction, then return that output with the page context.",
  },
  {
    question: "Does Reader work with AI agents?",
    answer:
      "Yes. Reader is designed for agent workflows that need to read pages, crawl websites, extract fields, and use browser sessions when interaction is required.",
  },
  {
    question: "Does Reader support browser automation?",
    answer:
      "Yes. Reader can create browser sessions that work with automation tools such as Playwright and Puppeteer.",
  },
  {
    question: "When should I use Browser instead of Scrape?",
    answer:
      "Use Browser when a page requires interaction, such as clicks, forms, navigation, screenshots, PDFs, or browser state. Use Scrape when you only need page content from a URL.",
  },
  {
    question: "Is Reader only for AI agents?",
    answer:
      "No. Reader is optimized for AI agents, but it is also useful for RAG pipelines, data workflows, research tools, monitoring systems, and products that need clean web content.",
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
      <div className={`px-5 pb-5 ${open ? "" : "hidden"}`}>
          <p className="text-base text-fg-muted leading-relaxed">
            {answer}
          </p>
        </div>
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
