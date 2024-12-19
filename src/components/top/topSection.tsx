import { inter, limeLight } from "@/app/layout";
import React from "react";

export const TopSection: React.FC = () => {
  return (
    <div className="bg-primary h-fit w-full">
      <div className="flex flex-col max-w-fit mx-auto px-2 lg:ml-[185px] pt-[232px]">
        <p
          className={`${limeLight.className} text-text-main text-7xl md:text-8xl mr-[120px] leading-[70px] md:leading-[112px] whitespace-pre-wrap`}
        >
          {`Riku's\nPortfolioSite`}
        </p>
        <div className="h-[1px] bg-text-main w-full mb-[5px]" />
        <p
          className={`${inter.className} text-text-main font-medium text-2xl md:text-[32px] leading-[37px]`}
        >
          松藤利空ポートフォリオサイト
        </p>
      </div>
    </div>
  );
};
