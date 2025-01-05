import { inter } from "@/app/layout";
import { rikuHistories } from "@/datas/HistoryDatas";
import { RImage } from "@/datas/imageComponents";
import React from "react";

export const Timeline: React.FC = () => {
  const datas = rikuHistories;
  const GetSize = (attribute: string) => {
    switch (attribute) {
      case "big":
        return "size-14";
      case "mid":
        return "size-8";
      default:
        return 0;
    }
  };

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 grid-rows-1 mx-auto w-11/12 lg:w-4/5 h-fit">
        <div className="h-full row-start-1 col-start-1 z-0 flex flex-col gap-3 ml-[112px]">
          <div className="flex-grow w-2 rounded-full pt-1 mr-auto bg-secondary" />
          {[1, 1, 1].map((v, index) => (
            <div key={index} className="size-2 rounded-full bg-secondary" />
          ))}
        </div>
        <div className="flex flex-col gap-7 items-start pb-10 row-start-1 col-start-1 z-10">
          {datas.map((data, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <p
                className={`${inter.className} font-semibold text-secondary text-base w-20 text-end flex-shrink-0`}
              >
                {data.time}
              </p>
              <div
                className={`size-14 flex items-center justify-center flex-shrink-0`}
              >
                <div
                  className={`${GetSize(
                    data.attribute
                  )} rounded-full bg-background border-secondary border-8 ${
                    data.attribute == "small" ? "hidden" : ""
                  }`}
                />
              </div>
              <p
                className={`${inter.className} font-semibold text-lg sm:text-xl text-secondary whitespace-pre-wrap`}
              >
                {data.label}
              </p>
              <div
                className={`flex h-72 aspect-video ${data.img ? "" : "hidden"}`}
              >
                <RImage data={data.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
