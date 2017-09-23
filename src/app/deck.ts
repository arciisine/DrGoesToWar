export interface Card {
  rank: number;
  suit: number;
  value: number;
}

export let DECK: Card[] = [];

for (let suit = 1; suit <= 4; suit++) {
  for (let rank = 1; rank <= 13; rank++) {
    DECK.push({
      rank,
      suit,
      value: rank
    });
  }
}

export function shuffle(cards: Card[]) {
  for (let i = 0; i < 1000; i++) {
    let firstPos = Math.trunc(Math.random() * cards.length);
    let secondPos = Math.trunc(Math.random() * cards.length);

    let temp = cards[firstPos];
    cards[firstPos] = cards[secondPos];
    cards[secondPos] = temp;
  }
}