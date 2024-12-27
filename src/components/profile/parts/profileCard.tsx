import { inter } from "@/app/layout";
import Image from "next/image";
import React from "react";

export const ProfileCard: React.FC<{ className?: string }> = (props) => {
  const nameTextClassBase = `${inter.className} font-extrabold text-tertiary sm:text-secondary`;
  const description = `和歌山高専電気情報工学科4年。\n
相方との2人で開発を行うことが多く、自分はプログラム全てを担当する。\n
2023年度学内コンテストにて最優秀賞を取得。\n
幼少期よりモノづくりが好きで、一生モノ作りする運命にあると思っている。`;
  return (
    <div
      className={`flex flex-col sm:gap-9 size-fit items-center ${props.className}`}
    >
      <Image
        src={"/images/profile.png"}
        alt="profile"
        width={373}
        height={62}
        className="scale-75 sm:scale-100"
      />
      <div className="flex flex-col sm:flex-row h-fit sm:gap-9">
        <div className="flex flex-col items-center">
          <p className={`text-primary ${inter.className} font-semibold`}>
            \Hello world!!/
          </p>
          <div className="size-[143px]">
            <Image
              src={"/images/rikuPhoto.png"}
              alt="写真"
              width={143}
              height={143}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex flex-col sm:flex-row sm:gap-3 items-center sm:items-end p-2 h-fit w-fit sm:pr-20 sm:bg-tertiary">
            <p className={`text-2xl sm:text-4xl ${nameTextClassBase}`}>
              松藤利空
            </p>
            <p className={`text-xs sm:text-base ${nameTextClassBase}`}>
              (まつふじりく)
            </p>
          </div>
          <div className="size-fit p-3">
            <p
              className={`${inter.className} text-text-sub font-semibold text-[15px] sm:text-[20px] leading-4 sm:leading-5 whitespace-pre-wrap`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
