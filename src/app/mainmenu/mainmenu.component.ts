import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//this will need to be edited to route the dynamic grid to the correct components, i added the html and css to the correct files
@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})

export class MainmenuComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  //Navigates user to "REFLECT "Journaling page
  gotoJournal(){
    this.router.navigateByUrl('/journal');
  }
  //Navigates user to "FOCUS" Counting Game page
  gotoCountGame(){
    this.router.navigateByUrl('/countgame');
  }
  //Navigates user to "GROUND" "5-4-3-2-1 page
  gotoStepper(){
    this.router.navigateByUrl('/stepper');
  }
  //Navigates user to "RELAX" Audio Meditation page
  gotoAudioMed(){
    this.router.navigateByUrl('/audio');
  }
  //Navigates user to "BREATHE""Deep Breathing page
  gotoDeepBreath(){
    this.router.navigateByUrl('/deepbreathing-component');
  }
  //Navigates user to "ENCOURAGE "Mantra page
  gotoMantra(){
    this.router.navigateByUrl('/mantra');
  }
  //Navigates user to "CHECK IN" page
  gotoCheckin(){
    this.router.navigateByUrl('/checkin');
  }
}