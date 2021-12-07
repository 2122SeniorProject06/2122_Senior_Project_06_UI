import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-threehear',
  templateUrl: './threehear.component.html',
  styleUrls: ['./threehear.component.css']
})
export class ThreehearComponent implements OnInit {
  name = new FormControl('');
  name2 = new FormControl('');
  name3 = new FormControl('');

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToSmell(){
    this.router.navigateByUrl('twosmell');
  }
}
