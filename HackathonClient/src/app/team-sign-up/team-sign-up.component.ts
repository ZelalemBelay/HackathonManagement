import { Component, OnInit, ElementRef } from '@angular/core';
import { HTeamMember } from '../model/HTeamMember';
import { RegistrationService } from '../service/RegistrationService';
import { HttpClient } from '@angular/common/http';
import { HUser } from '../model/HUser';
import { HEvent } from '../model/HEvent';
import { EventService } from '../service/EventService';
const URL = 'http://localhost:3001/hUser/register';  

@Component({
  selector: 'app-team-sign-up',
  templateUrl: './team-sign-up.component.html',
  styleUrls: ['./team-sign-up.component.css']
})
export class TeamSignUpComponent implements OnInit{
  hParticipant: HUser = new HUser();
  selectedFile: File = null;

  assignedEvent: HEvent = new HEvent;
  filteredEvents: HEvent[] = [];
  listOfEvents: HEvent[] = [];

  constructor(private registrationService: RegistrationService, private http: HttpClient,
              private eventService: EventService) {
    this.hParticipant.teamMembers.push(new HTeamMember());
    //this.filesToUpload = [];
  }

  ngOnInit(): void {
    this.eventService.fetchAllEvents().subscribe(
      events => this.listOfEvents = events
    )
    console.log("listOfEvents", this.listOfEvents)
    this.filteredEvents = this.listOfEvents;
  }

  submitForm(data) {
    console.log(this.hParticipant);
    this.registrationService.reisterHUser(this.hParticipant)
      .subscribe(res => console.log(res));
    this.registrationService.reisterHUser(this.hParticipant)
      .subscribe(res => console.log(res)); 
          
  }


  upload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3001/hUser/register', fd, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(res =>{
        console.log(res);
    });
  }

  onFileChange(event) {

    this.selectedFile = <File>event.target.files[0];
  }

   _listFilter = '';
   get listFilter(): string {
     return this._listFilter;
   }
   set listFilter(value: string) {
     console.log("value", value);
     this._listFilter = value;
     
     this.filteredEvents = this.listFilter ? this.performFilter(this.listFilter) : this.listOfEvents;
     console.log("list..", this.filteredEvents);
   }

   performFilter(filterBy: string): HEvent[] {
     filterBy = filterBy.toLocaleLowerCase();
     return this.listOfEvents.filter((event: HEvent) =>
     event.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }

   onEventClicked(hEvent: HEvent) {
     console.log("event ID", hEvent.title)
     this.assignedEvent = hEvent;
     console.log("assignedEvent", this.assignedEvent)
     this.hParticipant.registeredEvent = hEvent.title;
     console.log("hparticipant ", this.hParticipant.registeredEvent)
   }

  addTeamMemberView() {
    this.hParticipant.teamMembers.push(new HTeamMember());
  }
}
