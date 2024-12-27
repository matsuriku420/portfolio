import Image from "next/image";
import React from "react";
import { ProfileCard } from "./parts/profileCard";

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
      <div className="flex justify-center bg-white w-full h-fit px-3">
        <ProfileCard className="mt-3 md:mt-0" />
      </div>
    </div>
  );
};
