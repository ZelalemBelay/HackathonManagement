import { Component, OnInit } from '@angular/core';
import { Credential } from '../model/Credential';
import { RegistrationService } from '../service/RegistrationService';
import { Router } from '@angular/router';
import { HUser } from '../model/HUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential: Credential = new Credential();
  loginError: boolean = false;

  constructor(private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm(data) {
    this.registrationService.authentiacateUser(this.credential)
      .subscribe(res => {
        console.log(res);
        if (res != null)
          this.router.navigate(['/dashboard/' + res.credential.userName + '/' + res.role ]);
        else
          this.loginError = true;
      });
  }

}
