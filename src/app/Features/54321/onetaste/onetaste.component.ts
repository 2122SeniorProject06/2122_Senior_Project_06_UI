import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-onetaste',
  templateUrl: './onetaste.component.html',
  styleUrls: ['./onetaste.component.css']
})
export class OnetasteComponent implements OnInit {
  name = new FormControl('');
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToMain(){
    this.router.navigateByUrl('main-menu');
  }
}
