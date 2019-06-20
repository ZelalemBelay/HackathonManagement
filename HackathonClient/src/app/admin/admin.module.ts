import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLandingComponent } from './admin-landing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared.module';
import { HomepageComponent } from '../homepage/homepage.component';
import { HackathonHostsComponent } from './hackathon-hosts/hackathon-hosts.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        FormsModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        HackathonHostsComponent]
})
export class AdminModule { }