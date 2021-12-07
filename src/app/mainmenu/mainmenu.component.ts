import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  // feature not implemented
  gotoCalmMusic(){
    this.router.navigateByUrl('/calmmusic');
  }

  //feature not implemented
  gotoCountGame(){
    this.router.navigateByUrl('./counting');
  }

  //feature not implemented
  gotoDeepBreath(){
    this.router.navigateByUrl('/deepbreathing');
  }

  gotoFiveOne(){
    this.router.navigateByUrl('/fivesees');
  }

  gotoNoteTake(){
    this.router.navigateByUrl('/journal');
  }
}
