
import { Component, OnInit, ElementRef } from '@angular/core';
import { EvaluationForm } from '../model/EvaluationForm';
import { HTeamMember } from '../model/HTeamMember';
import { RegistrationService } from '../service/RegistrationService';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';  
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
  
    constructor(private registrationService: RegistrationService, private http: HttpClient) { }
  
    submitForm(data) {
      console.log(this.evaluationForm);
      this.registrationService.reisterEvaluationForm(this.evaluationForm)
        .subscribe(res => console.log(res)); 
            
    }
  

  }
  