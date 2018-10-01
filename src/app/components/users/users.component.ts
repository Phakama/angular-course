import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
	selector: 'app-users',
	// tslint:disable-next-line:indent
	// tslint:disable-next-line:indent
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	user: User = {
		firstName: '',
		lastName: '',
		age: null,
		address: {
			street: '',
			city: '',
			state: ''
		}
	};
	users: User[];
	// tslint:disable-next-line:no-inferrable-types
	showExtended: boolean = true;
	loaded = true;
	enableAdd = false;
	showUserForm: false;

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
				isActive: true,
				registered: new Date('01/02/2018 08:30:00'),
				hide: true
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
				isActive: false,
				registered: new Date('05/12/2018 09:30:00'),
				hide: true
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
				isActive: true,
				registered: new Date('15/02/2018 09:00:00'),
				hide: true
			}
		];
		this.loaded = true;

	}

	addUser() {
		this.users.unshift(this.user);
		this.user.isActive = true;
		this.user.registered = new Date();
	}

	// toggleHide(user: User) {
	// 	user.hide = !user.hide;
	// }
	onSubmit(event) {
		event.preventDefault();
	}
}
