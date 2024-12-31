import React from "react";
import { ProfileCard } from "./parts/profileCard";
import { SkillsPanel } from "./parts/skillsPanel";
import { cloudTopProps, RImage } from "@/datas/imageComponents";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-transparent w-full h-fit">
      <RImage data={cloudTopProps} className="w-full row-span-3" />
      <div className="flex flex-col items-center bg-white w-full h-fit">
        <div className="w-fit h-fit px-5">
          <ProfileCard className="mt-3 md:mt-0" />
          <SkillsPanel className="mt-[52px]" />
        </div>
      </div>
    </div>
  );
};
