import { inter } from "@/app/layout";
import { historyProps, RImage } from "@/datas/imageComponents";
import React from "react";
import { Timeline } from "./parts/historyTimeline";

export const HistorySection: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className="flex flex-col items-center gap-6">
        <RImage data={historyProps} scale={0.5} />
        <p
          className={`${inter.className} font-semibold text-[32px] text-secondary`}
        >
          これまでの経歴を紹介
        </p>
      </div>
      <Timeline />
    </div>
  );
};
