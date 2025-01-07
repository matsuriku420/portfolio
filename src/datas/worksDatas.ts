export type WorksProps = {
  title: string;
  description: string;
  skills: string;
  pv_url: string;
  video_url: string;
  comment: string;
};

const bbProps: WorksProps = {
  title: "Block/Breaker",
  description: `チーム開発１作目\n
2022学内コンテスト入賞\n
ありそうで無かった「対戦型ブロック崩し」\n
シンプルな操作性や意外と深い戦略性で\n
個人的にもかなり気に入っている
`,
  skills: "Unity, C#",
  pv_url: "",
  video_url: "",
  comment: `人生初の本格的なゲームの製作にも関わらず納期わずか3ヶ月だったが、なんとか形にすることができた。\n
プログラミング以外にも機体デザイン(1つ)や性能考察(複数体)にも参加。`,
};

const ssProps: WorksProps = {
  title: "セツナスラッシュ",
  description: `チーム開発２作目\n
2023学内コンテスト入賞\n
文字通り道を「斬り拓く」アクションパズル\n
ステージを切断し物理を利用して地形を変える\n
2Dメッシュの分割システムは自信の源
`,
  skills: "Unity, C#",
  pv_url: "",
  video_url: "",
  comment: `奇抜なコンセプト故にゲーム初心者には難しい出来となってしまったが、斬るだけでも楽しい良作。
ステージを全て制作してくれる相方の頑張りに応えられるよう奮闘した。`,
};

const rrlProps: WorksProps = {
  title: "リク式アプリランチャー",
  description: `2022年に授業の自由制作課題で個人製作\n
exeファイル等を登録できるランチャーアプリ\n
タグ付けや説明文など欲しい機能を詰め込んだ\n
csvファイルを扱ったのはこれが初めて\n
今でもスタートアップに登録して使っている
`,
  skills: "VisualStudio, C#",
  pv_url: "",
  video_url: "",
  comment: `VisualStudioを用いC#で制作したが自分との相性が悪いのか作業しづらかった。
バグも残っているのでいつかReactNativeやMAUIなどでリメイクしてみたい。`,
};

const htProps: WorksProps = {
  title: "ひつまぶし",
  description: `Unityでの初制作ゲーム\n
ストレートと拡散のみの2P対戦弾幕ゲーム\n
クリスタルを拾うことで無敵バリア獲得\n
バグが多いうえにUIもバランスも酷いが\n
Unity人生の始まりとしていい思い出である
`,
  skills: "Unity, C#",
  pv_url: "",
  video_url: "",
  comment: `タイトルの「ひつまぶし」は「ひまつぶし」をもじったもの。
シリーズものとして第2弾も作ろうとしたが挫折した。`,
};

const poezoProps: WorksProps = {
  title: "POEZO",
  description: `ステージ制作可能な2Dアクションとして作った\n
タイルマップを初めてかつ最後に触った作品\n
左上のボタンでブロック操作モード切替\n
ドット絵を描いたのもこれが初めてで\n
初にしては上手くできただろうと思っている
`,
  skills: "Unity, C#",
  pv_url: "",
  video_url: "",
  comment: `POEZOとはプレイアブルキャラクターでもある青い豆みたいな生物の名前。
母に命名してもらった。`,
};

export const myWorks: WorksProps[] = [
  bbProps,
  ssProps,
  rrlProps,
  htProps,
  poezoProps,
];
