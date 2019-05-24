import { Skill } from './skill.model';
import { Card } from './card.model';

export class MergedHistory {
  skills: Skill[];
  exists: Card[];
  final: Card;
  isRank10Enabled: boolean;
}
