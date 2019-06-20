import { Injectable } from '@angular/core';
import { Constants } from '../common/Constants';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../model/Credential';
import { HUser } from '../model/HUser';

@Injectable({
    providedIn: 'root'
})

export class RegistrationService {
  
    authentiacateUser(credential: Credential) {
    return this.httpClient.post(Constants.AUTH_API, credential);
  }
    constructor(private httpClient: HttpClient) { }

    public reisterHUser(hUser: HUser) {
        return this.httpClient.post(Constants.REGISTRATION_API, hUser);
    }
}