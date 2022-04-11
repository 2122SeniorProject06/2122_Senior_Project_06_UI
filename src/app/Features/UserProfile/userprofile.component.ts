import { FormBuilder } from '@angular/forms';
import { UserService } from './../../Services/user.service';
import { UserModel, UserRegistration } from './../../../../Models/UserModels';
import {Component} from '@angular/core';
import { Router } from '@angular/router';

/** @title Form field theming */
@Component({
  selector: 'user-profile',
  templateUrl: 'userprofile.component.html',
  styleUrls: ['userprofile.component.css'],
  providers: [UserModel, UserRegistration]
})
export class UserProfileComponent {
 loggedin?: string | null = localStorage.getItem('UserID');
 user?: UserRegistration;
 userForm: any;
//i really want this all to be in one component for simplicity but idk if its possible with our structure
  constructor(private UserService: UserService, private FormBuilder: FormBuilder){}
  ngOnInit(): void {
    this.userForm = this.FormBuilder.group({
      Username: [''],
      Email: [''],
      Password: ['']
    });
  }
  get f() {
    return this.userForm.controls;
  }

  view(){

    this.UserService.view(this.loggedin).subscribe(user => {
      //set them equal to display
      //this.user = user;

    })
  }

  deleteUser(){
    this.UserService.delete(this.loggedin).subscribe(result => {
      //result will probably be a bool
    })
  }

  updateUser(){
    const updateUser = new FormData();
    updateUser.append('Username', this.userForm.get('Username').value);
      updateUser.append('Email', this.userForm.get('Email').value);
      updateUser.append('Password', this.userForm.get('Password').value);

      const user = new UserRegistration();
      user.Username = this.userForm.get('Username').value;
      user.Email = this.userForm.get('Email').value;
      user.Password = this.userForm.get('Password').value;

    this.UserService.update(user).subscribe(result => {
      //returns new userid value

    })
  }

}
