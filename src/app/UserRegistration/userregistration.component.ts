import { UserRegistration } from './../../../Models/UserModels';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../Services/user.service"

@Component({
  selector: 'user-registration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  registerModel!: UserRegistration;
  isRegistered: boolean = false;
  constructor(private UserService: UserService, private formBuilder: FormBuilder) {}

  registerUser!: UserRegistration;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  get f() { return this.registerForm.controls }

  Register() {
    this.registerModel.email = this.registerForm.get('email')?.value;
    this.registerModel.username = this.registerForm.get('username')?.value;
    this.registerModel.password = this.registerForm.get('password')?.value;

    this.isRegistered = this.UserService.register(this.registerModel)
  }

}
