import React from "react";
import { SkillCard } from "./skillCard";

import {
  programmingSkills,
  toolSkills,
  othersSkills,
} from "@/datas/skillProps";

export const OtherSkillsPanel: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={`${props.className} size-fit`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-5 px-6 place-items-start">
        <Label text="Programming" />
        {programmingSkills.map((skill, index) => (
          <SkillCard data={skill} key={index} />
        ))}
        <Label text="Tools" />
        {toolSkills.map((skill, index) => (
          <SkillCard data={skill} key={index} />
        ))}
        <Label text="Others" />
        {othersSkills.map((skill, index) => (
          <SkillCard data={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

const Label: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p
      className={`col-span-full -ml-6 -mb-8 sm:mb-0 sm:mt-5 text-3xl   font-bold text-text-main`}
    >
      {text}
    </p>
  );
};
