import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'journal-feature',
  templateUrl: './viewjournal.component.html',
})

export class ViewJournalComponent implements OnInit {


  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

goToMain() {
  this.router.navigateByUrl('/main-menu');
}

}
