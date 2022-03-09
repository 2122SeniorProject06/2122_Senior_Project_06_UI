import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-meditation',
  templateUrl: './audio-meditation.component.html',
  styleUrls: ['./audio-meditation.component.css']
})
export class AudioMeditationComponent {
  title = 'AudioMeditation';
  audio: HTMLAudioElement;
  isPlaying: boolean;
  
  constructor(){
    this.isPlaying = false;
    this.audio = new Audio();
    //this.audio.src = "./audio-meditation.mp3";
    this.audio.load();
    this.audio.addEventListener('ended', function(){
      this.currentTime = 0;
      this.play();
    }, false);
  }

  modifyAudio(){
    if(!this.isPlaying)
    {
      console.log("We don't talk about bruno");
     // this.audio.play();
      this.isPlaying = true;
    }
    else
    {
      console.log("No se habla de bruno");
      //this.audio.pause();
      this.isPlaying = false;
    }
  }
}
