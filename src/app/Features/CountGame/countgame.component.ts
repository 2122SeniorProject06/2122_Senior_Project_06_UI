import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Value Selection
 */

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

  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }

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

  restartCount() {
    window.location.reload();
  }
}
