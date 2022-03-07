import { JournalComponent } from './../Journaling/journal.component';
import {Component} from '@angular/core';
import { JournalModel } from 'Models/JournalModel';
import { JournalService } from 'src/app/Services/journal.service';

/** @title Form field theming */
@Component({
  selector: 'form-field-theming-example',
  templateUrl: 'viewonejournal.component.html',
  styleUrls: ['viewonejournal.component.css'],
  providers: [JournalModel]
})
export class ViewOneJournalComponent {


  constructor(private JournalService: JournalService) {

  }

  clear() {
  //not needed for this
  }
}
