import { Component, OnInit } from '@angular/core';
import { Credential } from '../model/Credential';
import { RegistrationService } from '../service/RegistrationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential: Credential = new Credential();
  constructor(private registrationService: RegistrationService, 
    private router: Router) { }

  ngOnInit() {
  }

  submitForm(data) {
    console.log(this.credential);
    this.registrationService.authentiacateUser(this.credential)
      .subscribe(res => {
        console.log(res);
        if (res != null)
          this.router.navigate(['/dashboard']);
      });
  }

}
