import {Component} from '@angular/core';
import { JournalModel } from 'Models/JournalModel';

/** @title Form field theming */
@Component({
  selector: 'form-field-theming-example',
  templateUrl: 'viewonejournal.component.html',
  styleUrls: ['viewonejournal.component.css'],
  providers: [JournalModel]
})
export class ViewOneJournalComponent {


  constructor() {

  }

  clear() {
  //not needed for this
  }
}
