//Created by Daniela Martinez
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

  gotoAudioMed(){
    this.router.navigateByUrl('/audioMeditation');
  }

  gotoCountGame(){
    this.router.navigateByUrl('/countgame');
  }

  gotoDeepBreath(){
    this.router.navigateByUrl('/deepbreathing-component');
  }

  gotoStepper(){
    this.router.navigateByUrl('/stepper');
  }

  gotoJournal(){
    this.router.navigateByUrl('/Journaling');
  }

  gotoMantra(){
    this.router.navigateByUrl('/mantra');
  }

  gotoCheckin(){
    this.router.navigateByUrl('/checkin');
  }
}