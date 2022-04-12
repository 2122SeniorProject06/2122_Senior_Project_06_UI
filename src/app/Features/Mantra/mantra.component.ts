import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

const SAMPLE_TEXT="I am a Champion for ______________________________.  I am Worthy of __________________________________. My Wealth is in my ______________________________ My __________________________________ has no limits. I’m invested in _____________________________________ I will _______________________________________________ I want ____________________________________________"

@Component({
  selector: 'Mantra',
  templateUrl: './mantra.component.html',
  styleUrls: ['./mantra.component.css'],
})

export class MantraComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ){}
  
  //Routes to Main Menu
  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }

  //Refresh Page
  restartFeature() {
    window.location.reload();
  }
  
  //Display Date
  currentDate = new Date();
}
