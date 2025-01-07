"use client";

import { inter, limeLight } from "@/app/layout";
import { HeaderMenu } from "./parts/headerColorMenu";
import { useState } from "react";

export type IndexItemProp = {
  label: string;
  divRef: React.RefObject<HTMLDivElement | null>;
};

export const Header: React.FC<{ indexes: IndexItemProp[] }> = ({ indexes }) => {
  const [menuOpen, SetMenuOpen] = useState(false);
  return (
    <div>
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
        <button
          className={`size-fit mr-3 sm:mr-5 flex flex-col hover:gap-3 ${
            menuOpen
              ? "rotate-90 scale-x-75 gap-2 sm:gap-4 hover:gap-3"
              : "hover:scale-x-75 gap-2"
          } transition-all duration-[350ms]`}
          onClick={() => SetMenuOpen((current) => !current)}
        >
          {[1, 1, 1].map((_, index) => (
            <div key={index} className="h-1 w-8 sm:w-12 bg-text-main" />
          ))}
        </button>
      </div>
      <div className="relative">
        <div className="absolute right-3 bottom-1 -z-10">
          <HeaderMenu open={menuOpen} />
        </div>
      </div>
    </div>
  );
};
