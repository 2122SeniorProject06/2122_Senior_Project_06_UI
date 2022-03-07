import { CountingGameComponent } from './Features/CountGame/countgame.component';
import { AudioComponent } from './Features/AudioMeditation/audiomeditation.component';
import { CheckinComponent } from './Features/Checkin/checkin.component';
import { ViewOneJournalComponent } from './Features/ViewOneJournal/viewonejournal.component';
import { ViewJournalComponent } from './Features/ViewJournal/viewjournal.component';
import { StepperComponent } from './Features/Stepper/stepper.component';
import { JournalComponent } from './Features/Journaling/journal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from "../app/UserRegistration/userregistration.component";
import {UserLoginComponent} from "../app/UserLogin/userlogin.component"
import { MainmenuComponent } from '../app/mainmenu/mainmenu.component';

//Add Routes that map to components
//you need to have the / if you're routing from one component to the next...
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'main-menu' },
  { path: 'login', component: UserLoginComponent },
  { path: 'viewjournal', component: ViewJournalComponent },
  { path: 'viewonjournal', component: ViewOneJournalComponent },
  { path: 'main-menu', component: MainmenuComponent },
  { path: 'main-menu/stepper', component: StepperComponent},
  { path: 'register', component: UserRegistrationComponent },
  { path: 'main-menu/journal', component: JournalComponent},
  { path: 'main-menu/check-in', component: CheckinComponent},
  { path: 'main-menu/meditate', component: AudioComponent },
  { path: 'main-menu/count', component: CountingGameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
