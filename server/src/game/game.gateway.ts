import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GameService } from './game.service';

@WebSocketGateway({cors: '*'})
export class GameGateway {
  gameService: GameService;

  handleConnection() {
    this.gameService = new GameService();
    console.log('Client connected');
  }

  @SubscribeMessage('startGame')
  handleMessage(client: any, payload: any): string {
    console.log('gameStart called')
    this.gameService.gameStart();
    return 'Let the game begin!'
  }
}
