import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'journal-feature',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent implements OnInit {
  journalForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
      this.journalForm = this.formBuilder.group({
        title: [''],
        subject: [''],
        description: ['']
      });
    }

goToMain() {
  this.router.navigateByUrl('/main-menu');
}

}
