import { UserService } from '../Services/user.service';
import { UserLogin, UserModel } from '../../../Models/UserModels';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [UserLogin, UserModel]
})
export class UserLoginComponent implements OnInit {
 loginModel: any;
 form: any;
 data: any;
 token?: string;
 error: any;
 currUser: any;
 showLoading: boolean; // Shows the loading bar.
 targetEvent: HTMLElement; // The actual target to load.

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private UserService: UserService
    ) {
      if(localStorage.getItem('userId') != null){
        this.router.navigateByUrl('/view-journal');
      } 
      this.showLoading = false;
      this.targetEvent = document.createElement('br');
    }

  ngOnInit() {
    this.form = this.fb.group ({
      Email: [''],
      Password: ['']
    })

    // if(localStorage.getItem('userId') != null){
    //   this.goToJournal();
    // }
  }

  get f(){
    return this.form.controls;
  }


  onSubmit() {
    const loginModel = new FormData();
    loginModel.append('Email', this.form.get('Email').value);
    loginModel.append('Password', this.form.get('Password').value);

    const login = new UserLogin();
    login.Email = this.form.get('Email').value;
    login.Password = this.form.get('Password').value;
localStorage.clear();
    this.UserService.login(login).subscribe((result) => {
      this.data = result;
      //JSON.parse(this.data);
      //JSON.stringify(this.data);
      console.log(this.data);
      //clear prior to logging in
      localStorage.clear();
      console.log(localStorage.getItem('userId'));
      if (this.data) {
        this.currUser = "";
        this.currUser = this.data;
        //set the local storage user id for easy access
        localStorage.setItem('userId', this.data);
        console.log(login);
        console.log("successful login");
        this.snackBar.dismiss();
        //this.goToCreateJournal();
        this.goToJournal();
      }
      //what is the angular function for this
      else if(this.data == null)
      {
        this.snackBar.open('Username or Password was Incorrect');
        console.log("unsuccessful login");
        this.router.navigate(['Login']);
      }
    })


  }

  goToRegistration(){
    //User is not registered and chooses to register via login page
    this.activateLoadingAnimation('/register', 'ACCOUNT CREATION');
  }

  goToJournal(){
    this.activateLoadingAnimation('/view-journal', 'ALL JOURNALS');
  }

  goToMainMenu(){
    this.activateLoadingAnimation('/main-menu', "MAIN MENU")
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
}
