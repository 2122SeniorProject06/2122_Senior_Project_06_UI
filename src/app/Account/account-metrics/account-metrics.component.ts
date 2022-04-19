import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistration } from '../../../../Models/UserModels';
@Component({
    selector: 'app-account-metrics',
    templateUrl: './account-metrics.component.html',
    styleUrls: ['./account-metrics.component.css']
})
export class AccountMetricsComponent{
    @Input() accountInfo: UserRegistration;
    
  
    constructor(
      private router: Router,
      private route: ActivatedRoute) {
       this.accountInfo = new UserRegistration();
     }
}