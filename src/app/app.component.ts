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

  constructor()
  {
    this.changeBackground();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    this.changeBackground();
  }

  changeBackground() {
    let imageUrl = "mountain.jpg"
    if(localStorage.getItem('userId') != null)
    {
      imageUrl = "beach.jpg";
    }

    document.getElementById("bg-image")!.style.backgroundImage = "url(\"./assets/" + imageUrl + "\")";
  }
}
