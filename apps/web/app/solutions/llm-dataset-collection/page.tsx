import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LlmDatasetCollectionContent } from "./content";

export const metadata: Metadata = {
  title: "Web Data Collection for LLM Datasets | Reader",
  description:
    "Use Reader to collect clean Markdown from public web pages for LLM evaluation datasets, fine tuning preparation, research corpora, and AI data workflows.",
  alternates: {
    canonical: "https://reader.dev/solutions/llm-dataset-collection",
  },
  openGraph: {
    title: "Web Data Collection for LLM Datasets | Reader",
    description:
      "Use Reader to collect clean Markdown from public web pages for LLM evaluation datasets, fine tuning preparation, research corpora, and AI data workflows.",
    url: "https://reader.dev/solutions/llm-dataset-collection",
    type: "website",
  },
};

export default function LlmDatasetCollectionPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LlmDatasetCollectionContent />
      </main>
      <Footer />
    </>
  );
}
