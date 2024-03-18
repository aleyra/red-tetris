import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  board: any[20][10];
  gameStartTimestamp: number;
  pieces: ["I", "J", "L", "S", "Z", "O"]
  rest: string[]

  constructor() {
    this.board = new Array(20).fill(new Array(10).fill(' '));
    this.gameStartTimestamp = Date.now();
  }

  gameStart(): string {
    console.log('Game started');
    this.createBoard();
    return 'Let the game begin!';
  }

  createBoard(): string {
    console.log(this.board)
    return 'Board created!';
  }

  updateBoard(): string {

    console.log('Board updated');
    if ()
    return 'Board updated!';
  }

  getNewPiece(): string {
    if (this.rest.length === 0) {
      this.rest = [...this.pieces];
    }
    const randomIndex: number = Math.floor(Math.random() * this.rest.length);
    const newPiece: string = this.rest[randomIndex];
    this.rest.splice(randomIndex, 1);

    console.log('New piece generated:', newPiece);
    console.log('rest', this.rest)
    return newPiece;
  }
}
