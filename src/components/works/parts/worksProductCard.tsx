import { inter } from "@/app/layout";
import { TopLinkButton } from "@/components/top/parts/topLinkButton";
import { WorksProps } from "@/datas/worksDatas";
import React from "react";

export const ProductCard = React.forwardRef(
  (
    props: {
      data: WorksProps;
      className?: string;
    },
    videoRef: React.Ref<HTMLVideoElement>
  ) => {
    const { data, className } = props;

    const textClassBase = `${inter.className} text-secondary font-semibold`;

    return (
      <div className={`${className} size-full`}>
        <div className="flex flex-col gap-3 w-full max-w-[900px] lg:w-[900px] h-fit max-h-[750px] lg:h-[550px] items-center lg:items-start">
          <div className="flex flex-col gap-1 size-fit">
            <p className={`${textClassBase} text-3xl lg:text-4xl mr-8`}>
              {data.title}
            </p>
            <div className="h-1 w-full rounded-full bg-secondary" />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-start w-full">
            <p
              className={`${textClassBase} lg:mt-8 text-xl text-center lg:text-start leading-5 whitespace-pre-wrap`}
            >
              {data.description}
            </p>
            <div className="lg:ml-auto">
              <div className="grid grid-cols-1 grid-rows-1 aspect-video w-[64vw] max-w-[450px] mb-1 mt-2">
                <video
                  src={data.video_path}
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className="size-full col-start-1 row-start-1 rounded-xl p-1"
                />
                <div className="size-full col-start-1 row-start-1 rounded-xl border-8 border-secondary" />
              </div>
              <p
                className={`${inter.className} text-secondary text-xl font-semibold`}
              >
                {`使用スキル： ${data.skills}`}
              </p>
              <div className="h-1 w-full rounded-full bg-secondary" />
            </div>
          </div>
          {data.pv_url ? (
            <TopLinkButton
              label="PVはこちら"
              url={data.pv_url ?? ""}
              className="bg-secondary text-black"
            />
          ) : (
            <div className="h-[70px]" />
          )}
          <div className="h-1 w-full rounded-full bg-secondary" />
          <p
            className={`${textClassBase} text-lg leading-5 whitespace-pre-wrap`}
          >
            {data.comment}
          </p>
        </div>
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard";
