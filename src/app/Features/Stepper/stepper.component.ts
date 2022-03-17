import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // steps: boolean[];
  // whichStep: number;


  // constructor(){
  //   this.steps = [true, false, false, false, false];
  //   this.whichStep = 0;
  // }

  // onClick(){
  //   this.steps[this.whichStep] = false;
  //   if(this.whichStep == 4){
  //     this.whichStep = 0;
  //   }
  //   else{
  //     this.whichStep++;
  //   }
  //   this.steps[this.whichStep] = true;
  // }

  fiveSights: FormGroup;
  fourTouches: FormGroup;
  threeSounds: FormGroup;
  twoSmells: FormGroup;
  oneTaste: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private router: Router,) {
    this.fiveSights = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.fourTouches = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.threeSounds = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.twoSmells = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.oneTaste = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  goToMainMenu() {
    this.router.navigateByUrl('/main-menu')
  }

  restartStepper() {
    window.location.reload();
  }
}
