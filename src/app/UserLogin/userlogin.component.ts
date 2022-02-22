import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  submit() {

  }

  goToRegistration(){
    //User is not registered and chooses to register via login page
    this.router.navigateByUrl('/register');
  }

  goToJournal(){
    this.router.navigateByUrl('/journal');
  }

  goToMainMenu(){
    this.router.navigateByUrl('/main-menu')
  }
}
