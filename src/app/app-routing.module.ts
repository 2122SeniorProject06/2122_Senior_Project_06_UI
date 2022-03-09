import { StepperComponent } from './Features/Stepper/stepper.component';
import { JournalComponent } from './Features/Journaling/journal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from "../app/UserRegistration/userregistration.component";
import {UserLoginComponent} from "../app/UserLogin/userlogin.component"
import { MainMenuComponent } from '../app/mainmenu/mainmenu.component';
import { CountingGameComponent } from './Features/CountGame/countgame.component';
import { AudioMeditationComponent } from './Features/AudioMeditation/audio-meditation.component';
import { CheckInComponent } from './Features/Checkin/checkin.component';
import { ViewJournalComponent } from './Features/ViewJournal/viewjournal.component';

//Add Routes that map to components
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'main-menu' },
  { path: 'login', component: UserLoginComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'stepper', component: StepperComponent},
  { path: 'count-game', component: CountingGameComponent},
  { path: 'audio-mediation', component: AudioMeditationComponent},
  { path: 'register', component: UserRegistrationComponent },
  { path: 'journal', component: JournalComponent},
  { path: 'viewJournals', component: ViewJournalComponent},
  { path: 'check-in', component: CheckInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
