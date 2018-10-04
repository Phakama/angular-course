import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        isActive: true,
        registered: new Date("2018/09/03 08:30:00"),
        hide: true
      },
      {
        firstName: "Lee",
        lastName: "Smith",
        email: "lee@yahoo.com",
        isActive: false,
        registered: new Date("2018/12/04 09:30:00"),
        hide: true
      },
      {
        firstName: "Beke",
        lastName: "Pengas",
        email: "beke@hotmail.com",
        isActive: true,
        registered: new Date("2018/03/01 09:00:00"),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user)
  }
}
