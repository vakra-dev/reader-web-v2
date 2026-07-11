import Image from "next/image";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "E-commerce", href: "/solutions/ecommerce" },
      { label: "Real Estate", href: "/solutions/real-estate" },
      { label: "Lead Generation", href: "/solutions/lead-generation" },
      { label: "Price Monitoring", href: "/solutions/price-monitoring" },
      { label: "Competitive Intelligence", href: "/solutions/competitive-intelligence" },
      { label: "RAG Pipelines", href: "/solutions/rag-pipelines" },
      { label: "AI Agents", href: "/solutions/ai-agents" },
      { label: "LLM Training Data", href: "/solutions/llm-training-data" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs Firecrawl", href: "/compare/firecrawl" },
      { label: "vs ScrapingBee", href: "/compare/scrapingbee" },
      { label: "vs ZenRows", href: "/compare/zenrows" },
      { label: "vs Browserbase", href: "/compare/browserbase" },
      { label: "vs Apify", href: "/compare/apify" },
      { label: "vs Bright Data", href: "/compare/bright-data" },
    ],
  },
  {
    title: "Scraping Tutorials",
    links: [
      { label: "Python Web Scraping", href: "/blog/web-scraping-python" },
      { label: "JavaScript Web Scraping", href: "/blog/web-scraping-javascript" },
      { label: "Go Web Scraping", href: "/blog/web-scraping-go" },
      { label: "Java Web Scraping", href: "/blog/web-scraping-java" },
      { label: "Scrape Amazon", href: "/blog/scrape-amazon" },
      { label: "Scrape Google", href: "/blog/scrape-google" },
      { label: "Scrape Google Maps", href: "/blog/scrape-google-maps" },
      { label: "Cloudflare Bypass", href: "/blog/bypass-cloudflare" },
      { label: "Anti-Bot Detection", href: "/blog/anti-bot-detection" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.reader.dev" },
      { label: "Blog", href: "/blog" },
      { label: "GitHub", href: "https://github.com/vakra-dev/reader" },
      { label: "Open Source", href: "/open-source" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Discord", href: "https://discord.gg/6tjkq7J5WV" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-edge/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/text_logo.png"
              alt="Reader"
              width={90}
              height={30}
              className="mb-4 opacity-70"
            />
            <p className="text-sm text-fg-tertiary leading-relaxed">
              AI web infrastructure platform
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-fg-secondary mb-3">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-fg-tertiary hover:text-fg-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-edge/50 flex justify-end">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vakra-dev/reader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-tertiary hover:text-fg-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/6tjkq7J5WV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-tertiary hover:text-fg-secondary transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
