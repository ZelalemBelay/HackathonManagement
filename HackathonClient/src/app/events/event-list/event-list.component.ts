import { Component, OnInit, Input } from '@angular/core';
import { HEvent } from 'src/app/model/HEvent';
import { EventService } from 'src/app/service/EventService';
import { Constants } from 'src/app/common/Constants';
import { HUser } from 'src/app/model/HUser';
import { Idea } from 'src/app/model/Idea';
import { UserManagementService } from 'src/app/service/UserManagementService';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {

  constructor(private hEventService: EventService, 
              private userManagementService: UserManagementService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  listOfEvents: HEvent[] = [];
  filteredListOfEvents: HEvent[] = [];

  public isCollapsed: boolean[] = [];
  prevCollapse: any;
  listOfUsers: HUser[] = [];
  idea: Idea
  showMeLabel: string = "Only Events that are assigned to me";

  @Input()
  currentLoggedInUser: HUser = new HUser();

  public images = Constants.IMAGES;

  onIdeaClick(hUser : HUser) : void {
    this._router.navigate(['/evaluation/' + hUser.credential.userName]);
  }

  handleClick(index) {
    console.log(this.prevCollapse)
    this.isCollapsed[this.prevCollapse] = !this.isCollapsed[this.prevCollapse];
    this.prevCollapse = index;
    this.isCollapsed[index] = !this.isCollapsed[index];
  }

  publisEvent(event, i){ 
    alert('This will make the event available for the public.');
    event.status = "PUBLISHED";

    this.hEventService.updateEventStatus(event, "PUBLISHED");
  }

  archiveEvent(event, i){
    alert('This Event will not be avaiable for the public. Continue?')
    event.status = "ARCHIVED";
    this.hEventService.updateEventStatus(event, "ARCHIVED").subscribe(
      d => {
        console.log("ev", d);
      },
      error => { });;
  }

  ngOnInit() {
    console.log(this.currentLoggedInUser.role);
    this.showMeLabel = this.currentLoggedInUser.role == 'HP' ? "Only Events my team is participating" : "Only Events that are assigned to me"

    this.hEventService.fetchAllEvents().subscribe(
      events => {
        console.log("ev", events);
        this.listOfEvents = events;
        this.filteredListOfEvents = events;
      },
      error => { });

  
    this.userManagementService.fetchUsersByRole("hp").subscribe(
      users => {
        console.log("user", users);
        this.listOfUsers = users;
      },
      error => { });
  }

  
  _showOnlyMine = false;
  get showOnlyMine(): boolean {
    return this._showOnlyMine;
  }
  set showOnlyMine(value: boolean) {
    this._showOnlyMine = value;
    this.filteredListOfEvents = value ? this.performFilter() : this.listOfEvents;

  }

  performFilter(): HEvent[] {
    return this.listOfEvents.filter((event: HEvent) => event.assignedHost == this.currentLoggedInUser.credential.userName);
  }

}
