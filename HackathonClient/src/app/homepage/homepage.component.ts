import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

  export class HomepageComponent{
    form: FormGroup;


  teamname:string = '';
  title:string = '';
  number:string = '';
  description:string = '';
  email:string = '';
  upload:string = '';

  clearText(){
    this.teamname = null;
    this.title = null;
    this.number = null;
    this.description = null;
    this.email = null;
    this.labelteamname = null;
    this.labeltitle = null;
    this.labelnumber = null;
    this.labeldescription = null;
    this.labelcontactemail = null;
    this.upload = null;
  }

  labelteamname:string = '';
  labeltitle:string = '';
  labelnumber:string = '';
  labeldescription:string = '';
  labelcontactemail: string = '';
 

  removeTeamValue() {
    this.labelteamname = "Team Name";
  }

  removeNumberValue() {
    this.labelnumber = "Number of Team Members";
  }

  removeNumberEmail(){
    this.labelcontactemail = "Email Address;"
  }

  removeTitleValue() {
    this.labeltitle = "Title of the Project";
  }

  removeDescriptionValue() {
    this.labeldescription = "Description";
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        // this.form.get('avatar').setValue({
        //   filename: file.name,
        //   filetype: file.type,
        //   value: reader.result.split(',')[1]
        // })
      };
    }
  }

}
