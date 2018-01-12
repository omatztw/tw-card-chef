import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { ResultComponent } from '../result/result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { ErrorService } from '../../services/error.service';

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
    // const service = fixture.debugElement.injector.get(CardService);
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
    component.exist2 = service.getCardByType('悪魔', 5);
    component.exist3 = service.getCardByType('昆虫', 5);
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
      })
    );
  });

});
