import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLandingComponent } from './admin-landing.component';

@NgModule({
  imports: [
    RouterModule.forChild([
    //   { path: '/admin/login', component: A },
    ])
  ],
  declarations: [
      AdminLandingComponent
  ]
})
export class AdminModule { }