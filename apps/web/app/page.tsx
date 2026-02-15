import { Hero } from "@/components/home/hero";
import { CodeExample } from "@/components/home/code-example";
import { Features } from "@/components/home/features";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <CodeExample />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
