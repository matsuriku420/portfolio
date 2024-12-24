import Image from "next/image";
import React from "react";
import { ProfileCard } from "./parts/profileCard";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-300 w-full h-fit">
      <Image
        src={"/images/cloudTop.png"}
        alt="cloud"
        width={1440}
        height={230}
        className="w-full"
      />
      <ProfileCard />
    </div>
  );
};
