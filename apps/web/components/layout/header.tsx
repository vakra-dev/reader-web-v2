"use client";

import Image from "next/image";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass =
    "px-3 py-1.5 text-base text-fg-muted hover:text-fg-secondary transition-colors";

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
          <a href="/markdown" className={linkClass}>
            Markdown
          </a>
          <a href="https://app.reader.dev" className={linkClass}>
            Platform
          </a>
          <a
            href="https://docs.reader.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Docs
          </a>
          <a href="https://reader.dev/blog" className={linkClass}>
            Blog
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
            href="https://app.reader.dev"
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
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-edge/50 bg-page">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <a href="/markdown" className={linkClass}>
              Markdown
            </a>
            <a href="https://app.reader.dev" className={linkClass}>
              Platform
            </a>
            <a href="https://docs.reader.dev" className={linkClass}>
              Docs
            </a>
            <a href="https://reader.dev/blog" className={linkClass}>
              Blog
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
              href="https://app.reader.dev"
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
