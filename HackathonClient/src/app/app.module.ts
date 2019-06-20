import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { TeamSignUpComponent } from './team-sign-up/team-sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomEditTextComponent } from './custom-edit-text/custom-edit-text.component';
import { HttpClientModule } from '@angular/common/http';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

@NgModule({  

  declarations: [
    AppComponent,
    TeamSignUpComponent,
    HomepageComponent,
    CustomEditTextComponent,
    EvaluationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
