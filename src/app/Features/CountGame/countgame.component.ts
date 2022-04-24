import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountGameService } from 'src/app/Services/countgame.service';

@Component({
  selector: 'CountGame',
  templateUrl: './countgame.component.html',
  styleUrls: ['./countgame.component.css'],
})
export class CountGameComponent {

  constructor(private CountGameService: CountGameService, 
    private router: Router,
    private route: ActivatedRoute,
  ){}

    //value variables
    countVal?: any;
    startVal?: any;

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      console.log("help again");
      this.getCountValue();
      this.getStartValue();
    }

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

  //Get counting value
  getCountValue(){
    this.CountGameService.getCountValue(100).subscribe((res: any) => {
      this.countVal = res;
      console.log(this.countVal);
    })
  }

  //get starting value
  getStartValue(){
    this.CountGameService.getStartValue(100).subscribe((res: any) => {
      this.startVal = res;
      console.log(this.startVal);
    })
  }

}