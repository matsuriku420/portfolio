import { inter } from "@/app/layout";
import { profileProps, rikuPhotoProps, RImage } from "@/datas/imageComponents";
import { myProfile } from "@/datas/profileDatas";
import React from "react";

export const ProfileCard: React.FC<{ className?: string }> = (props) => {
  const nameTextClassBase = `${inter.className} font-extrabold text-tertiary sm:text-text-main`;
  return (
    <div
      className={`flex flex-col sm:gap-9 size-fit items-center ${props.className}`}
    >
      <RImage
        data={profileProps}
        className="scale-75 sm:scale-100 bg-text-sub"
      />
      <div className="flex flex-col sm:flex-row h-fit sm:gap-9">
        <div className="flex flex-col items-center">
          <p className={`text-text-sub ${inter.className} font-semibold`}>
            {myProfile.comment}
          </p>
          <div className="size-[143px]">
            <RImage data={rikuPhotoProps} className="rounded-full" />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start mx-10">
          <div className="flex flex-col sm:flex-row sm:gap-3 items-center sm:items-end p-2 h-fit w-fit sm:pr-20 sm:bg-tertiary">
            <p className={`text-2xl sm:text-4xl ${nameTextClassBase}`}>
              {myProfile.name}
            </p>
            <p className={`text-xs sm:text-base ${nameTextClassBase}`}>
              {myProfile.ruby}
            </p>
          </div>
          <div className="size-fit p-3">
            <p
              className={`${inter.className} text-text-sub font-semibold text-[15px] sm:text-[20px] leading-4 sm:leading-5 whitespace-pre-wrap`}
            >
              {myProfile.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
