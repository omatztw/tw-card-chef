// tslint:disable: curly

import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';
import { Step } from '../../models/route.model';
import {
  TYPES,
  cards,
  SKILL_ARRAY,
} from '../../consts/index';
import { Skill } from '../../models/skill.model';
import { ErrorService } from '../../services/error.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MergedHistory } from '../../models/history.model';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', './toggle.scss'],
})
export class CardComponent implements OnInit {
  final: Card;

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

  TYPES = TYPES;
  SKILL_ARRAY = SKILL_ARRAY;
  cardList = cards;
  errMsg;

  finalSteps: Step[] = [];
  prioritySkills: Skill[] = [];
  materialA: Card;
  materialB: Card;
  cardIndexedArray = [];
  skillPoolA: string[] = [];
  skillPoolB: string[] = [];

  limit: number = 11;

  constructor(
    private cardService: CardService,
    private errorService: ErrorService,
    private historyService: HistoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.errorService.error$
      .asObservable()
      .subscribe((err) => (this.errMsg = err));

    this.route.queryParamMap.subscribe((params) => {
      this.skill1 = params.get('s1');
      this.skill2 = params.get('s2');
      this.skill3 = params.get('s3');
      this.skill4 = params.get('s4');
      this.skill5 = params.get('s5');
      this.skill6 = params.get('s6');
      this.skill7 = params.get('s7');
      this.skill8 = params.get('s8');

      this.exist1 = this.cardService.getCardBySymbol(params.get('e1'));
      this.exist2 = this.cardService.getCardBySymbol(params.get('e2'));
      this.exist3 = this.cardService.getCardBySymbol(params.get('e3'));
      this.exist4 = this.cardService.getCardBySymbol(params.get('e4'));
      this.exist5 = this.cardService.getCardBySymbol(params.get('e5'));
      this.exist6 = this.cardService.getCardBySymbol(params.get('e6'));
      this.exist7 = this.cardService.getCardBySymbol(params.get('e7'));
      this.exist8 = this.cardService.getCardBySymbol(params.get('e8'));

      const l = parseInt(params.get('l'));
      if (l) {
        this.limit = l;
      }

      const f = this.cardService.getCardBySymbol(params.get('f'));
      if (f) {
        this.final = f;
      }

      if (params.keys) {
        if (this.skills.length) {
          this.onSubmit(null);
        }
      }
    });
  }

