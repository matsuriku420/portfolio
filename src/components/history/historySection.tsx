import { inter } from "@/app/layout";
import { historyProps, RImage } from "@/datas/imageComponents";
import React, { Ref } from "react";
import { Timeline } from "./parts/historyTimeline";

export const HistorySection: React.FC<{ scrollRef?: Ref<HTMLDivElement> }> = ({
  scrollRef,
}) => {
  return (
    <div className="flex flex-col items-center gap-6 mt-[100px]">
      <div className="flex flex-col items-center gap-6">
        <div ref={scrollRef} className="-translate-y-16" />
        <RImage data={historyProps} scale={0.5} />
        <p
          className={`${inter.className} font-semibold text-[32px] text-text-main`}
        >
          これまでの経歴を紹介
        </p>
      </div>
      <Timeline />
    </div>
  );
};
