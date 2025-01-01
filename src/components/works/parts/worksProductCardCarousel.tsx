"use client";

import { WorksProps } from "@/datas/worksDatas";
import React, { useState } from "react";
import { ProductCard } from "./worksProductCard";

type props = {
  works: WorksProps[];
  className?: string;
};

export const ProductCardCarousel: React.FC<props> = (props) => {
  const [page, SetPageCount] = useState(0);
  const buttonClassName = "size-20 bg-secondary";
  const buttonDisableClassName = "opacity-50 pointer-events-none";

  return (
    <div
      className={`flex flex-col gap-5 items-center px-3 w-full overflow-hidden h-fit ${props.className}`}
    >
      <div className="grid grid-cols-1 grid-rows-1 w-full max-w-[900px] h-fit overflow-visible">
        {props.works.map((work, index) => (
          <div
            key={index}
            className={`size-full transition-all duration-300 ${
              index != page ? "scale-75 pointer-events-none opacity-70" : ""
            }`}
            style={{
              translate: `${100 * (index - page)}%`,
              gridColumnStart: 1,
              gridRowStart: 1,
            }}
          >
            <ProductCard data={work} className="mx-auto" />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-8">
        <button
          onClick={() => SetPageCount((old) => old - 1)}
          className={page <= 0 ? buttonDisableClassName : ""}
        >
          <div className={buttonClassName} />
        </button>
        <button
          onClick={() => SetPageCount((old) => old + 1)}
          className={
            page >= props.works.length - 1 ? buttonDisableClassName : ""
          }
        >
          <div className={buttonClassName} />
        </button>
      </div>
    </div>
  );
};
