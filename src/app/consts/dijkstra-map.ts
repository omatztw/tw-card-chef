// カード合成の最短経路を作成するためのダイクストラ法用のグラフ

// タイプを全部書くのは面倒なので、簡易化して書いている。
// 元に戻すためのマッピングを作っておく
// 自動生成したらいいんじゃね？というツッコミもある。（自動生成にすべき）

/* tslint:disable: max-line-length */

export const convert2Type = {
  ゼリー: 'a',
  植物: 'b',
  昆虫: 'c',
  人形: 'd',
  動物: 'e',
  水: 'f',
  甲羅: 'g',
  精霊: 'h',
  猛者: 'i',
  死: 'j',
  悪魔: 'k',
  羽: 'l'
};
export const convert2Symbol = {
  a: 'ゼリー',
  b: '植物',
  c: '昆虫',
  d: '人形',
  e: '動物',
  f: '水',
  g: '甲羅',
  h: '精霊',
  i: '猛者',
  j: '死',
  k: '悪魔',
  l: '羽'
};

// 合成の際のコスト
const COST = [
  0,
  1000,
  2000,
  5000,
  10000,
  20000,
  50000,
  100000,
  200000,
  300000,
  400000,
  1000000000
];

// カードを直でひいた場合のコスト
const GEN_COST = [
  0,
  1000,
  10000,
  150000,
  400000,
  1000000,
  2400000,
  5600000,
  12800000,
  22500000,
  30000000
];

// コストを計算する
function calcCost(start, goal) {
  const retryCount = 1;

  // 実際とは計算異なるけど、エラーにならない程度でごまかす
  let needRank = (goal - 1) * 2 - start;
  if (needRank < 1) {
    needRank = 1;
  }
  if (needRank > 10) {
    needRank = 10;
  }
  return GEN_COST[needRank] + COST[needRank] + COST[goal] * retryCount;
}

