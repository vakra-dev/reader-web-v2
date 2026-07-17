import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ExtractContent } from "./content";

export const metadata: Metadata = {
  title: "Structured Data Extraction API for AI Agents | Reader",
  description:
    "Extract structured JSON from web pages using schemas, prompts, clean Markdown, and validated outputs for AI agents and web data workflows.",
  alternates: { canonical: "https://reader.dev/extract" },
  openGraph: {
    title: "Structured Data Extraction API for AI Agents | Reader",
    description:
      "Extract structured JSON from web pages using schemas, prompts, clean Markdown, and validated outputs for AI agents and web data workflows.",
    url: "https://reader.dev/extract",
    type: "website",
  },
};

export default function ExtractPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ExtractContent />
      </main>
      <Footer />
    </>
  );
}
