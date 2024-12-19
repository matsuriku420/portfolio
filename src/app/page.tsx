import { NewsSection } from "@/components/news/newsSection";
import { TopSection } from "@/components/top/topSection";

export default function Home() {
  return (
    <div className="bg-secondary">
      <TopSection />
      <NewsSection />
    </div>
  );
}
