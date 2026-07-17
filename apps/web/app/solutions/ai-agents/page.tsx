import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AiAgentsContent } from "./content";

export const metadata: Metadata = {
  title: "Web Context API for AI Agents | Reader",
  description:
    "Give AI agents reliable web context with scraping, crawling, structured extraction, browser sessions, clean Markdown, and developer friendly APIs.",
  alternates: { canonical: "https://reader.dev/solutions/ai-agents" },
  openGraph: {
    title: "Web Context API for AI Agents | Reader",
    description:
      "Give AI agents reliable web context with scraping, crawling, structured extraction, browser sessions, clean Markdown, and developer friendly APIs.",
    url: "https://reader.dev/solutions/ai-agents",
    type: "website",
  },
};

export default function AiAgentsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AiAgentsContent />
      </main>
      <Footer />
    </>
  );
}
