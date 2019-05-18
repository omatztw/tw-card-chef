
import { Card } from './card.model';

export class RouteModel {
  pre: Path[] = [];
  skills: string[] = [];
  routes: Path[] = [];
  // 区切り線が必要な場所
  divider = NaN;
}

export class Path {
  orig: Card;
  merged: Card;
  goal: Card;
}
