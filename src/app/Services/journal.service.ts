import { Injectable } from "@angular/core";
//why can't you find this model?
import { JournalModel } from '../../../Models/JournalModel';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class JournalService {
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private httpHeaders: HttpHeaders,
    ) { }

getJournal(userId?: number){
//get all journals based on the user id
  return this.http.get(journalUrl + '/' + userId,  { responseType: 'json' })

}

getJournalById(id: number){
  //need the journal url
  return this.http.get(journalUrl + '/' + id, { responseType: 'json'});

}

deleteJournalById(id: number){
  return this.http.delete(journalUrl + '/' + id, this.httpOptions);
}




}
