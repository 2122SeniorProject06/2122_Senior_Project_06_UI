import { Injectable } from "@angular/core";
//why can't you find this model?
import { JournalModel } from '../../../Models/JournalModel';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class JournalService {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private httpHeaders: HttpHeaders,
    ) { }

getJournal(journal: JournalModel){
  //issues here, need the url
  //need the journalUrl
  return this.http.get(journalUrl,  { responseType: 'text' })
  //once api is set up in backend, this function will make an http POST call

}

getJournalById(id: number){
  //need the journal url
  return this.http.get(journalUrl + '/' + id, { responseType: 'text'});

}

deleteJournalById(id: number){
  return this.http.delete(journalUrl + '/' + id, httpOptions);
}




}
