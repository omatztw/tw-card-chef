export class Card {
  name: string;
  type: string;
  rank: number;
  img?: string;
  // status: State[];
  skills?: {
    lv: number,
    name: string,
    value: number
  }[];
}
