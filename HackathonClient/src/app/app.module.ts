import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TeamSignUpComponent } from './team-sign-up/team-sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
//import { CustomEditTextComponent } from './custom-edit-text/custom-edit-text.component';
import { HttpClientModule } from '@angular/common/http';

import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { LoginComponent } from './login/login.component';
import { AdminLandingComponent } from './admin/admin-landing.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AdminModule } from './admin/admin.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from './common/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';


@NgModule({  
  declarations: [
    AppComponent,
    TeamSignUpComponent,
    // HomepageComponent,

    //CustomEditTextComponent,
    //EvaluationFormComponent,
    LoginComponent,
    NavBarComponent,
    LandingPageComponent

  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwSocialButtonsModule,
    AdminModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
