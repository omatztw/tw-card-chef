import { Skill } from './skill.model';
import { State } from './state.model';
import { cards } from '../consts/cards.const';

const card = cards;

export class Card {
    name: string;
    type: string;
    rank: number;
    img?: string;
    // status: State[];
    skills?: [{
        lv: number,
        name: string,
        value: number
    }]

}