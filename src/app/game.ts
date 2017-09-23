import { Board } from "./board";

export class Game {
  board: Board;
  player: number = 0;

  constructor() {
    this.board = new Board();
  }
}