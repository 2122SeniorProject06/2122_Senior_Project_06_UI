import { JournalService } from './Services/journal.service';
import { UserService } from './Services/user.service';
import { JournalComponent } from './Features/Journaling/journal.component';
import { ViewOneJournalComponent } from './Features/ViewOneJournal/viewonejournal.component';
import { UserRegistrationComponent } from './UserRegistration/userregistration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { UserLoginComponent } from './UserLogin/userlogin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule, MatCellDef, MatColumnDef, MatRowDef } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './Features/Stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule, MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button/public-api';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkTableModule } from '@angular/cdk/table';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';


import { MatSelectModule } from '@angular/material/select';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    JournalComponent,
    ViewOneJournalComponent,
    StepperComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCommonModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatCellDef,
    CdkStepperModule,
    CdkTableModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCommonModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatCellDef,
    CdkStepperModule,
    CdkTableModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
