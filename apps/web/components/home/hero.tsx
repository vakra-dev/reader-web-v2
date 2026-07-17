"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["humans", "machines"];

const codeTabs = [
  {
    label: "cURL",
    code: `curl -X POST https://api.reader.dev/v1/read \\
  -H "x-api-key: $READER_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com"}'`,
  },
  {
    label: "Python",
    code: `from reader_py import ReaderClient

reader = ReaderClient(api_key="rdr_your_key")
result = reader.read(url="https://example.com")

print(result.data.markdown)`,
  },
  {
    label: "JavaScript",
    code: `import { ReaderClient } from "@vakra-dev/reader-js";

const reader = new ReaderClient({ apiKey: "rdr_your_key" });
const result = await reader.read({ url: "https://example.com" });

console.log(result.data.markdown);`,
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at center, rgb(var(--page) / 0.3) 0%, rgb(var(--page) / 0.15) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-6"
            >
              AI web infrastructure platform
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-fg"
            >
              Give your AI agent
              <br />
              the web context it needs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-fg-tertiary mb-8 max-w-lg"
            >
              Turn URLs into clean Markdown, structured JSON, crawl results,
              and browser sessions so agents can read, research, extract, and
              act on live web content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <a
                href="https://console.reader.dev"
                className="px-8 py-3 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors text-base text-center"
              >
                Start free
              </a>
              <a
                href="https://docs.reader.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-edge hover:border-edge-hover text-fg-secondary font-semibold rounded-md transition-colors text-base text-center"
              >
                View docs
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-fg-muted"
            >
              1,000 free credits every month. No card required.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base text-fg-muted mt-4"
            >
              Making the web readable for{" "}
              <span className="inline-block relative w-[80px] text-left align-bottom overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -18, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block text-accent-500 font-semibold"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.p>
          </div>

          {/* Right: Code example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-lg border border-edge overflow-hidden bg-surface/30 backdrop-blur-sm">
              {/* Tab bar */}
              <div className="flex border-b border-edge bg-surface/50">
                {codeTabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2.5 text-xs font-mono transition-colors ${
                      activeTab === i
                        ? "text-fg bg-page border-b-2 border-accent-500"
                        : "text-fg-tertiary hover:text-fg-muted"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Code content */}
              <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary font-mono">
                  {codeTabs[activeTab].code}
                </code>
              </pre>
            </div>

            {/* Response preview */}
            <div className="mt-3 rounded-lg border border-edge overflow-hidden bg-surface/30 backdrop-blur-sm">
              <div className="px-4 py-2 border-b border-edge bg-surface/50">
                <span className="text-xs text-fg-tertiary font-mono">
                  Response
                </span>
              </div>
              <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
                <code className="text-fg-secondary font-mono">
{`# Example Domain

This domain is for use in illustrative
examples in documents.

You may use this domain in literature
without prior coordination or asking
for permission.

[More information...](https://www.iana.org/domains/example)`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
