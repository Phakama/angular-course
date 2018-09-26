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
  enableAdd = true;
  currentClasses: {};
  currentStyles: {};

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
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Lee',
        lastName: 'Smith',
        age: 35,
        address: {
          street: '5 LoerStr.',
          city: 'Cape town',
          state: 'ZA'
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        balance: 500,
        registered: new Date('05/12/2018 09:30:00')
      },
      {
        firstName: 'Beke',
        lastName: 'Pengas',
        age: 35,
        address: {
          street: '55 Sir Lowry',
          city: 'Woodstock',
          state: 'ZA'
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 200,
        registered: new Date('15/02/2018 09:00:00')
      }
    ];

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson'
    // });
    this.setCurrentClass();
    this.serCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClass() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }

  serCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }

}
