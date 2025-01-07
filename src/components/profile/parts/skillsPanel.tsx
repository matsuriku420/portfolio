"use client";

import { inter } from "@/app/layout";
import React, { useState, useRef } from "react";
import { SkillCard } from "./skillCard";
import { OtherSkillsPanel } from "./otherSkillsPanel";
import { mainSkills } from "@/datas/skillProps";

export const SkillsPanel: React.FC<{ className?: string }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const otherSkillsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`relative flex flex-col ${props.className} w-full h-fit bg-tertiary rounded-[32px]`}
    >
      <div className="flex flex-row">
        <div className="w-5 h-[72px] bg-primary ml-8 -mt-3" />
        <p
          className={`${inter.className} font-extrabold text-4xl text-text-main h-fit mt-auto ml-4`}
        >
          Skills
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-[100px] md:gap-[200px] sm:mx-auto mb-11 ">
        {mainSkills.map((skill, index) => (
          <SkillCard data={skill} key={index} />
        ))}
      </div>
      <div className="relative w-full flex flex-row gap-2 items-center mb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row gap-2 items-center ml-8"
        >
          <p
            className={`text-text-main ${inter.className} font-medium text-2xl`}
          >
            Other Skills
          </p>
          <p
            className={`bg-secondary rounded-full text-tertiary size-6 text-base text-center ${
              isOpen ? "-rotate-90" : "rotate-0"
            } transition-all duration-300`}
          >
            ▼
          </p>
        </button>
        <div
          className={`flex-grow mr-6 rounded-full h-1 bg-secondary ${
            isOpen ? "max-w-full" : "max-w-0"
          } transition-all duration-300`}
        />
      </div>
      <div
        className="ml-8 sm:mx-auto transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isOpen
            ? `${otherSkillsRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <div ref={otherSkillsRef}>
          <OtherSkillsPanel className="pb-12" />
        </div>
      </div>
    </div>
  );
};
