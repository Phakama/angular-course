import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  users: User[];
  showExtended = true;
  loaded = true;
  enableAdd = false;
  showUserForm: false;
  @ViewChild("userForm")
  form: any;

  constructor() {}

  ngOnInit() {
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
    this.loaded = true;
  }

  // addUser() {
  // 	this.users.unshift(this.user);
  // 	this.user.isActive = true;
  // 	this.user.registered = new Date();
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Invalid User");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }
}
