"use client";

import { motion } from "framer-motion";

const rawHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>About Our Company</title>
  <link rel="stylesheet" href="/assets/main.css">
  <script src="/analytics.js"></script>
  <script src="/tracking.min.js"></script>
</head>
<body>
  <nav class="nav-wrapper bg-white shadow-sm">
    <div class="container mx-auto flex items-center">
      <a href="/" class="logo"><img src="/logo.png"></a>
      <ul class="nav-links">
        <li><a href="/products">Products</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <main class="container mx-auto py-12">
    <div class="hero-section">
      <h1 class="text-4xl font-bold mb-4">
        About Our Company
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        We build tools that help teams work faster.
        Founded in 2020, we serve over 10,000
        customers worldwide.
      </p>
      <h2 class="text-2xl font-semibold mb-3">
        Our Mission
      </h2>
      <p class="text-base text-gray-500">
        Making complex workflows simple through
        intelligent automation and thoughtful
        design.
      </p>
    </div>
  </main>
  <div id="cookie-banner" class="fixed bottom-0">
    <p>We use cookies...</p>
  </div>
  <script>trackPageView('about');</script>
</body>
</html>`;

const cleanMarkdown = `# About Our Company

We build tools that help teams work faster.
Founded in 2020, we serve over 10,000 customers
worldwide.

## Our Mission

Making complex workflows simple through
intelligent automation and thoughtful design.`;

export function BeforeAfter() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
        >
          {/* Raw HTML — the problem */}
          <div className="border border-edge rounded-md overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-edge bg-red-50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-red-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-red-200" />
              </div>
              <span className="text-sm font-medium text-red-600 ml-1">
                What your LLM sees without Reader
              </span>
            </div>
            <div className="h-80 overflow-y-auto bg-red-50/30">
              <pre className="p-4 text-[13px] font-mono leading-relaxed text-fg-muted overflow-x-auto">
                <code>{rawHtml}</code>
              </pre>
            </div>
          </div>

          {/* Clean markdown — the solution */}
          <div className="border border-edge rounded-md overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-edge bg-accent-50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-200" />
              </div>
              <span className="text-sm font-medium text-accent-600 ml-1">
                What your LLM sees with Reader
              </span>
            </div>
            <div className="h-80 overflow-y-auto bg-accent-50/20">
              <pre className="p-4 text-[13px] font-mono leading-relaxed text-fg-secondary overflow-x-auto">
                <code>{cleanMarkdown}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 text-lg text-fg-tertiary max-w-2xl mx-auto"
        >
          Same page. One line of code. Completely different input quality.
        </motion.p>
      </div>
    </section>
  );
}
