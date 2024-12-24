import { ProfileSection } from "@/components/profile/profileSection";
import { TopSection } from "@/components/top/topSection";

export default function Home() {
  return (
    <div className="bg-secondary">
      <TopSection />
      <ProfileSection />
    </div>
  );
}
