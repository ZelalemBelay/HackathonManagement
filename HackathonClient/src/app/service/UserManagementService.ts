import { Injectable } from '@angular/core';
import { Constants } from '../common/Constants';
import { HttpClient } from '@angular/common/http';
import { HUser } from '../model/HUser';

@Injectable({
    providedIn: 'root'
})

export class UserManagementService {
    constructor(private httpClient: HttpClient) { }

    fetchUsersByRole(role: string) {
        return this.httpClient.get<HUser[]>(Constants.HUSER_FETCH_API + role);
      }

    //   fetchParticipantByTeamName(teamName: string){
    //       return this.httpClient.get(Constants.HUSER_FETCH_TEAM_API + teamName)
    //   }
}