import { Component, Input } from '@angular/core';
import { RouteModel } from '../../models/route.model';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

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
}
