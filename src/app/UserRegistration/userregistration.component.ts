import { UserRegistration } from '../../../Models/UserModels';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../Services/user.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Animations } from 'animations';
import { HostListener } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'user-registration',
  animations: [Animations.loadingTrigger],
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  
  showLoading: boolean = false; // Shows the loading bar.
  targetEvent: HTMLElement = document.createElement('br'); // The actual target to load.
  bgImage: HTMLElement | null = document.createElement('br');

  form!: FormGroup;
  confirmedPassword?: string;
  isRegistered: boolean = false;
  notRegistered: boolean = false;
  passVerification: boolean[] = [true,true,true,true];
  errorResults: boolean[] = [true,true,true,true];
  ifNull: boolean[] = [false,false,false,false];
  registerModel: any;
  registerForm?: any;
  registerUser!: UserRegistration;
  errorMessages: string[] = ["","Passwords do not match.","",""]
  passwordErrorTypes: string[] = ["- The password must be at least more than 8 lengths.",
                                  "- The password must contain at least one lowercase character.",
                                  "- The password must contain at least one capital character.",
                                  "- The password must contain at least one number." ]

  constructor(
    private UserService: UserService, 
    private formBuilder: FormBuilder, 
    private snackBar: MatSnackBar, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("OnInit");

    this.bgImage = document.getElementById("bg-image");
    this.bgImage!.style.filter = "blur(8px)";

    this.form = this.formBuilder.group({
      Email: ['', Validators.required ],
      Username: ['', Validators.required ],
      Password: ['', Validators.required ],
      confirmpassword: ['', Validators.required ],
    });
    
    // document.getElementById('username')!.onblur = this.VerifyUsernameNotNull;
  }
  get f() { return this.form.controls }

/*
  Pair Programmed with Andrew, he was helpful with his knowledge of the API controllers
  Registration error handling pair programmed with Andrew, Sarah, and Hugo
*/

  Register() {
    const registerForm = new FormData();
    registerForm.append('Email', this.form.get('Email')?.value);
    registerForm.append('Username', this.form.get('Username')?.value);
    registerForm.append('Password', this.form.get('Password')?.value);
    registerForm.append('confirmpassword', this.form.get('confirmpassword')?.value);
    this.checkForNull(registerForm);

    const registerModel = new UserRegistration();
    registerModel.Email = this.form.get('Email')?.value;
    registerModel.Username = this.form.get('Username')?.value;
    registerModel.Password = this.form.get('Password')?.value;
    registerModel.confirmedPassword = this.form.get('confirmpassword')?.value;
//if the confirmed password is equal to the other password, then we create the user
      this.UserService.register(registerModel).subscribe((result: any) =>{
        if(!result) { //if result all true then no error occured and account is created
          console.log("Registration was successful");
          this.isRegistered = true;
          this.notRegistered = false;
          console.log(result);
          //this.goToLogin();
        }
        else{ //if one result is false/user not registered
          this.errorMessages = ["","Passwords do not match.","",""];
          if(result[3]==false) // checks if password received and error, if so find out why
          {
            console.log("Password_Error");
            this.NpassCheck(registerModel.Password); // checks why password failed
            console.log("Password Errors:"+ this.passVerification)
          }
          for(let i = 0; i< result.length;i++) // Assigns result values to Error results for proper output
          {
            if(i != 3)
            {
              /*
                errorResults key
                [0]: if email is valid
                [1]: if passwords match
                [2]: if username is valid
                [3]: if password is valid
              */
               
             
            }
            this.errorResults[i] = result[i];
          }
          console.log("unsuccessful");
          console.log("errorResults:" + this.errorResults);
          this.isRegistered = false;
          this.notRegistered = true;
          
        } 
      })

  }

  NpassCheck(pass:string)
  {
    // uses boolean list passVerifification[]
    /*
        [0]:between character requirements
        [1]:has lowercase letter
        [2]:has capital letter
        [3]:has number
    */

      if(!(new RegExp(".{8,64}")).test(pass))
      {
        this.passVerification[0] = false;
        this.errorMessages[3] += '\n' + this.passwordErrorTypes[0];
      }
      if(!(new RegExp("[a-z]")).test(pass))
      {
        this.passVerification[1] = false;
        this.errorMessages[3] += '\n' + this.passwordErrorTypes[1];
      }
      if(!(new RegExp("[A-Z]")).test(pass))
      {
        this.passVerification[2] = false;
        this.errorMessages[3] += '\n' + this.passwordErrorTypes[2];
      }
      if(!(new RegExp("[0-9]")).test(pass))
      {
        this.passVerification[3] = false;
        this.errorMessages[3] += '\n' + this.passwordErrorTypes[3];
      }
      
      this.errorMessages[3] = this.errorMessages[3].slice(1);
  }

  reloadPage(): void {
    window.location.reload();
  }

  checkForNull(input: FormData){
    if(input.get('username')==null)
    {
      this.ifNull[0] = true;
    }
    if(input.get('email')==null)
    {
      this.ifNull[1] = true;
    }
    if(input.get('password')==null)
    {
      this.ifNull[2] = true;
    }
    if(input.get('confirmpassword')==null)
    {
      this.ifNull[3] = true;
    }
  }

  goToLogin(){
    this.activateLoadingAnimation('/login', "LOGIN");
    this.onPopState(new Event('Changing Screens'))
  }

  goToMainMenu(){
    this.activateLoadingAnimation('/main-menu', "MAIN MENU");
    this.onPopState(new Event('Changing Screens'))
  }

  /**
  * Creates a html element to send to the loading animation to route to the next page.
  * @param routeLink The route path to take.
  * @param routeName The name of the activity to go to.
  */
  activateLoadingAnimation(routeLink: string, routeName: string){
    let mainMenuEvent = document.createElement('p');
    let mainMenuParent = document.createElement('div');
    mainMenuParent.id = routeLink;
    mainMenuEvent.innerHTML = routeName;
    mainMenuParent.appendChild(mainMenuEvent);
    this.targetEvent = mainMenuEvent;
    this.showLoading = true;
  }

  /**
     * Unblurs the background image on leaving the page.
     * @param event Event that triggers the unblurring.
     */
   @HostListener('window:popstate', ['$event'])
   onPopState(event : Event) {
       this.bgImage!.style.filter = '';
   }
}