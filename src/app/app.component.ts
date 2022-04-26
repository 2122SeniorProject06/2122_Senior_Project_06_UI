import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SHARD: Here To Pick Up The Pieces';
  imageUrl: any;
  darkmode: any;
  constructor()
  {
    this.changeBackground();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    this.changeBackground();
  }

  changeBackground() {
    this.imageUrl = "mountain.jpg"
    if(localStorage.getItem('userId') != null)
    {
      this.imageUrl = localStorage.getItem('Background');
      //Save background and darkmode on local storage.
    }

    document.getElementById("bg-image")!.style.backgroundImage = "url(\"./assets/" + this.imageUrl + "\")";
  }
  setColorPallet() {
    this.darkmode = 0;
    if(localStorage.getItem('userId') != null)
    {
      this.darkmode = localStorage.getItem('DarkMode');
    }
  //somehow change color pallet
  }
}
