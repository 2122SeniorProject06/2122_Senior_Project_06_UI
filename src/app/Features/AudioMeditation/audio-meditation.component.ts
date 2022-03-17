import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio-meditation',
  templateUrl: './audio-meditation.component.html',
  styleUrls: ['./audio-meditation.component.css']
})
export class AudioMeditationComponent {
  title = 'audioMeditation';
  constructor(
    private router: Router,
    
    ) { }
  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }
}
