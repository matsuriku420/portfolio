"use client";

import { Footer } from "@/components/footer/footerSection";
import { Header, IndexItemProp } from "@/components/header/headerSection";
import { HistorySection } from "@/components/history/historySection";
import { ProfileSection } from "@/components/profile/profileSection";
import { TopSection } from "@/components/top/topSection";
import { WorksSection } from "@/components/works/worksSection";
import { useRef } from "react";

export default function Home() {
  const profileRef = useRef(null);
  const worksRef = useRef(null);
  const historyRef = useRef(null);

  const indexArray: IndexItemProp[] = [
    { label: "PROFILE", divRef: profileRef },
    { label: "WORKS", divRef: worksRef },
    { label: "HISTORY", divRef: historyRef },
  ];

  return (
    <div className="bg-background">
      <div className="fixed top-0 w-full z-50">
        <Header indexes={indexArray} />
      </div>
      <TopSection />
      <ProfileSection scrollRef={profileRef} />
      <WorksSection scrollRef={worksRef} />
      <HistorySection scrollRef={historyRef} />
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
