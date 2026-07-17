import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CompetitiveIntelligenceContent } from "./content";

export const metadata: Metadata = {
  title: "Competitive Intelligence Web Data API for AI Agents | Reader",
  description:
    "Collect clean website content from competitor pages for competitive intelligence workflows with Markdown, structured data, and snapshots.",
  alternates: {
    canonical: "https://reader.dev/solutions/competitive-intelligence",
  },
  openGraph: {
    title: "Competitive Intelligence Web Data API for AI Agents | Reader",
    description:
      "Collect clean website content from competitor pages for competitive intelligence workflows with Markdown, structured data, and snapshots.",
    url: "https://reader.dev/solutions/competitive-intelligence",
    type: "website",
  },
};

export default function CompetitiveIntelligencePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CompetitiveIntelligenceContent />
      </main>
      <Footer />
    </>
  );
}
