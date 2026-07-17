import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OpenSourceContent } from "./content";

export const metadata: Metadata = {
  title: "Open Source Web Context API for AI Agents | Reader",
  description:
    "Explore Reader's open source approach to web context for AI agents, including clean Markdown, scraping, crawling, extraction, browser workflows, SDKs, CLI, and GitHub.",
  alternates: { canonical: "https://reader.dev/open-source" },
  openGraph: {
    title: "Open Source Web Context API for AI Agents | Reader",
    description:
      "Explore Reader's open source approach to web context for AI agents, including clean Markdown, scraping, crawling, extraction, browser workflows, SDKs, CLI, and GitHub.",
    url: "https://reader.dev/open-source",
    type: "website",
  },
};

export default function OpenSourcePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <OpenSourceContent />
      </main>
      <Footer />
    </>
  );
}
