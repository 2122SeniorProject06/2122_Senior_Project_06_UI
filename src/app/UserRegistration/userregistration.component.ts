import { UserRegistration } from '../../../Models/UserModels';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../Services/user.service";
import { MatSnackBar } from '@angular/material/snack-bar';

import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'user-registration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  
  form!: FormGroup;
   confirmedPassword?: string;
  isRegistered: boolean = false;
  registerModel: any;
  registerForm?: any;
  constructor(private UserService: UserService, private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {}

  registerUser!: UserRegistration;
  ngOnInit() {
    this.form = this.formBuilder.group({
      Email: [''],
      Username: [''],
      Password: [''],
      confirmpassword: [''],
    });
    
  }
  get f() { return this.form.controls }

/*Pair Programmed with Andrew, he was helpful with his knowledge of the API controllers*/

  Register() {
    const registerForm = new FormData();
    registerForm.append('Email', this.form.get('Email')?.value);
    registerForm.append('Username', this.form.get('Username')?.value);
    registerForm.append('Password', this.form.get('Password')?.value);
    registerForm.append('confirmpassword', this.form.get('confirmpassword')?.value);



    const registerModel = new UserRegistration();
    registerModel.Email = this.form.get('Email')?.value;
    registerModel.Username = this.form.get('Username')?.value;
    registerModel.Password = this.form.get('Password')?.value;
    this.confirmedPassword = this.form.get('confirmpassword')?.value;
//if the confirmed password is equal to the other password, then we create the user
    if(this.confirmedPassword == registerModel.Password ){
      this.UserService.register(registerModel).subscribe((result: any) =>{
        if(result == 0) { //if result == 0 then no error occured and account is created
          console.log("Registration was successful");
          this.goToLogin();
        }
        else if(result == 1)//just email is invalid
        {
          //print error message only under email "Email is invalid."
        }
        else if(result == 3)//just Username is invalid(i.e. username is empty)
        {
          //print error message only under email "Username is invalid."
        }
        else if(result == 4)//Username and Email are invalid
        {
          //print error message under email and username: "Email is invalid.", "Username is invalid."
        }
        else if(result == 9)//just Password is invalid(i.e. password does not meet requirements)
        {
          //print error message only under password "Password is not strong enough" or display password policy
          //"Password must be more that 8 characters and contain at least one upper case, lower case, and number."
        }
        else if(result == 10)//Email and password are invalid
        {
          //print error message under email "Email is invalid."
          //print error message under password "Password is not strong enough" or display password policy
          //"Password must be more that 8 characters and contain at least one upper case, lower case, and number."
        }
        else if(result == 12)//Email, password, and username are invalid
        {
          //print error message under email and username: "Email is invalid.", "Username is invalid."
          //print error message under password "Password is not strong enough" or display password policy
          //"Password must be more that 8 characters and contain at least one upper case, lower case, and number."
        }
        
      })
    }
    else
    {
      //print under confirmed pass "Passwords do not match."
    }
    /*
      Alternative options: if result != 0 then we recall the register function and send result as a parameter.
      Call a function that checks the value of result and produces the proper error

      Current issues: How tf am i supposed to updated the registration page given these errors?
      Possible solutions: use Validators.required? I have no idea where to begin with that
                          Create a new registration page that takes result as parameter and allows for errors to be displayed?
                          Recall Register funciton but pass in result as a parameter, Still have no idea how to output to user
    */

  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }

  goToMainMenu(){
    this.router.navigateByUrl('main-menu');
  }
}

