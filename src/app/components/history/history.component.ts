import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { Card } from '../../models/card.model';
import { Router } from '@angular/router';
import { MergedHistory } from '../../models/history.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(
    private historyService: HistoryService,
    private router: Router,
    private cardService: CardService
  ) { }

  histories;

  ngOnInit() {
    this.loadHistory();
  }

  convertToName(cards: Card[]) {
    return cards.map(card => card.name);
  }

  onClear() {
    this.historyService.clearHistory();
    this.loadHistory();
  }

  loadHistory() {
    this.histories = this.historyService.getHistories().sort((a, b) => b.time - a.time);
  }

  onRerender(item: MergedHistory) {
    const queryParams = {
      s1: item.skills[0] || null,
      s2: item.skills[1] || null,
      s3: item.skills[2] || null,
      s4: item.skills[3] || null,
      s5: item.skills[4] || null,
      s6: item.skills[5] || null,
      s7: item.skills[6] || null,
      s8: item.skills[7] || null,
      e1: this.cardService.getSymbolByCard(item.exists[0] || null),
      e2: this.cardService.getSymbolByCard(item.exists[1] || null),
      e3: this.cardService.getSymbolByCard(item.exists[2] || null),
      e4: this.cardService.getSymbolByCard(item.exists[3] || null),
      e5: this.cardService.getSymbolByCard(item.exists[4] || null),
      e6: this.cardService.getSymbolByCard(item.exists[5] || null),
      e7: this.cardService.getSymbolByCard(item.exists[6] || null),
      e8: this.cardService.getSymbolByCard(item.exists[7] || null),
      f: this.cardService.getSymbolByCard(item.final),
    };

    this.router.navigate([''], {
      queryParams: queryParams
    });
  }

  onDelete(item: MergedHistory) {
    this.historyService.deleteHistory(item);
    this.loadHistory();
  }

}
