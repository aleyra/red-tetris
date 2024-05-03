import { User } from "./user";

export interface Game {
  members: User[];
}

export class GameClass {
  players: User[];
  members: User[];
  state: "waiting" | "playing" | "finished";

  constructor(user: User[]) {
    this.members = user;
    this.players = user;
    this.state = "waiting";
  }

  addUser(user: User) {
    if (this.players.find((u) => u.name === user.name)) {
      return ;
    }
    if (this.state !== "waiting") {
      this.players.push(user);
    }
    if (this.members.find((u) => u.name === user.name)) {
      return ;
    }
    this.members.push(user);
  }

  startGame() {
    this.state = "playing";
    console.log(this.players);
    //this.players.forEach((player) => { player.socket.emit('startGame', this.players); });
  }

}
