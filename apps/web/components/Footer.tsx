// Keep in sync with: apps/blog/src/components/Footer.astro

import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  product: [
    { href: "/docs", label: "docs" },
    { href: "/pricing", label: "pricing" },
    { href: "/status", label: "status" },
    { href: "/changelog", label: "changelog" },
  ],
  company: [
    { href: "/about", label: "about" },
    { href: "/blog", label: "blog" },
    { href: "/careers", label: "careers" },
  ],
  connect: [
    { href: "https://github.com/vakra/reader", label: "github", external: true },
    { href: "https://twitter.com/vakrahq", label: "twitter", external: true },
    { href: "https://discord.gg/reader", label: "discord", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border mt-30">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-small text-muted-foreground max-w-xs">
              The web, readable by machines.
            </p>
          </div>

          <div>
            <h4 className="text-small font-medium text-foreground mb-4">product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-small font-medium text-foreground mb-4">company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-small font-medium text-foreground mb-4">connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-small text-muted-foreground">
            &copy; {new Date().getFullYear()} Vakra, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
