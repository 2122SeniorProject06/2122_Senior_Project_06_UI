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
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './Features/stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [UserService, JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
