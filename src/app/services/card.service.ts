import { Injectable } from '@angular/core';
import { cards, cardMatrix, rankMatrix, TYPES } from '../consts/index';
import { Card } from '../models/card.model';
import { Path } from '../models/route.model';
import '../../assets/graph.js';
import { graph, convert2Type, convert2Symbol } from '../consts/dijkstra-map';
import { Subject } from 'rxjs/Rx';

declare var Graph: any;

@Injectable()
export class CardService {

  cards = cards;
  cardMatrix = cardMatrix;
  rankMatrix = rankMatrix;
  MIN_RANK = 1;
  MAX_RANK = 9;
  initGraph = graph;
  exists: Card[] = [];
  COST_INF = 10000000000000000000000000000000;
  error$ = new Subject();
  TYPES = TYPES;

  constructor() {
  }

  setExistsWeight(graph) {
    let graphDeepCopy = JSON.parse(JSON.stringify(graph));

    this.exists.map(card => {
      const exist = this.getSymbolByCard(card);
      for (let i = 1; i <= 9; i++) {
        if (graphDeepCopy['a' + i][exist]) {
          graphDeepCopy['a' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['b' + i][exist]) {
          graphDeepCopy['b' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['c' + i][exist]) {
          graphDeepCopy['c' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['d' + i][exist]) {
          graphDeepCopy['d' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['e' + i][exist]) {
          graphDeepCopy['e' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['f' + i][exist]) {
          graphDeepCopy['f' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['g' + i][exist]) {
          graphDeepCopy['g' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['h' + i][exist]) {
          graphDeepCopy['h' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['i' + i][exist]) {
          graphDeepCopy['i' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['j' + i][exist]) {
          graphDeepCopy['j' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['k' + i][exist]) {
          graphDeepCopy['k' + i][exist] = this.COST_INF;
        }
        if (graphDeepCopy['l' + i][exist]) {
          graphDeepCopy['l' + i][exist] = this.COST_INF;
        }
      }
    });

    return graphDeepCopy;

  }

  makePathHeavy(start: Card, goal: Card, graph) {
    if (!start) {
      return graph;
    };
    let copy = JSON.parse(JSON.stringify(graph));

    const startValue = this.getSymbolByCard(start);
    const goalValue = this.getSymbolByCard(goal);

    // console.log('Make this path to heaby!: ' + start.name + ' -> ' + goal.name)
    copy[startValue][goalValue] = this.COST_INF;
    return copy;
  }

  checkIfMergedCardExistOnPath(path) {
    let suspeciousPath
  }

  error(msg: string) {
    this.error$.next(msg);
  }

  clearError() {
    this.error$.next('');
  }

  getPath(start: Card, goal: Card, graph, count: number = 0) {

    this.clearError();

    let currentGraph = this.setExistsWeight(graph);
    let flag = false;

    const startValue = this.getSymbolByCard(start);
    const goalValue = this.getSymbolByCard(goal);

    const gr = new Graph(currentGraph);
    const path = gr.findShortestPath(startValue, goalValue);
    if (!path) {
      this.error('経路ありませんでした(´・ω・`) 作れない組み合わせかもなのかもしれない(´・ω・`)');
      return [];
    }
    let pathList: Card[] = path.map(
      p => {
        return this.getCardBySymbol(p);
      }
    );

    pathList.reduce(
      (prev, current, i, list) => {
        const mergedCard = this.getMergedCard(prev, current);
        // console.log("This will be Merged: ", mergedCard);

        if (mergedCard ? this.exists.some(existCard => existCard.name === mergedCard.name) : false) {
          currentGraph = this.makePathHeavy(prev, current, currentGraph);
          flag = true;
        }
        return current;
      }, null
    );

    if (flag) {
      if (count > 10) {
        // console.log("あきらめる", pathList);
        this.error("頑張って探したけど経路ありませんでした(´・ω・`) これから徹夜して経路探索しますが、たぶん見つからないので設定変えてみてください(´・ω・`)");
        return [];
      } else {
        // console.log("RETRY!!: ", pathList);
        count++;
        pathList = this.getPath(start, goal, currentGraph, count);
      }
    }

    // console.log(currentGraph);

    return pathList
  }

  getPerfectPath(pathList): Path[] {
    let perfectPath: Path[] = [];
    pathList.reduce(
      (prev, current, i, list) => {
        const mergedCard = this.getMergedCard(prev, current);
        perfectPath.push({
          orig: prev,
          merged: mergedCard,
          goal: current
        });
        return current;
      }, null
    );
    return perfectPath;
  }


  getCardByType(type: string, rank): Card {
    return this.cards.find(card => {
      return card.type === type && card.rank === rank;
    });
  }

  getCardByName(name: string): Card {
    return this, cards.find(card => {
      return card.name === name;
    });
  }

  getCardsByType(type: string): Card[] {
    return this.cards.filter(card => {
      return card.type === type;
    });
  }

  getCardBySkill(skillName: string, min: boolean = true): Card {

    if (!skillName) {
      return null;
    }

    const filteredcards = this.cards.filter(card => {
      return card.skills;
    });

    const cardsWithSkill = filteredcards.filter(card => {
      return card.skills.some(skill => {
        return skill.name === skillName
      });
    });

    if (min) {
      return cardsWithSkill.reduce((prev, current) => {
        if (prev.rank > current.rank) {
          return current
        } else {
          return prev
        }
      }, { name: 'dummy', type: 'dummy', rank: 100 });
    } else {
      return cardsWithSkill.reduce((prev, current) => {
        const prevSkill = prev.skills.filter(skill => {
          return skill.name === skillName;
        });
        const currentSkill = current.skills.filter(skill => {
          return skill.name === skillName;
        });

        if (prevSkill[0].value < currentSkill[0].value) {
          return current
        } else {
          return prev
        }
      }, { name: 'dummy', type: 'dummy', rank: 0, skills: [{ name: skillName, lv: 1, value: -5 }] });
    }
  }

  private filterSkill(skills, skill: string) {
    return skills.filter(s => {
      return s.name === skill;
    });
  }


  mergeCard(card1: Card, card2: Card): Card {
    if (!card1 || !card2) {
      return null;
    }
    const type = this.getMergedCardType(card1.type, card2.type);
    const rank = this.getMergedCardRank(card1.rank, card2.rank);
    return this.getCardByType(type, rank);
  }

  /**
   * 最初と最後のカードを指定すると、合成に使うカードを一つ算出してくれる。
   * 重複チェックはしない。
   * @param start 
   * @param goal 
   */
  getMergedCard(start: Card, goal: Card): Card {

    if (!start || !goal) {
      return null;
    }

    const needRank = Math.min.apply(null, this.rankMatrix[start.rank - 1].map((rank, i, array) => {
      if (rank == goal.rank) {
        return i + 1;
      } else {
        return 100;
      }
    }));

    const needType = TYPES.filter(
      type => {
        return this.cardMatrix[start.type][type] === goal.type;
      }
    );

    if (needRank === 100 || !needType) {
      return null;
    }

    let cardList = needType.map(type => {
      return this.getCardByType(type, needRank);
    });

    if (cardList.length) {
      cardList = cardList.filter(card => {
        return card.name !== start.name && card.name !== goal.name
      });
    }
    if (cardList.length) {
      return cardList[0];
    } else {
      return null;
    }
  }

  addExist(card: Card) {
    if (card) {
      this.exists.push(card);
    }
  }

  clearExist() {
    this.exists = [];
  }

  removeOneFromExist(card: Card) {
    this.exists = this.exists.filter(
      exCard => exCard.name !== card.name
    )
  }

  getSomeCardByRank(rank: number, count: number = 0): Card {
    const randType = this.TYPES[Math.floor(Math.random() * this.TYPES.length)];
    const retCard = this.getCardByType(randType, rank);

    if (this.checkIfCardExist(retCard)) {
      if (count > 8) {
        this.error("ランクが「" + rank + "」のカード持ちすぎわろたｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ");
        throw new Error();
      } else {
        count++;
        return this.getSomeCardByRank(rank, count);
      }
    } else {
      return this.getCardByType(randType, rank);
    }
  }

  checkIfCardExist(card: Card): boolean {
    return this.exists.some(c => c.name === card.name);
  }

  //目的のカードを作るための最適なペアを算出する
  getPairCard(final: Card) {
    let ret = [];
    const needRankPair = this.getRankPair(final.rank);
    const needTypePair = this.getCardListByType(final.type);
  }

  //指定したrankにするためのRankの組み合わせの最適値を算出する
  getRankPair(rank: number) {
    if (rank <= 1) {
      //RANK1以下の場合は作成できない
      return undefined;
    }
    let retArray = [];
    let ranksDeepCopy = this.MIN_RANK;
    //rank 1 - 希望のRankまででループ
    //RANK MAX(9)までのループにすると、合成素材に作りたいRankのカードが入ってくるので希望のRankまでのループにしている。
    for (var i = 1; i < rank; i++) {

      for (var j = ranksDeepCopy; j < rank; j++) {
        let currentRank = this.getMergedCardRank(i, j);
        if (currentRank === rank) {
          retArray.push({
            rank1: i,
            rank2: j,
            total: i + j
          });
        }
      }
      //組み合わせ重複を避けるために、第二ループのスタート位置を一つ増やす。
      //例えば、rank(1,2)とrank(2,1)は同じということを考慮している。
      ranksDeepCopy++;
    }

    //最適値として、rankのトータル値が低いものを返す
    return retArray.reduce((last, current) => {
      if (last.total > current.total) {
        return current;
      } else {
        return last;
      }
    }, { rank1: 100, rank: 100, total: 200 });
  }

  //目的のtypeにするための、Typeのペアを算出している
  getCardListByType(type: string) {
    let retArray = [];
    let typesDeepCopy = Object.assign([], TYPES);
    for (var i = 0; i < TYPES.length; i++) {

      for (var j = 0; j < typesDeepCopy.length; j++) {
        let currentType = this.cardMatrix[TYPES[i]][typesDeepCopy[j]];
        if (currentType === type) {
          retArray.push({
            type1: TYPES[i],
            type2: typesDeepCopy[j]
          });
        }
      }
      // 組み合わせ重複を避けるために、第二ループの配列から除去している。
      typesDeepCopy = typesDeepCopy.filter(
        type => {
          return type !== TYPES[i];
        }
      );
    }
    return retArray;

  }

  private getMergedCardType(type1: string, type2: string): string {
    return cardMatrix[type1][type2];
  }

  private getMergedCardRank(rank1: number, rank2: number) {
    if ((rank1 < 1 && rank1 > 9) || (rank2 < 1 && rank2 > 9)) {
      return undefined;
    }
    return rankMatrix[rank1 - 1][rank2 - 1];
  }


  /**
   * a1, a2などのシンボルから、cardを算出
   * @param symbol 
   */
  getCardBySymbol(symbol: string): Card {
    const strArr = symbol.split('');
    const type = convert2Symbol[strArr[0]];
    const rank: number = parseInt(strArr[1]);
    return this.getCardByType(type, rank);
  }

  /**
   * cardから、a1,b2などのシンボルを算出
   * @param card 
   */
  getSymbolByCard(card: Card): string {
    return convert2Type[card.type] + '' + card.rank;
  }

  /*
  * 着地カードから4つのRank4まで導き出す方法を考える
  * 1. Any -> Rank5
  * 2. Rank5 -> Rank4, Rank4
  * 3. Rank4, Rank4 -> Rank5, Rank5 
  * 4. Rank5, Rank5 -> Rank4, Rank4, Rank4, Rank4
  * 
  * 
  * 2と4は同じ
  * 1と3も実質同じ
  * 
  * つまり、Any -> Rank5およびRank5 -> Rank4があれば良い
  * 
  *                                   
  */

  /**
   * 着地カードまでの経路情報を考えた情報導き出す。
   * @param final 
   */
  getPathToFinal(final: Card, num) {
    const rank5 = this.getRank5Card(final);
    let pair = this.findRank4PairFromRank5(rank5.final);
    if (pair.length === 0) {
      this.addExist(rank5.final);
      num++;
      return this.getPathToFinal(final, num);
    }
    if (pair.length) {
      return {
        rank4Pair: pair[0],
        rank5: rank5.final,
        merged: rank5.merged,
        goal: final
      }
    }
    return null;
  }


  /**
   * Rank5のカードで重複しないものと、着地までの素材カード（重複チェックあり）を探す
   * @param final 
   */
  private getRank5Card(final: Card): { final: Card, merged: Card } {
    if (final.rank === 5) {
      //すでにRank5
      return {
        final: final,
        merged: null
      };
    }

    let mergedCard = null;
    const rank5cards = this.getFilteredCardByRank(5);

    for (let i = 0; i < rank5cards.length; i++) {
      const merged = this.getMergedCard(rank5cards[i], final);
      // console.log(merged);
      if (this.checkIfCardExist(merged)) continue;
      return {
        final: rank5cards[i],
        merged: merged
      };
    }
    this.error('Rank5 カード持ちすぎわろたｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ');
    throw new Error('Cannot find Rank 5 card..');
  }

  /**
   * rank5カードから、必要なRank4のペアの配列を算出（重複チェックあり）
   * @param rank5card 
   */
  private findRank4PairFromRank5(rank5card: Card): Card[][] {
    let retCardPair = [];
    const rank4cards = this.getFilteredCardByRank(4);
    rank4cards.reduce((prev, current) => {
      const goal = this.mergeCard(prev, current);
      if (goal) {
        if (!this.checkIfCardExist(goal)) {
          if (goal.name === rank5card.name) {
            retCardPair.push([prev, current]);
          }
        }
      }

      return current;
    }, null);

    return retCardPair;
  }

  /**
   * 全カードリストから、特定Rankのカードリストを算出（重複チェックあり）
   * @param rank 
   */
  private getFilteredCardByRank(rank: number): Card[] {
    return this.cards.filter(card => {
      return card.rank === rank && !this.checkIfCardExist(card);
    });
  }
}
