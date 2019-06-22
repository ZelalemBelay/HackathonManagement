import { Component, Input, OnInit } from '@angular/core';
import { RegistrationService } from '../service/RegistrationService';
import { HUser } from '../model/HUser';
import { constructor } from 'q';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
})
export class AdminLandingComponent implements OnInit {


  hUser: HUser = new HUser();
  addingEvents: boolean = false;
  buttonLabel: string = "Create New Hackathon Event";
  buttonStyle: string = "btn-secondary";

  ngOnInit(): void {
    console.log("Currently logged in user", this.currentLoggedInUser);
  }

  @Input()
  currentLoggedInUser: HUser = new HUser();

  constructor(private registrationService: RegistrationService) {
  }

  submitForm(data) {
    this.addingEvents = !this.addingEvents;

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
