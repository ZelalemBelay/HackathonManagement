import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { HEvent } from 'src/app/model/HEvent';
import { EventService } from 'src/app/service/EventService';
import { HUser } from 'src/app/model/HUser';
import { UserManagementService } from 'src/app/service/UserManagementService';

@Component({
  selector: 'app-event-create-form',
  templateUrl: './event-create-form.component.html',
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`]
})
export class EventCreateFormComponent implements OnInit {

  hoveredDate: NgbDate;
  hEvent: HEvent = new HEvent();

  fromDate: NgbDate;
  toDate: NgbDate;

  assignedHost: HUser = new HUser;

  listOfHosts: HUser[] = [];
  filteredHosts: HUser[] = [];


  constructor(calendar: NgbCalendar, private hEventService: EventService,
    private userManagementService: UserManagementService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.userManagementService.fetchUsersByRole('HH').subscribe(
      hh => this.listOfHosts = hh
    )
    console.log(this.listOfHosts)
    this.filteredHosts = this.listOfHosts;
  }

  submitForm(data) {
    console.log(this.hEvent);
    this.hEventService.createEvent(this.hEvent)
      .subscribe(res => console.log(res));
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.hEvent.fromDate = date.month + '/' + date.day + '/' + date.year;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.hEvent.toDate = date.month + '/' + date.day + '/' + date.year;
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.hEvent.fromDate = date.month + '/' + date.day + '/' + date.year;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredHosts = this.listFilter ? this.performFilter(this.listFilter) : this.listOfHosts;
  }

  performFilter(filterBy: string): HUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listOfHosts.filter((user: HUser) =>
      user.credential.userName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onHostClicked(hUser: HUser) {
    this.assignedHost = hUser;
    this.hEvent.assignedHost = hUser.credential.userName;
  }
}