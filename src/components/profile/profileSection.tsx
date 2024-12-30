import Image from "next/image";
import React from "react";
import { ProfileCard } from "./parts/profileCard";
import { SkillsPanel } from "./parts/skillsPanel";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-transparent w-full h-fit">
      <Image
        src={"/images/cloudTop.png"}
        alt="cloud"
        width={1440}
        height={230}
        className="w-full row-span-3"
      />
      <div className="flex flex-col items-center bg-white w-full h-fit">
        <div className="w-fit h-fit px-5">
          <ProfileCard className="mt-3 md:mt-0" />
          <SkillsPanel className="mt-[52px]" />
        </div>
      </div>
    </div>
  );
};
