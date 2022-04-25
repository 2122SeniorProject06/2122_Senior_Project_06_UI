import { NgChartsModule } from 'ng2-charts';
import { MerticsModel } from './../../../../Models/MetricsModel';
import { ChartDataset, ChartType, ScaleChartOptions } from 'chart.js';
import { MetricsService } from './../../Services/metrics.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistration } from '../../../../Models/UserModels';
@Component({
    selector: 'app-account-metrics',
    templateUrl: './account-metrics.component.html',
    styleUrls: ['./account-metrics.component.css'],
    //imports: [NgChartsModule]
})
export class AccountMetricsComponent{
    @Input() accountInfo: UserRegistration;
    metricsLoaded: boolean = false;
    helpfulLoaded: boolean = false;
    userid?: any;
    data?: any;
    label: string = 'Most Useful';
    mostEffective? : any;


     public chartType: ChartType = "radar";
     public chartDatasets = [
       this.data, this.label
    ];
    public chartLabels: string[] = ['Focus', 'Ground', 'Relax', 'Breathe', 'Encourage', 'Check In'];
    public chartOptions: any = {
      responsive: true
    }
    public chartColors = [
      {
        backgroundColor: 'rgba(105, 0, 132, .2)',
        borderColor: 'rgba(200, 99, 132, .7)',
        borderWidth: 2,
      }]

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private MetricsService: MetricsService) {
       this.accountInfo = new UserRegistration();
     }

     ngOnInIt() {
      this.userid = localStorage.getItem('userId');
       this.MetricsService.getOccurances(this.userid).subscribe(metrics => {
        metrics = this.data;
        console.log(metrics + this.data);
        this.metricsLoaded = true;
       });

       this.MetricsService.getMostHelpful(this.userid).subscribe(effective => {
         this.mostEffective = effective;
         console.log(effective + this.mostEffective);
         this.helpfulLoaded = true;
       })
     }
     chartClicked(event: any): void {
       console.log(event);
     }

     chartHovered(event:any): void {
       console.log(event);
     }

}
