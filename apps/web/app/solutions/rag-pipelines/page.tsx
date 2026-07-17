import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RagPipelinesContent } from "./content";

export const metadata: Metadata = {
  title: "Crawl Websites for RAG Pipelines | Reader",
  description:
    "Use Reader to scrape and crawl websites into clean Markdown, metadata, and source linked content for RAG pipelines, AI search, and knowledge ingestion.",
  alternates: { canonical: "https://reader.dev/solutions/rag-pipelines" },
  openGraph: {
    title: "Crawl Websites for RAG Pipelines | Reader",
    description:
      "Use Reader to scrape and crawl websites into clean Markdown, metadata, and source linked content for RAG pipelines, AI search, and knowledge ingestion.",
    url: "https://reader.dev/solutions/rag-pipelines",
    type: "website",
  },
};

export default function RagPipelinesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <RagPipelinesContent />
      </main>
      <Footer />
    </>
  );
}
