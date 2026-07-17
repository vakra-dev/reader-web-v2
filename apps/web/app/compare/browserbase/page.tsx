import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BrowserbaseContent } from "./content";

export const metadata: Metadata = {
  title:
    "Reader vs Browserbase | Web Context API vs Browser Agent Platform",
  description:
    "Compare Reader and Browserbase by product model, scraping, crawling, browser sessions, agent workflows, output formats, developer experience, and usage fit.",
  alternates: { canonical: "https://reader.dev/compare/browserbase" },
  openGraph: {
    title:
      "Reader vs Browserbase | Web Context API vs Browser Agent Platform",
    description:
      "Compare Reader and Browserbase by product model, scraping, crawling, browser sessions, agent workflows, output formats, developer experience, and usage fit.",
    url: "https://reader.dev/compare/browserbase",
    type: "article",
  },
};

export default function BrowserbaseComparePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BrowserbaseContent />
      </main>
      <Footer />
    </>
  );
}
