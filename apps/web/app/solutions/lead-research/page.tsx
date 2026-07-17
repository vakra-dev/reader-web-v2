import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LeadResearchContent } from "./content";

export const metadata: Metadata = {
  title: "Lead Research Web Data API for AI Agents | Reader",
  description:
    "Use Reader to collect public company website context, extract structured business details, and power lead research workflows with clean Markdown and JSON.",
  alternates: { canonical: "https://reader.dev/solutions/lead-research" },
  openGraph: {
    title: "Lead Research Web Data API for AI Agents | Reader",
    description:
      "Use Reader to collect public company website context, extract structured business details, and power lead research workflows with clean Markdown and JSON.",
    url: "https://reader.dev/solutions/lead-research",
    type: "website",
  },
};

export default function LeadResearchPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LeadResearchContent />
      </main>
      <Footer />
    </>
  );
}
