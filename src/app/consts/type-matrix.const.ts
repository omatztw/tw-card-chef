export const cardMatrix = {
  ゼリー: {
    ゼリー: 'ゼリー',
    植物: '昆虫',
    昆虫: '植物',
    人形: '甲羅',
    動物: '猛者',
    水: '精霊',
    甲羅: '人形',
    精霊: '水',
    猛者: '動物',
    死: 'ゼリー',
    悪魔: '悪魔',
    羽: '植物'
  },
  植物: {
    ゼリー: '昆虫',
    植物: '植物',
    昆虫: 'ゼリー',
    人形: '猛者',
    動物: '精霊',
    水: '甲羅',
    甲羅: '水',
    精霊: '動物',
    猛者: '人形',
    死: '植物',
    悪魔: '悪魔',
    羽: '昆虫'
  },
  昆虫: {
    ゼリー: '植物',
    植物: 'ゼリー',
    昆虫: '昆虫',
    人形: '精霊',
    動物: '甲羅',
    水: '猛者',
    甲羅: '動物',
    精霊: '人形',
    猛者: '水',
    死: '昆虫',
    悪魔: '悪魔',
    羽: '人形'
  },
  人形: {
    ゼリー: '甲羅',
    植物: '猛者',
    昆虫: '精霊',
    人形: '人形',
    動物: '水',
    水: '動物',
    甲羅: 'ゼリー',
    精霊: '昆虫',
    猛者: '植物',
    死: '人形',
    悪魔: '悪魔',
    羽: '動物'
  },
  動物: {
    ゼリー: '猛者',
    植物: '精霊',
    昆虫: '甲羅',
    人形: '水',
    動物: '動物',
    水: '人形',
    甲羅: '昆虫',
    精霊: '植物',
    猛者: 'ゼリー',
    死: '動物',
    悪魔: '悪魔',
    羽: '水'
  },
  水: {
    ゼリー: '精霊',
    植物: '甲羅',
    昆虫: '猛者',
    人形: '動物',
    動物: '人形',
    水: '水',
    甲羅: '植物',
    精霊: 'ゼリー',
    猛者: '昆虫',
    死: '水',
    悪魔: '悪魔',
    羽: '甲羅'
  },
  甲羅: {
    ゼリー: '人形',
    植物: '水',
    昆虫: '動物',
    人形: 'ゼリー',
    動物: '昆虫',
    水: '植物',
    甲羅: '甲羅',
    精霊: '猛者',
    猛者: '精霊',
    死: '甲羅',
    悪魔: '悪魔',
    羽: '精霊'
  },
  精霊: {
    ゼリー: '水',
    植物: '動物',
    昆虫: '人形',
    人形: '昆虫',
    動物: '植物',
    水: 'ゼリー',
    甲羅: '猛者',
    精霊: '精霊',
    猛者: '甲羅',
    死: '精霊',
    悪魔: '悪魔',
    羽: '猛者'
  },
  猛者: {
    ゼリー: '動物',
    植物: '人形',
    昆虫: '水',
    人形: '植物',
    動物: 'ゼリー',
    水: '昆虫',
    甲羅: '精霊',
    精霊: '甲羅',
    猛者: '猛者',
    死: '猛者',
    悪魔: '悪魔',
    羽: 'ゼリー'
  },
  死: {
    ゼリー: 'ゼリー',
    植物: '植物',
    昆虫: '昆虫',
    人形: '人形',
    動物: '動物',
    水: '水',
    甲羅: '甲羅',
    精霊: '精霊',
    猛者: '猛者',
    死: '死',
    悪魔: '羽',
    羽: '悪魔'
  },
  悪魔: {
    ゼリー: '悪魔',
    植物: '悪魔',
    昆虫: '悪魔',
    人形: '悪魔',
    動物: '悪魔',
    水: '悪魔',
    甲羅: '悪魔',
    精霊: '悪魔',
    猛者: '悪魔',
    死: '羽',
    悪魔: '悪魔',
    羽: '死'
  },
  羽: {
    ゼリー: '植物',
    植物: '昆虫',
    昆虫: '人形',
    人形: '動物',
    動物: '水',
    水: '甲羅',
    甲羅: '精霊',
    精霊: '猛者',
    猛者: 'ゼリー',
    死: '悪魔',
    悪魔: '死',
    羽: '羽'
  }
};
