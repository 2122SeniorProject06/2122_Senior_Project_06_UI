import { JournalService } from './Services/journal.service';
import { UserService } from './Services/user.service';
import { OnetasteComponent } from './Features/54321/onetaste/onetaste.component';
import { TwosmellComponent } from './Features/54321/twosmell/twosmell.component';
import { ThreehearComponent } from './Features/54321/threehear/threehear.component';
import { FourtouchComponent } from './Features/54321/fourtouch/fourtouch.component';
import { FiveseesComponent } from './Features/54321/fivesees/fivesees.component';
import { JournalComponent } from './Features/Journaling/journal.component';
import { UserRegistrationComponent } from './UserRegistration/userregistration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UserLoginComponent } from './UserLogin/userlogin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    JournalComponent,
    FiveseesComponent,
    FourtouchComponent,
    ThreehearComponent,
    TwosmellComponent,
    OnetasteComponent

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

  ],
  providers: [UserService, JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