  deduplicateSkills(own: string): string[] {
    const selectedSkills = this.skills.filter((s) => s !== own);
    return SKILL_ARRAY.filter((s) => {
      return !selectedSkills.find((sk) => sk === s);
    });
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

    // 重複するものを除く
    skills = skills.filter((skill, index) => {
      return index === skills.indexOf(skill);
    });
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
    });
    return exists;
  }

  // Rank4 - 8までのカードが着地として選択可能
  get goalCardList() {
    return this.cardList.filter((card) => {
      return card.rank >= 4 && card.rank <= this.limit;
    });
  }


  updateQueryParams(): void {
    const queryParams: Params = {
      s1: this.skill1,
      s2: this.skill2,
      s3: this.skill3,
      s4: this.skill4,
      s5: this.skill5,
      s6: this.skill6,
      s7: this.skill7,
      s8: this.skill8,
      e1: this.cardService.getSymbolByCard(this.exist1),
      e2: this.cardService.getSymbolByCard(this.exist2),
      e3: this.cardService.getSymbolByCard(this.exist3),
      e4: this.cardService.getSymbolByCard(this.exist4),
      e5: this.cardService.getSymbolByCard(this.exist5),
      e6: this.cardService.getSymbolByCard(this.exist6),
      e7: this.cardService.getSymbolByCard(this.exist7),
      e8: this.cardService.getSymbolByCard(this.exist8),
      f: this.cardService.getSymbolByCard(this.final),
      l: this.limit
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }

  onSubmit(event) {
    this.updateQueryParams();

    this.InitValues();

    if (!this.skills.length) {
      this.errorService.error('スキル入力忘れていまっせ(ﾉ∀`)');
      return;
    }

    if (!this.final) {
      this.errorService.error(
        '着地カード設定してな(´・ω・`)'
      );
      return;
    }

    const history = new MergedHistory();
    const now = new Date();
    history.skills = this.skills;
    history.exists = this.exists;
    history.final = this.final;
    history.limit = this.limit;

    this.historyService.updateHistory(history, now);

    // DO CALC STEP

    // 着地カードが必要スキルの最大値を所持しているかどうかを確認する。
    this.findPrioritySkills();
    // 残ったskillのうち、最大スキルを持つカード（複数）を導き出す
    // skill武装に使うカードを算出
    this.findCardForSkillsArm();

    // 必要スキルと同系スキルを多く持っているRank0のカードを探す
    this.findMaterialCard();
    // skillA群とskillB群にわける
    this.fillSkillPools();
    // 手順の作成
    this.calcSteps();

  }

  findCardForSkillsArm() {
    const remainingSkills = this.skills.filter(ts => !this.prioritySkills.some(ps => ps.name === ts));
    const maxValuedCards = remainingSkills.map(rs => {
      return {
        skill: rs,
        cards: this.cardService.getCardsBySkill(rs, this.limit)
      };
    });

    let cardIndexed = {};

    maxValuedCards.forEach(mvc => {
      mvc.cards.forEach(c => {
        if(!cardIndexed[c.name]) {
          cardIndexed[c.name] = [];
        }
        cardIndexed[c.name].push(mvc.skill);
      });
    });

    let cardIndexedArray = Object.keys(cardIndexed).map(key => {
      return {
        card: this.cardService.getCardByName(key),
        skills: cardIndexed[key]
      };
    }).sort((a, b) => {
      if(a.skills.length !== b.skills.length) {
        return b.skills.length - a.skills.length;
      }
      if(a.card.rank !== b.card.rank) {
        return a.card.rank - b.card.rank;
      }
      return 0;
    });

    let tmpSkills = [...this.skills];
    const len = cardIndexedArray.length;

    for(let i = 0; i < len; i++) {
      if(cardIndexedArray[i].skills.every(s => tmpSkills.some(ts => ts === s))) {
        cardIndexedArray = cardIndexedArray.map((ci, index) => {
          if(index <= i) {
            return ci;
          }
          return {
            card: ci.card,
            skills: ci.skills.filter(s => !cardIndexedArray[i].skills.some(cs => cs === s))
          }
        });
        tmpSkills = tmpSkills.filter(ts => !cardIndexedArray[i].skills.some(s => ts === s));
      }
    }
    this.cardIndexedArray = cardIndexedArray.filter(cia => cia.skills.length);


  }

  findPrioritySkills() {
    const maxValuedSkills = this.final.skills.filter(skill => this.cardService.findMaxValue(skill.name, this.limit) === skill.value);
    this.prioritySkills = maxValuedSkills.filter(skill => this.skills.some(s => s === skill.name));
  }

  findMaterialCard() {
    this.materialB = this.materialA = this.cardList.find(card => card.rank === 0 && !this.cardService.isExist(card));
    // const lowRankCardHasSameSkill = this.cardList
    //                                 .filter(card => card.rank < 2)
    //                                 .filter(card => card.skills.some(s => this.skills.some(ts => ts === s.name)))
    //                                 .map(card => {
    //                                   return {
    //                                     card: card,
    //                                     skills: card.skills.filter(s => this.skills.some(ts => ts === s.name)),
    //                                   };
    //                                 });
    // if(lowRankCardHasSameSkill.length === 0) {
    //   return;
    // }

    
    // const material = lowRankCardHasSameSkill.reduce((p, c) => {
    //   if(p.skills.length < c.skills.length) {
    //     return c;
    //   }
    //   return p;
    // });
    // this.materialA = material.card;
    // this.duplicatedSkills = material.skills;
  }


  fillSkillPools() {
    this.skillPoolA.push(...this.prioritySkills.map(s => s.name));
    this.cardIndexedArray.forEach(cia => {
      if(this.skillPoolA.length < 4) {
        if(this.skillPoolA.length + cia.skills.length <= 4) {
          this.skillPoolA.push(...cia.skills);
        }
      }
    });

    this.skillPoolB = this.skills.filter(skill => !this.skillPoolA.some(s => s === skill));

  }

  calcSteps() {
    let totalSkills = [];
    const step1 = new Step();
    step1.main = this.materialA;
    step1.type = 'draw';
    step1.skills = step1.currentSkills = [];
    totalSkills.push(...step1.skills);
    this.finalSteps.push(step1);

    this.skillPoolA.forEach(spA => {
      let materialCard:Card;
      const step = new Step();
      step.main = this.materialA;
      if(this.prioritySkills.some(ps => ps.name === spA)) {
        return;
      }
      if(totalSkills.some(ts => ts === spA)) {
        return;
      }
      const material = this.cardIndexedArray.find(cia => cia.skills.some(s => s === spA));
      materialCard = material.card;
      const materialCardSkills = material.skills;
      step.material = materialCard;
      step.type = 'arm';
      step.skills = materialCardSkills;
      totalSkills.push(...materialCardSkills);
      step.currentSkills = [...new Set(totalSkills)];
      this.finalSteps.push(step);
    });

    const step2 = new Step();
    step2.main = this.final;
    step2.type = 'draw';
    step2.skills = step2.currentSkills = this.prioritySkills.map(s => s.name);
    this.finalSteps.push(step2);

    const step3 = new Step();
    step3.main = this.final;
    step3.material = this.materialA;
    step3.type = 'merge';
    step3.skills = step3.currentSkills = this.skillPoolA;
    this.finalSteps.push(step3);

    if(this.skillPoolB.length > 0) {
      totalSkills = [];
      const step4 = new Step();
      step4.main = this.materialB;
      step4.type = 'draw';
      step4.skills = step4.currentSkills = [];
      this.finalSteps.push(step4);

      this.skillPoolB.forEach(spB => {
        let materialCard:Card;
        const step = new Step();
        step.main = this.materialB;
        if(totalSkills.some(ts => ts === spB)) {
          return;
        }
        const material = this.cardIndexedArray.find(cia => cia.skills.some(s => s === spB));
        step.material = material.card;
        step.type = 'arm';
        step.skills = material.skills;
        totalSkills.push(...material.skills);
        step.currentSkills = [...new Set(totalSkills)];
        this.finalSteps.push(step);

      });
  
      const step5 = new Step();
      step5.main = this.final;
      step5.material = this.materialB;
      step5.type = 'merge';
      step5.isFinal = true;
      step5.skills = step5.currentSkills = this.skills;
      this.finalSteps.push(step5);

    }  
  }

  InitValues() {
    this.finalSteps = [];
    this.prioritySkills = [];
    this.materialA = null;
    this.materialB = null;
    this.cardIndexedArray = [];
    this.skillPoolA = [];
    this.skillPoolB = [];
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

}
