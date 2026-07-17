import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrapingBeeContent } from "./content";

export const metadata: Metadata = {
  title: "Reader vs ScrapingBee | Web Context API vs Scraping API",
  description:
    "Compare Reader and ScrapingBee by product model, scraping, crawling, Markdown output, structured extraction, proxies, browser workflows, and AI agent fit.",
  alternates: { canonical: "https://reader.dev/compare/scrapingbee" },
  openGraph: {
    title: "Reader vs ScrapingBee | Web Context API vs Scraping API",
    description:
      "Compare Reader and ScrapingBee by product model, scraping, crawling, Markdown output, structured extraction, proxies, browser workflows, and AI agent fit.",
    url: "https://reader.dev/compare/scrapingbee",
    type: "article",
  },
};

export default function ScrapingBeeComparePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ScrapingBeeContent />
      </main>
      <Footer />
    </>
  );
}
