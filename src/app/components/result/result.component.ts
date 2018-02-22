import { Component, Input } from '@angular/core';
import { RouteModel } from '../../models/route.model';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  @Input() routes: RouteModel[];

  constructor(
    private cardService: CardService
  ) { }

  getSymbol(card) {
    return this.cardService.getSymbolByCard(card);
  }

  filterSkill(skill, card: Card) {
    const fskill = card.skills.filter(s => {
      return s.name === skill;
    });
    return fskill[0];
  }

  filterSkills(skills: any[], card: Card, exclude: Skill = null) {
    const fskill = skills.map(
      skill => this.filterSkill(skill, card)
    ).filter(skill => !!skill && skill !== exclude);

    return fskill;
  }

  getMaxLv(skills: any[], card: Card) {
    const lvArray = skills.map(skill => {
      const filteredSkill = this.filterSkill(skill, card);
      if (filteredSkill) {
        return filteredSkill.lv
      }
    }).filter(lv => !!lv);
    return Math.max(...lvArray);
  }

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }
}
