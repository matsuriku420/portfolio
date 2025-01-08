import React from "react";
import { TopLinkButton } from "./parts/topLinkButton";

export const TopSection: React.FC = () => {
  return (
    <div className="h-fit w-full">
      <div className="flex flex-col max-w-fit mx-auto px-2 lg:ml-[120px] pt-[232px]">
        <p
          className={`font-limeLight  text-text-main text-[12vw] md:text-8xl mr-[120px] leading-[12vw] md:leading-[112px] whitespace-pre-wrap`}
        >
          {`Riku's\nPortfolioSite`}
        </p>
        <div className="h-[1px] bg-text-main w-full mb-[5px]" />
        <p
          className={`  text-text-main font-medium text-[4vw] md:text-[32px] md:leading-[37px]`}
        >
          松藤利空ポートフォリオサイト
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-[30px]">
          <TopLinkButton
            label="グループのTwitter(鍵付き)"
            url="https://twitter.com/sabacansoldier"
            className="bg-quaternary text-text-main"
          />
          <TopLinkButton
            label="過去制作動画リスト(YouTube)"
            url="https://youtube.com/playlist?list=PLuXTcyTYMSGRkn_xOQ88NFOFYczLQH3VO&si=FkBoVihk1gQCFhsE"
            className="bg-secondary text-text-third"
          />
        </div>
      </div>
    </div>
  );
};
