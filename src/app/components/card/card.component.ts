import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';
import { RouteModel } from '../../models/route.model';
import { TYPES, cards, graph, SKILL_ARRAY, convert2Symbol } from '../../consts/index';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
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

  skillDisplayed = [];

  route1;
  route2;
  route3;
  route4;
  routes = [];
  toRankMinRoutes = [];

  graph = graph;

  TYPES = TYPES;
  SKILL_ARRAY = SKILL_ARRAY;
  cardList = cards;
  errMsg;

  lastMile;
  last2MilesFirst;
  last2MilesSecond;

  finalRoutes: RouteModel[] = [];
  totalSteps: number;



  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.cardService.error$.asObservable().subscribe(
      err => this.errMsg = err
    );
  }

  // get cardList() {
  //   cards.sort(function (a, b) {
  //     if (a.rank < b.rank) return -1;
  //     if (a.rank > b.rank) return 1;
  //     return 0;
  //   });
  //   return cards
  // }

  get skills() {
    let skills = [];
    if (this.skill1) skills.push(this.skill1);
    if (this.skill2) skills.push(this.skill2);
    if (this.skill3) skills.push(this.skill3);
    if (this.skill4) skills.push(this.skill4);

    skills = skills.filter((skill, index) => {
      return index === skills.indexOf(skill);
    })
    return skills;
  }

  get exists() {
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

  get goalCardList() {
    return this.cardList.filter(card => {
      return card.rank >= 4 && card.rank <= 8;
    });
  }

  get cards() {
    let cards = [];
    this.skills.map(
      skill => {
        cards.push({
          start: this.cardService.getCardBySkill(skill, true),
          goal: this.cardService.getCardBySkill(skill, false),
          skill: skill
        })
      }
    );
    return cards;
  }

  get defaultFinal(): Card {
    return this.cardService.getCardByType('人形', 5);
  }

  noSkillWhenLv1(card: Card): boolean {
    let lv1Skills: Skill[] = [];
    lv1Skills = card.skills.filter(skill => {
      return skill.lv === 1;
    });
    if (lv1Skills.length) {
      return false;
    } else {
      return true;
    }
  }


  calcAllPath() {
    this.updateExists();
    this.setLastMiles();
    this.skillDisplayed = Object.assign([], this.skills);
    const stepCount = this.skillDisplayed.length;
    let minGoal: Card[] = [null, null, null, null];
    this.routes = [];


    if (stepCount === 1) {
      minGoal[0] = this.final;
    } else if (stepCount === 2) {
      minGoal[0] = this.lastMile.rank4Pair[0];
      minGoal[1] = this.lastMile.rank4Pair[1];
    } else if (stepCount === 3) {
      minGoal[0] = this.last2MilesFirst.rank4Pair[0];
      minGoal[1] = this.last2MilesFirst.rank4Pair[1];
      minGoal[2] = this.lastMile.rank4Pair[1];
    } else if (stepCount === 4) {
      minGoal[0] = this.last2MilesFirst.rank4Pair[0];
      minGoal[1] = this.last2MilesFirst.rank4Pair[1];
      minGoal[2] = this.last2MilesSecond.rank4Pair[0];
      minGoal[3] = this.last2MilesSecond.rank4Pair[1];
    }



    for (let step = 0; step < stepCount; step++) {
      if (!this.cards[step].start || !this.cards[step].goal) {
        this.routes[step] = [];
      } else {
        const graphDP = JSON.parse(JSON.stringify(graph));
        this.routes[step] = this.cardService.getPath(this.cards[step].start, this.cards[step].goal, graphDP);

        this.toRankMinRoutes[step] = this.cardService.getPath(this.cards[step].goal, minGoal[step], graphDP);
      }
      if (step === 0) { //1枚目
        if (stepCount === 2) {
          this.cardService.addExist(this.lastMile.rank4Pair[0]);
        } else if (stepCount >= 3) {
          this.cardService.addExist(this.last2MilesFirst.rank4Pair[0]);
        }
      } else if (step === 1) { //2枚目
        if (stepCount === 2) {
          this.cardService.removeOneFromExist(this.lastMile.rank4Pair[0]);
          this.cardService.addExist(this.lastMile.goal);
        } else if (stepCount >= 3) {
          this.cardService.removeOneFromExist(this.last2MilesFirst.rank4Pair[0]);
          this.cardService.addExist(this.last2MilesFirst.goal);
        }
      } else if (step === 2) { //3枚目
        if (stepCount === 4) {
          this.cardService.addExist(this.last2MilesSecond.rank4Pair[0]);
        }
      } else if (step === 4) { //4枚目
        if (stepCount === 4) {
          this.cardService.removeOneFromExist(this.last2MilesSecond.rank4Pair[0]);
          this.cardService.addExist(this.last2MilesSecond.goal);
        }
      }
    }
  }

  private getLastCard(routes, step: number): Card {
    if (routes[step][routes[step].length - 1]) {
      return routes[step][routes[step].length - 1].current;
    }
    return null;
  }

  getSymbol(card) {
    return this.cardService.getSymbolByCard(card);
  }

  updateExists() {
    this.cardService.clearExist();
    this.exists.map(exist => {
      this.cardService.addExist(exist);
    })
  }

  onSubmit(event) {
    if (!this.skills.length) {
      this.cardService.error("スキル入力忘れていまっせ(ﾉ∀`)")
      return
    }
    if (!this.final) {
      this.final = this.defaultFinal;
    }
    if (!this.skills.length) {
      return
    }

    this.setFinalRoutes();
  }

  onClear(event) {
    this.skill1 = undefined;
    this.skill2 = undefined;
    this.skill3 = undefined;
    this.skill4 = undefined;
  }

  setLastMiles() {
    // if (!this.final) {
    //   this.final = this.cardService.getSomeCardByRank(5);
    // }
    this.lastMile = this.cardService.getPathToFinal(this.final, 0);
    // console.log(this.lastMile);
    this.last2MilesFirst = this.cardService.getPathToFinal(this.lastMile.rank4Pair[0], 0);
    this.cardService.addExist(this.last2MilesFirst.rank4Pair[0]);
    this.last2MilesSecond = this.cardService.getPathToFinal(this.lastMile.rank4Pair[1], 0);
    this.updateExists();

  }

  setFinalRoutes() {
    this.finalRoutes = []; //初期化
    this.calcAllPath();
    this.totalSteps = this.skillDisplayed.length * 2 - 1;
    const skillCount = this.skillDisplayed.length;
    let currentSkill = 0;
    for (let step = 0; step < this.totalSteps; step++) {
      this.finalRoutes[step] = new RouteModel();
      if (step === 0) { //1回目は必ず最初のスキルを合成する動きになる
        this.finalRoutes[step].skills.push(this.skillDisplayed[0]);
        this.finalRoutes[step].divider = this.routes[0].length;
        this.finalRoutes[step].routes.push(...this.routes[0]);
        this.finalRoutes[step].routes.push(...this.toRankMinRoutes[0]);
      } else if (step === 1) { //2回目は必ず次のスキルを合成する動きになる
        this.finalRoutes[step].skills.push(this.skillDisplayed[1]);
        this.finalRoutes[step].divider = this.routes[1].length;
        this.finalRoutes[step].routes.push(...this.routes[1]);
        this.finalRoutes[step].routes.push(...this.toRankMinRoutes[1]);
      } else if (step === 2) { //3回目は1回目と2回目のカードを合成する動きとなる
        this.finalRoutes[step].skills.push(this.skillDisplayed[0], this.skillDisplayed[1]);
        this.finalRoutes[step].divider = NaN; //分岐点はなし

        //スキルの数によって動作が異なる
        if (skillCount === 2) { //1はありえない. スキルの数が2の時は、最後のステップは後1回
          this.finalRoutes[step].routes.push({
            orig: this.lastMile.rank4Pair[0],
            merged: this.lastMile.rank4Pair[1],
            goal: this.lastMile.rank5
          });

          if (this.lastMile.rank5.name !== this.lastMile.goal.name) { //着地カードがrank5じゃない場合
            this.finalRoutes[step].routes.push({
              orig: this.lastMile.rank5,
              merged: this.lastMile.merged,
              goal: this.lastMile.goal
            });
          }
        } else { //3つ以上スキルがあるは1枚目と2枚目を合成するステップとなる
          this.finalRoutes[step].routes.push(
            {
              orig: this.last2MilesFirst.rank4Pair[0],
              merged: this.last2MilesFirst.rank4Pair[1],
              goal: this.last2MilesFirst.rank5
            },
            {
              orig: this.last2MilesFirst.rank5,
              merged: this.last2MilesFirst.merged,
              goal: this.last2MilesFirst.goal
            }
          );
        }
      } else if (step === 3) { //4回目は3つめのskill作成
        this.finalRoutes[step].skills.push(this.skillDisplayed[2]);
        this.finalRoutes[step].divider = this.routes[2].length;
        this.finalRoutes[step].routes.push(...this.routes[2]);
        this.finalRoutes[step].routes.push(...this.toRankMinRoutes[2]);
      } else if (step === 4) { //5回目はスキルの数によって異なる
        if (skillCount === 3) { //3つスキルがある場合は1,2,3のスキルを合成させたカードになる
          this.finalRoutes[step].skills.push(this.skillDisplayed[0], this.skillDisplayed[1], this.skillDisplayed[2]);

          this.finalRoutes[step].routes.push({
            orig: this.lastMile.rank4Pair[0],
            merged: this.lastMile.rank4Pair[1],
            goal: this.lastMile.rank5
          });

          if (this.lastMile.rank5.name !== this.lastMile.goal.name) { //着地カードがrank5じゃない場合
            this.finalRoutes[step].routes.push({
              orig: this.lastMile.rank5,
              merged: this.lastMile.merged,
              goal: this.lastMile.goal
            });
          }
        } else if (skillCount === 4) { //4つスキルがある場合は、4つめのスキルカードを作成
          this.finalRoutes[step].skills.push(this.skillDisplayed[3]);
          this.finalRoutes[step].divider = this.routes[3].length;
          this.finalRoutes[step].routes.push(...this.routes[3]);
          this.finalRoutes[step].routes.push(...this.toRankMinRoutes[3]);
        }
      } else if (step === 5) { //6回目  ここに来るには4つスキルがないと不可. 3,4を合成する
        this.finalRoutes[step].skills.push(this.skillDisplayed[2], this.skillDisplayed[3])

        this.finalRoutes[step].routes.push(
          {
            orig: this.last2MilesSecond.rank4Pair[0],
            merged: this.last2MilesSecond.rank4Pair[1],
            goal: this.last2MilesSecond.rank5
          },
          {
            orig: this.last2MilesSecond.rank5,
            merged: this.last2MilesSecond.merged,
            goal: this.last2MilesSecond.goal
          }
        );
      } else if (step === 6) { //最後のステップ
        this.finalRoutes[step].skills.push(this.skillDisplayed[0], this.skillDisplayed[1], this.skillDisplayed[2], this.skillDisplayed[3]);
        this.finalRoutes[step].divider = NaN;
        this.finalRoutes[step].routes.push({
          orig: this.lastMile.rank4Pair[0],
          merged: this.lastMile.rank4Pair[1],
          goal: this.lastMile.rank5
        });

        if (this.lastMile.rank5.name !== this.lastMile.goal.name) { //着地カードがrank5じゃない場合
          this.finalRoutes[step].routes.push({
            orig: this.lastMile.rank5,
            merged: this.lastMile.merged,
            goal: this.lastMile.goal
          });
        }
      }
    }
  }
}
