import { inter, notoSansJP } from "@/app/layout";
import Image from "next/image";

type skillProps = {
  img?: string;
  imgSize?: number;
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
    <div className="flex flex-row sm:flex-col gap-2 items-center h-fit -mb-6 sm:-mb-0">
      {props.img ? (
        <Image
          src={imagePath}
          alt={props.img ?? ""}
          height={props.imgSize}
          width={props.imgSize}
          className="scale-75 sm:scale-100"
        />
      ) : (
        ""
      )}
      <div
        className={`flex ${
          props.img ? "flex-col sm:gap-2 sm:items-center" : "flex-row gap-6"
        } items-start`}
      >
        <div
          className={`flex flex-col items-start ${
            props.img ? "sm:items-center" : ""
          }`}
        >
          <p
            className={`${inter.className} font-semibold text-3xl ${
              props.img ? "sm:text-4xl" : ""
            } text-secondary leading-7`}
          >
            {props.label}
          </p>
          <p
            className={`${notoSansJP.className} font-bold ${
              props.img ? "text-2xl sm:text-4xl" : "text-2xl"
            } text-secondary`}
          >
            {stars}
          </p>
        </div>
        <p
          className={`${
            inter.className
          } font-semibold text-xl text-secondary whitespace-pre-wrap ${
            props.img ? "sm:text-center" : ""
          }`}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
};
