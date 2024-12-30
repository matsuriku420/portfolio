import React from "react";
import { SkillCard } from "./skillCard";
import { inter } from "@/app/layout";

export const OtherSkillsPanel: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={`${props.className} size-fit`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-5 px-6 place-items-start">
        <Label text="Programming" />
        <SkillCard
          label="Unity"
          star={4}
          starMax={5}
          text={`複数のゲームを作成\n2dゲームが得意`}
        />
        <SkillCard
          label="TypeScript"
          star={2}
          starMax={5}
          text={`インターンで習得\nReactと共に使用`}
        />
        <SkillCard
          label="MAUI"
          star={2}
          starMax={5}
          text={`授業の制作課題で使用\n不便な点が多く挫折`}
        />
        <SkillCard
          label="ReactNative"
          star={1}
          starMax={5}
          text={`インターン後に挑戦\n一旦休止中`}
        />
        <SkillCard
          label="Python"
          star={1}
          starMax={5}
          text={`授業で使用\n基礎ならわかる`}
        />
        <Label text="Tools" />
        <SkillCard
          label="Github"
          star={2}
          starMax={5}
          text={`CUIでの利用は苦手\nGUIアプリを利用`}
        />
        <SkillCard
          label="Notion"
          star={1}
          starMax={5}
          text={`卒業研究で利用中\n現状テキストのみ`}
        />
        <SkillCard
          label="Figma"
          star={1}
          starMax={5}
          text={`現状は見る専\n作れるようになりたい`}
        />
        <SkillCard
          label="VSCode"
          star={2}
          starMax={5}
          text={`雰囲気で使っている\nUnityではVisualStudio`}
        />
        <Label text="Others" />
        <SkillCard
          label="AviUtl"
          star={3}
          starMax={5}
          text={`趣味で動画制作\n画像作成にも便利`}
        />
        <SkillCard
          label="YMM4"
          star={3}
          starMax={5}
          text={`最近は動画制作はこっち\n色々と便利`}
        />
      </div>
    </div>
  );
};

const Label: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p
      className={`col-span-full -ml-6 -mb-8 sm:mb-0 sm:mt-5 text-3xl ${inter.className} font-bold text-secondary`}
    >
      {text}
    </p>
  );
};
