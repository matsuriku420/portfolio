"use client";
import React, { useState } from "react";

export const Footer: React.FC = () => {
  const [scrollButtonPointerMount, setSBPM] = useState(false);
  return (
    <div className="w-full pt-28">
      <div className="flex flex-col items-center w-full h-fit">
        <div
          className={`transition-all ${
            scrollButtonPointerMount ? "-translate-y-2" : ""
          }`}
        >
          <button
            className={`w-40 h-20 rounded-t-3xl bg-tertiary   pb-10 -mb-10 font-semibold text-text-main text-xl`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onPointerEnter={() => setSBPM(true)}
            onPointerLeave={() => setSBPM(false)}
          >
            ▲
          </button>
        </div>
        <div className="relative w-full h-20 bg-tertiary">
          <small className="text-text-main absolute bottom-1 left-2">
            © 2025 Riku Matsufuji
          </small>
        </div>
      </div>
    </div>
  );
};
