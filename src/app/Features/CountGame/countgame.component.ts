import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Value Selection
 */

@Component({
  selector: 'CountGame',
  templateUrl: './countgame.component.html',
  styleUrls: ['./countgame.component.css'],
})
export class CountGameComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }
  

}
