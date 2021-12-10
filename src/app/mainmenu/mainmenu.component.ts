//Created by Daniela Martinez
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

  gotoCalmMusic(){
    this.router.navigateByUrl('./calmmusic-component');
  }

  gotoCountGame(){
    this.router.navigateByUrl('./counting-component');
  }

  gotoDeepBreath(){
    this.router.navigateByUrl('./deepbreathing-component');
  }

  gotoFiveOne(){
    this.router.navigateByUrl('./fivesees');
  }

  gotoNoteTake(){
    this.router.navigateByUrl('./notetaking-component');
  }
}
