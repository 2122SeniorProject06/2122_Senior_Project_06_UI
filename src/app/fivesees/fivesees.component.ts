import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fivesees',
  templateUrl: './fivesees.component.html',
  styleUrls: ['./fivesees.component.css']
})
export class FiveseesComponent implements OnInit {
  name = new FormControl('');
  name2 = new FormControl('');
  name3 = new FormControl('');
  name4 = new FormControl('');
  name5 = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
 

}
