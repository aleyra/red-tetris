import Player from "./user/player";
import User from "./user/user";
import PlayerController from "./user/player.controller";
import UserController from "./user/user.controller";
import Piece from "./piece/piece";

class Game {
  private players: PlayerController;
  private viewers: UserController;
  private state: "waiting" | "playing" | "finished";

  constructor(users: User[]) {
    this.viewers = new UserController(users);
    this.players = new PlayerController(users);
    this.state = "waiting";
  }

  addUser(user: User) {
    if (this.players.findUser(user))
      return ;
    if (this.state !== "playing") {
      this.players.addPlayer(user);
    } else {
      this.viewers.addUser(user);
    }
  }

  startGame() {
    this.state = "playing";

    const newPiece = Piece.generateNewPiece();
    this.players.initPlayersBoards(newPiece);
  
    this.runGame();
    this.players.notifyAllPlayers("game-start", null);
  }

  runGame() {

  }

  checkPiece() {
    if(!this.players.isNewPieceNeeded())
      return;
    const newPiece = Piece.generateNewPiece();
    this.players.distributeNewPiece(newPiece);
  }
}

export default Game;