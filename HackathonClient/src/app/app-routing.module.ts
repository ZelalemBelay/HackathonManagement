import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamSignUpComponent } from './team-sign-up/team-sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HackathonHostsComponent } from './admin/hackathon-hosts/hackathon-hosts.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

const routes: Routes = [
  { path: 'signUp', component: TeamSignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'evaluation/:username', component: EvaluationFormComponent },
  { path: 'dashboard', component: LandingPageComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'hHostList', component: HackathonHostsComponent },
  
  { path: '**', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
