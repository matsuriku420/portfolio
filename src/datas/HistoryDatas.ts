import { RImageDatas } from "./imageComponents";

type HistoryProps = {
  time: string;
  attribute: "big" | "mid" | "small";
  label: string;
  img?: RImageDatas;
};

export const rikuHistories: HistoryProps[] = [
  { time: "2005年", attribute: "big", label: "この世に生を受ける" },
  {
    time: "幼稚園児",
    attribute: "small",
    label: `遊びの開拓や工作、お絵描き帳に某配管工ゲームのステージを書くなど\n幼稚園でお菓子箱のゴミを自由に使えたので楽園だった`,
  },
  { time: "中学生", attribute: "mid", label: "Scratchでゲーム作りに触れる" },
  {
    time: "2021",
    attribute: "big",
    label: "高専入学、Unityとの出会いを果たす",
  },
  {
    time: "高専１年",
    attribute: "mid",
    label: `Unityにて初のオリジナルゲーム制作\nスタートは2Dの弾幕対戦ゲームとなった`,
  },
  {
    time: "高専２年",
    attribute: "mid",
    label: `相方を含む３人と共に現在のチーム結成\n当初はストーリー軸アクションゲームを作ろうとしていた`,
  },
  {
    time: "2022年秋",
    attribute: "big",
    label: `グループ初のゲーム制作、高専祭のプロコンにBlock/Breakerで参加\nコンテスト運営陣を中心に好評を得た`,
  },
  {
    time: "2023年秋",
    attribute: "mid",
    label: `高専祭にてクラス企画であるウマ漢の動画編集班員として参加\n\nセツナスラッシュで学内プロコンにて最優秀賞、一般投票１位両受賞`,
  },
  {
    time: "2024年春",
    attribute: "small",
    label: `授業のグループ制作にて.NET MAUIに触れる\nあまりに使いづらくUIが理想から遠いものになった`,
  },
  {
    time: "2024年夏",
    attribute: "mid",
    label: `インターンシップにてReactに触れる\n過去に触れたどのフレームワークよりもUIが作成しやすく軽く感動を覚える`,
  },
  {
    time: "2024年末",
    attribute: "small",
    label: "このポートフォリオサイトをReactで制作開始",
  },
];
