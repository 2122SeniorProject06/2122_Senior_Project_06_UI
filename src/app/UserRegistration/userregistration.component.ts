import { UserRegistration } from './../../../Models/UserModels';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../Services/user.service"
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'user-registration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  form!: FormGroup;
  registerModel!: UserRegistration;
  isRegistered: boolean = false;
  constructor(private UserService: UserService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  registerUser!: UserRegistration;
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
      confirmpassword: ['']
    });
  }
  get f() { return this.form.controls }

  Register() {
    this.goToLogin();
    this.registerModel.email = this.form.get('email')?.value;
    this.registerModel.username = this.form.get('username')?.value;
    this.registerModel.password = this.form.get('password')?.value;
    this.registerModel.confirmpassword = this.form.get('confirmpassword')?.value;

    this.isRegistered = this.UserService.register(this.registerModel);


  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }

}
