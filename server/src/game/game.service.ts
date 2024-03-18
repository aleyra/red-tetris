import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
	gameStart(): string {
	return 'Let the game begin!';
  }

}
