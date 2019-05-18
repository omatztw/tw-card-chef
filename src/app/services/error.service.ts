import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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
