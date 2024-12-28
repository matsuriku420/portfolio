import { inter } from "@/app/layout";
import React from "react";
import { SkillCard } from "./skillCard";

export const SkillsPanel: React.FC<{ className?: string }> = (props) => {
  const skillIconSize = 180;

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
      <div className="flex flex-col sm:flex-row sm:gap-[100px] md:gap-[200px] sm:mx-auto mb-11 ">
        <SkillCard
          img="csharp.png"
          imgSize={skillIconSize}
          label="C#"
          star={4}
          starMax={5}
          text="Unityは相棒"
        />
        <SkillCard
          img="react.png"
          imgSize={skillIconSize}
          label="React"
          star={2}
          starMax={5}
          text="インターンで習得"
        />
      </div>
    </div>
  );
};
