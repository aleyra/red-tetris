import { User } from "./user";

export interface Game {
  viewers: User[];
  players: User[];
  state: "waiting" | "playing" | "finished";
}



export class GameClass {
  players: User[];
  viewers: User[];
  state: "waiting" | "playing" | "finished";

  constructor(user: User[]) {
    this.viewers = user;
    this.players = user;
    this.state = "waiting";
  }

  addUser(user: User) {
    if (this.state !== "playing") {
      if (this.players.find((u) => u.name === user.name)) {
        return ;
      }
      this.players.push(user);
    } else {
      if (this.players.find((u) => u.name === user.name) ||
       this.viewers.find((u) => u.name === user.name)) {
        return ;
      }
      this.viewers.push(user);
    }
  }

  startGame() {
    this.state = "playing";
    console.log(this.players);
    //initMap
    this.runGame();
    this.players.forEach((player) => { player.socket.emit("gameData", this.players); });
  }

  runGame() {

  }
}
