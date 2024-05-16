import Player from "./user/player";
import User from "./user/user";
import PlayerController from "./user/player.controller";
import UserController from "./user/user.controller";

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
    console.log(this.players);
    //initMap
    this.runGame();
    this.players.notifyAllPlayers("game-start", null);
  }

  runGame() {

  }
}

export default Game;