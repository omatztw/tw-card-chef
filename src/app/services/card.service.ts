import { Injectable } from '@angular/core';
import { cards, cardMatrix, rankMatrix, TYPES } from '../consts/index';
import { Card } from '../models/card.model';
import { Path } from '../models/route.model';
import '../../assets/graph.js';
import { graph, convert2Type, convert2Symbol } from '../consts/dijkstra-map';
import { Subject } from 'rxjs/Rx';
import { ErrorService } from './error.service';
import { FinalPath } from '../models/final-path-tree.model';

declare const Graph: any;

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
  TYPES = TYPES;

  constructor(
    private errorService: ErrorService
  ) { }

  //public


  /**
   * ダイクストラ法で最短経路を用いる。startとgoalを指定すると、重複チェックをした後に最短経路を算出。
   * @param start 
   * @param goal 
   */
  getPath(start: Card, goal: Card): Path[] {

    this.errorService.clear();

    let currentGraph = this.setExistsWeight(this.initGraph);

    const startValue = this.getSymbolByCard(start);
    const goalValue = this.getSymbolByCard(goal);

    const gr = new Graph(currentGraph);
    const path = gr.findShortestPath(startValue, goalValue);
    if (!path) {
      this.errorService.error('経路ありませんでした(´・ω・`) 作れない組み合わせかもなのかもしれない(´・ω・`)');
      return [];
    }
    const pathList: Card[] = path.map(
      p => {
        return this.getCardBySymbol(p);
      }
    );

    return this.getPerfectPath(pathList);
  }

  /**
   * typeとrankから、Cardクラスを算出
   * @param type 
   * @param rank 
   */
  getCardByType(type: string, rank): Card {
    return this.cards.find(card => {
      return card.type === type && card.rank === rank;
    });
  }

  /**
   * skillを所持しているカードを算出。
   * minフラグをTrueにするとスキルを所持している最小'ランク'のカードを返却
   * minフラグをFalseにするとスキルを所持している最大'スキルレベル'のカードを返却
   * @param skillName
   * @param min 
   * @param limit // カードランクの上限
   */
  getCardBySkill(skillName: string, min: boolean = true, limit: number = 10): Card {

    if (!skillName) {
      return null;
    }

    const filteredcards = this.cards
      .filter(card => card.skills) // skillを持っていないカードは除外
      .filter(card => card.rank <= limit); // 上限を超えたカードは除外

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

  /**
   * 所持しているカードを追加
   * @param card 
   */
  addExist(card: Card) {
    if (card) {
      this.exists.push(card);
    }
  }

  /**
   * 所持しているカードをリセット
   */
  clearExist() {
    this.exists = [];
  }

  /**
   * 特定のカードを所持カードから除去
   * @param card 
   */
  removeOneFromExist(card: Card) {
    this.exists = this.exists.filter(
      exCard => exCard.name !== card.name
    )
  }

  /**
 * cardから、a1,b2などのシンボルを算出
 * @param card 
 */
  getSymbolByCard(card: Card): string {
    return convert2Type[card.type] + '' + card.rank;
  }

  /**
   * 着地カードまでの経路情報を考えた情報導き出す。
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
   * @param final 
   */
  getPathToFinal(final: Card, num): FinalPath {

    // 中間状態となるカードを摘出。基本的にはRank5のカードとRank4のペアとなる。
    let middleCard: { final: Card, merged: Card };
    let pair: Card[][];
    if (final.rank > 5) { // rank6以上が着地の場合は、Rank4のペアではなく相応のペアにする
      middleCard = {
        final: final,
        merged: null
      }
      pair = this.findBestPair(final);
    } else {
      middleCard = this.getRank5Card(final);
      pair = this.findBestPair(middleCard.final);
    }
    if (pair.length === 0) {
      this.addExist(middleCard.final);
      num++;
      if (num > 30) {
        this.errorService.error('経路みつかんねｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ');
        throw new Error('Cannot find final Route..');
      }
      return this.getPathToFinal(final, num);
    }
    if (pair.length) {
      pair.sort((a, b) => { //死と羽は特別なので、なるべく通らないルートにしたい(ソートで優先度を降格)
        if (a[0].type === '死' || a[0].type === '羽') {
          return 1;
        }
        if (a[1].type === '死' || a[1].type === '羽') {
          return 1;
        }
        return -1;
      });
      return {
        rank4Pair: pair[0],
        rank5: middleCard.final,
        merged: middleCard.merged,
        goal: final
      }
    }
    return null;
  }

  /**
   * カードを合成する。合成後のカードを返す。
   * 合成元のカードを指定していない場合は、nullを返す。
   * つくれない組み合わせの場合はundefindedを返す。
   * @param card1 
   * @param card2 
   */
  mergeCard(card1: Card, card2: Card, ignoreExists = false): Card {
    if (!card1 || !card2) {
      return null;
    }
    const type = this.getMergedCardType(card1.type, card2.type);
    const rank = this.getMergedCardRank(card1.rank, card2.rank);
    const mergedCard = this.getCardByType(type, rank);
    if (mergedCard === card1 || mergedCard === card2) {
      //つくれない組み合わせの場合
      return undefined;
    }
    if (!ignoreExists && this.exists.some(exist => exist === mergedCard)) {
      //カードが重複
      return undefined;
    }
    return mergedCard;
  }

  /**
   * Rank 1のカードを探す。
   * ただし、excludesに存在するものは除く。
   * @param excluds 
  */
  public findRank1Card(excluds: Card[]): Card {
    return this.findRankedCard(excluds, 1);
  }

  //private

  private findRankedCard(excluds: Card[], rank: number): Card {
    for (let i = 0; i < TYPES.length; i++) {
      const currentCandidate = this.getCardByType(TYPES[i], rank);
      if (excluds.some(card => card === currentCandidate)) {
        continue;
      }
      return currentCandidate;
    }
  }

  private setExistsWeight(graph) {
    let graphDeepCopy = JSON.parse(JSON.stringify(graph));

    this.exists.map(exist => {
      const existSymbol = this.getSymbolByCard(exist);
      this.cards.map(card => {

        //合成結果がExistsだった場合のコストを上げる
        const cardSymbol = this.getSymbolByCard(card);
        if (graphDeepCopy[cardSymbol][existSymbol]) graphDeepCopy[cardSymbol][existSymbol] = this.COST_INF;

        //合成対象がExistsだった場合のコストを上げる
        const forbiddenGoal = this.mergeCard(card, exist);
        if (!forbiddenGoal) {
          return;
        }
        const forbiddenGoalSymbol = this.getSymbolByCard(forbiddenGoal);
        if (graphDeepCopy[cardSymbol][forbiddenGoalSymbol]) {
          graphDeepCopy[cardSymbol][forbiddenGoalSymbol] = this.COST_INF;
        }

      });
    });

    return graphDeepCopy;

  }

  private getPerfectPath(pathList): Path[] {
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

  private filterSkill(skills, skill: string) {
    return skills.filter(s => {
      return s.name === skill;
    });
  }




  /**
   * 最初と最後のカードを指定すると、合成に使うカードを一つ算出してくれる。
   * 重複チェックはしない。
   * @param start 
   * @param goal 
   */
  private getMergedCard(start: Card, goal: Card): Card {

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
 * 所持カードに存在するかをチェックする
 * @param card 
 */
  private checkIfCardExist(card: Card): boolean {
    return this.exists.some(c => c.name === card.name);
  }


  /**
   * a1, a2などのシンボルから、cardを算出
   * @param symbol 
   */
  private getCardBySymbol(symbol: string): Card {
    const strArr = symbol.split('');
    const type = convert2Symbol[strArr[0]];
    const rank: number = parseInt(symbol.slice(1));
    return this.getCardByType(type, rank);
  }

  /**
   * Rank5のカードで重複しないものと、着地までの素材カード（重複チェックあり）を探す
   * @param final 
   */
  private getRank5Card(final: Card, excludes: Card[] = []): { final: Card, merged: Card } {
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
      if (!merged) continue; //mergeがない      
      if (this.checkIfCardExist(merged)) continue;
      if (excludes.some(card => card === merged)) continue;
      return {
        final: rank5cards[i],
        merged: merged
      };
    }

    this.errorService.error('Rank5 カード持ちすぎわろたｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ');
    throw new Error('Cannot find Rank 5 card..');
  }

  /**
   * rank5カードから、必要なRank4のペアの配列を算出（重複チェックあり）
   * @param rank5card 
   */
  private findRank4PairFromRank5_org(rank5card: Card): Card[][] {
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

  private findCardPair(foundRank1: number, foundRank2: number, fromRank: number, fromCard: Card): Card[][] {
    let retCardPair = [];
    const cards1 = this.getFilteredCardByRank(foundRank1);
    const cards2 = this.getFilteredCardByRank(foundRank2);
    for (let i = 0; i < cards1.length; i++) {
      for (let j = 0; j < cards2.length; j++) {
        if (cards1[i].name === cards2[j].name) {
          continue;
        }
        const goal = this.mergeCard(cards1[i], cards2[j]);
        if (goal) {
          if (!this.checkIfCardExist(goal)) {
            if (goal.name === fromCard.name) {
              retCardPair.push([cards1[i], cards2[j]]);
            }
          }
        }
      }
    }
    return retCardPair;

  }

  private findBestPair(card: Card): Card[][] {
    if (card.rank > 5) {
      return this.findCardPair(card.rank - 2, card.rank - 1, card.rank, card);
    }
    // 4未満のカードは不可
    return this.findCardPair(4, 4, 5, card);
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
