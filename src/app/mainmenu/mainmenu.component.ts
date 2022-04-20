import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  animate,
  transition,
  style,
  animation,
} from '@angular/animations';

//this will need to be edited to route the dynamic grid to the correct components, i added the html and css to the correct files
@Component({
  selector: 'app-mainmenu',
  animations: [
    trigger('loadingAnimation', [
      state('notLoading', style({
        height: '80%'
      })),
      state('loading', style({
        height: '*'
      })),
      transition('notLoading => loading', [
        animate('0.37s')
      ])
    ])
  ],
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})

export class MainMenuComponent implements OnInit {

  showLoading: boolean;
  isSignedIn: boolean;
  targetEvent: HTMLElement;
  testVar : string;
  inspireQuote : string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
      this.isSignedIn = localStorage.getItem('userId') != null;
      this.testVar = "I NEED TO...";
      this.inspireQuote = "The great thing, then, in all education, is to make our nervous system our ally instead of our enemy.";
      this.showLoading = false;
      this.targetEvent = document.createElement('br');
   }

  ngOnInit() {
  }

  routeToChoice(nextRoute: Event){
    let item = <HTMLElement>nextRoute.target;
    if(item.innerHTML != "Sign In")
    {
      item.innerHTML = item.innerHTML  + " ACTIVITY";
    }
    this.targetEvent = item;
    this.showLoading = true;
  }
}
