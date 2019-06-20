import { Component, OnInit } from '@angular/core';
import { HEvent } from 'src/app/model/HEvent';
import { EventService } from 'src/app/service/EventService';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {

  constructor(private hEventService: EventService) { }

  listOfEvents: HEvent[] = []
  public isCollapsed: boolean[] = [];
  prevCollapse: any;

  public images = Constants.IMAGES;

  handleClick(index) {
    console.log(this.prevCollapse)
    this.isCollapsed[this.prevCollapse] = !this.isCollapsed[this.prevCollapse];
    this.prevCollapse = index;
    this.isCollapsed[index] = !this.isCollapsed[index];
  }
  ngOnInit() {
    this.hEventService.fetchAllEvents().subscribe(
      events => {
        console.log(events);
        this.listOfEvents = events;
      },
      error => { });
  }

}
