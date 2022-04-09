import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Value Selection
 */

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
  
  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }

  
}

const SAMPLE_TEXT="I am a Champion for __________ .I am Worthy of ___________ My Wealth is in my ____________ My _________ has no limits. I’m invested in ___________ I will __________ I want ___________"

