"use client";

import { WorksProps } from "@/datas/worksDatas";
import React, { useState } from "react";
import { ProductCard } from "./worksProductCard";
import { RImage, triangleProps } from "@/datas/imageComponents";

type props = {
  works: WorksProps[];
  className?: string;
};

export const ProductCardCarousel: React.FC<props> = (props) => {
  const [page, SetPageCount] = useState(0);
  const transitionDuration = 300;
  const buttonClassName = "flex size-14 lg:size-fit transition-all";
  const buttonDisableClassName = "opacity-50 pointer-events-none";
  const buttonImageScale = 0.5;

  return (
    <div
      className={`flex flex-col gap-5 items-center px-3 w-full overflow-hidden h-fit ${props.className}`}
    >
      <div className="grid grid-cols-1 grid-rows-1 w-full max-w-[900px] h-fit overflow-visible">
        {props.works.map((work, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 grid-rows-1 size-full transition-all ${
              index != page ? "scale-75 opacity-70" : ""
            }`}
            style={{
              transitionDuration: `${transitionDuration}ms`,
              translate: `${100 * (index - page)}%`,
              gridColumnStart: 1,
              gridRowStart: 1,
            }}
          >
            <ProductCard
              data={work}
              className="mx-auto row-start-1 col-start-1 "
            />
            <button
              onClick={() => SetPageCount(index)}
              className={`row-start-1 col-start-1 size-full ${
                index != page ? " visible" : " hidden"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-12">
        <button
          onClick={() => SetPageCount((old) => old - 1)}
          className={`${buttonClassName} ${
            page <= 0 ? buttonDisableClassName : ""
          }`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
        >
          <RImage
            data={triangleProps}
            scale={buttonImageScale}
            className="rotate-180"
          />
        </button>
        <div className="flex flex-row gap-8 items-center h-fit">
          {props.works.map((value, index) => (
            <button
              key={index}
              onClick={() => SetPageCount(index)}
              className={`rounded-full bg-secondary transition-all ${
                index === page ? "size-8" : "size-5"
              }`}
              style={{ transitionDuration: `${transitionDuration}ms` }}
            />
          ))}
        </div>
        <button
          onClick={() => SetPageCount((old) => old + 1)}
          className={`${buttonClassName} ${
            page >= props.works.length - 1 ? buttonDisableClassName : ""
          }`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
        >
          <RImage data={triangleProps} scale={buttonImageScale} />
        </button>
      </div>
    </div>
  );
};
