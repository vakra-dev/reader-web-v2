"use client";

import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <>
      {/* Content */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-fg">
              About Reader
            </h1>
            <div className="space-y-6 text-base text-fg-secondary leading-relaxed">
              <p>
                The web is the largest repository of human knowledge. Billions
                of pages of information. Almost none of it usable by AI systems
                without significant infrastructure work.
              </p>
              <p>
                Reader exists to close that gap. A single API that handles the
                complexity of reading the web (JavaScript rendering, anti-bot
                protection, proxy rotation, content extraction) so developers
                can focus on what they build with the data.
              </p>
              <p>
                The project is open source under the Apache 2.0 license because
                web infrastructure should be transparent, auditable, and
                accessible to everyone. The managed cloud platform at reader.dev
                is for teams that want zero ops.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Links */}
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
                href="https://console.reader.dev"
                className="px-6 py-2.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="https://github.com/vakra-dev/reader"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-md border border-edge text-fg-muted hover:border-edge-hover hover:text-fg-secondary transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