export const graph = {
  a1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  b1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  c1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  d1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  e1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  f1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  g1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  h1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  i1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), k3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), k4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), k5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), k6: calcCost(1, 6), // 1->6
  },
  j1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), k2: calcCost(1, 2), l2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), j3: calcCost(1, 3), k3: calcCost(1, 3), l3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), j4: calcCost(1, 4), k4: calcCost(1, 4), l4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), j5: calcCost(1, 5), k5: calcCost(1, 5), l5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), j6: calcCost(1, 6), k6: calcCost(1, 6), l6: calcCost(1, 6), // 1->6
  },
  k1: {
    j2: calcCost(1, 2), k2: calcCost(1, 2), l2: calcCost(1, 2), // 1->2
    j3: calcCost(1, 3), k3: calcCost(1, 3), l3: calcCost(1, 3), // 1->3
    j4: calcCost(1, 4), k4: calcCost(1, 4), l4: calcCost(1, 4), // 1->4
    j5: calcCost(1, 5), k5: calcCost(1, 5), l5: calcCost(1, 5), // 1->5
    j6: calcCost(1, 6), k6: calcCost(1, 6), l6: calcCost(1, 6), // 1->6
  },
  l1: {
    a2: calcCost(1, 2), b2: calcCost(1, 2), c2: calcCost(1, 2), d2: calcCost(1, 2), e2: calcCost(1, 2), f2: calcCost(1, 2), g2: calcCost(1, 2), h2: calcCost(1, 2), i2: calcCost(1, 2), j2: calcCost(1, 2), k2: calcCost(1, 2), // 1->2
    a3: calcCost(1, 3), b3: calcCost(1, 3), c3: calcCost(1, 3), d3: calcCost(1, 3), e3: calcCost(1, 3), f3: calcCost(1, 3), g3: calcCost(1, 3), h3: calcCost(1, 3), i3: calcCost(1, 3), j3: calcCost(1, 3), k3: calcCost(1, 3), l3: calcCost(1, 3), // 1->3
    a4: calcCost(1, 4), b4: calcCost(1, 4), c4: calcCost(1, 4), d4: calcCost(1, 4), e4: calcCost(1, 4), f4: calcCost(1, 4), g4: calcCost(1, 4), h4: calcCost(1, 4), i4: calcCost(1, 4), j4: calcCost(1, 4), k4: calcCost(1, 4), l4: calcCost(1, 4), // 1->4
    a5: calcCost(1, 5), b5: calcCost(1, 5), c5: calcCost(1, 5), d5: calcCost(1, 5), e5: calcCost(1, 5), f5: calcCost(1, 5), g5: calcCost(1, 5), h5: calcCost(1, 5), i5: calcCost(1, 5), j5: calcCost(1, 5), k5: calcCost(1, 5), l5: calcCost(1, 5), // 1->5
    a6: calcCost(1, 6), b6: calcCost(1, 6), c6: calcCost(1, 6), d6: calcCost(1, 6), e6: calcCost(1, 6), f6: calcCost(1, 6), g6: calcCost(1, 6), h6: calcCost(1, 6), i6: calcCost(1, 6), j6: calcCost(1, 6), k6: calcCost(1, 6), l6: calcCost(1, 6), // 1->6
  },
  a2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  b2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  c2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  d2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  e2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  f2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  g2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  h2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  i2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), k3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), k4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), k5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), k6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), k7: calcCost(2, 7), // 2->7
  },
  j2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), j3: calcCost(2, 3), k3: calcCost(2, 3), l3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), j4: calcCost(2, 4), k4: calcCost(2, 4), l4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), j5: calcCost(2, 5), k5: calcCost(2, 5), l5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), j6: calcCost(2, 6), k6: calcCost(2, 6), l6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), j7: calcCost(2, 7), k7: calcCost(2, 7), l7: calcCost(2, 7), // 2->7
  },
  k2: {
    j3: calcCost(2, 3), k3: calcCost(2, 3), l3: calcCost(2, 3), // 2->3
    j4: calcCost(2, 4), k4: calcCost(2, 4), l4: calcCost(2, 4), // 2->4
    j5: calcCost(2, 5), k5: calcCost(2, 5), l5: calcCost(2, 5), // 2->5
    j6: calcCost(2, 6), k6: calcCost(2, 6), l6: calcCost(2, 6), // 2->6
    j7: calcCost(2, 7), k7: calcCost(2, 7), l7: calcCost(2, 7), // 2->7
  },
  l2: {
    a3: calcCost(2, 3), b3: calcCost(2, 3), c3: calcCost(2, 3), d3: calcCost(2, 3), e3: calcCost(2, 3), f3: calcCost(2, 3), g3: calcCost(2, 3), h3: calcCost(2, 3), i3: calcCost(2, 3), j3: calcCost(2, 3), k3: calcCost(2, 3), l3: calcCost(2, 3), // 2->3
    a4: calcCost(2, 4), b4: calcCost(2, 4), c4: calcCost(2, 4), d4: calcCost(2, 4), e4: calcCost(2, 4), f4: calcCost(2, 4), g4: calcCost(2, 4), h4: calcCost(2, 4), i4: calcCost(2, 4), j4: calcCost(2, 4), k4: calcCost(2, 4), l4: calcCost(2, 4), // 2->4
    a5: calcCost(2, 5), b5: calcCost(2, 5), c5: calcCost(2, 5), d5: calcCost(2, 5), e5: calcCost(2, 5), f5: calcCost(2, 5), g5: calcCost(2, 5), h5: calcCost(2, 5), i5: calcCost(2, 5), j5: calcCost(2, 5), k5: calcCost(2, 5), l5: calcCost(2, 5), // 2->5
    a6: calcCost(2, 6), b6: calcCost(2, 6), c6: calcCost(2, 6), d6: calcCost(2, 6), e6: calcCost(2, 6), f6: calcCost(2, 6), g6: calcCost(2, 6), h6: calcCost(2, 6), i6: calcCost(2, 6), j6: calcCost(2, 6), k6: calcCost(2, 6), l6: calcCost(2, 6), // 2->6
    a7: calcCost(2, 7), b7: calcCost(2, 7), c7: calcCost(2, 7), d7: calcCost(2, 7), e7: calcCost(2, 7), f7: calcCost(2, 7), g7: calcCost(2, 7), h7: calcCost(2, 7), i7: calcCost(2, 7), j7: calcCost(2, 7), k7: calcCost(2, 7), l7: calcCost(2, 7), // 2->7
  },
  a3: {
    b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  b3: {
    a3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  c3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  d3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  e3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  f3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  g3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  h3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  i3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), k3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), k4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), k5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), k6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), k7: calcCost(3, 7), // 3->7
  },
  j3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), k3: calcCost(3, 3), l3: calcCost(3, 3), // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), j4: calcCost(3, 4), k4: calcCost(3, 4), l4: calcCost(3, 4), // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), j5: calcCost(3, 5), k5: calcCost(3, 5), l5: calcCost(3, 5), // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), j6: calcCost(3, 6), k6: calcCost(3, 6), l6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), j7: calcCost(3, 7), k7: calcCost(3, 7), l7: calcCost(3, 7), // 3->7
  },
  k3: {
    j3: calcCost(3, 3), l3: calcCost(3, 3), // 3->3
    j4: calcCost(3, 4), k4: calcCost(3, 4), l4: calcCost(3, 4), // 3->4
    j5: calcCost(3, 5), k5: calcCost(3, 5), l5: calcCost(3, 5), // 3->5
    j6: calcCost(3, 6), k6: calcCost(3, 6), l6: calcCost(3, 6), // 3->6
    j7: calcCost(3, 7), k7: calcCost(3, 7), l7: calcCost(3, 7), // 3->7
  },
  l3: {
    a3: calcCost(3, 3), b3: calcCost(3, 3), c3: calcCost(3, 3), d3: calcCost(3, 3), e3: calcCost(3, 3), f3: calcCost(3, 3), g3: calcCost(3, 3), h3: calcCost(3, 3), i3: calcCost(3, 3), j3: calcCost(3, 3), k3: calcCost(3, 3),   // 3->3
    a4: calcCost(3, 4), b4: calcCost(3, 4), c4: calcCost(3, 4), d4: calcCost(3, 4), e4: calcCost(3, 4), f4: calcCost(3, 4), g4: calcCost(3, 4), h4: calcCost(3, 4), i4: calcCost(3, 4), j4: calcCost(3, 4), k4: calcCost(3, 4), l4: calcCost(3, 4),  // 3->4
    a5: calcCost(3, 5), b5: calcCost(3, 5), c5: calcCost(3, 5), d5: calcCost(3, 5), e5: calcCost(3, 5), f5: calcCost(3, 5), g5: calcCost(3, 5), h5: calcCost(3, 5), i5: calcCost(3, 5), j5: calcCost(3, 5), k5: calcCost(3, 5), l5: calcCost(3, 5),  // 3->5
    a6: calcCost(3, 6), b6: calcCost(3, 6), c6: calcCost(3, 6), d6: calcCost(3, 6), e6: calcCost(3, 6), f6: calcCost(3, 6), g6: calcCost(3, 6), h6: calcCost(3, 6), i6: calcCost(3, 6), j6: calcCost(3, 6), k6: calcCost(3, 6), l6: calcCost(3, 6), // 3->6
    a7: calcCost(3, 7), b7: calcCost(3, 7), c7: calcCost(3, 7), d7: calcCost(3, 7), e7: calcCost(3, 7), f7: calcCost(3, 7), g7: calcCost(3, 7), h7: calcCost(3, 7), i7: calcCost(3, 7), j7: calcCost(3, 7), k7: calcCost(3, 7), l7: calcCost(3, 7),  // 3->7
  },
  a4: {
    b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  b4: {
    a4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  c4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  d4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  e4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  f4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  g4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  h4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  i4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), k5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), k6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), k7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), k8: calcCost(4, 8), // 4->8
  },
  j4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), k4: calcCost(4, 4), l4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), j5: calcCost(4, 5), k5: calcCost(4, 5), l5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), j6: calcCost(4, 6), k6: calcCost(4, 6), l6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), j7: calcCost(4, 7), k7: calcCost(4, 7), l7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), j8: calcCost(4, 8), k8: calcCost(4, 8), l8: calcCost(4, 8), // 4->8
  },
  k4: {
    j4: calcCost(4, 4), l4: calcCost(4, 4), // 4->4
    j5: calcCost(4, 5), k5: calcCost(4, 5), l5: calcCost(4, 5), // 4->5
    j6: calcCost(4, 6), k6: calcCost(4, 6), l6: calcCost(4, 6), // 4->6
    j7: calcCost(4, 7), k7: calcCost(4, 7), l7: calcCost(4, 7), // 4->7
    j8: calcCost(4, 8), k8: calcCost(4, 8), l8: calcCost(4, 8), // 4->8
  },
  l4: {
    a4: calcCost(4, 4), b4: calcCost(4, 4), c4: calcCost(4, 4), d4: calcCost(4, 4), e4: calcCost(4, 4), f4: calcCost(4, 4), g4: calcCost(4, 4), h4: calcCost(4, 4), i4: calcCost(4, 4), j4: calcCost(4, 4), k4: calcCost(4, 4), // 4->4
    a5: calcCost(4, 5), b5: calcCost(4, 5), c5: calcCost(4, 5), d5: calcCost(4, 5), e5: calcCost(4, 5), f5: calcCost(4, 5), g5: calcCost(4, 5), h5: calcCost(4, 5), i5: calcCost(4, 5), j5: calcCost(4, 5), k5: calcCost(4, 5), l5: calcCost(4, 5), // 4->5
    a6: calcCost(4, 6), b6: calcCost(4, 6), c6: calcCost(4, 6), d6: calcCost(4, 6), e6: calcCost(4, 6), f6: calcCost(4, 6), g6: calcCost(4, 6), h6: calcCost(4, 6), i6: calcCost(4, 6), j6: calcCost(4, 6), k6: calcCost(4, 6), l6: calcCost(4, 6), // 4->6
    a7: calcCost(4, 7), b7: calcCost(4, 7), c7: calcCost(4, 7), d7: calcCost(4, 7), e7: calcCost(4, 7), f7: calcCost(4, 7), g7: calcCost(4, 7), h7: calcCost(4, 7), i7: calcCost(4, 7), j7: calcCost(4, 7), k7: calcCost(4, 7), l7: calcCost(4, 7), // 4->7
    a8: calcCost(4, 8), b8: calcCost(4, 8), c8: calcCost(4, 8), d8: calcCost(4, 8), e8: calcCost(4, 8), f8: calcCost(4, 8), g8: calcCost(4, 8), h8: calcCost(4, 8), i8: calcCost(4, 8), j8: calcCost(4, 8), k8: calcCost(4, 8), l8: calcCost(4, 8), // 4->8
  },
  a5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  b5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  c5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  d5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  e5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  f5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  g5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  h5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  i5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), k4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), k6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), k7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), k8: calcCost(5, 8), // 5->8
  },
  j5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), j4: calcCost(5, 4), k4: calcCost(5, 4), l4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), k5: calcCost(5, 5), l5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), j6: calcCost(5, 6), k6: calcCost(5, 6), l6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), j7: calcCost(5, 7), k7: calcCost(5, 7), l7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), j8: calcCost(5, 8), k8: calcCost(5, 8), l8: calcCost(5, 8), // 5->8
  },
  k5: {
    j4: calcCost(5, 4), k4: calcCost(5, 4), l4: calcCost(5, 4), // 5->4
    j5: calcCost(5, 5), l5: calcCost(5, 5), // 5->5
    j6: calcCost(5, 6), k6: calcCost(5, 6), l6: calcCost(5, 6), // 5->6
    j7: calcCost(5, 7), k7: calcCost(5, 7), l7: calcCost(5, 7), // 5->7
    j8: calcCost(5, 8), k8: calcCost(5, 8), l8: calcCost(5, 8), // 5->8
  },
  l5: {
    a4: calcCost(5, 4), b4: calcCost(5, 4), c4: calcCost(5, 4), d4: calcCost(5, 4), e4: calcCost(5, 4), f4: calcCost(5, 4), g4: calcCost(5, 4), h4: calcCost(5, 4), i4: calcCost(5, 4), j4: calcCost(5, 4), k4: calcCost(5, 4), l4: calcCost(5, 4), // 5->4
    a5: calcCost(5, 5), b5: calcCost(5, 5), c5: calcCost(5, 5), d5: calcCost(5, 5), e5: calcCost(5, 5), f5: calcCost(5, 5), g5: calcCost(5, 5), h5: calcCost(5, 5), i5: calcCost(5, 5), j5: calcCost(5, 5), k5: calcCost(5, 5), // 5->5
    a6: calcCost(5, 6), b6: calcCost(5, 6), c6: calcCost(5, 6), d6: calcCost(5, 6), e6: calcCost(5, 6), f6: calcCost(5, 6), g6: calcCost(5, 6), h6: calcCost(5, 6), i6: calcCost(5, 6), j6: calcCost(5, 6), k6: calcCost(5, 6), l6: calcCost(5, 6), // 5->6
    a7: calcCost(5, 7), b7: calcCost(5, 7), c7: calcCost(5, 7), d7: calcCost(5, 7), e7: calcCost(5, 7), f7: calcCost(5, 7), g7: calcCost(5, 7), h7: calcCost(5, 7), i7: calcCost(5, 7), j7: calcCost(5, 7), k7: calcCost(5, 7), l7: calcCost(5, 7), // 5->7
    a8: calcCost(5, 8), b8: calcCost(5, 8), c8: calcCost(5, 8), d8: calcCost(5, 8), e8: calcCost(5, 8), f8: calcCost(5, 8), g8: calcCost(5, 8), h8: calcCost(5, 8), i8: calcCost(5, 8), j8: calcCost(5, 8), k8: calcCost(5, 8), l8: calcCost(5, 8), // 5->8
  },
  a6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9) // 6->9
  },
  b6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  c6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  d6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  e6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  f6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  g6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  h6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  i6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), k5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), k7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), k8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), k9: calcCost(6, 9), // 6->9
  },
  j6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), j5: calcCost(6, 5), k5: calcCost(6, 5), l5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), k6: calcCost(6, 6), l6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), j7: calcCost(6, 7), k7: calcCost(6, 7), l7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), j8: calcCost(6, 8), k8: calcCost(6, 8), l8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), j9: calcCost(6, 9), k9: calcCost(6, 9), l9: calcCost(6, 9), // 6->9
  },
  k6: {
    j5: calcCost(6, 5), k5: calcCost(6, 5), l5: calcCost(6, 5), // 6->5
    j6: calcCost(6, 6), l6: calcCost(6, 6), // 6->6
    j7: calcCost(6, 7), k7: calcCost(6, 7), l7: calcCost(6, 7), // 6->7
    j8: calcCost(6, 8), k8: calcCost(6, 8), l8: calcCost(6, 8), // 6->8
    j9: calcCost(6, 9), k9: calcCost(6, 9), l9: calcCost(6, 9), // 6->9
  },
  l6: {
    a5: calcCost(6, 5), b5: calcCost(6, 5), c5: calcCost(6, 5), d5: calcCost(6, 5), e5: calcCost(6, 5), f5: calcCost(6, 5), g5: calcCost(6, 5), h5: calcCost(6, 5), i5: calcCost(6, 5), j5: calcCost(6, 5), k5: calcCost(6, 5), l5: calcCost(6, 5), // 6->5
    a6: calcCost(6, 6), b6: calcCost(6, 6), c6: calcCost(6, 6), d6: calcCost(6, 6), e6: calcCost(6, 6), f6: calcCost(6, 6), g6: calcCost(6, 6), h6: calcCost(6, 6), i6: calcCost(6, 6), j6: calcCost(6, 6), k6: calcCost(6, 6), // 6->6
    a7: calcCost(6, 7), b7: calcCost(6, 7), c7: calcCost(6, 7), d7: calcCost(6, 7), e7: calcCost(6, 7), f7: calcCost(6, 7), g7: calcCost(6, 7), h7: calcCost(6, 7), i7: calcCost(6, 7), j7: calcCost(6, 7), k7: calcCost(6, 7), l7: calcCost(6, 7), // 6->7
    a8: calcCost(6, 8), b8: calcCost(6, 8), c8: calcCost(6, 8), d8: calcCost(6, 8), e8: calcCost(6, 8), f8: calcCost(6, 8), g8: calcCost(6, 8), h8: calcCost(6, 8), i8: calcCost(6, 8), j8: calcCost(6, 8), k8: calcCost(6, 8), l8: calcCost(6, 8), // 6->8
    a9: calcCost(6, 9), b9: calcCost(6, 9), c9: calcCost(6, 9), d9: calcCost(6, 9), e9: calcCost(6, 9), f9: calcCost(6, 9), g9: calcCost(6, 9), h9: calcCost(6, 9), i9: calcCost(6, 9), j9: calcCost(6, 9), k9: calcCost(6, 9), l9: calcCost(6, 9), // 6->9
  },
  a7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    b10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10),  // 7->10
  },
  b7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10),  // 7->10
  },
  c7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10), // 7->10
  },
  d7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), c10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10), // 7->10
  },
  e7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10), // 7->10
  },
  f7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10),  // 7->10
  },
  g7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10),  // 7->10
  },
  h7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), i10: calcCost(7, 10), // 7->10
  },
  i7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), k5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), k6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), k7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), k8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), k9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), // 7->10
  },
  j7: { // 死7
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), j5: calcCost(7, 5), k5: calcCost(7, 5), l5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), j6: calcCost(7, 6), k6: calcCost(7, 6), l6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), k7: calcCost(7, 7), l7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), j8: calcCost(7, 8), k8: calcCost(7, 8), l8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), j9: calcCost(7, 9), k9: calcCost(7, 9), l9: calcCost(7, 9), // 7->9
    k10: calcCost(7, 10), l10: calcCost(7, 10), // 7->10 7->10は7+10となるため同種への移動は出来ない 死7 -> 10にいけるのは、羽か悪魔しかない
  },
  k7: {
    j5: calcCost(7, 5), k5: calcCost(7, 5), l5: calcCost(7, 5), // 7->5
    j6: calcCost(7, 6), k6: calcCost(7, 6), l6: calcCost(7, 6), // 7->6
    j7: calcCost(7, 7), l7: calcCost(7, 7), // 7->7
    j8: calcCost(7, 8), k8: calcCost(7, 8), l8: calcCost(7, 8), // 7->8
    j9: calcCost(7, 9), k9: calcCost(7, 9), l9: calcCost(7, 9), // 7->9
    j10: calcCost(7, 10), k10: calcCost(7, 10), l10: calcCost(7, 10), // 7->10
  },
  l7: {
    a5: calcCost(7, 5), b5: calcCost(7, 5), c5: calcCost(7, 5), d5: calcCost(7, 5), e5: calcCost(7, 5), f5: calcCost(7, 5), g5: calcCost(7, 5), h5: calcCost(7, 5), i5: calcCost(7, 5), j5: calcCost(7, 5), k5: calcCost(7, 5), l5: calcCost(7, 5), // 7->5
    a6: calcCost(7, 6), b6: calcCost(7, 6), c6: calcCost(7, 6), d6: calcCost(7, 6), e6: calcCost(7, 6), f6: calcCost(7, 6), g6: calcCost(7, 6), h6: calcCost(7, 6), i6: calcCost(7, 6), j6: calcCost(7, 6), k6: calcCost(7, 6), l6: calcCost(7, 6), // 7->6
    a7: calcCost(7, 7), b7: calcCost(7, 7), c7: calcCost(7, 7), d7: calcCost(7, 7), e7: calcCost(7, 7), f7: calcCost(7, 7), g7: calcCost(7, 7), h7: calcCost(7, 7), i7: calcCost(7, 7), j7: calcCost(7, 7), k7: calcCost(7, 7), l7: calcCost(7, 7), // 7->7
    a8: calcCost(7, 8), b8: calcCost(7, 8), c8: calcCost(7, 8), d8: calcCost(7, 8), e8: calcCost(7, 8), f8: calcCost(7, 8), g8: calcCost(7, 8), h8: calcCost(7, 8), i8: calcCost(7, 8), j8: calcCost(7, 8), k8: calcCost(7, 8), l8: calcCost(7, 8), // 7->8
    a9: calcCost(7, 9), b9: calcCost(7, 9), c9: calcCost(7, 9), d9: calcCost(7, 9), e9: calcCost(7, 9), f9: calcCost(7, 9), g9: calcCost(7, 9), h9: calcCost(7, 9), i9: calcCost(7, 9), j9: calcCost(7, 9), k9: calcCost(7, 9), l9: calcCost(7, 9), // 7->9
    a10: calcCost(7, 10), b10: calcCost(7, 10), c10: calcCost(7, 10), d10: calcCost(7, 10), e10: calcCost(7, 10), f10: calcCost(7, 10), g10: calcCost(7, 10), h10: calcCost(7, 10), i10: calcCost(7, 10), j10: calcCost(7, 10), k10: calcCost(7, 10),  // 7->10
  },
  a8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  b8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  c8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  d8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  e8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  f8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  g8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  h8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  i8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), k6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), k7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), k9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), k10: calcCost(8, 10), // 8->10
  },
  j8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), j6: calcCost(8, 6), k6: calcCost(8, 6), l6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), j7: calcCost(8, 7), k7: calcCost(8, 7), l7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), k8: calcCost(8, 8), l8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), j9: calcCost(8, 9), k9: calcCost(8, 9), l9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), j10: calcCost(8, 10), k10: calcCost(8, 10), l10: calcCost(8, 10), // 8->10
  },
  k8: {
    j6: calcCost(8, 6), k6: calcCost(8, 6), l6: calcCost(8, 6), // 8->6
    j7: calcCost(8, 7), k7: calcCost(8, 7), l7: calcCost(8, 7), // 8->7
    j8: calcCost(8, 8), l8: calcCost(8, 8), // 8->8
    j9: calcCost(8, 9), k9: calcCost(8, 9), l9: calcCost(8, 9), // 8->9
    j10: calcCost(8, 10), k10: calcCost(8, 10), l10: calcCost(8, 10), // 8->10
  },
  l8: {
    a6: calcCost(8, 6), b6: calcCost(8, 6), c6: calcCost(8, 6), d6: calcCost(8, 6), e6: calcCost(8, 6), f6: calcCost(8, 6), g6: calcCost(8, 6), h6: calcCost(8, 6), i6: calcCost(8, 6), j6: calcCost(8, 6), k6: calcCost(8, 6), l6: calcCost(8, 6), // 8->6
    a7: calcCost(8, 7), b7: calcCost(8, 7), c7: calcCost(8, 7), d7: calcCost(8, 7), e7: calcCost(8, 7), f7: calcCost(8, 7), g7: calcCost(8, 7), h7: calcCost(8, 7), i7: calcCost(8, 7), j7: calcCost(8, 7), k7: calcCost(8, 7), l7: calcCost(8, 7), // 8->7
    a8: calcCost(8, 8), b8: calcCost(8, 8), c8: calcCost(8, 8), d8: calcCost(8, 8), e8: calcCost(8, 8), f8: calcCost(8, 8), g8: calcCost(8, 8), h8: calcCost(8, 8), i8: calcCost(8, 8), j8: calcCost(8, 8), k8: calcCost(8, 8), // 8->8
    a9: calcCost(8, 9), b9: calcCost(8, 9), c9: calcCost(8, 9), d9: calcCost(8, 9), e9: calcCost(8, 9), f9: calcCost(8, 9), g9: calcCost(8, 9), h9: calcCost(8, 9), i9: calcCost(8, 9), j9: calcCost(8, 9), k9: calcCost(8, 9), l9: calcCost(8, 9), // 8->9
    a10: calcCost(8, 10), b10: calcCost(8, 10), c10: calcCost(8, 10), d10: calcCost(8, 10), e10: calcCost(8, 10), f10: calcCost(8, 10), g10: calcCost(8, 10), h10: calcCost(8, 10), i10: calcCost(8, 10), j10: calcCost(8, 10), k10: calcCost(8, 10), l10: calcCost(8, 10), // 8->10
  },
  a9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  b9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  c9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  d9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  e9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  f9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  g9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  h9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  i9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), k6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), k7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), k8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), k10: calcCost(9, 10), // 9->10
  },
  j9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), j6: calcCost(9, 6), k6: calcCost(9, 6), l6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), j7: calcCost(9, 7), k7: calcCost(9, 7), l7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), j8: calcCost(9, 8), k8: calcCost(9, 8), l8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), k9: calcCost(9, 9), l9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), j10: calcCost(9, 10), k10: calcCost(9, 10), l10: calcCost(9, 10), // 9->10
  },
  k9: {
    j6: calcCost(9, 6), k6: calcCost(9, 6), l6: calcCost(9, 6), // 9->6
    j7: calcCost(9, 7), k7: calcCost(9, 7), l7: calcCost(9, 7), // 9->7
    j8: calcCost(9, 8), k8: calcCost(9, 8), l8: calcCost(9, 8), // 9->8
    j9: calcCost(9, 9), l9: calcCost(9, 9), // 9->9
    j10: calcCost(9, 10), k10: calcCost(9, 10), l10: calcCost(9, 10), // 9->10
  },
  l9: {
    a6: calcCost(9, 6), b6: calcCost(9, 6), c6: calcCost(9, 6), d6: calcCost(9, 6), e6: calcCost(9, 6), f6: calcCost(9, 6), g6: calcCost(9, 6), h6: calcCost(9, 6), i6: calcCost(9, 6), j6: calcCost(9, 6), k6: calcCost(9, 6), l6: calcCost(9, 6), // 9->6
    a7: calcCost(9, 7), b7: calcCost(9, 7), c7: calcCost(9, 7), d7: calcCost(9, 7), e7: calcCost(9, 7), f7: calcCost(9, 7), g7: calcCost(9, 7), h7: calcCost(9, 7), i7: calcCost(9, 7), j7: calcCost(9, 7), k7: calcCost(9, 7), l7: calcCost(9, 7), // 9->7
    a8: calcCost(9, 8), b8: calcCost(9, 8), c8: calcCost(9, 8), d8: calcCost(9, 8), e8: calcCost(9, 8), f8: calcCost(9, 8), g8: calcCost(9, 8), h8: calcCost(9, 8), i8: calcCost(9, 8), j8: calcCost(9, 8), k8: calcCost(9, 8), l8: calcCost(9, 8), // 9->8
    a9: calcCost(9, 9), b9: calcCost(9, 9), c9: calcCost(9, 9), d9: calcCost(9, 9), e9: calcCost(9, 9), f9: calcCost(9, 9), g9: calcCost(9, 9), h9: calcCost(9, 9), i9: calcCost(9, 9), j9: calcCost(9, 9), k9: calcCost(9, 9), // 9->9
    a10: calcCost(9, 10), b10: calcCost(9, 10), c10: calcCost(9, 10), d10: calcCost(9, 10), e10: calcCost(9, 10), f10: calcCost(9, 10), g10: calcCost(9, 10), h10: calcCost(9, 10), i10: calcCost(9, 10), j10: calcCost(9, 10), k10: calcCost(9, 10), l10: calcCost(9, 10), // 9->10
  },
  a10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  b10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  c10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  d10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  e10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  f10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  g10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  h10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  i10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), k7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), k8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), k9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), k10: calcCost(10, 10), // 10->10
  },
  j10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), j7: calcCost(10, 7), k7: calcCost(10, 7), l7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), j8: calcCost(10, 8), k8: calcCost(10, 8), l8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), j9: calcCost(10, 9), k9: calcCost(10, 9), l9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), k10: calcCost(10, 10), l10: calcCost(10, 10), // 10->10
  },
  k10: {
    j7: calcCost(10, 7), k7: calcCost(10, 7), l7: calcCost(10, 7), // 10->7
    j8: calcCost(10, 8), k8: calcCost(10, 8), l8: calcCost(10, 8), // 10->8
    j9: calcCost(10, 9), k9: calcCost(10, 9), l9: calcCost(10, 9), // 10->9
    j10: calcCost(10, 10), l10: calcCost(10, 10), // 10->10
  },
  l10: {
    a7: calcCost(10, 7), b7: calcCost(10, 7), c7: calcCost(10, 7), d7: calcCost(10, 7), e7: calcCost(10, 7), f7: calcCost(10, 7), g7: calcCost(10, 7), h7: calcCost(10, 7), i7: calcCost(10, 7), j7: calcCost(10, 7), k7: calcCost(10, 7), l7: calcCost(10, 7), // 10->7
    a8: calcCost(10, 8), b8: calcCost(10, 8), c8: calcCost(10, 8), d8: calcCost(10, 8), e8: calcCost(10, 8), f8: calcCost(10, 8), g8: calcCost(10, 8), h8: calcCost(10, 8), i8: calcCost(10, 8), j8: calcCost(10, 8), k8: calcCost(10, 8), l8: calcCost(10, 8), // 10->8
    a9: calcCost(10, 9), b9: calcCost(10, 9), c9: calcCost(10, 9), d9: calcCost(10, 9), e9: calcCost(10, 9), f9: calcCost(10, 9), g9: calcCost(10, 9), h9: calcCost(10, 9), i9: calcCost(10, 9), j9: calcCost(10, 9), k9: calcCost(10, 9), l9: calcCost(10, 9), // 10->9
    a10: calcCost(10, 10), b10: calcCost(10, 10), c10: calcCost(10, 10), d10: calcCost(10, 10), e10: calcCost(10, 10), f10: calcCost(10, 10), g10: calcCost(10, 10), h10: calcCost(10, 10), i10: calcCost(10, 10), j10: calcCost(10, 10), k10: calcCost(10, 10),  // 10->10
  }
};

