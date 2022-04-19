import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistration } from '../../../../Models/UserModels';
@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent{
    @Input() accountInfo: UserRegistration;
  
    constructor(
      private router: Router,
      private route: ActivatedRoute) {
       this.accountInfo = new UserRegistration();
     }
}