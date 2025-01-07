"use client";

import { inter, limeLight } from "@/app/layout";

export type IndexItemProp = {
  label: string;
  divRef: React.RefObject<HTMLDivElement | null>;
};

export const Header: React.FC<{ indexes: IndexItemProp[] }> = ({ indexes }) => {
  return (
    <div className="w-full h-fit bg-tertiary flex flex-row gap-4 sm:gap-8 lg:gap-12 items-center pl-5">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${limeLight.className} font-semibold text-5xl text-text-main hover:scale-125 hover:rotate-[370deg] transition-all duration-150`}
      >
        R
      </button>
      <div className="w-full h-fit bg-tertiary flex flex-row gap-4 sm:gap-6 lg:gap-12 items-center pl-5 py-3">
        {indexes.map((data, index) => (
          <button
            key={index}
            className={`${inter.className} font-semibold text-xl sm:text-2xl md:text-4xl text-text-main hover:translate-y-[10%] transition-all duration-100`}
            onClick={() => {
              data.divRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {data.label}
          </button>
        ))}
      </div>
    </div>
  );
};
