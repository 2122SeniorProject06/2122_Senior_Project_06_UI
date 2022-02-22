import { Injectable } from "@angular/core";
//why can't you find this model?
import { JournalModel } from '../../../Models/JournalModel';
import { Router, ActivatedRoute } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class JournalService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

getJournal(journal: JournalModel){
  //once api is set up in backend, this function will make an http POST call

}

getJournalById(id: number){

}



}
