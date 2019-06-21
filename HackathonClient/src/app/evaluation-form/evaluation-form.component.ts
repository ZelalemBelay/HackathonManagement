
import { Component, OnInit, ElementRef } from '@angular/core';
import { EvaluationForm } from '../model/EvaluationForm';
import { HTeamMember } from '../model/HTeamMember';
import { RegistrationService } from '../service/RegistrationService';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';  
import { HUser } from '../model/HUser';
import { EventListComponent } from '../events/event-list/event-list.component';
import { Router, ActivatedRoute } from '@angular/router';
const URL = 'http://localhost:3001/hUser/register'; 

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent {


  

  evaluationForm: EvaluationForm = new EvaluationForm();
    //filesToUpload: Array<File>;
    selectedFile: File = null;
    huser: HUser;
    events: EventListComponent;

  
    constructor(private registrationService: RegistrationService, private http: HttpClient, private _router: Router, 
      private route: ActivatedRoute) {
        this.route.params.subscribe( params => console.log(params));
       }
  
    submitForm(data) {
      console.log(this.evaluationForm);
      this.registrationService.reisterEvaluationForm(this.evaluationForm)
        .subscribe(res => console.log(res)); 
            
    }

    onBackClick() : void {
      this._router.navigate(['/dashboard']);
    }

    acceptStatus(){
      //console.log("accepted : ", this.huser.status);
      //this.huser.status = "accepted";
    }

    rejectStatus(){
      //this.huser.status = "rejected";
    }
  

  }
  