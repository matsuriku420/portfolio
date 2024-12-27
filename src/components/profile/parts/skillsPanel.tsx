import { inter } from "@/app/layout";
import React from "react";

export const SkillsPanel: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={`relative flex flex-col ${props.className} w-full h-fit bg-tertiary rounded-[32px]`}
    >
      <div className="flex flex-row">
        <div className="w-5 h-[72px] bg-primary ml-8 -mt-3" />
        <p
          className={`${inter.className} font-extrabold text-4xl text-secondary h-fit mt-auto ml-4`}
        >
          Skills
        </p>
      </div>
      <div className="flex flex-row gap-[200px] mx-auto mb-11">
        <div className="size-[180px] bg-primary" />
        <div className="size-[180px] bg-primary" />
      </div>
    </div>
  );
};
