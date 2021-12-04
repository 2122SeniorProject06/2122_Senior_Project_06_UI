import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'journal-feature',
  templateUrl: './journal.component.html'
})

export class JournalComponent implements OnInit {

  journalForm = new FormGroup({
    title: new FormControl(''),
    subject: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }



}
