import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ErrorService {

  error$ = new Subject();

  constructor() { }

  error(msg: string) {
    this.error$.next(msg);
  }

  clear() {
    this.error$.next('');
  }

}
