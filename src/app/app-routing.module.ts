import { OnetasteComponent } from './Features/54321/onetaste/onetaste.component';
import { TwosmellComponent } from './Features/54321/twosmell/twosmell.component';
import { ThreehearComponent } from './Features/54321/threehear/threehear.component';
import { FourtouchComponent } from './Features/54321/fourtouch/fourtouch.component';
import { FiveseesComponent } from './Features/54321/fivesees/fivesees.component';
import { JournalComponent } from './Features/Journaling/journal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from "../app/UserRegistration/userregistration.component";
import {UserLoginComponent} from "../app/UserLogin/userlogin.component"
import { MainmenuComponent } from './mainmenu/mainmenu.component';

//Add Routes that map to components
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'login' },
  { path: 'login', component: UserLoginComponent },
  { path: 'main-menu', component: MainmenuComponent },
  { path: 'fivesees', component: FiveseesComponent},
  { path: 'fourtouch', component: FourtouchComponent},
  {path: 'threehear', component: ThreehearComponent},
  {path: 'twosmell', component: TwosmellComponent},
  {path: 'onetast', component: OnetasteComponent},
  { path: 'register', component: UserRegistrationComponent },
  { path: 'journal', component: JournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
