import { JournalService } from './../../Services/journal.service';
import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule, MatCellDef, MatColumnDef, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { JournalModel } from 'Models/JournalModel';


@Component({
  selector: 'view-journal',
  templateUrl: './viewjournal.component.html',
  styleUrls: [ './viewjournal.component.css' ],
  providers: [JournalModel]
})
export class ViewJournalComponent  {

  constructor(private JournalService: JournalService) {}

  displayedColumns = ['date', 'title', 'entry'];
  dataSource = new MatTableDataSource<JournalModel>();
  journals?: JournalModel[];
  userId?: number; //this will be the user's id when they log in
 // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getJournals();
  }

  ngAfterViewInIt() {
    //this.dataSource.paginator = this.paginator;
  }
    getJournals() {
      //right now userid is null
      this.JournalService.getJournal(this.userId).subscribe(journals => {
        this.journals = journals as JournalModel[];
        if (this.journals){//if i receive data
        this.dataSource.data = this.journals;
        }
        //add if i don't receive data
      })
    }


  }

//change the name to match better




