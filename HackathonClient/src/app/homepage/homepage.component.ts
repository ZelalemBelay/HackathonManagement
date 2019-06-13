import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
//export class HomepageComponent implements OnInit {

  export class HomepageComponent{

  // constructor() { }

  // ngOnInit() {
  // }
  teamname:string = '';
  title:string = '';
  number:string = '';
  description:string = '';

  clearText(){
    this.teamname = null;
    this.title = null;
    this.number = null;
    this.description = null;
    this.labelteamname = null;
    this.labeltitle = null;
    this.labelnumber = null;
    this.labeldescription = null;
  }

  labelteamname:string = '';
  labeltitle:string = '';
  labelnumber:string = '';
  labeldescription:string = '';
  // placeholderteamname:string  = "Team Name";

  // removeTeamValue() {
  //   if (this.placeholderteamname) {
  //     this.placeholderteamname = null
  //     this.labelteamname = "Team Name";
  //     return;
  //   } else {
  //     this.placeholderteamname = "Team Name";
  //     // this.labelteamname = null;
  //     return
  //   }
  //   // this.teamname = '';
  // }

  removeTeamValue() {
    this.labelteamname = "Team Name";
  }

  removeTitleValue() {
    this.labeltitle = "Title of the Project";
  }

  removeNumberValue() {
    this.labelnumber = "Number of Team Members";
  }

  removeDescriptionValue() {
    this.labeldescription = "Description";
  }

}
