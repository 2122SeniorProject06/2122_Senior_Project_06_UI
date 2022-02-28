import { JournalService } from './../../Services/journal.service';
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule, MatCellDef, MatColumnDef, MatTable } from '@angular/material/table';


@Component({
  selector: 'view-journal',
  templateUrl: './viewjournal.component.html',
  styleUrls: [ './viewjournal.component.css' ],
  providers: [JournalModel]
})
export class ViewJournalComponent  {

  constructor(private JournalService: JournalService) {}

  displayedColumns = ['date', 'title', 'entry'];
  dataSource?: MatTableDataSource<JournalModel>;
  journals?: JournalModel[];
  userId?: number; //this will be the user's id when they log in

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getJournals();
  }

    getJournals() {
      this.JournalService.getJournal(this.userId).subscribe(journals => {
        this.journals = journals as JournalModel[];
        if (this.journals){//if i receive data
        this.dataSource = new MatTableDataSource<JournalModel>(this.journals);
        }
        //add if i don't receive data
      })
    }


  }

//change the name to match better




