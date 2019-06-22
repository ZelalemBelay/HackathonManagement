import { Injectable } from '@angular/core';

import { Constants } from '../common/Constants';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../model/Credential';
import { HUser } from '../model/HUser';

//import { HParticipant } from '../model/HParticipant';
import { EvaluationForm } from '../model/EvaluationForm';


import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class RegistrationService {
  
    authentiacateUser(credential: Credential) {
    return this.httpClient.post<HUser>(Constants.AUTH_API, credential);
  }
    constructor(private httpClient: HttpClient) { }

    public reisterHUser(hUser: HUser) {
        return this.httpClient.post(Constants.REGISTRATION_API, hUser);
    }

    public reisterEvaluationForm(evaluationForm: EvaluationForm) {
        return this.httpClient.post(Constants.EVALUATION_FORM_API, evaluationForm);
    }
   
}