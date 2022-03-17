import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Value Selection
 */

@Component({
  selector: 'Checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
})
export class CheckInComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}
  
  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }
}