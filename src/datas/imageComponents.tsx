import Image from "next/image";
import React from "react";
import { basePath } from "../../next.config";
const BASE_PATH = basePath ?? "";

export type RImageDatas = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

export const RImage: React.FC<{
  data?: RImageDatas;
  scale?: number;
  className?: string;
}> = ({ data, scale = 1, className }) => {
  if (!data) return;
  return (
    <Image
      src={`${BASE_PATH}${data.src}`}
      alt={data.alt}
      width={data.width * scale}
      height={data.height * scale}
      className={className}
    />
  );
};

export const cloudTopProps: RImageDatas = {
  src: "/images/cloudTop.png",
  alt: "cloudTop",
  height: 230,
  width: 1440,
};

export const profileProps: RImageDatas = {
  src: "/images/profile.png",
  alt: "profile",
  height: 62,
  width: 373,
};

export const rikuPhotoProps: RImageDatas = {
  src: "/images/rikuPhoto.png",
  alt: "写真",
  height: 143,
  width: 143,
};

export const cloudBottomProps: RImageDatas = {
  src: "/images/cloudBottom.png",
  alt: "cloudBottom",
  height: 230,
  width: 2880,
};

export const worksProps: RImageDatas = {
  src: "/images/works.png",
  alt: "works",
  height: 124,
  width: 706,
};

export const triangleProps: RImageDatas = {
  src: "/images/triangle.png",
  alt: "triangle",
  height: 172,
  width: 118,
};

export const historyProps: RImageDatas = {
  src: "/images/history.png",
  alt: "history",
  height: 112,
  width: 776,
};

//レイアウトがうまくいかず未使用
// export const hitsumabushiProps: RImageDatas = {
//   src: "/images/hitsumabushi.png",
//   alt: "hitsumabushi",
//   height: 1080,
//   width: 1920,
// };
