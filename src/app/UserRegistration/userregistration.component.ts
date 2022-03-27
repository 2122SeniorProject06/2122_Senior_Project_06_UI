import { UserRegistration } from '../../../Models/UserModels';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    console.log("OnINit");
    this.form = this.formBuilder.group({
      Email: ['', Validators.required ],
      Username: ['', Validators.required ],
      Password: ['', Validators.required ],
      confirmpassword: ['', Validators.required ],
    });
    
  }
  get f() { return this.form.controls }

/*Pair Programmed with Andrew, he was helpful with his knowledge of the API controllers*/

  Register(v:any = false) {
    console.log("Register");
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
    if(this.confirmedPassword == 'Test' ){
      this.UserService.register(registerModel).subscribe((result: any) =>{

        if(!result) { //if result all true then no error occured and account is created
          console.log("Registration was successful");
          console.log(result);
          //this.goToLogin();
        }
        else{
          console.log(result);
        } 
      })
    }
    else
    {
      //print under confirmed pass "Passwords do not match."
    }
    
    /*
      V1_ThoughtProcess(Old)
      Alternative options: if result != 0 then we recall the register function and send result as a parameter.
      Call a function that checks the value of result and produces the proper error

      Current issues: How tf am i supposed to updated the registration page given these errors?
      Possible solutions: use Validators.required? I have no idea where to begin with that
                          Create a new registration page that takes result as parameter and allows for errors to be displayed?
                          Recall Register funciton but pass in result as a parameter, Still have no idea how to output to user
      
      V2_ThoughtProcess(Current)
      Current situation: Change the API function to return a list of bools to determine if an input runs into an error
                        (Email:if is not an email && if email is not already in use; Username:if username is not empty; 
                        Password:if password requirements are not met). Currently able to show user an if an input is not entered,
                        Similar to the Ground technique. Have a possible idea for an error page if html inject occurs.
      
      Current issues: Have no idea how to make error statements conditional, i.e. lets say only Username is invalid but everything else is valid,
                      how do you only show an error for username(this is after the user clicks the register button). Also do not know how to output
                      specific error messages(this way I can inform user on password policy).
                      Is it possible to make a default parameter for Register()?
                          How would the conditional work?
                              Output should be directly below invalid input
      
      Possible solutions: Save the subscribe value as a gobal and set to null? empty? any? make conditionals around user input?
                              Still do not know how to output to user...ngIf?
                          Change API to return status code
                              How could you differentiate? different status codes?
                          Output to user the same way Hugo did in Ground technique
                              No freakin clue where to start in figuring out how he did that
                              Conditional should work if we pass the bool list as parameter to error message function
                              Vague idea how to out to output to user
    */

  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }

  goToMainMenu(){
    this.router.navigateByUrl('main-menu');
  }
}

