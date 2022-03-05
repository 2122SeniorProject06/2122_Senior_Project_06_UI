import { StepperComponent } from './Features/Stepper/stepper.component';
import { JournalComponent } from './Features/Journaling/journal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from "../app/UserRegistration/userregistration.component";
import {UserLoginComponent} from "../app/UserLogin/userlogin.component"
import { MainmenuComponent } from '../app/mainmenu/mainmenu.component';

//Add Routes that map to components
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'login' },
  { path: 'login', component: UserLoginComponent },
  { path: 'main-menu', component: MainmenuComponent },
  { path: 'stepper', component: StepperComponent},
  { path: 'register', component: UserRegistrationComponent },
  { path: 'journal', component: JournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
