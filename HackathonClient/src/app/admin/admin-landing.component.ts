import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/RegistrationService';
import { HUser } from '../model/HUser';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
})
export class AdminLandingComponent {

  hUser: HUser = new HUser();
  addingEvents: boolean = false;
  buttonLabel: string = "Create New Hackathon Event";
  buttonStyle: string = "btn-secondary";

  constructor(private registrationService: RegistrationService) {
  }

  submitForm(data) {
    console.log(this.hUser);
    this.hUser.role = "HH";
    this.registrationService.reisterHUser(this.hUser)
      .subscribe(res => console.log(res));
  }

  createHackathonEvent() {
    this.addingEvents = !this.addingEvents;
    if (this.addingEvents) {
      this.buttonLabel = "Done";
      this.buttonStyle = "btn-success";
    }
    else {
      this.buttonLabel = "Create New Hackathon Event";
      this.buttonStyle = "btn-secondary";
    }
  }
}
