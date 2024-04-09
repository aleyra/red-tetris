import User form './user'

export class Room {
	id: string,
	name: string,
	members: Users[]
	// Game

	constructor(id: string, name: string, user: User) {
		this.id = id;
		this.name = name;
		this.members = [user];
	}
}

export default Room;