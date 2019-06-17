import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TeamSignUpComponent } from './team-sign-up/team-sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [  
{ path: 'signUp', component: TeamSignUpComponent },
{ path: 'login', component: AppComponent },
{ path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
