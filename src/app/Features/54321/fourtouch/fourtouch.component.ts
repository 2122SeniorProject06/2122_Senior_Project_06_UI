import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fourtouch',
  templateUrl: './fourtouch.component.html',
  styleUrls: ['./fourtouch.component.css']
})
export class FourtouchComponent implements OnInit {
  name = new FormControl('');
  name2 = new FormControl('');
  name3 = new FormControl('');
  name4 = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
