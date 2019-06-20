import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomEditTextComponent } from '../custom-edit-text/custom-edit-text.component';
import { AdminLandingComponent } from '../admin/admin-landing.component';
import { EventListComponent } from '../events/event-list/event-list.component';
import { EventCreateFormComponent } from '../events/event-create-form/event-create-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    CustomEditTextComponent,
    AdminLandingComponent,
    EventListComponent,
    EventCreateFormComponent
  ],
  exports: [
    CustomEditTextComponent,
    AdminLandingComponent,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class SharedModule { }