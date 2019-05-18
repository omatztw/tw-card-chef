import { Card } from './card.model';
import { Path } from './route.model';

export class FinalPathTree {
  top: FinalPath;
  children: FinalPathTree[];

  constructor(finalPath: FinalPath) {
    this.top = finalPath;
    this.children = [];
  }
}

export class FinalPathBinaryTree {

  data: FinalPath;
  left: FinalPathBinaryTree;
  right: FinalPathBinaryTree;
  size: number;

  constructor(data: FinalPath) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.size = 1;
  }

  add(finalPath: FinalPath) {
    if (!this.left) {
      this.left = new FinalPathBinaryTree(finalPath);
    } else if (!this.right) {
      this.right = new FinalPathBinaryTree(finalPath);
    } else if (this.leftFull()) {
      this.right.add(finalPath);
    } else {
      this.left.add(finalPath);
    }
    this.size++;
  }

  getLast(current: FinalPathBinaryTree) {
    if (!current.left) {
      return current;
    } else if (!current.right) {
      return current;
    } else if (current.leftFull()) {
      current = this.getLast(current.right);
    } else {
      current = this.getLast(current.left);
    }
    return current;
  }

  getByIndex(index: number): FinalPath {

    // 段数を計算する。2 ** n乗で階層が一段下がる。
    const n = (new Array(index)).fill(null).map((_, i) => i).find(i => {
      return (2 ** i <= index && 2 ** (i + 1) > index);
    });

    // 階層が下がったところを基本として、indexを2進数に変換する。
    const bin = index === 1 ? '' : ('0000000' + parseInt((index - 2 ** n).toString(2), 10)).slice(-n);
    return this.getByBin(bin.split(''));
  }

  // 2進数で0は左ツリー、1は右ツリーとして、木を探索する。
  getByBin(bin: string[]): FinalPath {
    if (!bin.length) {
      return this.data;
    }
    const c = bin.shift();
    switch (c) {
      case '0':
        return this.left.getByBin(bin);
      case '1':
        return this.right.getByBin(bin);
      default:
        return null;
    }
  }

  getMinGoals() {
    return this.getRoutes([])
      .filter(route => route[0].merged === null && route[0].orig === null)
      .map(route => route[0].goal);
  }

  leftFull(): boolean {
    let leafs = 1;
    let used: number;
    while (leafs <= (this.size + 1)) {
      leafs *= 2;
    }
    leafs = Math.floor(leafs / 2);
    used = (this.size + 1) % leafs;
    if (used >= Math.floor(leafs / 2)) {
      return true;
    } else {
      return false;
    }
  }

  getRoutes(current: Path[][]): Path[][] {
    if (this.left) {
      current = this.left.getRoutes(current);
    }
    if (this.right) {
      current = this.right.getRoutes(current);
    }
    if (!this.left && !this.right) {
      const path: Path = {
        orig: null,
        goal: this.data.goal,
        merged: null
      };
      current.push([path]);
    } else {
      const path: Path[] = [{
        orig: this.left.data.goal,
        goal: this.data.rank5,
        merged: this.right.data.goal
      }];
      if (this.data.rank5 !== this.data.goal) {
        path.push({
          orig: this.data.rank5,
          goal: this.data.goal,
          merged: this.data.merged
        });
      }
      current.push(path);
    }
    return current;
  }
}

export class FinalPath {
  rank4Pair: Card[];
  rank5: Card;
  merged: Card;
  goal: Card;

  constructor() {

  }
}
