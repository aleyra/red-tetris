import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  userId: string;
  userName: string;

  constructor(userId: string, userName: string) {
    this.userId = userId;
    this.userName = userName;
  }
}
