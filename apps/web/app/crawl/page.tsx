import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CrawlContent } from "./content";

export const metadata: Metadata = {
  title: "Web Crawler API for AI Agents | Reader",
  description:
    "Crawl websites into clean Markdown, metadata, and page level results for AI agents, RAG pipelines, research tools, and web data workflows.",
  alternates: { canonical: "https://reader.dev/crawl" },
  openGraph: {
    title: "Web Crawler API for AI Agents | Reader",
    description:
      "Crawl websites into clean Markdown, metadata, and page level results for AI agents, RAG pipelines, research tools, and web data workflows.",
    url: "https://reader.dev/crawl",
    type: "website",
  },
};

export default function CrawlPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CrawlContent />
      </main>
      <Footer />
    </>
  );
}
