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

  constructor() { }

  ngOnInit(): void {
  }

}
