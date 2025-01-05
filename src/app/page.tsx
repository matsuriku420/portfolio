import { HistorySection } from "@/components/history/historySection";
import { ProfileSection } from "@/components/profile/profileSection";
import { TopSection } from "@/components/top/topSection";
import { WorksSection } from "@/components/works/worksSection";

export default function Home() {
  return (
    <div className="bg-background">
      <TopSection />
      <ProfileSection />
      <WorksSection />
      <HistorySection />
    </div>
  );
}
