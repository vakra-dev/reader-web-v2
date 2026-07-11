"use client";

import { motion } from "framer-motion";

export function OpenSourceContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
              Open source at the core
            </h1>
            <p className="text-lg text-fg-secondary leading-relaxed">
              Reader's engine is open source under the Apache 2.0 license. The
              same code that powers the managed cloud platform is on GitHub for
              you to clone, deploy, modify, and build on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Apache 2.0 means */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-fg"
          >
            What Apache 2.0 means for you
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                No copyleft restrictions
              </h3>
              <p className="text-base text-fg-muted leading-relaxed">
                Modify Reader and integrate it into commercial products without
                opening your own source code. Apache 2.0 does not require you to
                share modifications, even if you deploy Reader as a network
                service. This is the key difference from AGPL licensed
                alternatives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                No feature gaps
              </h3>
              <p className="text-base text-fg-muted leading-relaxed">
                Every capability available on the managed platform is available
                in the open source version. Scraping, crawling, browser
                sessions, anti-bot handling, and Supermarkdown conversion.
                Nothing is withheld.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Full control
              </h3>
              <p className="text-base text-fg-muted leading-relaxed">
                Deploy on your own servers. Run behind your firewall. Audit
                every line of code. Modify the browser pool, proxy
                configuration, and conversion pipeline to fit your exact needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two projects */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-fg"
          >
            Two open source projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-edge rounded-md bg-surface/30"
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">Reader</h3>
              <p className="text-sm text-fg-tertiary mb-3">
                Apache 2.0 · TypeScript
              </p>
              <p className="text-sm text-fg-muted leading-relaxed mb-4">
                The web infrastructure engine. Scraping, crawling, browser
                sessions, and anti-bot handling.
              </p>
              <a
                href="https://github.com/vakra-dev/reader"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-500 hover:text-accent-400 transition-colors"
              >
                View on GitHub &rarr;
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-edge rounded-md bg-surface/30"
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Supermarkdown
              </h3>
              <p className="text-sm text-fg-tertiary mb-3">MIT · Rust</p>
              <p className="text-sm text-fg-muted leading-relaxed mb-4">
                The HTML to markdown conversion engine. Single pass O(n)
                conversion with browser grade malformed HTML recovery. Available
                as a Rust crate and npm package.
              </p>
              <a
                href="https://github.com/vakra-dev/supermarkdown"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-500 hover:text-accent-400 transition-colors"
              >
                View on GitHub &rarr;
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Self host or cloud */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-fg"
          >
            Self host or use the cloud
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-edge rounded-md"
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">Self host</h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                Clone the repo, configure your proxies, and deploy. You run the
                infrastructure. No API calls leave your network.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-accent-500/30 rounded-md bg-accent-500/5"
            >
              <h3 className="text-lg font-semibold mb-2 text-fg">
                Managed cloud
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                Sign up at reader.dev. 1,000 free pages per month. Zero ops.
                Same engine, same output.
              </p>
            </motion.div>
          </div>
          <p className="text-sm text-fg-tertiary text-center">
            Both options use the same codebase. Switch between them with no code
            changes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-edge/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/vakra-dev/reader"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                View on GitHub
              </a>
              <a
                href="https://docs.reader.dev/self-hosted/getting-started/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Self Host Guide
              </a>
              <a
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                Get Started with Cloud
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
