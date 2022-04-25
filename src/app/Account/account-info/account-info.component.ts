import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountModel, UserAccount } from '../../../../Models/UserModels';
@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent{
    @Input() accountInfo: UserAccount;
    isEdit: boolean = false;
  
    constructor(
      private router: Router,
      private route: ActivatedRoute) {
       this.accountInfo = new UserAccount();
     }

     switchToEdit(){
       this.isEdit = true;
     }

     saveEdits(){
       this.isEdit = false;
     }

     cancelEdit(){
      this.isEdit = false;
     }
}