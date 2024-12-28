import { inter, notoSansJP } from "@/app/layout";
import Image from "next/image";
import React from "react";

type skillProps = {
  img: string;
  imgSize: number;
  label: string;
  star: number;
  starMax: number;
  text: string;
};

export const SkillCard: React.FC<skillProps> = (props) => {
  let stars = "";

  for (let i = 0; i < props.starMax; i++) {
    stars += i < props.star ? "★" : "☆";
  }

  const imagePath = `/images/${props.img}`;

  return (
    <div className="flex flex-row sm:flex-col gap-2 items-center size-fit -mb-6 sm:-mb-0">
      <Image
        src={imagePath}
        alt={props.img}
        height={props.imgSize}
        width={props.imgSize}
        className="scale-75 sm:scale-100"
      />
      <div className="flex flex-col gap-2 items-start sm:items-center">
        <p
          className={`${inter.className} font-semibold text-4xl text-secondary`}
        >
          {props.label}
        </p>
        <p
          className={`${notoSansJP.className} font-bold text-3xl sm:text-4xl text-secondary`}
        >
          {stars}
        </p>
        <p
          className={`${inter.className} font-semibold text-xl text-secondary`}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
};
