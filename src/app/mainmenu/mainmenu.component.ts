import { Component, Directive, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { MatGridTile } from '@angular/material/grid-list';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
    this.targetEvent = <HTMLElement>nextRoute.target;
    this.showLoading = true;
  }
}
