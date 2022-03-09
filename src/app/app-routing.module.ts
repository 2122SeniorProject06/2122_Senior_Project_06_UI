import { JournalComponent } from './Features/Journaling/journal.component';
import { CountGameComponent } from './Features/CountGame/countgame.component';
import { StepperComponent } from './Features/Stepper/stepper.component';
// import { AudioMeditationComponent } from './Features/AudioMeditation/audiomeditation.component';
//import { BreathingComponent } from './Features/AudioMeditation/audiomeditation.component';
import { MantraComponent } from './Features/Mantra/mantra.component';
import { CheckinComponent } from './Features/Checkin/checkin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from "../app/UserRegistration/userregistration.component";
import {UserLoginComponent} from "../app/UserLogin/userlogin.component";
import { MainmenuComponent } from '../app/mainmenu/mainmenu.component';

//Add Routes that map to components
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'main-menu' },
  { path: 'login', component: UserLoginComponent },
  { path: 'main-menu', component: MainmenuComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'journal', component: JournalComponent},
  { path: 'countgame', component: CountGameComponent},
  { path: 'stepper', component: StepperComponent},
  // { path: 'audio', component: AudioMeditationComponent}
  //{ path: 'deepbreathing-component', component: BreathingComponent}
  { path: 'mantra', component: CheckinComponent},
  { path: 'checkin', component: CheckinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
