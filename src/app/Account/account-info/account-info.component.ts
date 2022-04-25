import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountEdit, UserAccount } from '../../../../Models/UserModels';
@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent{
    @Input() accountInfo: UserAccount;
    isEdit: boolean = false;
    accountEdits: FormGroup;
  
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder) {
        this.accountInfo = new UserAccount();
        this.accountEdits = formBuilder.group({
          usernameCtrl: [''],
          emailCtrl: [''],
          newPassCtrl: [''],
          confirmCtrl: ['']
        });
     }

     switchToEdit(){
       this.isEdit = true;
     }

     saveEdits(){
       this.isEdit = false;
     }

     cancelEdit(){
      this.accountEdits.reset();
      this.isEdit = false;
     }
}