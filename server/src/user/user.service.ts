import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(userName: string) {
    const user: User = { userId: uuidv4(), userName };

    this.users.push(user);
    return user;
  }
}
