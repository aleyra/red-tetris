import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({cors: '*'})
export class GameGateway {

  handleConnection() {
    console.log('Client connected');
  }

  @SubscribeMessage('gameStart')
  handleMessage(client: any, payload: any): string {
    console.log('gameStart called')
    return 'Let the game begin!'
  }
}
