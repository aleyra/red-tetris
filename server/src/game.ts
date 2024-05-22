import Player from "./user/player";
import User from "./user/user";
import PlayerController from "./user/player.controller";
import UserController from "./user/user.controller";
import Piece from "./piece/piece";

class Game {
  private _players: PlayerController;
  private _viewers: UserController;
  private _state: "waiting" | "playing" | "finished";

  constructor(users: User[]) {
    this._viewers = new UserController(users);
    this._players = new PlayerController(users);
    this._state = "waiting";
  }

  addUser(user: User) {
    if (this._players.findUser(user))
      return ;
    if (this._state !== "playing") {
      this._players.addPlayer(user);
    } else {
      this._viewers.addUser(user);
    }
  }

  startGame() {
    this._state = "playing";

    const newPiece = Piece.generateNewPiece();
    this._players.initPlayersBoards(newPiece);

    this._players.startPlayersGame();
  }

  checkPiece() {
    if(!this._players.isNewPieceNeeded())
      return;
    const newPiece = Piece.generateNewPiece();
    this._players.distributeNewPiece(newPiece);
  }
}

export default Game;