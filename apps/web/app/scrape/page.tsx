import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrapeContent } from "./content";

export const metadata: Metadata = {
  title: "Web Scraping API for AI Agents | Reader",
  description:
    "Turn URLs into clean Markdown, HTML, metadata, screenshots, and structured data for AI agents, RAG pipelines, and web data workflows.",
  alternates: { canonical: "https://reader.dev/scrape" },
  openGraph: {
    title: "Web Scraping API for AI Agents | Reader",
    description:
      "Turn URLs into clean Markdown, HTML, metadata, screenshots, and structured data for AI agents, RAG pipelines, and web data workflows.",
    url: "https://reader.dev/scrape",
    type: "website",
  },
};

export default function ScrapePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ScrapeContent />
      </main>
      <Footer />
    </>
  );
}
