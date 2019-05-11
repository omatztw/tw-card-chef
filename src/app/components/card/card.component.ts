import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';
import { RouteModel, Path } from '../../models/route.model';
import { TYPES, cards, SKILL_ARRAY, convert2Symbol, SKILL_ARRAY_FORTEST_DEBUG } from '../../consts/index';
import { Skill } from '../../models/skill.model';
import { ErrorService } from '../../services/error.service';
import { FinalPathTree, FinalPathBinaryTree, FinalPath } from '../../models/final-path-tree.model';
import { addRemovePatterns } from '../../consts/add-remove-pattern.const';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './toggle.css']
})
export class CardComponent implements OnInit {

  type1: string;
  rank1: number;

  type2: string;
  rank2: number;

  final: Card = this.defaultFinal;

  exist1: Card;
  exist2: Card;
  exist3: Card;
  exist4: Card;
  exist5: Card;
  exist6: Card;
  exist7: Card;
  exist8: Card;

  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  skill6: string;
  skill7: string;
  skill8: string;


  finalPathBinaryTree: FinalPathBinaryTree;

  skillDisplayed = [];

  route1;
  route2;
  route3;
  route4;
  routes = [];
  toRankMinRoutes = [];
  minGoals = [];

  TYPES = TYPES;
  SKILL_ARRAY = SKILL_ARRAY;
  cardList = cards;
  errMsg;

  finalRoutes: RouteModel[] = [];
  totalSteps: number;

  rank10Enabled = false;



  constructor(
    private cardService: CardService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.errorService.error$.asObservable().subscribe(
      err => this.errMsg = err
    );

    // this.debug_const();
  }

  private debug_const() {
    this.skill1 = SKILL_ARRAY_FORTEST_DEBUG[0];
    this.skill2 = SKILL_ARRAY_FORTEST_DEBUG[1];
    this.skill3 = SKILL_ARRAY_FORTEST_DEBUG[2];
    this.skill4 = SKILL_ARRAY_FORTEST_DEBUG[3];
    this.skill5 = SKILL_ARRAY_FORTEST_DEBUG[4];
    this.skill6 = SKILL_ARRAY_FORTEST_DEBUG[5];
    this.skill7 = SKILL_ARRAY_FORTEST_DEBUG[6];
    this.skill8 = SKILL_ARRAY_FORTEST_DEBUG[7];
    this.final = this.cardService.getCardByType('昆虫', 10);
  }

  private debug1() {
    this.skill1 = "MR増加";
    this.skill2 = "天の裁き";
  }

  private debug2() {
    this.skill3 = "HACK成長";
    this.skill4 = "追撃[風]";
  }

  private debug3() {
    this.skill1 = "AGI成長";
    this.skill2 = "初速";
    this.skill3 = "属性UP[雷]"
  }
  private debug4() {
    this.skill5 = "AGI成長";
    this.skill6 = "初速";
    this.skill7 = "属性UP[雷]"
  }
  private debug5() {
    this.skill1 = "属性UP[白]";
    this.skill2 = "追撃[白]";
    this.skill3 = "MP吸収";
    this.skill4 = "SP吸収";
    this.skill5 = "女神の微笑";
    this.skill6 = "瞬足";
    this.skill7 = "初速";
    this.skill8 = "耐久の初撃";
    this.final = this.cardService.getCardByType('昆虫', 4);
    // this.exist1 = this.cardService.getCardByType('悪魔', 3);
  }

  private debug6() {
    this.skill1 = "SP吸収";
    this.skill2 = "MP吸収";
    this.skill3 = "女神の微笑";
    this.skill4 = "瞬足";
    this.skill7 = "属性UP[白]";
    this.skill6 = "追撃[白]";
    this.skill5 = "夜行性";
    this.skill8 = "耐久の初撃";
    this.exist1 = this.cardService.getCardByType('ゼリー', 6);
    this.exist2 = this.cardService.getCardByType('悪魔', 5);
    this.exist3 = this.cardService.getCardByType('昆虫', 5);
  }

  private debug7() {
    this.skill1 = "SP回復";
    this.skill2 = "属性UP[雷]";
    this.skill3 = "INT増加";
    this.skill4 = "属性UP[黒]";
    this.skill5 = "STAB増加";
    this.skill6 = "HACK増加";
    this.skill7 = "DEF増加";
    this.skill8 = "AGI増加";
  }

