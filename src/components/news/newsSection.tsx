import Image from "next/image";
import React from "react";

export const NewsSection: React.FC = () => {
  return (
    <div className="bg-primary w-full h-fit">
      <Image
        src={"/images/cloud.png"}
        alt="cloud"
        width={1440}
        height={720}
        className="w-full"
      />
    </div>
  );
};
