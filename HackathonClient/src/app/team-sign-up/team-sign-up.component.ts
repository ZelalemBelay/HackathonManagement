import { Component, OnInit } from '@angular/core';
import { HParticipant } from '../model/HParticipant';
import { HTeamMember } from '../model/HTeamMember';
import { RegistrationService } from '../service/RegistrationService';

@Component({
  selector: 'app-team-sign-up',
  templateUrl: './team-sign-up.component.html',
  styleUrls: ['./team-sign-up.component.css']
})
export class TeamSignUpComponent {
  hParticipant: HParticipant = new HParticipant();

  constructor(private registrationService: RegistrationService) {
    this.hParticipant.teamMembers.push(new HTeamMember());
  }

  submitForm(data) {
    console.log(this.hParticipant);
    this.registrationService.reisterHParticipant(this.hParticipant)
      .subscribe(res => console.log(res));
  }

  addTeamMemberView() {
    this.hParticipant.teamMembers.push(new HTeamMember());
  }
}
