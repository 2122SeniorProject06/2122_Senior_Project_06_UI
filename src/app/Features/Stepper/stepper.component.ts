import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class StepperComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup:FormGroup;

  constructor(private _formBuilder: FormBuilder) {

 
    this.formGroup1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.formGroup2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
    this.fifthFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    
  }
  
}