  private debug8() {
    this.skill1 = "MP回復";
    this.skill2 = "HACK増加";
    this.skill3 = "STAB増加";
    this.skill4 = "緊急回避";
    this.skill5 = "属性UP[雷]";
    this.skill6 = "SP吸収";
    this.skill7 = "属性UP[白]";
    this.skill8 = "追撃[白]";
  }

  private debug9() {
    this.skill1 = "MR増加";
    this.skill2 = "MR成長";
    this.skill3 = "女神の微笑";
    this.skill4 = "耐久の初撃";
    this.skill5 = "鋼の肌";
    this.skill6 = "魔法耐性";
    this.skill7 = "属性UP[白]";
    this.skill8 = "追撃[白]";
  }

  get skills() {
    let skills = [];
    if (this.skill1) skills.push(this.skill1);
    if (this.skill2) skills.push(this.skill2);
    if (this.skill3) skills.push(this.skill3);
    if (this.skill4) skills.push(this.skill4);
    if (this.skill5) skills.push(this.skill5);
    if (this.skill6) skills.push(this.skill6);
    if (this.skill7) skills.push(this.skill7);
    if (this.skill8) skills.push(this.skill8);

    //重複するものを除く
    skills = skills.filter((skill, index) => {
      return index === skills.indexOf(skill);
    })
    return skills;
  }

  get exists(): Card[] {
    let exists = [];
    if (this.exist1) exists.push(this.exist1);
    if (this.exist2) exists.push(this.exist2);
    if (this.exist3) exists.push(this.exist3);
    if (this.exist4) exists.push(this.exist4);
    if (this.exist5) exists.push(this.exist5);
    if (this.exist6) exists.push(this.exist6);
    if (this.exist7) exists.push(this.exist7);
    if (this.exist8) exists.push(this.exist8);


    exists = exists.filter((exist, index) => {
      return index === exists.indexOf(exist);
    })
    return exists;
  }


  //Rank4 - 8までのカードが着地として選択可能
  get goalCardList() {
    return this.cardList.filter(card => {
      return card.rank >= 4;
    });
  }

  get cards() {
    let cards = [];
    this.skills.map(
      skill => {
        cards.push({
          start: this.cardService.getCardBySkill(skill, true),
          goal: this.cardService.getCardBySkill(skill, false, this.rank10Enabled ? 10 : 9),
          skill: skill
        })
      }
    );

    const filteredCards = this.filterDuplicatedFinalCard(cards);

    let retCards = [];
    filteredCards.map(
      filteredCard => {
        let pre: Path[] = [];

        let fGoal = null;
        filteredCard.starts.reduce((previous, current) => {
          let fOrig = previous;
          let fMerged = current;
          fGoal = this.cardService.mergeCard(previous, current);
          if (fGoal === null) { //previous or currentのどちらかを指定していない場合
            fGoal = current;
          }
          if (fGoal === undefined) { //作れない組み合わせの場合。（所持カードの重複も含まれる)
            //一旦別のカードに迂回するための、中間点のPathを検索する。
            let middlePath = this.findMiddleGoal(previous, current);
            if (middlePath) {
              pre.push(middlePath);
              fOrig = middlePath.goal;
              fMerged = current;
              fGoal = this.cardService.mergeCard(middlePath.goal, current);
            } else {
              fGoal = this.cardService.mergeCard(previous, current, true);
            }
          }
          pre.push({
            orig: fOrig,
            merged: fMerged,
            goal: fGoal
          });
          return fGoal
        });

        let fStart;
        if (pre.length > 0) {
          fStart = fGoal;
        } else {
          fStart = filteredCard.starts[0]
        }

        retCards.push({
          pre: pre,
          start: fStart,
          goal: filteredCard.goal,
          skill: filteredCard.skill
        });
      }
    );

    retCards.sort((a, b) => {
      return a.skill.length - b.skill.length;
    });
    return retCards;
  }

