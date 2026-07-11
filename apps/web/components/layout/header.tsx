"use client";

import Image from "next/image";
import { Github, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const solutionLinks = [
  { label: "E-commerce", href: "/solutions/ecommerce" },
  { label: "Real Estate", href: "/solutions/real-estate" },
  { label: "Lead Generation", href: "/solutions/lead-generation" },
  { label: "Price Monitoring", href: "/solutions/price-monitoring" },
  { label: "Competitive Intelligence", href: "/solutions/competitive-intelligence" },
  { label: "RAG Pipelines", href: "/solutions/rag-pipelines" },
  { label: "AI Agents", href: "/solutions/ai-agents" },
  { label: "LLM Training Data", href: "/solutions/llm-training-data" },
];

const compareLinks = [
  { label: "vs Firecrawl", href: "/compare/firecrawl" },
  { label: "vs ScrapingBee", href: "/compare/scrapingbee" },
  { label: "vs ZenRows", href: "/compare/zenrows" },
  { label: "vs Browserbase", href: "/compare/browserbase" },
  { label: "vs Apify", href: "/compare/apify" },
  { label: "vs Bright Data", href: "/compare/bright-data" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Open Source", href: "/open-source" },
  { label: "Markdown Tool", href: "/markdown" },
];

function Dropdown({
  label,
  links,
  open,
  onToggle,
  dropdownRef,
}: {
  label: string;
  links: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  dropdownRef: React.Ref<HTMLDivElement>;
}) {
  const linkClass =
    "px-3 py-1.5 text-base text-fg-muted hover:text-fg-secondary transition-colors";

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={onToggle}
        className={`${linkClass} flex items-center gap-1`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 py-2 bg-page border border-edge rounded-md shadow-lg z-50">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2 text-sm text-fg-muted hover:text-fg-secondary hover:bg-surface/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const linkClass =
    "px-3 py-1.5 text-base text-fg-muted hover:text-fg-secondary transition-colors";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(target) &&
        compareRef.current &&
        !compareRef.current.contains(target) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDropdown(name: string) {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }

  return (
    <header className="fixed left-0 right-0 z-50 border-b border-edge/50 bg-page/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/text_logo.png"
            alt="Reader"
            width={110}
            height={36}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Dropdown
            label="Solutions"
            links={solutionLinks}
            open={openDropdown === "solutions"}
            onToggle={() => toggleDropdown("solutions")}
            dropdownRef={solutionsRef}
          />
          <Dropdown
            label="Compare"
            links={compareLinks}
            open={openDropdown === "compare"}
            onToggle={() => toggleDropdown("compare")}
            dropdownRef={compareRef}
          />
          <Dropdown
            label="Resources"
            links={resourceLinks}
            open={openDropdown === "resources"}
            onToggle={() => toggleDropdown("resources")}
            dropdownRef={resourcesRef}
          />

          <a
            href="https://docs.reader.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Docs
          </a>

          <div className="w-px h-4 bg-edge mx-2" />

          <a
            href="https://github.com/vakra-dev/reader"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-fg-muted hover:text-fg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://console.reader.dev"
            className="ml-1 px-4 py-1.5 text-sm font-medium rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden p-2 text-fg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-edge/50 bg-page max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {/* Solutions */}
            <div className="px-3 py-1.5">
              <span className="text-xs font-semibold text-fg-tertiary uppercase tracking-wider">
                Solutions
              </span>
            </div>
            {solutionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="pl-6 px-3 py-1.5 text-sm text-fg-muted hover:text-fg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="my-1 border-t border-edge/50" />

            {/* Compare */}
            <div className="px-3 py-1.5">
              <span className="text-xs font-semibold text-fg-tertiary uppercase tracking-wider">
                Compare
              </span>
            </div>
            {compareLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="pl-6 px-3 py-1.5 text-sm text-fg-muted hover:text-fg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="my-1 border-t border-edge/50" />

            {/* Resources */}
            <div className="px-3 py-1.5">
              <span className="text-xs font-semibold text-fg-tertiary uppercase tracking-wider">
                Resources
              </span>
            </div>
            {resourceLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="pl-6 px-3 py-1.5 text-sm text-fg-muted hover:text-fg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://docs.reader.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Docs
            </a>

            <div className="my-2 border-t border-edge" />
            <a
              href="https://github.com/vakra-dev/reader"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-base text-fg-muted hover:text-fg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://console.reader.dev"
              className="mt-2 px-4 py-2 bg-accent-500 text-white text-sm font-medium rounded-md text-center hover:bg-accent-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
