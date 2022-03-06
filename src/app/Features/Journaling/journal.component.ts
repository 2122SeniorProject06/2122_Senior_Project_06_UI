import { JournalModel } from './../../../../Models/JournalModel';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from 'src/app/Services/journal.service';

@Component({
  selector: 'journal-feature',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent implements OnInit {
  journalForm: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private JournalService: JournalService
    ) { }

    ngOnInit(): void {
      this.journalForm = this.formBuilder.group({
        title: [''],
        subject: [''],
        description: ['']
      });
    }

    get f() {
      return this.journalForm.controls;
    }

    onSubmit() {
      const journalModel = new FormData();
      journalModel.append('title', this.journalForm.get('title').value);
      journalModel.append('description', this.journalForm.get('description').value);
      journalModel.append('subject', this.journalForm.get('subject').value);

      const journal = new JournalModel();
      journal.title = this.journalForm.get('title').value;
      journal.description = this.journalForm.get('description').value;
      journal.subject = this.journalForm.get('subject').value;

      this.JournalService.createJournal(journal).subscribe((res) => {
          console.log(res);
      })

    }

goToMain() {
  this.router.navigateByUrl('/main-menu');
}

}
