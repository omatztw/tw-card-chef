import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { ResultComponent } from '../result/result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { ErrorService } from '../../services/error.service';
import {
  SKILL_ARRAY,
  SKILL_ARRAY_FORTEST1,
  SKILL_ARRAY_FORTEST2,
  SKILL_ARRAY_FORTEST3,
  SKILL_ARRAY_FORTEST4,
  SKILL_ARRAY_FORTEST5,
  SKILL_ARRAY_FORTEST6,
  SKILL_ARRAY_FORTEST7,
} from '../../consts';
import k_combinations from '../../../assets/combinations.js';

// private debug1() {
//   this.skill1 = "MR増加";
//   this.skill2 = "天の裁き";
// }

// private debug2() {
//   this.skill3 = "HACK成長";
//   this.skill4 = "追撃[風]";
// }

// private debug3() {
//   this.skill1 = "AGI成長";
//   this.skill2 = "初速";
//   this.skill3 = "属性UP[雷]"
// }

// private debug4() {
//   this.skill5 = "AGI成長";
//   this.skill6 = "初速";
//   this.skill7 = "属性UP[雷]"
// }

// private debug5() {
//   this.skill1 = "SP吸収";
//   this.skill2 = "MP吸収";
//   this.skill3 = "女神の微笑";
//   this.skill4 = "瞬足";
//   this.skill5 = "属性UP[白]";
//   this.skill6 = "追撃[白]";
//   this.skill7 = "財力";
//   this.skill8 = "耐久の初撃";
// }

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, ResultComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        CardService, ErrorService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('スキル8個が7個にまとまるパターンで問題ないこと', () => {
    component.skill1 = "SP吸収";
    component.skill2 = "MP吸収";
    component.skill3 = "女神の微笑";
    component.skill4 = "瞬足";
    component.skill7 = "属性UP[白]"; //財力と重なる
    component.skill5 = "財力";
    component.skill6 = "追撃[白]";
    component.skill8 = "耐久の初撃";
    fixture.detectChanges();
    component.onSubmit(null);
    const service = new CardService(null);
    expect(component.finalRoutes.length).toBe(13);
    component.finalRoutes.forEach(
      route => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
      })
    );
    expect(component.finalRoutes[7].pre.length).toBe(0); //重なった場合
  });

  it('着地がRank6の場合で問題ないこと', () => {
    const service = new CardService(null);
    component.skill1 = "MR増加";
    component.skill2 = "MR成長";
    component.skill3 = "女神の微笑";
    component.skill4 = "耐久の初撃";
    component.skill5 = "鋼の肌";
    component.skill6 = "魔法耐性";
    component.skill7 = "属性UP[白]";
    component.skill8 = "追撃[白]";
    component.final = service.getCardByType('ゼリー', 6);
    fixture.detectChanges();
    component.onSubmit(null);
    expect(component.finalRoutes.length).toBe(13);
    component.finalRoutes.forEach(
      route => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
      })
    );
    expect(component.finalRoutes[7].pre.length).toBe(0); //重なった場合
  });

  it('着地がRank10の場合で問題ないこと', () => {
    const service = new CardService(null);
    component.skill1 = "MR増加";
    component.skill2 = "MR成長";
    component.skill3 = "女神の微笑";
    component.skill4 = "耐久の初撃";
    component.skill5 = "鋼の肌";
    component.skill6 = "魔法耐性";
    component.skill7 = "属性UP[白]";
    component.skill8 = "追撃[黒]";
    component.final = service.getCardByType('ゼリー', 10);
    fixture.detectChanges();
    component.onSubmit(null);
    expect(component.finalRoutes.length).toBe(15);
    component.finalRoutes.forEach(
      route => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
      })
    );
    expect(component.finalRoutes[7].pre.length).toBe(0); //重なった場合
  });

  it('所有済みのカードが合成されないこと', () => {
    const service = new CardService(null);
    component.skill1 = "SP吸収";
    component.skill2 = "MP吸収";
    component.skill3 = "女神の微笑";
    component.skill4 = "瞬足";
    component.skill5 = "属性UP[白]";
    component.skill7 = "夜行性";
    component.skill6 = "追撃[白]";
    component.skill8 = "耐久の初撃";
    component.exist1 = service.getCardByType('ゼリー', 6);
    component.exist2 = service.getCardByType('ゼリー', 5);
    component.exist3 = service.getCardByType('ゼリー', 4);
    component.exist4 = service.getCardByType('昆虫', 5);
    component.exist5 = service.getCardByType('ゼリー', 6);
    component.exist6 = service.getCardByType('ゼリー', 7);
    fixture.detectChanges();
    component.onSubmit(null);
    expect(component.finalRoutes.length).toBe(15);
    component.finalRoutes.forEach(
      route => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
        expect(component.exists).not.toContain(aRoute.goal);
      })
    );
  });

  it('スキル8個のパターンで問題ないこと', () => {
    component.skill1 = "SP吸収";
    component.skill2 = "MP吸収";
    component.skill3 = "女神の微笑";
    component.skill4 = "瞬足";
    component.skill5 = "属性UP[白]";
    component.skill7 = "夜行性";
    component.skill6 = "追撃[白]";
    component.skill8 = "耐久の初撃";
    fixture.detectChanges();
    component.onSubmit(null);
    // const service = fixture.debugElement.injector.get(CardService);
    const service = new CardService(null);
    expect(component.finalRoutes.length).toBe(15);
    component.finalRoutes.forEach(
      route => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
        expect(component.exists).not.toContain(aRoute.goal);
      })
    );
  });

  it('スキル8個のパターンで問題ないこと', () => {
    const service = new CardService(null);
    component.skill1 = "SP回復";
    component.skill2 = "MP回復";
    component.skill3 = "女神の微笑";
    component.skill4 = "瞬足";
    component.skill5 = "属性UP[白]";
    component.skill7 = "鋼の肌";
    component.skill6 = "追撃[白]";
    component.skill8 = "魔法耐性";
    component.final = service.getCardByType('悪魔', 5);

    component.exist1 = service.getCardByType('猛者', 5);
    component.exist2 = service.getCardByType('人形', 5);
    component.exist3 = service.getCardByType('甲羅', 5);

    fixture.detectChanges();
    component.onSubmit(null);
    component.finalRoutes.forEach(
      route => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
        expect(component.exists).not.toContain(aRoute.goal);
      })
    );
  });

  it('スキル8個のパターンで問題ないこと1', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST1, 8);
    skillPattern.forEach(
      pattern => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );

      }
    )


  });
  it('スキル8個のパターンで問題ないこと2', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST2, 8);
    skillPattern.forEach(
      pattern => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );

      }
    )


  });
  it('スキル8個のパターンで問題ないこと3', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST3, 8);
    skillPattern.forEach(
      pattern => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );

      }
    )


  });
  it('スキル8個のパターンで問題ないこと4', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST4, 8);
    skillPattern.forEach(
      pattern => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );

      }
    )


  });
  it('スキル8個のパターンで問題ないこと5', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST5, 8);
    skillPattern.forEach(
      pattern => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );

      }
    )


  });
  it('スキル8個のパターンで問題ないこと6', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST6, 8);
    skillPattern.forEach(
      pattern => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );

      }
    )


  });

  it('スキル8個のパターンで問題ないこと7', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST7, 8);
    skillPattern.forEach(
      pattern => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );

      }
    )
  });

  it('スキル8個のパターンでRank6着地で問題ないこと', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST1, 8);
    skillPattern.forEach(
      (pattern, index) => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        component.final = service.getCardByType('ゼリー', 6);
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );
      }
    )
  });

  it('スキル8個のパターンでRank10着地で問題ないこと', () => {
    const service = new CardService(null);
    const skillPattern = k_combinations(SKILL_ARRAY_FORTEST2, 8);
    skillPattern.forEach(
      (pattern, index) => {
        component.skill1 = pattern[0];
        component.skill2 = pattern[1];
        component.skill3 = pattern[2];
        component.skill4 = pattern[3];
        component.skill5 = pattern[4];
        component.skill6 = pattern[5];
        component.skill7 = pattern[6];
        component.skill8 = pattern[7];
        component.final = service.getCardByType('ゼリー', 10);
        fixture.detectChanges();
        component.onSubmit(null);
        component.finalRoutes.forEach(
          route => route.routes.map(aRoute => {
            if (aRoute.orig && aRoute.merged) {
              expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
            }
            expect(component.exists).not.toContain(aRoute.goal);
          })
        );
      }
    )
  });


  it('水属性UPと水追撃UPのパターン', () => {
    const service = new CardService(null);
    component.skill1 = "SP吸収";
    component.skill2 = "MP吸収";
    component.skill3 = "女神の微笑";
    component.skill4 = "瞬足";
    component.skill5 = "属性UP[水]";
    component.skill7 = "鋼の肌";
    component.skill6 = "追撃[水]";
    component.skill8 = "魔法耐性";
    component.final = service.getCardByType('悪魔', 5);

    component.exist1 = service.getCardByType('猛者', 5);
    component.exist2 = service.getCardByType('人形', 5);
    component.exist3 = service.getCardByType('甲羅', 5);

    fixture.detectChanges();
    component.onSubmit(null);
    expect(component.finalRoutes.length).toBe(11);
    component.finalRoutes.forEach(
      route => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
        expect(component.exists).not.toContain(aRoute.goal);
        expect(component.exists).not.toContain(aRoute.merged);
      })
    );
  });

  it('イジワルが重複する問題', () => {
    const service = new CardService(null);
    component.skill1 = "属性UP[白]";
    component.skill2 = "追撃[白]";
    component.skill3 = "MP吸収";
    component.skill4 = "SP吸収";
    component.skill5 = "女神の微笑";
    component.skill6 = "瞬足";
    component.skill7 = "初速";
    component.skill8 = "耐久の初撃";
    component.final = service.getCardByType('昆虫', 4);

    fixture.detectChanges();
    component.onSubmit(null);
    expect(component.finalRoutes.length).toBe(15);
    component.finalRoutes.forEach(
      (route, index) => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
        if (index >= 7 && index <= 13) { // 右半分にイジワル[6]がいないこと
          expect(component.finalRoutes[6].routes[component.finalRoutes[6].routes.length - 1].goal).not.toBe(aRoute.goal);
          expect(component.finalRoutes[6].routes[component.finalRoutes[6].routes.length - 1].goal).not.toBe(aRoute.merged);
        }
        expect(service.exists).not.toContain(aRoute.goal);
        expect(service.exists).not.toContain(aRoute.merged);
      })
    );
  });

  it('イジワルが重複する問題2', () => {
    const service = new CardService(null);
    component.skill1 = "HP吸収";
    component.skill2 = "MP吸収";
    component.skill3 = "属性UP[黒]";
    component.skill4 = "追撃[黒]";
    component.skill5 = "瞬足";
    component.skill6 = "女神の微笑";
    component.skill7 = "自己再生";
    component.skill8 = "初速";
    component.exist1 = service.getCardByType('人形', 8)
    component.final = service.getCardByType('人形', 5);

    fixture.detectChanges();
    component.onSubmit(null);
    expect(component.finalRoutes.length).toBe(15);
    component.finalRoutes.forEach(
      (route, index) => route.routes.map(aRoute => {
        if (aRoute.orig && aRoute.merged) {
          expect(aRoute.goal).toBe(service.mergeCard(aRoute.orig, aRoute.merged));
        }
        if (index >= 7 && index <= 13) { // 右半分にイジワル[6]がいないこと
          expect(component.finalRoutes[6].routes[component.finalRoutes[6].routes.length - 1].goal).not.toBe(aRoute.goal);
          expect(component.finalRoutes[6].routes[component.finalRoutes[6].routes.length - 1].goal).not.toBe(aRoute.merged);
        }
        expect(service.exists).not.toContain(aRoute.goal);
        expect(service.exists).not.toContain(aRoute.merged);
      })
    );
  });

});
