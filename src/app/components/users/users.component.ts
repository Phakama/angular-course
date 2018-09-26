import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  // tslint:disable-next-line:no-inferrable-types
  showExtended: boolean = true;
  loaded = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 MainStr.',
          city: 'Cape town',
          state: 'ZA'
        }
      },
      {
        firstName: 'Lee',
        lastName: 'Smith',
        age: 35,
        address: {
          street: '5 LoerStr.',
          city: 'Cape town',
          state: 'ZA'
        }
      },
      {
        firstName: 'Beke',
        lastName: 'Pengas',
        age: 35,
        address: {
          street: '55 Sir Lowry',
          city: 'Woodstock',
          state: 'ZA'
        }
      }
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson'
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
