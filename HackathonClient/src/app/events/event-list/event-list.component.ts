import { Component, OnInit } from '@angular/core';
import { HEvent } from 'src/app/model/HEvent';
import { EventService } from 'src/app/service/EventService';
import { Constants } from 'src/app/common/Constants';
import { HUser } from 'src/app/model/HUser';
import { Idea } from 'src/app/model/Idea';
import { UserManagementService } from 'src/app/service/UserManagementService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {

  constructor(private hEventService: EventService, 
              private userManagementService: UserManagementService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  listOfEvents: HEvent[] = []
  public isCollapsed: boolean[] = [];
  prevCollapse: any;
  listOfUsers: HUser[] = [];
  idea: Idea

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
  ngOnInit() {
    this.hEventService.fetchAllEvents().subscribe(
      events => {
        console.log("ev", events);
        this.listOfEvents = events;
      },
      error => { });

  
    this.userManagementService.fetchUsersByRole("hp").subscribe(
      users => {
        console.log("user", users);
        this.listOfUsers = users;
      },
      error => { });
  }

}
