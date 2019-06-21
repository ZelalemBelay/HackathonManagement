import { Component, OnInit } from '@angular/core';
import { HUser } from 'src/app/model/HUser';
import { RegistrationService } from 'src/app/service/RegistrationService';
import { UserManagementService } from 'src/app/service/UserManagementService';
import { HTeamMember } from 'src/app/model/HTeamMember';

@Component({
  selector: 'app-hackathon-hosts',
  templateUrl: './hackathon-hosts.component.html',
})
export class HackathonHostsComponent implements OnInit {


  constructor(private registrationService: RegistrationService,
    private userManagementService: UserManagementService) { this.hHost.teamMembers.push(new HTeamMember()) }
  hHost: HUser = new HUser();

  listOfHosts: HUser[] = [];
  filteredHosts: HUser[] = [];

  addingHost: boolean = false;
  buttonLabel: string = "Add New Hackathon Host";
  buttonStyle: string = "btn-secondary";

  ngOnInit() {
    this.userManagementService.fetchUsersByRole('HH').subscribe(
      hh => {
        this.listOfHosts = hh;
        this.filteredHosts = hh;
      }
    )
  }

  submitForm(data) {
    console.log(this.hHost);
    this.hHost.role = "HH";
    this.registrationService.reisterHUser(this.hHost)
      .subscribe(res => console.log(res));
    this.listOfHosts.push(this.hHost);
  }

  createHackathonEvent() {
    this.addingHost = !this.addingHost;
    if (this.addingHost) {
      this.buttonLabel = "Done";
      this.buttonStyle = "btn-success";
    }
    else {
      this.buttonLabel = "Add New Hackathon Host";
      this.buttonStyle = "btn-secondary";
    }
  }

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredHosts = this.listFilter ? this.performFilter(this.listFilter) : this.listOfHosts;
  }

  performFilter(filterBy: string): HUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listOfHosts.filter((user: HUser) =>
      user.credential.userName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
