import { Injectable } from '@angular/core';
import { HParticipant } from '../model/HParticipant';
import { EvaluationForm } from '../model/EvaluationForm';
import { Constants } from '../common/Constants';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RegistrationService {
    constructor(private httpClient: HttpClient) { }

    public reisterHParticipant(hParticipant: HParticipant) {
        return this.httpClient.post(Constants.HPARTICIPANT_REG_API, hParticipant);
    }

    public reisterEvaluationForm(evaluationForm: EvaluationForm) {
        return this.httpClient.post(Constants.EVALUATION_FORM_API, evaluationForm);
    }
   
}