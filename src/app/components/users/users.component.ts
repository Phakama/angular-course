import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../services/user.service";
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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
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

      this.userService.addUser(value);

      this.form.reset();
    }
  }
}
