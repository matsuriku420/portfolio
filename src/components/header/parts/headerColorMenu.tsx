import { inter } from "@/app/layout";
import React from "react";

export const HeaderMenu: React.FC<{ open: boolean }> = ({ open }) => {
  const palettes: string[] = ["default", "fluffy", "cafe"];

  const SetPalette = (palette: string) => {
    const root = document.documentElement;
    root.className = "";
    if (palette != "default") root.classList.add(palette);
  };

  return (
    <div className="size-fit">
      <div
        className={`bg-tertiary w-fit h-fit pb-12 sm:pb-24 rounded-3xl border-secondary border-4 ${
          open ? "translate-y-0" : "-translate-y-[120%]"
        } transition-all duration-700 ease-in-out`}
      >
        <div className="flex flex-col gap-3 sm:gap-5 p-5">
          {palettes.map((palette, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-3 sm:gap-5"
            >
              <div className="hover:-rotate-45 transition-all duration-300">
                <button
                  onClick={() => SetPalette(palette)}
                  className="size-9 sm:size-9 bg-background border-4 border-secondary rounded-lg"
                />
              </div>
              <p
                className={`text-text-main font-semibold text-xl sm:text-2xl ${inter.className} hover:translate-y-1 transition-all`}
                onClick={() => SetPalette(palette)}
              >
                {palette}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
