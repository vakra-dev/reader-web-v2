import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { WhoItsFor } from "@/components/home/who-its-for";
import { UseCaseTabs } from "@/components/home/use-case-tabs";
import { WhyReader } from "@/components/home/why-reader";
import { Ecosystem } from "@/components/home/ecosystem";
import { HowItWorks } from "@/components/home/how-it-works";
import { FAQ } from "@/components/home/faq";
import { BottomCTA } from "@/components/home/bottom-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <WhoItsFor />
        <UseCaseTabs />
        <WhyReader />
        <Ecosystem />
        <HowItWorks />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
