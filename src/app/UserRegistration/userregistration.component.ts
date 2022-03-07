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
  form!: FormGroup;
  registerModel!: UserRegistration;
  confirmedPassword?: string;
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

    this.registerModel.Email = this.form.get('email')?.value;
    this.registerModel.Username = this.form.get('username')?.value;
    this.registerModel.Password = this.form.get('password')?.value;
    this.confirmedPassword = this.form.get('confirmpassword')?.value;
//if the confirmed password is equal to the other password, then we create the user
    if(this.confirmedPassword == this.registerModel.Password){
      this.UserService.register(this.registerModel).subscribe((result: any) =>{
        if(result) {
          console.log("Registration was successful");
          this.goToLogin();
        }
      })
    }

  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }

}
