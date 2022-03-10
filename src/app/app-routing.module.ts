import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountGameComponent } from './Features/CountGame/countgame.component';
import { AudioMeditationComponent } from './Features/AudioMeditation/audio-meditation.component';
import { ViewOneJournalComponent } from './Features/ViewOneJournal/viewonejournal.component';
import { ViewJournalsComponent } from './Features/ViewJournal/viewjournal.component';
import { JournalComponent } from './Features/Journaling/journal.component';
import { StepperComponent } from './Features/Stepper/stepper.component';
import { MantraComponent } from './Features/Mantra/mantra.component';
import { CheckInComponent } from './Features/Checkin/checkin.component';
import { UserRegistrationComponent } from "../app/UserRegistration/userregistration.component";
import {UserLoginComponent} from "../app/UserLogin/userlogin.component";
import { MainMenuComponent } from '../app/mainmenu/mainmenu.component';
import { BreathingMeditationComponent } from '../app/Features/breathing-meditation/breathing-meditation.component';

//Add Routes that map to components
//you need to have the / if you're routing from one component to the next...
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'main-menu' },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'view-journal', component: ViewJournalsComponent },
  { path: 'view-one-journal', component: ViewOneJournalComponent },
  { path: 'journal', component: JournalComponent},
  { path: 'stepper', component: StepperComponent},
  { path: 'breathing-component', component: BreathingMeditationComponent },
  { path: 'check-in', component: CheckInComponent},
  { path: 'audio-meditation', component: AudioMeditationComponent },
  { path: 'count-game', component: CountGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
