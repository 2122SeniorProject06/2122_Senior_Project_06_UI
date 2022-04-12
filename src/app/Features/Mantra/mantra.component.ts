import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'Mantra',
  templateUrl: './mantra.component.html',
  styleUrls: ['./mantra.component.css'],
})

export class MantraComponent {
  constructor(
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