  /**
   * 中間ゴールを取得する。
   *   //To Card Service
   * 最終モンスターを所持している場合において、初期モンスター(種モンスター)の合成ができなかった場合に、中間ゴールを設定して回避する。
   * 考え方：
   *    1. Rank1の別のカードを組み合わせる。組み合わせが見つかるまで再帰的にRank1カードを探していく。
   *    2. 中間ゴールカードを合成させたスタートカードを所持している場合もNGケースとして再度探す
   * @param previous 
   * @param current 
   * @param excluds 
   */
  private findMiddleGoal(previous: Card, current: Card, excluds: Card[] = []): Path {
    const another = this.cardService.findRank1Card([previous, current, ...excluds]);
    if (!another) { //どうしても見つからない場合はあきらめる
      return null;
    }
    let mGoal = this.cardService.mergeCard(previous, another);
    if (mGoal === undefined) {
      excluds.push(another);
      return this.findMiddleGoal(previous, current, excluds);
    }

    //中間ゴールカードを合成させたスタートカードを所持している場合
    if (this.cardService.mergeCard(mGoal, current) === undefined) {
      excluds.push(another);
      return this.findMiddleGoal(previous, current, excluds);
    }

    return {
      orig: previous,
      goal: mGoal,
      merged: another
    };
  }

  /**
   * 必要なスキルの最終カードが被っているときに統合する
   */
  filterDuplicatedFinalCard(cards: { pre: any[], start: Card, goal: Card, skill: Skill }[]): { starts: Card[], goal: Card, skill: Skill[] }[] {

    let filterdCards: {
      starts: Card[],
      goal: Card,
      skill: Skill[]
    }[] = [];

    cards.map(
      card => {
        //重複してるものを探す
        let isDuplicated = false;
        filterdCards.map((filterdCard, index) => {
          //重複した場合統合させる。
          //昇順になるように並べ替える。
          if (filterdCard.goal === card.goal) {
            //すでに2つのスキルが重なっている場合は、たとえゴールが同じでも重ねない。3スキルを扱うのは非効率になるため。
            if (filterdCards[index].skill.length < 2) {
              //スキルAを持つ種とスキルBを持つ種の共通のゴールABとした場合、種AがスキルBも所持していた場合、種A→ゴールABとする
              //重複カードとしては処理するが、種Bはスタートカードとして登録しない処理をいれる
              const startAlsoDuplicated: boolean = cards
                .filter(fCard => fCard.start.name !== card.start.name)
                .filter(fCard => fCard.goal.name === card.goal.name)
                .some(fCard => fCard.start.skills.some(s => s.name === card.skill));
              if (!startAlsoDuplicated) {
                filterdCards[index].starts.push(card.start);
              } else {
                // console.log(filterdCards[index].starts);
                // console.log(card);
              }
              //startカードの重複を除去除去
              filterdCards[index].starts = filterdCards[index].starts.filter((x, i, self) => self.indexOf(x) === i);
              filterdCards[index].starts.sort((a, b) => a.rank - b.rank);
              filterdCards[index].skill.push(card.skill);
              isDuplicated = true;
            }
          }
        });

        //重複していない場合は、そのまま採用する
        if (!isDuplicated) {
          filterdCards.push({
            starts: [card.start],
            goal: card.goal,
            skill: [card.skill]
          });
        }
      }
    );

    return filterdCards;
  }

  get defaultFinal(): Card {
    return this.cardService.getCardByType('人形', 5);
  }

  noSkillWhenLv1(card: Card): boolean {
    return this.cardService.noSkillWhenLv1(card);
  }

  calcAllPath() {
    const skillCount = this.skillDisplayed.length;
    this.routes = [];
    this.updateExists();
    const pattern = addRemovePatterns.find(p => p.skillCount === skillCount);

    for (let step = 0; step < skillCount; step++) {
      if (!this.cards[step].start || !this.cards[step].goal) {
        this.routes[step] = [];
      } else {
        this.routes[step] = this.cardService.getPath(this.cards[step].start, this.cards[step].goal);
        this.toRankMinRoutes[step] = this.cardService.getPath(this.cards[step].goal, this.minGoals[step]);
      }
      pattern.shouldRemove[step].map(remove => this.cardService.removeOneFromExist(this.finalPathBinaryTree.getByIndex(remove).goal));
      pattern.shouldAdd[step].map(add => this.cardService.addExist(this.finalPathBinaryTree.getByIndex(add).goal));
    }
  }

  getSymbol(card) {
    return this.cardService.getSymbolByCard(card);
  }

  updateExists(excluds: Card[] = []) {
    this.cardService.clearExist();
    excluds.map(exclud => this.cardService.addExist(exclud));
    this.exists.map(exist => {
      this.cardService.addExist(exist);
    })
  }

