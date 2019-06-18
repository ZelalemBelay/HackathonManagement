import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamSignUpComponent } from './team-sign-up/team-sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [  
{ path: 'signUp', component: TeamSignUpComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: LandingPageComponent },
{ path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
