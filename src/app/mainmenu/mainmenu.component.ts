import { trigger } from '@angular/animations';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatGridTile } from '@angular/material/grid-list';
import { ActivatedRoute, Router } from '@angular/router';

//this will need to be edited to route the dynamic grid to the correct components, i added the html and css to the correct files
@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})

export class MainMenuComponent implements OnInit {

  showLoading: boolean;
  targetEvent: HTMLElement;

  @ViewChildren(MatGridTile) allRoutes! : QueryList<MatGridTile>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
      this.showLoading = false;
      this.targetEvent = document.createElement('br');
   }

  ngOnInit() {
  }

  routeToChoice(nextRoute: Event){
    let item = <HTMLElement>nextRoute.target;
    item.innerHTML = item.innerHTML  + " ACTIVITY";
    this.targetEvent = item;
    this.showLoading = true;
  }
}
