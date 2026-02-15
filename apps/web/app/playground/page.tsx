import { Playground } from "@/components/playground/playground";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Playground - Reader",
  description: "Try Reader in your browser. Scrape any URL and see the results.",
};

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pt-16 max-w-6xl mx-auto w-full flex flex-col">
        <Playground />
      </div>
      <Footer />
    </div>
  );
}
