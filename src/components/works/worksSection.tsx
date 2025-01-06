import { inter } from "@/app/layout";
import { cloudBottomProps, RImage, worksProps } from "@/datas/imageComponents";
import React, { Ref } from "react";
import { ProductCardCarousel } from "./parts/worksProductCardCarousel";
import { myWorks } from "@/datas/worksDatas";

export const WorksSection: React.FC<{ scrollRef?: Ref<HTMLDivElement> }> = ({
  scrollRef,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:gap-6 bg-white items-center pt-[90px] w-full h-fit">
        <div ref={scrollRef} className="-translate-y-16" />
        <RImage data={worksProps} className="w-[350px]" />
        <p
          className={`${inter.className} text-2xl sm:text-[32px] font-semibold text-primary`}
        >
          高専４年間での制作物紹介
        </p>
      </div>
      <RImage data={cloudBottomProps} className="w-full" />
      <ProductCardCarousel works={myWorks} className="mx-auto" />
    </div>
  );
};
