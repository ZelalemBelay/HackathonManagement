import { Component, OnInit, ElementRef } from '@angular/core';
import { HTeamMember } from '../model/HTeamMember';
import { RegistrationService } from '../service/RegistrationService';
import { HttpClient } from '@angular/common/http';
import { HUser } from '../model/HUser';
import { Router } from '@angular/router';
const URL = 'http://localhost:3001/hUser/register';
import { HEvent } from '../model/HEvent';
import { EventService } from '../service/EventService';

@Component({
  selector: 'app-team-sign-up',
  templateUrl: './team-sign-up.component.html'
})
export class TeamSignUpComponent implements OnInit{
  hParticipant: HUser = new HUser();
  selectedFile: File = null;

  assignedEvent: HEvent = new HEvent;
  filteredEvents: HEvent[] = [];
  listOfEvents: HEvent[] = [];

  constructor(private registrationService: RegistrationService, private http: HttpClient,
              private eventService: EventService, private router: Router) {
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
    this.hParticipant.role = 'HP';
    this.registrationService.reisterHUser(this.hParticipant)
      .subscribe(res => console.log(res));

      this.router.navigate(['/dashboard/' + this.hParticipant.credential.userName + '/HP' ]);
  }

  // upload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('http://localhost:3001/hUser/register', fd, {
  //     reportProgress: true,
  //     observe: 'events'
  //   })
  //   .subscribe(res =>{
  //       console.log(res);
  //   });
  // }

  onFileChange(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  //   upload(){
  //   this.makeFileRequest("http://localhost:3001/hUser/register", [], this.filesToUpload).then((result) => {
  //     console.log(result);
  // }, (error) => {
  //     console.error(error);
  // });
  // }

  //   makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
  //     return new Promise((resolve, reject) => {
  //         var formData: any = new FormData();
  //         var xhr = new XMLHttpRequest();
  //         for(var i = 0; i < files.length; i++) {
  //             formData.append("uploads[]", files[i], files[i].name);
  //         }
  //         xhr.onreadystatechange = function () {
  //             if (xhr.readyState == 4) {
  //                 if (xhr.status == 200) {
  //                     resolve(JSON.parse(xhr.response));
  //                 } else {
  //                     reject(xhr.response);
  //                 }
  //             }
  //         }
  //         xhr.open("POST", url, true);
  //         xhr.send(formData);
  //     });
  // }




  // let reader = new FileReader();
  // if(event.target.files && event.target.files.length > 0) {
  //   let file = event.target.files[0];
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     // this.form.get('avatar').setValue({
  //     //   filename: file.name,
  //     //   filetype: file.type,
  //     //   value: reader.result.split(',')[1]
  //     // })
  //   };
  // }
  //}

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
