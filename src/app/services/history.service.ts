import { Injectable } from '@angular/core';
import { MergedHistory } from '../models/history.model';

@Injectable()
export class HistoryService {

  constructor() { }

  setHistory(history: MergedHistory) {
    localStorage.setItem('history', JSON.stringify(history));
  }

  clearHistory() {
    localStorage.removeItem('history');
  }

  deleteHistory(history: MergedHistory) {
    const histories = JSON.parse(localStorage.getItem('history'));
    delete histories[JSON.stringify(history)];
    localStorage.setItem('history', JSON.stringify(histories));
  }

  updateHistory(history: MergedHistory, time: Date) {
    const updateHistory = {
      [JSON.stringify(history)]: time
    };
    const histories = JSON.parse(localStorage.getItem('history'));
    const allHistories = Object.assign(histories ? histories : {}, updateHistory);
    localStorage.setItem('history', JSON.stringify(allHistories));

  }

  getHistories(): any[] {
    const histories = [];
    const current_history = JSON.parse(localStorage.getItem('history'));
    if (current_history) {
      Object.keys(current_history).forEach(
        key => histories.push({
          content: JSON.parse(key),
          time: new Date(current_history[key])
        })
      );
    }
    return histories;
  }

}
