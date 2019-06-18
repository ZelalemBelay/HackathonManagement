import { Injectable } from '@angular/core';
import { HParticipant } from '../model/HParticipant';
import { Constants } from '../common/Constants';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../model/Credential';

@Injectable({
    providedIn: 'root'
})

export class RegistrationService {
  
    authentiacateUser(credential: Credential) {
    return this.httpClient.post(Constants.AUTH_API, credential);
  }
    constructor(private httpClient: HttpClient) { }

    public reisterHParticipant(hParticipant: HParticipant) {
        return this.httpClient.post(Constants.HPARTICIPANT_REG_API, hParticipant);
    }
}