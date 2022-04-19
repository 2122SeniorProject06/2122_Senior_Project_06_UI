import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'CountGame',
  templateUrl: './countgame.component.html',
  styleUrls: ['./countgame.component.css'],
})
export class CountGameComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  //Go to main menu
  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }

  //Color Changing 
  newColor = false;
  toggleColorOne() {
    this.newColor = !this.newColor;
    this.newColor = true;
  }

  newColorTwo=false;
  toggleColorTwo() {
    this.newColorTwo = !this.newColorTwo;
    this.newColorTwo = true;
  }

  newColorThree=false;
  toggleColorThree() {
    this.newColorThree = !this.newColorThree;
    this.newColorThree = true;
  }

  newColorFour=false;
  toggleColorFour() {
    this.newColorFour = !this.newColorFour;
    this.newColorFour = true;
  }

  newColorFive=false;
  toggleColorFive() {
    this.newColorFive = !this.newColorFive;
    this.newColorFive = true;
  }

  //Restart
  restartCount() {
    window.location.reload();
  }

  //
}
