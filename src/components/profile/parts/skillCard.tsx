import { BASE_PATH } from "@/datas/envVariables";
import Image from "next/image";

export type skillProps = {
  img?: string;
  imgSize?: number;
  label: string;
  star: number;
  starMax: number;
  text: string;
};

export const SkillCard: React.FC<{ data: skillProps }> = ({ data }) => {
  let stars = "";

  for (let i = 0; i < data.starMax; i++) {
    stars += i < data.star ? "★" : "☆";
  }

  const imagePath = `/images/${data.img}`;

  return (
    <div className="flex flex-row sm:flex-col gap-2 items-center h-fit -mb-6 sm:-mb-0">
      {data.img ? (
        <Image
          src={`${BASE_PATH}${imagePath}`}
          alt={data.img ?? ""}
          height={data.imgSize}
          width={data.imgSize}
          className="scale-75 sm:scale-100"
        />
      ) : (
        ""
      )}
      <div
        className={`flex ${
          data.img ? "flex-col sm:gap-2 sm:items-center" : "flex-row gap-6"
        } items-start`}
      >
        <div
          className={`flex flex-col items-start ${
            data.img ? "sm:items-center" : ""
          }`}
        >
          <p
            className={`  font-semibold text-3xl ${
              data.img ? "sm:text-4xl" : ""
            } text-text-main leading-7`}
          >
            {data.label}
          </p>
          <p
            className={` font-noto font-bold ${
              data.img ? "text-2xl sm:text-4xl" : "text-2xl"
            } text-text-main`}
          >
            {stars}
          </p>
        </div>
        <p
          className={`font-semibold text-xl text-text-main whitespace-pre-wrap ${
            data.img ? "sm:text-center" : ""
          }`}
        >
          {data.text}
        </p>
      </div>
    </div>
  );
};
