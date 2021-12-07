import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-twosmell',
  templateUrl: './twosmell.component.html',
  styleUrls: ['./twosmell.component.css']
})
export class TwosmellComponent implements OnInit {
  name = new FormControl('');
  name2 = new FormControl('');
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToTaste(){
    this.router.navigateByUrl('onetast');
  }
}
