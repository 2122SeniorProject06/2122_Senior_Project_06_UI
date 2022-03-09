import { CountingGameComponent } from './Features/CountGame/countgame.component';
import { AudioMeditationComponent } from './Features/AudioMeditation/audio-meditation.component';
import { ViewOneJournalComponent } from './Features/ViewOneJournal/viewonejournal.component';
import { ViewJournalsComponent } from './Features/ViewJournal/viewjournal.component';
import { JournalComponent } from './Features/Journaling/journal.component';
import { StepperComponent } from './Features/Stepper/stepper.component';
// import { AudioMeditationComponent } from './Features/AudioMeditation/audiomeditation.component';
//import { BreathingComponent } from './Features/AudioMeditation/audiomeditation.component';
import { MantraComponent } from './Features/Mantra/mantra.component';
import { CheckInComponent } from './Features/Checkin/checkin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from "../app/UserRegistration/userregistration.component";
import {UserLoginComponent} from "../app/UserLogin/userlogin.component";
import { MainMenuComponent } from '../app/mainmenu/mainmenu.component';

//Add Routes that map to components
//you need to have the / if you're routing from one component to the next...
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'main-menu' },
  { path: 'login', component: UserLoginComponent },
  { path: 'viewjournal', component: ViewJournalsComponent },
  { path: 'viewonejournal', component: ViewOneJournalComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'journal', component: JournalComponent},
  { path: 'stepper', component: StepperComponent},
  // { path: 'audio', component: AudioMeditationComponent}
  //{ path: 'deepbreathing-component', component: BreathingComponent}
  { path: 'check-in', component: CheckInComponent},
  { path: 'audio-meditation', component: AudioMeditationComponent },
  { path: 'count-game', component: CountingGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
