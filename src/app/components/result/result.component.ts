import { Component, Input } from '@angular/core';
import { RouteModel, Step } from '../../models/route.model';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  // @Input() routes: RouteModel[];
  @Input() routes: Step[];

  constructor(
    private cardService: CardService
  ) { }

  getSymbol(card) {
    return this.cardService.getSymbolByCard(card);
  }

}
