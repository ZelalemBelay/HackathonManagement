import { Injectable } from '@angular/core';
import { Constants } from '../common/Constants';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../model/Credential';
import { HEvent } from '../model/HEvent';

@Injectable({
    providedIn: 'root'
})

export class EventService {
    constructor(private httpClient: HttpClient) { }

    fetchAllEvents() {
        return this.httpClient.get<HEvent[]>(Constants.HEVENT_FETCH_API);
      }

    createEvent(hEvent: HEvent) {
        return this.httpClient.post(Constants.HEVENT_INSERT_API, hEvent);
    }
}