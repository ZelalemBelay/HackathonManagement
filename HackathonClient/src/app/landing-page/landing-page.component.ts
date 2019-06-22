import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HUser } from '../model/HUser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  loggedInUser: HUser = new HUser();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.loggedInUser.role = params.role;
      this.loggedInUser.credential.userName = params.username;
    });
  }

}