  onSubmit(event) {

    this.InitValues();

    if (!this.cards.length) {
      this.errorService.error("スキル入力忘れていまっせ(ﾉ∀`)");
      return;
    }

    if (this.existSkillGoal()) {
      this.errorService.error("どうも作れない組み合わせのようだ(´・ω・`) 必要なスキルの最大値を持つカードをすでに持っている気がする(´・ω・`)");
      return;
    }

    if (!this.final) {
      this.final = this.defaultFinal;
    }
    if (!this.cards.length) {
      return
    }

    this.skillDisplayed = Object.assign([], this.cards);
    const skillCount = this.skillDisplayed.length;
    const totalCount = skillCount * 2 - 1;
    this.makeLastMiles(this.finalPathBinaryTree, totalCount);
    this.minGoals = this.finalPathBinaryTree.getMinGoals();
    this.calcAllPath();
    this.setFinalRoutes();
  }

  InitValues() {
    this.finalRoutes = []; //初期化
    this.skillDisplayed = Object.assign([], this.cards);
    this.updateExists();
    this.finalPathBinaryTree = new FinalPathBinaryTree(this.cardService.getPathToFinal(this.final, 0, this.skillDisplayed.map(c => c.goal)));
  }

  existSkillGoal(): boolean {
    const existSkillGoal = this.cards.filter(card => {
      return this.exists.some(exist => exist.name === card.goal.name)
    })

    return !!existSkillGoal.length
  }

  onClear(event) {
    this.skill1 = undefined;
    this.skill2 = undefined;
    this.skill3 = undefined;
    this.skill4 = undefined;
    this.skill5 = undefined;
    this.skill6 = undefined;
    this.skill7 = undefined;
    this.skill8 = undefined;
  }

  /**
   * FinalPathBinaryTreeを完成させる。STEPの数だけ枝を生やしていく。
   * @param tree 
   * @param maxCount 
   */
  makeLastMiles(tree: FinalPathBinaryTree, maxCount: number) {
    if (maxCount === 1) {
      return;
    }
    this.finalPathBinaryTree.add(this.cardService.getPathToFinal(tree.data.rank4Pair[0], 0, this.skillDisplayed.map(c => c.goal)));
    this.cardService.addExist(tree.data.rank4Pair[0]);
    this.finalPathBinaryTree.add(this.cardService.getPathToFinal(tree.data.rank4Pair[1], 0, this.skillDisplayed.map(c => c.goal)));
    // スキル4つもちのカードはしばらく存在するカードとなるためクリア対象から除外する
    this.updateExists([this.finalPathBinaryTree.left.data.goal]);
    if (maxCount > this.finalPathBinaryTree.size) {
      const lastNode = this.finalPathBinaryTree.getLast(this.finalPathBinaryTree);
      this.makeLastMiles(lastNode, maxCount);
    }
  }

  setFinalRoutes() {
    let currentSkillIndex = 0;
    let skillQueue = [];

    const preRoutes = this.finalPathBinaryTree.getRoutes([]);
    let offset = 0;
    preRoutes.map(
      (route, index, array) => {
        if (route[0].orig === null && route[0].merged === null) { // 欲しいスキルを持つ一つのカードを作成する場合
          if (this.skillDisplayed[currentSkillIndex]) {
            const newRoute = new RouteModel();
            newRoute.pre = this.skillDisplayed[currentSkillIndex].pre;
            newRoute.skills.push(...this.skillDisplayed[currentSkillIndex].skill);
            newRoute.divider = this.routes[currentSkillIndex].length;
            newRoute.routes.push(...this.routes[currentSkillIndex]);
            newRoute.routes.push(...this.toRankMinRoutes[currentSkillIndex]);
            this.finalRoutes.push(newRoute);
            skillQueue.push(this.skillDisplayed[currentSkillIndex].skill);
            currentSkillIndex++;
          }
        } else { // 合成してほしい形に持っていく場合
          const newRoute = new RouteModel();
          newRoute.divider = NaN;
          newRoute.routes.push(...route);
          if (this.skillDisplayed.length) {
            if (index === array.length - 1) { //最後は全部
              for (let i = 0; i < this.skillDisplayed.length; i++) {
                newRoute.skills.push(...this.skillDisplayed[i].skill);
              }

            } else if (skillQueue.length > 1) {
              skillQueue.map(skill => {
                newRoute.skills.push(...skill);
              });
            } else {
              for (let i = offset; i < currentSkillIndex; i++) {
                newRoute.skills.push(...this.skillDisplayed[i].skill);
              }
              offset = currentSkillIndex;
            }
          }
          this.finalRoutes.push(newRoute);
          skillQueue = [];
        }
      }
    )
  }
}
