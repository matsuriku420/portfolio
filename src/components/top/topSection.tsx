import { inter, limeLight } from "@/app/layout";
import React from "react";
import { TopLinkButton } from "./parts/topLinkButton";

export const TopSection: React.FC = () => {
  return (
    <div className="h-fit w-full">
      <div className="flex flex-col max-w-fit mx-auto px-2 lg:ml-[120px] pt-[232px]">
        <p
          className={`${limeLight.className} text-text-main text-[12vw] md:text-8xl mr-[120px] leading-[12vw] md:leading-[112px] whitespace-pre-wrap`}
        >
          {`Riku's\nPortfolioSite`}
        </p>
        <div className="h-[1px] bg-text-main w-full mb-[5px]" />
        <p
          className={`${inter.className} text-text-main font-medium text-[4vw] md:text-[32px] md:leading-[37px]`}
        >
          松藤利空ポートフォリオサイト
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-[30px]">
          <TopLinkButton
            label="仮置き(成果物DLページ予定)"
            url="https://twitter.com/"
            className="bg-quaternary text-text-main"
          />
          <TopLinkButton
            label="仮置き(シアターページ予定)"
            url="https://youtube.com/"
            className="bg-secondary text-text-third"
          />
        </div>
      </div>
    </div>
  );
};
