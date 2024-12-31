import { skillProps } from "@/components/profile/parts/skillCard";

const defStarMax: number = 5;
const defIconSize: number = 180;

//main
const csharpSkill: skillProps = {
  img: "csharp.png",
  imgSize: defIconSize,
  label: "C#",
  star: 4,
  starMax: defStarMax,
  text: "Unityは相棒",
};
const reactSkill: skillProps = {
  img: "react.png",
  imgSize: defIconSize,
  label: "React",
  star: 2,
  starMax: defStarMax,
  text: `インターンで習得\nこのサイトもReactで制作`,
};

//programming
const unitySkill: skillProps = {
  label: "Unity",
  star: 4,
  starMax: defStarMax,
  text: `複数のゲームを作成\n2dゲームが得意`,
};
const typeScriptSkill: skillProps = {
  label: "TypeScript",
  star: 2,
  starMax: defStarMax,
  text: `インターンで習得\nReactと共に使用`,
};
const mauiSkill: skillProps = {
  label: "MAUI",
  star: 2,
  starMax: defStarMax,
  text: `授業の制作課題で使用\n不便な点が多く挫折`,
};
const reactNativeSkill: skillProps = {
  label: "ReactNative",
  star: 1,
  starMax: defStarMax,
  text: `インターン後に挑戦\n一旦休止中`,
};
const pythonSkill: skillProps = {
  label: "Python",
  star: 1,
  starMax: defStarMax,
  text: `授業で使用\n基礎ならわかる`,
};

//tool
const githubSkill: skillProps = {
  label: "Github",
  star: 2,
  starMax: defStarMax,
  text: `CUIでの利用は苦手\nGUIアプリを利用`,
};
const notionSkill: skillProps = {
  label: "Notion",
  star: 1,
  starMax: defStarMax,
  text: `卒業研究で利用中\n現状テキストのみ`,
};
const figmaSkill: skillProps = {
  label: "Figma",
  star: 1,
  starMax: defStarMax,
  text: `現状は見る専\n作れるようになりたい`,
};
const vsCodeSkill: skillProps = {
  label: "VSCode",
  star: 2,
  starMax: defStarMax,
  text: `雰囲気で使っている\nUnityではVisualStudio`,
};

//others
const aviUtlSkill: skillProps = {
  label: "AviUtl",
  star: 3,
  starMax: defStarMax,
  text: `趣味で動画制作\n画像作成にも便利`,
};
const ymm4Skill: skillProps = {
  label: "YMM4",
  star: 3,
  starMax: defStarMax,
  text: `最近は動画制作はこっち\n色々と便利`,
};

export const mainSkills = [csharpSkill, reactSkill];
export const programmingSkills = [
  unitySkill,
  typeScriptSkill,
  mauiSkill,
  reactNativeSkill,
  pythonSkill,
];
export const toolSkills = [githubSkill, notionSkill, figmaSkill, vsCodeSkill];
export const othersSkills = [aviUtlSkill, ymm4Skill];
