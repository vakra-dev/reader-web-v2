import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FirecrawlContent } from "./content";

export const metadata: Metadata = {
  title: "Reader vs Firecrawl | AI Web Data API Comparison",
  description:
    "Compare Reader and Firecrawl by product model, scraping, crawling, Markdown output, structured extraction, browser workflows, agent tooling, and credit usage.",
  alternates: { canonical: "https://reader.dev/compare/firecrawl" },
  openGraph: {
    title: "Reader vs Firecrawl | AI Web Data API Comparison",
    description:
      "Compare Reader and Firecrawl by product model, scraping, crawling, Markdown output, structured extraction, browser workflows, agent tooling, and credit usage.",
    url: "https://reader.dev/compare/firecrawl",
    type: "article",
  },
};

export default function FirecrawlComparePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <FirecrawlContent />
      </main>
      <Footer />
    </>
  );
}
