import { Card } from "../models/card.model";
import { SKILL } from "./skill.const";

export const cards: Card[] = [
  // Rank0カード
  {
    name: "ガドリングキャノン",
    type: "ゼリー",
    rank: 0,
    skills: [
      { lv: 1, name: SKILL.属性UP火, value: 1 },
      { lv: 1, name: SKILL.追撃火, value: 1 },
      { lv: 1, name: SKILL.瞬足, value: 2 },
      { lv: 1, name: SKILL.女神の微笑, value: 1 },
    ],
  },
  {
    name: "クリスタルゴーレム",
    type: "植物",
    rank: 0,
    skills: [
      { lv: 1, name: SKILL.属性UP水, value: 1 },
      { lv: 1, name: SKILL.追撃水, value: 1 },
      { lv: 1, name: SKILL.瞬足, value: 2 },
      { lv: 1, name: SKILL.女神の微笑, value: 1 },
    ],
  },
  {
    name: "グリフォン",
    type: "昆虫",
    rank: 0,
    skills: [
      { lv: 1, name: SKILL.属性UP風, value: 1 },
      { lv: 1, name: SKILL.追撃風, value: 1 },
      { lv: 1, name: SKILL.瞬足, value: 2 },
      { lv: 1, name: SKILL.女神の微笑, value: 1 },
    ],
  },
  {
    name: "オスウォム",
    type: "人形",
    rank: 0,
    skills: [
      { lv: 1, name: SKILL.属性UP土, value: 1 },
      { lv: 1, name: SKILL.追撃土, value: 1 },
      { lv: 1, name: SKILL.瞬足, value: 2 },
      { lv: 1, name: SKILL.女神の微笑, value: 1 },
    ],
  },
  {
    name: "フォックスフード",
    type: "動物",
    rank: 0,
    skills: [
      { lv: 1, name: SKILL.属性UP雷, value: 1 },
      { lv: 1, name: SKILL.追撃雷, value: 1 },
      { lv: 1, name: SKILL.瞬足, value: 2 },
      { lv: 1, name: SKILL.女神の微笑, value: 1 },
    ],
  },
  {
    name: "大和にゃでし子",
    type: "水",
    rank: 0,
    skills: [
      { lv: 1, name: SKILL.属性UP白, value: 1 },
      { lv: 1, name: SKILL.追撃白, value: 1 },
      { lv: 1, name: SKILL.瞬足, value: 2 },
      { lv: 1, name: SKILL.女神の微笑, value: 1 },
    ],
  },
  {
    name: "白拍死",
    type: "甲羅",
    rank: 0,
    skills: [
      { lv: 1, name: SKILL.属性UP黒, value: 1 },
      { lv: 1, name: SKILL.追撃黒, value: 1 },
      { lv: 1, name: SKILL.瞬足, value: 2 },
      { lv: 1, name: SKILL.女神の微笑, value: 1 },
    ],
  },
  // ゼリー
  {
    name: "ゼリッピ",
    type: "ゼリー",
    rank: 1,
    // Lv1/属性UP[土]-1
    // Lv2/HP回復+1
    // Lv3/属性UP[雷]+1
    skills: [
      { lv: 1, name: SKILL.属性UP土, value: -1 },
      { lv: 2, name: SKILL.HP回復, value: 1 },
      { lv: 3, name: SKILL.属性UP雷, value: 1 },
    ],
  },
  {
    name: "スリーピーマン",
    type: "植物",
    rank: 1,
    // Lv1/属性UP[火]-1
    // Lv2/属性UP[土]+1
    // Lv3/仁王立ち+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 2, value: 1, name: SKILL.属性UP土 },
      { lv: 3, value: 1, name: SKILL.仁王立ち },
    ],
  },
  {
    name: "トゥートゥー",
    type: "昆虫",
    rank: 1,
    // Lv2/MP回復+1
    // Lv3/初速+1
    // Lv4/経験値増加+1
    skills: [
      { lv: 2, value: 1, name: SKILL.MP回復 },
      { lv: 3, value: 1, name: SKILL.初速 },
      { lv: 4, value: 1, name: SKILL.経験値増加 },
    ],
  },
  {
    name: "テディ",
    type: "人形",
    rank: 1,
    // Lv2/観察+1
    // Lv3/HACK増加+1
    skills: [
      { lv: 2, value: 1, name: SKILL.観察 },
      { lv: 3, value: 1, name: SKILL.HACK増加 },
    ],
  },
  {
    name: "ミネ",
    type: "動物",
    rank: 1,
    // Lv2/HP吸収+1
    // Lv3/一心不乱+1
    skills: [
      { lv: 2, value: 1, name: SKILL.HP吸収 },
      { lv: 3, value: 1, name: SKILL.一心不乱 },
    ],
  },
  {
    name: "ハゼ",
    type: "水",
    rank: 1,
    // Lv1/属性UP[雷]-1
    // Lv2/属性UP[水]+1
    // Lv3/追撃[水]+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP雷 },
      { lv: 2, value: 1, name: SKILL.属性UP水 },
      { lv: 3, value: 1, name: SKILL.追撃水 },
    ],
  },
  {
    name: "スコルピノ",
    type: "甲羅",
    rank: 1,
    // Lv2/DEF増加+1
    // Lv3/STAB成長+1
    skills: [
      { lv: 2, value: 1, name: SKILL.DEF増加 },
      { lv: 3, value: 1, name: SKILL.STAB成長 },
    ],
  },
  {
    name: "森の精霊",
    type: "精霊",
    rank: 1,
    // Lv1/属性UP[火]-1
    // Lv2/属性UP[白]+1
    // Lv3/INT成長+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 2, value: 1, name: SKILL.属性UP白 },
      { lv: 3, value: 1, name: SKILL.INT成長 },
    ],
  },
  {
    name: "ハリネズミ",
    type: "猛者",
    rank: 1,
    // Lv2/痛恨の一撃+1
    // Lv3/匠の技+1
    skills: [
      { lv: 2, value: 1, name: SKILL.痛恨の一撃 },
      { lv: 3, value: 1, name: SKILL.匠の技 },
    ],
  },
  {
    name: "ゼリッピリ",
    type: "死",
    rank: 1,
    // Lv1/属性UP[雷]-1
    // Lv2/鋼の肌+1
    // Lv3/天の裁き+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP雷 },
      { lv: 2, value: 1, name: SKILL.鋼の肌 },
      { lv: 3, value: 1, name: SKILL.天の裁き },
    ],
  },
  {
    name: "ベービング",
    type: "悪魔",
    rank: 1,
    // Lv1/属性UP[白]-1
    // Lv2/属性UP[黒]+1
    // Lv3/DEX成長+1
    // Lv4/女神の微笑+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP白 },
      { lv: 2, value: 1, name: SKILL.属性UP黒 },
      { lv: 3, value: 1, name: SKILL.DEX成長 },
      { lv: 4, value: 1, name: SKILL.女神の微笑 },
    ],
  },
  {
    name: "ハニービー",
    type: "羽",
    rank: 1,
    // Lv1/属性UP[火]-1
    // Lv2/属性UP[風]+1
    // Lv3/AGI増加+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 2, value: 1, name: SKILL.属性UP風 },
      { lv: 3, value: 1, name: SKILL.AGI増加 },
    ],
  },
  {
    name: "フラワーゼリッピ",
    type: "ゼリー",
    rank: 2,
    // Lv1/属性UP[水]-1
    // Lv3/属性UP[火]+1
    // Lv5/戦闘鼓舞+1
    skills: [
      { lv: 1, name: SKILL.属性UP水, value: -1 },
      { lv: 3, name: SKILL.属性UP火, value: 1 },
      { lv: 5, name: SKILL.戦闘鼓舞, value: 1 },
    ],
  },
  {
    name: "葉っぱマン",
    type: "植物",
    rank: 2,
    // Lv1/属性UP[火]-1
    // Lv3/属性UP[土]+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 3, value: 1, name: SKILL.属性UP土 },
    ],
  },
  {
    name: "トト",
    type: "昆虫",
    rank: 2,
    // Lv3/SP回復+1
    // Lv5/日々の恩恵+1
    skills: [
      { lv: 3, value: 1, name: SKILL.SP回復 },
      { lv: 5, value: 1, name: SKILL.日々の恩恵 },
    ],
  },
  {
    name: "スモールマトリョーシカ",
    type: "人形",
    rank: 2,
    // Lv1/匠の技-1
    // Lv3/自己再生+1
    skills: [
      { lv: 1, value: -1, name: SKILL.匠の技 },
      { lv: 3, value: 1, name: SKILL.自己再生 },
    ],
  },
  {
    name: "ワイルドキャット",
    type: "動物",
    rank: 2,
    // Lv3/夜行性+1
    // Lv5/旋風撃+1
    skills: [
      { lv: 3, value: 1, name: SKILL.夜行性 },
      { lv: 5, value: 1, name: SKILL.旋風撃 },
    ],
  },
  {
    name: "クラーケンジュニア",
    type: "水",
    rank: 2,
    // Lv1/属性UP[雷]-1
    // Lv3/属性UP[水]+1
    // Lv5/スプラッシュ+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP雷 },
      { lv: 3, value: 1, name: SKILL.属性UP水 },
      { lv: 5, value: 1, name: SKILL.スプラッシュ },
    ],
  },
  {
    name: "ポイズンスコルピノ",
    type: "甲羅",
    rank: 2,
    // Lv3/DEX増加+1
    // Lv5/不意打ち+1
    skills: [
      { lv: 3, value: 1, name: SKILL.DEX増加 },
      { lv: 5, value: 1, name: SKILL.不意打ち },
    ],
  },
  {
    name: "ウィングクリスタル",
    type: "精霊",
    rank: 2,
    // Lv1/属性UP[火]-1
    // Lv3/属性UP[風]+1
    // Lv5/周囲騒然+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 3, value: 1, name: SKILL.属性UP風 },
      { lv: 5, value: 1, name: SKILL.周囲騒然 },
    ],
  },
  {
    name: "ウサギ剣士",
    type: "猛者",
    rank: 2,
    // Lv3/STAB増加+1
    // Lv5/耐久の初撃+1
    skills: [
      { lv: 3, value: 1, name: SKILL.STAB増加 },
      { lv: 5, value: 1, name: SKILL.耐久の初撃 },
    ],
  },
  {
    name: "ラルヴァ",
    type: "死",
    rank: 2,
    // Lv1/瞬足-1
    // Lv3/鈍足+1
    // Lv5/成長期+1
    skills: [
      { lv: 1, value: -1, name: SKILL.瞬足 },
      { lv: 3, value: 1, name: SKILL.鈍足 },
      { lv: 5, value: 1, name: SKILL.成長期 },
    ],
  },
  {
    name: "クルーエルベービング",
    type: "悪魔",
    rank: 2,
    // Lv1/属性UP[白]-1
    // Lv3/属性UP[黒]+1
    // Lv5/財力+1
    // Lv7/追撃[黒]+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP白 },
      { lv: 3, value: 1, name: SKILL.属性UP黒 },
      { lv: 5, value: 1, name: SKILL.財力 },
      { lv: 7, value: 1, name: SKILL.追撃黒 },
    ],
  },
  {
    name: "ホースビー",
    type: "羽",
    rank: 2,
    // Lv1/属性UP[火]-1
    // Lv3/属性UP[風]+1
    // Lv5/AGI成長+1
    // Lv7/追撃[風]+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 3, value: 1, name: SKILL.属性UP風 },
      { lv: 5, value: 1, name: SKILL.AGI成長 },
      { lv: 7, value: 1, name: SKILL.追撃風 },
    ],
  },
  {
    name: "リーフゼリッピ",
    type: "ゼリー",
    rank: 3,
    // Lv1/属性UP[土]-1
    // Lv3/属性UP[雷]+1
    // Lv5/追撃[雷]+1
    skills: [
      { lv: 1, name: SKILL.属性UP土, value: -1 },
      { lv: 3, name: SKILL.属性UP雷, value: 1 },
      { lv: 5, name: SKILL.追撃雷, value: 1 },
    ],
  },
  {
    name: "カニボレ",
    type: "植物",
    rank: 3,
    // Lv1/属性UP[火]-1
    // Lv3/属性UP[土]+1
    // Lv5/追撃[土]+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 3, value: 1, name: SKILL.属性UP土 },
      { lv: 5, value: 1, name: SKILL.追撃土 },
    ],
  },
  {
    name: "きのこ芋虫",
    type: "昆虫",
    rank: 3,
    // Lv3/SP吸収+1
    // Lv5/MR増加+1
    skills: [
      { lv: 3, value: 1, name: SKILL.SP吸収 },
      { lv: 5, value: 1, name: SKILL.MR増加 },
    ],
  },
  {
    name: "ビッグマトリョーシカ",
    type: "人形",
    rank: 3,
    // Lv3/合成職人+1
    // Lv5/緊急回避+1
    skills: [
      { lv: 3, value: 1, name: SKILL.合成職人 },
      { lv: 5, value: 1, name: SKILL.緊急回避 },
    ],
  },
  {
    name: "ワイズキャット",
    type: "動物",
    rank: 3,
    // Lv3/INT増加+1
    // Lv5/致命打+1
    skills: [
      { lv: 3, value: 1, name: SKILL.INT増加 },
      { lv: 5, value: 1, name: SKILL.致命打 },
    ],
  },
  {
    name: "プニック",
    type: "水",
    rank: 3,
    // Lv1/属性UP[雷]-1
    // Lv3/属性UP[水]+1
    // Lv5/MP吸収+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP雷 },
      { lv: 3, value: 1, name: SKILL.属性UP水 },
      { lv: 5, value: 1, name: SKILL.MP吸収 },
    ],
  },
  {
    name: "コクーン",
    type: "甲羅",
    rank: 3,
    // Lv3/DEF成長+1
    // Lv5/MR成長+1
    skills: [
      { lv: 3, value: 1, name: SKILL.DEF成長 },
      { lv: 5, value: 1, name: SKILL.MR成長 },
    ],
  },
  {
    name: "クレミノ",
    type: "精霊",
    rank: 3,
    // Lv1/属性UP[黒]-1
    // Lv3/属性UP[白]+1
    // Lv5/追撃[白]+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP黒 },
      { lv: 3, value: 1, name: SKILL.属性UP白 },
      { lv: 5, value: 1, name: SKILL.追撃白 },
    ],
  },
  {
    name: "平原ダックウォーリア",
    type: "猛者",
    rank: 3,
    // Lv3/宝探し+1
    // Lv5/HACK成長+1
    skills: [
      { lv: 3, value: 1, name: SKILL.宝探し },
      { lv: 5, value: 1, name: SKILL.HACK成長 },
    ],
  },
  {
    name: "スカルウォーリア",
    type: "死",
    rank: 3,
    // Lv1/属性UP[白]-1
    // Lv3/属性UP[黒]+1
    // Lv5/不死の力+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP白 },
      { lv: 3, value: 1, name: SKILL.属性UP黒 },
      { lv: 5, value: 1, name: SKILL.不死の力 },
    ],
  },
  {
    name: "ドグサ",
    type: "悪魔",
    rank: 3,
    // Lv1/属性UP[白]-1
    // Lv3/属性UP[黒]+1
    // Lv5/瞬足+1
    // Lv?/生存本能+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP白 },
      { lv: 3, value: 1, name: SKILL.属性UP黒 },
      { lv: 5, value: 1, name: SKILL.瞬足 },
      { lv: 9, value: 1, name: SKILL.生存本能 },
    ],
  },
  {
    name: "ウィンキィ",
    type: "羽",
    rank: 3,
    // Lv1/属性UP[火]-1
    // Lv3/属性UP[風]+1
    // Lv5/追撃[火]+1
    // Lv7/魔法耐性+1
    skills: [
      { lv: 1, value: -1, name: SKILL.属性UP火 },
      { lv: 3, value: 1, name: SKILL.属性UP風 },
      { lv: 5, value: 1, name: SKILL.追撃火 },
      { lv: 7, value: 1, name: SKILL.魔法耐性 },
    ],
  },
  {
    name: "ポイズンゼリッピ",
    type: "ゼリー",
    rank: 4,
    // Lv1/属性UP[風]-2
    // Lv3/属性UP[土]+2
    // Lv5/追撃[土]+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP風 },
      { lv: 3, value: 2, name: SKILL.属性UP土 },
      { lv: 5, name: SKILL.追撃土, value: 2 },
    ],
  },
  {
    name: "パピィルーム",
    type: "植物",
    rank: 4,
    // Lv1/属性UP[火]-2
    // Lv3/属性UP[土]+2
    // Lv5/自己再生+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP火 },
      { lv: 3, value: 2, name: SKILL.属性UP土 },
      { lv: 5, value: 2, name: SKILL.自己再生 },
    ],
  },
  {
    name: "トルコトゥートゥー",
    type: "昆虫",
    rank: 4,
    // Lv3/生存本能+2
    // Lv5/女神の微笑+2
    skills: [
      { lv: 3, value: 2, name: SKILL.生存本能 },
      { lv: 5, value: 2, name: SKILL.女神の微笑 },
    ],
  },
  {
    name: "ハートベア",
    type: "人形",
    rank: 4,
    // Lv3/STAB増加+2
    // Lv5/SP回復+2
    skills: [
      { lv: 3, value: 2, name: SKILL.STAB増加 },
      { lv: 5, value: 2, name: SKILL.SP回復 },
    ],
  },
  {
    name: "レッドミネ",
    type: "動物",
    rank: 4,
    // Lv3/夜行性+2
    // Lv5/DEX成長+2
    skills: [
      { lv: 3, value: 2, name: SKILL.夜行性 },
      { lv: 5, value: 2, name: SKILL.DEX成長 },
    ],
  },
  {
    name: "武士ハゼ",
    type: "水",
    rank: 4,
    // Lv1/属性UP[雷]-2
    // Lv3/属性UP[水]+2
    // Lv5/追撃[雷]+2
    // Lv7/HACK成長+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP雷 },
      { lv: 3, value: 2, name: SKILL.属性UP水 },
      { lv: 5, value: 2, name: SKILL.追撃雷 },
      { lv: 7, value: 2, name: SKILL.HACK成長 },
    ],
  },
  {
    name: "ピティーチャップ",
    type: "甲羅",
    rank: 4,
    // Lv1/属性UP[雷]-2
    // Lv3/属性UP[水]+2
    // Lv5/DEF成長+2
    // Lv7/経験値増加+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP雷 },
      { lv: 3, value: 2, name: SKILL.属性UP水 },
      { lv: 5, value: 2, name: SKILL.DEF成長 },
      { lv: 7, value: 2, name: SKILL.経験値増加 },
    ],
  },
  {
    name: "ミラクル",
    type: "精霊",
    rank: 4,
    // v3/MR成長+2
    // Lv5/天の裁き+2
    skills: [
      { lv: 3, value: 2, name: SKILL.MR成長 },
      { lv: 5, value: 2, name: SKILL.天の裁き },
    ],
  },
  {
    name: "イジワル",
    type: "猛者",
    rank: 4,
    // Lv1/属性UP[雷]-2
    // Lv3/属性UP[水]+2
    // Lv5/DEX増加+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP雷 },
      { lv: 3, value: 2, name: SKILL.属性UP水 },
      { lv: 5, value: 2, name: SKILL.DEX増加 },
    ],
  },
  {
    name: "シクル",
    type: "死",
    rank: 4,
    // Lv1/属性UP[白]-2
    // Lv3/属性UP[黒]+2
    // Lv5/HACK増加+2
    // Lv7/不死の力+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP白 },
      { lv: 3, value: 2, name: SKILL.属性UP黒 },
      { lv: 5, value: 2, name: SKILL.HACK増加 },
      { lv: 7, value: 2, name: SKILL.不死の力 },
    ],
  },
  {
    name: "シャピアー",
    type: "悪魔",
    rank: 4,
    // Lv1/属性UP[雷]-2
    // Lv1/合成職人-2
    // Lv3/属性UP[水]+2
    // Lv?/STAB成長+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP雷 },
      { lv: 1, value: -2, name: SKILL.合成職人 },
      { lv: 3, value: 2, name: SKILL.属性UP水 },
      { lv: 9, value: 2, name: SKILL.STAB成長 },
    ],
  },
  {
    name: "ユニビ",
    type: "羽",
    rank: 4,
    // Lv1/属性UP[黒]-2
    // Lv3/属性UP[白]+2
    // Lv5/MR増加+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP黒 },
      { lv: 3, value: 2, name: SKILL.属性UP白 },
      { lv: 5, value: 2, name: SKILL.MR増加 },
    ],
  },
  {
    name: "ポイズンリーフゼリッピ",
    type: "ゼリー",
    rank: 5,
    // Lv1/属性UP[風]-2
    // Lv3/属性UP[土]+2
    // Lv5/合成職人+2
    skills: [
      { lv: 1, name: SKILL.属性UP風, value: -2 },
      { lv: 3, name: SKILL.属性UP土, value: 2 },
      { lv: 5, name: SKILL.合成職人, value: 2 },
    ],
  },
  {
    name: "バクマンジュウ",
    type: "植物",
    rank: 5,
    // Lv1/属性UP[火]-2
    // Lv3/属性UP[土]+2
    // Lv5/仁王立ち+2
    // Lv7/致命打+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP火 },
      { lv: 3, value: 2, name: SKILL.属性UP土 },
      { lv: 5, value: 2, name: SKILL.仁王立ち },
      { lv: 7, value: 2, name: SKILL.致命打 },
    ],
  },
  {
    name: "ゴムバブル",
    type: "昆虫",
    rank: 5,
    // Lv1/属性UP[火]-2
    // Lv3/日々の恩恵+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP火 },
      { lv: 3, value: 2, name: SKILL.日々の恩恵 },
    ],
  },
  {
    name: "ビックテディ",
    type: "人形",
    rank: 5,
    // Lv3/匠の技+2
    // Lv5/観察+2
    skills: [
      { lv: 3, value: 2, name: SKILL.匠の技 },
      { lv: 5, value: 2, name: SKILL.観察 },
    ],
  },
  {
    name: "サングラミネ",
    type: "動物",
    rank: 5,
    // Lv1/DEX増加-2
    // Lv3/旋風撃+2
    skills: [
      { lv: 1, value: -2, name: SKILL.DEX増加 },
      { lv: 3, value: 2, name: SKILL.旋風撃 },
    ],
  },
  {
    name: "ボクサーハゼ",
    type: "水",
    rank: 5,
    // Lv1/属性UP[雷]-2
    // Lv3/属性UP[水]+2
    // Lv5/戦闘鼓舞+2
    // Lv7/AGI成長+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP雷 },
      { lv: 3, value: 2, name: SKILL.属性UP水 },
      { lv: 5, value: 2, name: SKILL.戦闘鼓舞 },
      { lv: 7, value: 2, name: SKILL.AGI成長 },
    ],
  },
  {
    name: "アレネ",
    type: "甲羅",
    rank: 5,
    // Lv3/鈍足+2
    // Lv5/MP吸収+2
    skills: [
      { lv: 3, value: 2, name: SKILL.鈍足 },
      { lv: 5, value: 2, name: SKILL.MP吸収 },
    ],
  },
  {
    name: "クレミノタトゥー",
    type: "精霊",
    rank: 5,
    // Lv1/属性UP[黒]-2
    // Lv3/属性UP[白]+2
    // Lv5/INT増加+2
    // Lv7/追撃[白]+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP黒 },
      { lv: 3, value: 2, name: SKILL.属性UP白 },
      { lv: 5, value: 2, name: SKILL.INT増加 },
      { lv: 7, value: 2, name: SKILL.追撃白 },
    ],
  },
  {
    name: "海岸ダックウォーリア",
    type: "猛者",
    rank: 5,
    // Lv3/スプラッシュ+2
    // Lv5/追撃[水]+2
    skills: [
      { lv: 3, value: 2, name: SKILL.スプラッシュ },
      { lv: 5, value: 2, name: SKILL.追撃水 },
    ],
  },
  {
    name: "バンデージヴァンプ",
    type: "死",
    rank: 5,
    // Lv1/属性UP[白]-2
    // Lv1/HP回復-2
    // Lv3/属性UP[黒]+2
    // Lv5/追撃[黒]+2
    // Lv7/HP吸収+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP白 },
      { lv: 1, value: -2, name: SKILL.HP回復 },
      { lv: 3, value: 2, name: SKILL.属性UP黒 },
      { lv: 5, value: 2, name: SKILL.追撃黒 },
      { lv: 7, value: 2, name: SKILL.HP吸収 },
    ],
  },
  {
    name: "ミンクス",
    type: "悪魔",
    rank: 5,
    // Lv3/AGI増加+2
    // Lv5/不意打ち+2
    skills: [
      { lv: 3, value: 2, name: SKILL.AGI増加 },
      { lv: 5, value: 2, name: SKILL.不意打ち },
    ],
  },
  {
    name: "モス",
    type: "羽",
    rank: 5,
    // Lv1/属性UP[火]-2
    // Lv3/属性UP[風]+2
    // Lv5/周囲騒然+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP火 },
      { lv: 3, value: 2, name: SKILL.属性UP風 },
      { lv: 5, value: 2, name: SKILL.周囲騒然 },
    ],
  },
  {
    name: "ゼリーキング",
    type: "ゼリー",
    rank: 6,
    // Lv3/初速+2
    // Lv5/HP回復+2
    skills: [
      { lv: 3, name: SKILL.初速, value: 2 },
      { lv: 5, value: 2, name: SKILL.HP回復 },
    ],
  },
  {
    name: "プラバ",
    type: "植物",
    rank: 6,
    // Lv1/属性UP[火]-2
    // Lv3/属性UP[土]+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP火 },
      { lv: 3, value: 2, name: SKILL.属性UP土 },
    ],
  },
  {
    name: "トゥートゥーキング",
    type: "昆虫",
    rank: 6,
    // Lv3/財力+2
    // Lv5/INT成長+2
    skills: [
      {
        lv: 3,
        value: 2,
        name: SKILL.財力,
      },
      {
        lv: 5,
        value: 2,
        name: SKILL.INT成長,
      },
    ],
  },
  {
    name: "ストーンゴーレムジュニア",
    type: "人形",
    rank: 6,
    // Lv1/属性UP[風]-2
    // Lv3/属性UP[土]+2
    // Lv5/鋼の肌+2
    // Lv7/成長期+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP風 },
      { lv: 3, value: 2, name: SKILL.属性UP土 },
      { lv: 5, value: 2, name: SKILL.鋼の肌 },
      { lv: 7, value: 2, name: SKILL.成長期 },
    ],
  },
  {
    name: "ハニーベア",
    type: "動物",
    rank: 6,
    // Lv3/一心不乱+2
    // Lv5/SP吸収+2
    skills: [
      { lv: 3, value: 2, name: SKILL.一心不乱 },
      { lv: 5, value: 2, name: SKILL.SP吸収 },
    ],
  },
  {
    name: "バイキングハゼ",
    type: "水",
    rank: 6,
    // Lv1/属性UP[雷]-2
    // Lv3/属性UP[水]+2
    // Lv5/宝探し+2
    // Lv?/緊急回避+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP雷 },
      { lv: 3, value: 2, name: SKILL.属性UP水 },
      { lv: 5, value: 2, name: SKILL.宝探し },
      { lv: 9, value: 2, name: SKILL.緊急回避 },
    ],
  },

  {
    name: "サザエキャップ",
    type: "甲羅",
    rank: 6,
    // Lv1/属性UP[雷]-2
    // Lv3/属性UP[水]+2
    // Lv5/DEF増加+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP雷 },
      { lv: 3, value: 2, name: SKILL.属性UP水 },
      { lv: 5, value: 2, name: SKILL.DEF増加 },
    ],
  },
  {
    name: "ピケル",
    type: "精霊",
    rank: 6,
    // Lv1/属性UP[水]-2
    // Lv3/属性UP[火]+2
    // Lv5/追撃[火]+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP水 },
      { lv: 3, value: 2, name: SKILL.属性UP火 },
      { lv: 5, value: 2, name: SKILL.追撃火 },
    ],
  },
  {
    name: "洞窟ダックウォーリア",
    type: "猛者",
    rank: 6,
    // Lv3/痛恨の一撃+2
    // Lv5/耐久の初撃+2
    skills: [
      { lv: 3, value: 2, name: SKILL.痛恨の一撃 },
      { lv: 5, value: 2, name: SKILL.耐久の初撃 },
    ],
  },
  {
    name: "グランドラルヴァ",
    type: "死",
    rank: 6,
    // Lv1/属性UP[白]-2
    // Lv3/属性UP[黒]+2
    // Lv5/MP回復+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP白 },
      { lv: 3, value: 2, name: SKILL.属性UP黒 },
      { lv: 5, value: 2, name: SKILL.MP回復 },
    ],
  },
  {
    name: "サイモン",
    type: "悪魔",
    rank: 6,
    // Lv1/属性UP[土]-2
    // Lv3/属性UP[雷]+2
    // Lv5/魔法耐性+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP土 },
      { lv: 3, value: 2, name: SKILL.属性UP雷 },
      { lv: 5, value: 2, name: SKILL.魔法耐性 },
    ],
  },
  {
    name: "ラバプライア",
    type: "羽",
    rank: 6,
    // Lv1/属性UP[火]-2
    // Lv3/属性UP[風]+2
    // Lv5/瞬足+2
    // Lv7/追撃[風]+2
    skills: [
      { lv: 1, value: -2, name: SKILL.属性UP火 },
      { lv: 3, value: 2, name: SKILL.属性UP風 },
      { lv: 5, value: 2, name: SKILL.瞬足 },
      { lv: 7, value: 2, name: SKILL.追撃風 },
    ],
  },
  {
    name: "アイスゼリッピ",
    type: "ゼリー",
    rank: 7,
    // Lv1/INT増加-3
    // Lv1/属性UP[雷]-3
    // Lv3/属性UP[水]+3
    // Lv6/鈍足+3
    // Lv9/追撃[水]+3
    skills: [
      { lv: 1, value: -3, name: SKILL.INT増加 },
      { lv: 1, value: -3, name: SKILL.属性UP雷 },
      { lv: 3, value: 3, name: SKILL.属性UP水 },
      { lv: 6, value: 3, name: SKILL.鈍足 },
      { lv: 9, value: 3, name: SKILL.追撃水 },
    ],
  },
  {
    name: "パンプキン",
    type: "植物",
    rank: 7,
    // Lv1/自己再生-3
    // Lv1/属性UP[火]-3
    // Lv3/属性UP[土]+3
    // Lv6/痛恨の一撃+3
    // Lv9/仁王立ち+3
    skills: [
      { lv: 1, value: -3, name: SKILL.自己再生 },
      { lv: 1, value: -3, name: SKILL.属性UP火 },
      { lv: 3, value: 3, name: SKILL.属性UP土 },
      { lv: 6, value: 3, name: SKILL.痛恨の一撃 },
      { lv: 9, value: 3, name: SKILL.仁王立ち },
    ],
  },
  {
    name: "マグマバブル",
    type: "昆虫",
    rank: 7,
    // Lv1/SP回復-3
    // Lv1/属性UP[水]-3
    // Lv3/属性UP[火]+3
    // Lv6/宝探し+3
    // Lv9/追撃[火]+3
    skills: [
      { lv: 1, value: -3, name: SKILL.SP回復 },
      { lv: 1, value: -3, name: SKILL.属性UP水 },
      { lv: 3, value: 3, name: SKILL.属性UP火 },
      { lv: 6, value: 3, name: SKILL.宝探し },
      { lv: 9, value: 3, name: SKILL.追撃火 },
    ],
  },
  {
    name: "スノーピカ",
    type: "人形",
    rank: 7,
    // Lv1/生存本能-3
    // Lv3/周囲騒然+3
    // Lv6/MP回復+3
    // Lv9/女神の微笑+3
    skills: [
      { lv: 1, value: -3, name: SKILL.生存本能 },
      { lv: 3, value: 3, name: SKILL.周囲騒然 },
      { lv: 6, value: 3, name: SKILL.MP回復 },
      { lv: 9, value: 3, name: SKILL.女神の微笑 },
    ],
  },
  {
    name: "ハスキー",
    type: "動物",
    rank: 7,
    // Lv1/SP吸収-3
    // Lv3/日々の恩恵+3
    // Lv6/DEX増加+3
    // Lv9/自己再生+3
    skills: [
      { lv: 1, value: -3, name: SKILL.SP吸収 },
      { lv: 3, value: 3, name: SKILL.日々の恩恵 },
      { lv: 6, value: 3, name: SKILL.DEX増加 },
      { lv: 9, value: 3, name: SKILL.自己再生 },
    ],
  },
  {
    name: "巫女ハゼ",
    type: "水",
    rank: 7,
    // Lv1/属性UP[雷]-3
    // Lv1/属性UP[黒]-3
    // Lv3/戦闘鼓舞+3
    // Lv6/追撃[白]+3
    // Lv9/魔法耐性+3
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP雷 },
      { lv: 1, value: -3, name: SKILL.属性UP黒 },
      { lv: 3, value: 3, name: SKILL.戦闘鼓舞 },
      { lv: 6, value: 3, name: SKILL.追撃白 },
      { lv: 9, value: 3, name: SKILL.魔法耐性 },
    ],
  },
  {
    name: "クレム",
    type: "甲羅",
    rank: 7,
    // Lv1/DEX増加-3
    // Lv1/属性UP[雷]-3
    // Lv5/属性UP[水]+3
    // Lv10/DEF増加+3
    skills: [
      { lv: 1, value: -3, name: SKILL.DEX増加 },
      { lv: 1, value: -3, name: SKILL.属性UP雷 },
      { lv: 5, value: 3, name: SKILL.属性UP水 },
      { lv: 10, value: 3, name: SKILL.DEF増加 },
    ],
  },
  {
    name: "アジダハカ",
    type: "精霊",
    rank: 7,
    // Lv1/夜行性-3
    // Lv1/属性UP[土]-3
    // Lv3/属性UP[雷]+3
    // Lv6/初速+3
    // Lv9/AGI成長+3
    skills: [
      { lv: 1, value: -3, name: SKILL.夜行性 },
      { lv: 1, value: -3, name: SKILL.属性UP土 },
      { lv: 3, value: 3, name: SKILL.属性UP雷 },
      { lv: 6, value: 3, name: SKILL.初速 },
      { lv: 9, value: 3, name: SKILL.AGI成長 },
    ],
  },
  {
    name: "スキア",
    type: "猛者",
    rank: 7,
    // Lv1/仁王立ち-3
    // Lv3/瞬足+3
    // Lv6/追撃[風]+3
    // Lv9/HACK成長+3
    skills: [
      { lv: 1, value: -3, name: SKILL.仁王立ち },
      { lv: 3, value: 3, name: SKILL.瞬足 },
      { lv: 6, value: 3, name: SKILL.追撃風 },
      { lv: 9, value: 3, name: SKILL.HACK成長 },
    ],
  },
  {
    name: "デビルナイト",
    type: "死",
    rank: 7,
    // Lv1/初速-3
    // Lv1/属性UP[白]-3
    // Lv3/属性UP[黒]+3
    // Lv6/不死の力+3
    // Lv9/HACK増加+3
    skills: [
      { lv: 1, value: -3, name: SKILL.初速 },
      { lv: 1, value: -3, name: SKILL.属性UP白 },
      { lv: 3, value: 3, name: SKILL.属性UP黒 },
      { lv: 6, value: 3, name: SKILL.不死の力 },
      { lv: 9, value: 3, name: SKILL.HACK増加 },
    ],
  },
  {
    name: "ムスケル",
    type: "悪魔",
    rank: 7,
    // Lv1/属性UP[水]-3
    // Lv1/痛恨の一撃-3
    // Lv3/属性UP[火]+3
    // Lv6/一心不乱+3
    // Lv9/HP吸収+3
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP水 },
      { lv: 1, value: -3, name: SKILL.痛恨の一撃 },
      { lv: 3, value: 3, name: SKILL.属性UP火 },
      { lv: 6, value: 3, name: SKILL.一心不乱 },
      { lv: 9, value: 3, name: SKILL.HP吸収 },
    ],
  },
  {
    name: "クリセラ",
    type: "羽",
    rank: 7,
    // Lv1/DEF増加-3
    // Lv1/属性UP[火]-3
    // Lv3/属性UP[風]+3
    // Lv6/天の裁き+3
    // Lv9/MR増加+3
    skills: [
      { lv: 1, value: -3, name: SKILL.DEF増加 },
      { lv: 1, value: -3, name: SKILL.属性UP火 },
      { lv: 3, value: 3, name: SKILL.属性UP風 },
      { lv: 6, value: 3, name: SKILL.天の裁き },
      { lv: 9, value: 3, name: SKILL.MR増加 },
    ],
  },
  {
    name: "イグルージャム",
    type: "ゼリー",
    rank: 8,
    // Lv1/戦闘鼓舞-3
    // Lv1/属性UP[雷]-3
    // Lv3/属性UP[水]+3
    // Lv5/スプラッシュ+3
    // Lv7/DEF成長+3
    // Lv?/観察+3
    skills: [
      { lv: 1, value: -3, name: SKILL.戦闘鼓舞 },
      { lv: 1, value: -3, name: SKILL.属性UP雷 },
      { lv: 3, value: 3, name: SKILL.属性UP水 },
      { lv: 5, value: 3, name: SKILL.スプラッシュ },
      { lv: 7, value: 3, name: SKILL.DEF成長 },
      { lv: 9, value: 3, name: SKILL.観察 },
    ],
  },
  {
    name: "ブルームバンブー",
    type: "植物",
    rank: 8,
    // Lv1/自己再生-3
    // Lv1/属性UP[火]-3
    // Lv3/属性UP[土]+3
    // Lv6/追撃[土]+3
    // Lv9/経験値増加+3
    skills: [
      { lv: 1, value: -3, name: SKILL.自己再生 },
      { lv: 1, value: -3, name: SKILL.属性UP火 },
      { lv: 3, value: 3, name: SKILL.属性UP土 },
      { lv: 6, value: 3, name: SKILL.追撃土 },
      { lv: 9, value: 3, name: SKILL.経験値増加 },
    ],
  },
  {
    name: "トゥートゥークイーン",
    type: "昆虫",
    rank: 8,
    // Lv1/属性UP[黒]-3
    // Lv3/属性UP[白]+3
    // Lv6/財力+3
    // Lv9/INT成長+3
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP黒 },
      { lv: 3, value: 3, name: SKILL.属性UP白 },
      { lv: 6, value: 3, name: SKILL.財力 },
      { lv: 9, value: 3, name: SKILL.INT成長 },
    ],
  },
  {
    name: "クリスタルトランプドール",
    type: "人形",
    rank: 8,
    // Lv1/一心不乱-3
    // Lv5/成長期+3
    // Lv10/緊急回避+3
    skills: [
      { lv: 1, value: -3, name: SKILL.一心不乱 },
      { lv: 5, value: 3, name: SKILL.成長期 },
      { lv: 10, value: 3, name: SKILL.緊急回避 },
    ],
  },
  {
    name: "タトゥーベア",
    type: "動物",
    rank: 8,
    // Lv1/AGI増加-3
    // Lv5/旋風撃+3
    // Lv10/匠の技+3
    skills: [
      { lv: 1, value: -3, name: SKILL.AGI増加 },
      { lv: 5, value: 3, name: SKILL.旋風撃 },
      { lv: 10, value: 3, name: SKILL.匠の技 },
    ],
  },
  {
    name: "グレートハゼ",
    type: "水",
    rank: 8,
    // Lv1/属性UP[雷]-3
    // Lv3/属性UP[水]+3
    // Lv6/HP回復+3
    // Lv9/MR成長+3
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP雷 },
      { lv: 3, value: 3, name: SKILL.属性UP水 },
      { lv: 6, value: 3, name: SKILL.HP回復 },
      { lv: 9, value: 3, name: SKILL.MR成長 },
    ],
  },
  {
    name: "エンピニオン",
    type: "甲羅",
    rank: 8,
    // Lv1/瞬足-3
    // Lv1/属性UP[雷]-3
    // Lv3/属性UP[水]+3
    // Lv5/鋼の肌+3
    // Lv7/MP吸収+3
    // Lv9/INT増加+3
    skills: [
      { lv: 1, value: -3, name: SKILL.瞬足 },
      { lv: 1, value: -3, name: SKILL.属性UP雷 },
      { lv: 3, value: 3, name: SKILL.属性UP水 },
      { lv: 5, value: 3, name: SKILL.鋼の肌 },
      { lv: 7, value: 3, name: SKILL.MP吸収 },
      { lv: 9, value: 3, name: SKILL.INT増加 },
    ],
  },
  {
    name: "真アジダハカ",
    type: "精霊",
    rank: 8,
    // Lv1/不意打ち-3
    // Lv1/属性UP[土]-3
    // Lv3/属性UP[雷]+3
    // Lv5/夜行性+3
    // Lv7/追撃[雷]+3
    // Lv9/STAB成長+3
    skills: [
      { lv: 1, value: -3, name: SKILL.不意打ち },
      { lv: 1, value: -3, name: SKILL.属性UP土 },
      { lv: 3, value: 3, name: SKILL.属性UP雷 },
      { lv: 5, value: 3, name: SKILL.夜行性 },
      { lv: 7, value: 3, name: SKILL.追撃雷 },
      { lv: 9, value: 3, name: SKILL.STAB成長 },
    ],
  },
  {
    name: "武闘虎",
    type: "猛者",
    rank: 8,
    // Lv1/MP回復-3
    // Lv3/生存本能+3
    // Lv6/SP回復+3
    // Lv9/AGI増加+3
    skills: [
      { lv: 1, value: -3, name: SKILL.MP回復 },
      { lv: 3, value: 3, name: SKILL.生存本能 },
      { lv: 6, value: 3, name: SKILL.SP回復 },
      { lv: 9, value: 3, name: SKILL.AGI増加 },
    ],
  },
  {
    name: "ポーウン",
    type: "死",
    rank: 8,
    // Lv1/属性UP[白]-3
    // Lv1/魔法耐性-3
    // Lv3/属性UP[黒]+3
    // Lv6/追撃[黒]+3
    // Lv9/SP吸収+3
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP白 },
      { lv: 1, value: -3, name: SKILL.魔法耐性 },
      { lv: 3, value: 3, name: SKILL.属性UP黒 },
      { lv: 6, value: 3, name: SKILL.追撃黒 },
      { lv: 9, value: 3, name: SKILL.SP吸収 },
    ],
  },
  {
    name: "ログルベグル",
    type: "悪魔",
    rank: 8,
    // Lv1/鋼の肌-3
    // Lv1/女神の微笑-3
    // Lv3/不意打ち+3
    // Lv6/耐久の初撃+3
    // Lv9/STAB増加+3
    skills: [
      { lv: 1, value: -3, name: SKILL.鋼の肌 },
      { lv: 1, value: -3, name: SKILL.女神の微笑 },
      { lv: 3, value: 3, name: SKILL.不意打ち },
      { lv: 6, value: 3, name: SKILL.耐久の初撃 },
      { lv: 9, value: 3, name: SKILL.STAB増加 },
    ],
  },
  {
    name: "ハンド",
    type: "羽",
    rank: 8,
    // Lv1/DEX増加-3
    // Lv3/合成職人+3
    // Lv6/致命打+3
    // Lv9/DEX成長+3
    skills: [
      { lv: 1, value: -3, name: SKILL.DEX増加 },
      { lv: 3, value: 3, name: SKILL.合成職人 },
      { lv: 6, value: 3, name: SKILL.致命打 },
      { lv: 9, value: 3, name: SKILL.DEX成長 },
    ],
  },
  {
    name: "ダスティングボンベマン",
    type: "ゼリー",
    rank: 9,
    skills: [],
  },
  {
    name: "怪物の木",
    type: "植物",
    rank: 9,
    // Lv1/仁王立ち+3
    skills: [{ lv: 1, value: 3, name: SKILL.仁王立ち }],
  },
  {
    name: "ゴーレムコマンドー",
    type: "昆虫",
    rank: 9,
    // Lv1/合成運↑Lv+1
    skills: [{ lv: 1, value: 1, name: SKILL.合成運Lv }],
  },
  {
    name: "プレタ",
    type: "人形",
    rank: 9,
    // Lv1/グロウス+1
    skills: [{ lv: 1, value: 1, name: SKILL.グロウス }],
  },
  {
    name: "ワイルドボー",
    type: "動物",
    rank: 9,
    // Lv1/合成運↑St+1
    skills: [{ lv: 1, value: 1, name: SKILL.合成運St }],
  },
  {
    name: "ユニシール",
    type: "水",
    rank: 9,
    // Lv1/追撃[白]+3
    skills: [{ lv: 1, value: 3, name: SKILL.追撃白 }],
  },
  {
    name: "スクープ",
    type: "甲羅",
    rank: 9,
    // Lv1/合成運↑Rk+1
    skills: [{ lv: 1, value: 1, name: SKILL.合成運Rk }],
  },
  {
    name: "河童",
    type: "精霊",
    rank: 9,
    // Lv1/初速+3
    skills: [{ lv: 1, value: 3, name: SKILL.初速 }],
  },
  {
    name: "チカブム",
    type: "猛者",
    rank: 9,
    // Lv1/一心不乱+3
    skills: [{ lv: 1, value: 3, name: SKILL.一心不乱 }],
  },
  {
    name: "夜幻影",
    type: "死",
    rank: 9,
    // Lv1/ドロー↑St+1
    skills: [{ lv: 1, value: 1, name: SKILL.ドローSt }],
  },
  {
    name: "ウィッキド",
    type: "悪魔",
    rank: 9,
    // Lv1/合成運↑MB+1
    skills: [{ lv: 1, value: 1, name: SKILL.合成運MB }],
  },
  {
    name: "フレイムリザード",
    type: "羽",
    rank: 9,
    // Lv1/属性UP[火]+3
    skills: [{ lv: 1, value: 3, name: SKILL.属性UP火 }],
  },
  {
    name: "亡念のグール",
    type: "ゼリー",
    rank: 10,
    skills: [],
  },
  {
    name: "トゥームスコルピノ",
    type: "植物",
    rank: 10,
    skills: [],
  },
  {
    name: "ゾンビマスター",
    type: "昆虫",
    rank: 10,
    // Lv1/財力+3
    // Lv3/戦闘鼓舞+3
    // Lv5/生存本能+1
    // Lv6/耐久の初撃+2
    // Lv7/日々の恩恵-1
    // Lv8/瞬足-2
    // Lv9/MR増加+4
    skills: [
      { lv: 1, value: 3, name: SKILL.財力 },
      { lv: 3, value: 3, name: SKILL.戦闘鼓舞 },
      { lv: 5, value: 1, name: SKILL.生存本能 },
      { lv: 6, value: 2, name: SKILL.耐久の初撃 },
      { lv: 7, value: -1, name: SKILL.日々の恩恵 },
      { lv: 8, value: -2, name: SKILL.瞬足 },
      { lv: 9, value: 4, name: SKILL.MR増加 },
    ],
  },
  {
    name: "ゾンビ",
    type: "人形",
    rank: 10,
    // Lv1/AGI増加-1
    // Lv3/HP回復-2
    // Lv5/自己再生-1
    // Lv6/グロウス+3
    // Lv7/観察+1
    // Lv8/緊急回避+2
    // Lv9/HACK増加+4
    skills: [
      { lv: 1, value: -1, name: SKILL.AGI増加 },
      { lv: 3, value: -2, name: SKILL.HP回復 },
      { lv: 5, value: -1, name: SKILL.自己再生 },
      { lv: 6, value: 3, name: SKILL.グロウス },
      { lv: 7, value: 1, name: SKILL.観察 },
      { lv: 8, value: 2, name: SKILL.緊急回避 },
      { lv: 9, value: 4, name: SKILL.HACK増加 },
    ],
  },
  {
    name: "幽霊狩猟犬",
    type: "動物",
    rank: 10,
    // Lv1/自己再生+1
    // Lv3/周囲騒然-2
    // Lv5/スプラッシュ+1
    // Lv6/匠の技+2
    // Lv7/観察-1
    // Lv8/宝探し+3
    // Lv9/STAB増加+4
    skills: [
      { lv: 1, value: 1, name: SKILL.自己再生 },
      { lv: 3, value: -2, name: SKILL.周囲騒然 },
      { lv: 5, value: 1, name: SKILL.スプラッシュ },
      { lv: 6, value: 2, name: SKILL.匠の技 },
      { lv: 7, value: -1, name: SKILL.観察 },
      { lv: 8, value: 3, name: SKILL.宝探し },
      { lv: 9, value: 4, name: SKILL.STAB増加 },
    ],
  },
  {
    name: "スケルトンマーダラー",
    type: "水",
    rank: 10,
    skills: [],
  },
  {
    name: "猛毒の注視者",
    type: "甲羅",
    rank: 10,
    // Lv1/属性UP[黒]+3
    // Lv3/追撃[黒]+1
    // Lv5/不死の力+2
    // Lv6/初速-3
    // Lv7/鈍足-2
    // Lv8/夜行性+2
    // Lv9/INT増加+4
    skills: [
      { lv: 1, value: 3, name: SKILL.属性UP黒 },
      { lv: 3, value: 1, name: SKILL.追撃黒 },
      { lv: 5, value: 2, name: SKILL.不死の力 },
      { lv: 6, value: -3, name: SKILL.初速 },
      { lv: 7, value: -2, name: SKILL.鈍足 },
      { lv: 8, value: 2, name: SKILL.夜行性 },
      { lv: 9, value: 4, name: SKILL.INT増加 },
    ],
  },
  {
    name: "ミイラ",
    type: "精霊",
    rank: 10,
    // Lv1/DEF成長+1
    // Lv3/属性UP[白]-3
    // Lv5/一心不乱+1
    // Lv6/財力+1
    // Lv7/女神の微笑+2
    // Lv8/DEX増加+2
    // Lv9/DEF増加+4
    skills: [
      { lv: 1, value: 1, name: SKILL.DEF成長 },
      { lv: 3, value: -3, name: SKILL.属性UP白 },
      { lv: 5, value: 1, name: SKILL.一心不乱 },
      { lv: 6, value: 1, name: SKILL.財力 },
      { lv: 7, value: 2, name: SKILL.女神の微笑 },
      { lv: 8, value: 2, name: SKILL.DEX増加 },
      { lv: 9, value: 4, name: SKILL.DEF増加 },
    ],
  },
  {
    name: "ラミア",
    type: "猛者",
    rank: 10,
    // Lv1/鋼の肌+1
    // Lv3/属性UP[黒]-3
    // Lv5/AGI増加+1
    // Lv6/DEX成長+1
    // Lv7/追撃[雷]+1
    // Lv8/属性UP[風]-1
    // Lv9/DEX増加+4
    skills: [
      { lv: 1, value: 1, name: SKILL.鋼の肌 },
      { lv: 3, value: -3, name: SKILL.属性UP黒 },
      { lv: 5, value: 1, name: SKILL.AGI増加 },
      { lv: 6, value: 1, name: SKILL.DEX成長 },
      { lv: 7, value: 1, name: SKILL.追撃雷 },
      { lv: 8, value: -1, name: SKILL.属性UP風 },
      { lv: 9, value: 4, name: SKILL.DEX増加 },
    ],
  },
  {
    name: "モロス",
    type: "死",
    rank: 10,
    // Lv1/MP吸収-3
    // Lv3/SP吸収-2
    // Lv5/自己再生+1
    // Lv6/周囲騒然+1
    // Lv7/致命打-1
    // Lv8/匠の技+2
    // Lv9/AGI増加+4
    skills: [
      { lv: 1, value: -3, name: SKILL.MP吸収 },
      { lv: 3, value: -2, name: SKILL.SP吸収 },
      { lv: 5, value: 1, name: SKILL.自己再生 },
      { lv: 6, value: 1, name: SKILL.周囲騒然 },
      { lv: 7, value: -1, name: SKILL.致命打 },
      { lv: 8, value: 2, name: SKILL.匠の技 },
      { lv: 9, value: 4, name: SKILL.AGI増加 },
    ],
  },
  {
    name: "ヘカテー",
    type: "悪魔",
    rank: 10,
    // Lv1/HACK増加-1
    // Lv3/STAB増加-1
    // Lv5/致命打+3
    // Lv6/周囲騒然+1
    // Lv7/合成職人+2
    // Lv8/SP回復+3
    // Lv9/食いしん坊+1
    skills: [
      { lv: 1, value: -1, name: SKILL.HACK増加 },
      { lv: 3, value: -1, name: SKILL.STAB増加 },
      { lv: 5, value: 3, name: SKILL.致命打 },
      { lv: 6, value: 1, name: SKILL.周囲騒然 },
      { lv: 7, value: 2, name: SKILL.合成職人 },
      { lv: 8, value: 3, name: SKILL.SP回復 },
      { lv: 9, value: 1, name: SKILL.食いしん坊 },
    ],
  },
  {
    name: "使命の継承者ニックス",
    type: "羽",
    rank: 10,
    // Lv1/MP吸収-3
    // Lv3/SP吸収-3
    // Lv5/HACK増加-3
    // Lv6/瞬足-3
    // Lv7/AGI増加+3
    // Lv8/DEX増加+3
    // Lv9/女神の微笑+4
    skills: [
      { lv: 1, value: -3, name: SKILL.MP吸収 },
      { lv: 3, value: -3, name: SKILL.SP吸収 },
      { lv: 5, value: -3, name: SKILL.HACK増加 },
      { lv: 6, value: -3, name: SKILL.瞬足 },
      { lv: 7, value: 3, name: SKILL.AGI増加 },
      { lv: 8, value: 3, name: SKILL.DEX増加 },
      { lv: 9, value: 4, name: SKILL.女神の微笑 },
    ],
  },
  {
    name: "プロム",
    type: "ゼリー",
    rank: 11,
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP火 },
      { lv: 1, value: 3, name: SKILL.属性UP雷 },
      { lv: 1, value: -4, name: SKILL.DEF増加 },
      { lv: 1, value: -2, name: SKILL.財力 },
      { lv: 2, value: 3, name: SKILL.追撃雷 },
      { lv: 2, value: 3, name: SKILL.HP回復 },
    ],
  },
  {
    name: "ステッド",
    type: "植物",
    rank: 11,
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP風 },
      { lv: 1, value: 3, name: SKILL.属性UP白 },
      { lv: 1, value: -4, name: SKILL.AGI増加 },
      { lv: 1, value: -3, name: SKILL.不死の力 },
      { lv: 2, value: 3, name: SKILL.追撃白 },
      { lv: 2, value: 3, name: SKILL.MP回復 },
    ],
  },
  {
    name: "ケリッド",
    type: "昆虫",
    rank: 11,
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP土 },
      { lv: 1, value: 3, name: SKILL.属性UP水 },
      { lv: 1, value: -2, name: SKILL.初速 },
      { lv: 1, value: -3, name: SKILL.瞬足 },
      { lv: 2, value: 3, name: SKILL.追撃水 },
      { lv: 2, value: 3, name: SKILL.SP回復 },
      { lv: 3, value: 2, name: SKILL.食いしん坊 },
    ],
  },
  {
    name: "カサード",
    type: "人形",
    rank: 11,
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP黒 },
      { lv: 1, value: 3, name: SKILL.属性UP土 },
      { lv: 1, value: 3, name: SKILL.成長期 },
      { lv: 1, value: -3, name: SKILL.一心不乱 },
      { lv: 2, value: 3, name: SKILL.追撃土 },
      { lv: 2, value: 3, name: SKILL.女神の微笑 },
      { lv: 3, value: 4, name: SKILL.瞬足 },
    ],
  },
  {
    name: "フェイド",
    type: "動物",
    rank: 11,
    skills: [
      { lv: 1, value: -3, name: SKILL.属性UP水 },
      { lv: 1, value: 3, name: SKILL.属性UP風 },
      { lv: 1, value: -3, name: SKILL.夜行性 },
      { lv: 1, value: -3, name: SKILL.仁王立ち },
      { lv: 2, value: 3, name: SKILL.追撃風 },
      { lv: 2, value: 3, name: SKILL.匠の技 },
      { lv: 3, value: 4, name: SKILL.耐久の初撃 },
    ],
  },
  {
    name: "セリオン",
    type: "水",
    rank: 11,
    skills: [
      { lv: 1, value: -4, name: SKILL.DEX増加 },
      { lv: 1, value: 3, name: SKILL.一心不乱 },
      { lv: 1, value: -3, name: SKILL.自己再生 },
      { lv: 1, value: 3, name: SKILL.SP吸収 },
      { lv: 2, value: 3, name: SKILL.STAB成長 },
      { lv: 2, value: 5, name: SKILL.AGI増加 },
      { lv: 3, value: 5, name: SKILL.STAB増加 },
    ],
  },
  {
    name: "セレアナ",
    type: "甲羅",
    rank: 11,
    skills: [
      { lv: 1, value: -4, name: SKILL.MR増加 },
      { lv: 1, value: 2, name: SKILL.戦闘鼓舞 },
      { lv: 1, value: 3, name: SKILL.属性UP火 },
      { lv: 1, value: -3, name: SKILL.SP回復 },
      { lv: 2, value: 3, name: SKILL.追撃火 },
      { lv: 2, value: 3, name: SKILL.HACK成長 },
      { lv: 3, value: 5, name: SKILL.HACK増加 },
    ],
  },
  {
    name: "シライロン",
    type: "精霊",
    rank: 11,
    skills: [
      { lv: 1, value: -4, name: SKILL.HACK増加 },
      { lv: 1, value: 3, name: SKILL.MP吸収 },
      { lv: 1, value: -3, name: SKILL.鋼の肌 },
      { lv: 1, value: -3, name: SKILL.HP回復 },
      { lv: 2, value: 3, name: SKILL.DEF成長 },
      { lv: 2, value: 3, name: SKILL.HP吸収 },
      { lv: 3, value: 5, name: SKILL.DEF増加 },
    ],
  },
  {
    name: "シルバン",
    type: "猛者",
    rank: 11,
    skills: [
      { lv: 1, value: -4, name: SKILL.INT増加 },
      { lv: 1, value: 3, name: SKILL.生存本能 },
      { lv: 1, value: -3, name: SKILL.不意打ち },
      { lv: 1, value: -3, name: SKILL.MP回復 },
      { lv: 2, value: 3, name: SKILL.DEX成長 },
      { lv: 2, value: 3, name: SKILL.AGI成長 },
      { lv: 3, value: 5, name: SKILL.DEX増加 },
    ],
  },
  {
    name: "ルミナス",
    type: "死",
    rank: 11,
    skills: [
      { lv: 1, value: -4, name: SKILL.STAB増加 },
      { lv: 1, value: 3, name: SKILL.MR成長 },
      { lv: 1, value: 3, name: SKILL.属性UP黒 },
      { lv: 1, value: 3, name: SKILL.魔法耐性 },
      { lv: 2, value: 3, name: SKILL.追撃黒 },
      { lv: 2, value: 5, name: SKILL.MR増加 },
      { lv: 3, value: 5, name: SKILL.INT増加 },
    ],
  },
  {
    name: "アーカン",
    type: "ゼリー",
    rank: 12,
    skills: [],
  },
  // 'ゼリー',
  // '植物',
  // '昆虫',
  // '人形',
  // '動物',
  // '水',
  // '甲羅',
  // '精霊',
  // '猛者',
  // '死',
  // '悪魔',
  // '羽'
];
