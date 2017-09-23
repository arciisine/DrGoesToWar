export type Cell = 'X' | 'O' | '';

export class Board {
  node: HTMLDivElement;
  cards: HTMLElement[];

  constructor(node: HTMLDivElement = null) {
    if (node) {
      this.node = node;
    } else {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }

    this.node.classList.add('board');


    let card = document.createElement('div');
    card.classList.add('card', 'card-4-13');

    this.node.appendChild(card);

    let blank = document.createElement('div');
    blank.classList.add('card');

    this.node.appendChild(blank);

  }
}