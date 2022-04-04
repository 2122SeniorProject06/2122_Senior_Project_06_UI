import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    trigger,
    state,
    animate,
    transition,
    style,
    animation,
  } from '@angular/animations';

@Component({
  selector: 'app-about',
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
      ]),
    ]),
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    showLoading: boolean; // Shows the loading bar.
    targetEvent: HTMLElement; // The actual target to load.
    bgImage: HTMLElement | null = document.createElement('br');
    aboutUs: string[];
    // aboutUs: string;

    constructor(http: HttpClient) { 
        this.showLoading = false;
        this.targetEvent = document.createElement('br');
        this.aboutUs = [];
        http.get('assets/aboutUsMessage.txt', {responseType: 'text'})
        .subscribe(data =>  this.assignDataToArray(data) )
    }

    assignDataToArray(data: string){
        this.aboutUs = data.split("\r\n");
        console.log(this.aboutUs);    
    }

    ngOnInit() {
        this.bgImage = document.getElementById("bg-image");
        this.bgImage!.style.filter = "blur(8px)";
        console.log(this.bgImage);
    }

    @HostListener('window:popstate', ['$event'])
    onPopState(event : Event) {
        this.bgImage!.style.filter = '';
        console.log("Scrambling like an egg")
    }

    goToMainMenu() {
        this.activateLoadingAnimation('/main-menu', "MAIN MENU")
        this.onPopState(new Event('Changing Screens'))
    }

    activateLoadingAnimation(routeLink: string, routeName: string) {
        let mainMenuEvent = document.createElement('p');
        let mainMenuParent = document.createElement('div');
        mainMenuParent.id = routeLink;
        mainMenuEvent.innerHTML = routeName;
        mainMenuParent.appendChild(mainMenuEvent);
        this.targetEvent = mainMenuEvent;
        this.showLoading = true;
    }
}