
import { Card } from './card.model';
import { Skill } from './skill.model';

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

export class Step {
  type: Action;
  main: Card;
  material?: Card;
  skills: string[];
  currentSkills: string[];
  isFinal?: boolean;
}

type Action = "draw" | "merge" | "arm";
