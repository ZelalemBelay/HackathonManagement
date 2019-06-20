import { Component, OnInit, ElementRef } from '@angular/core';
import { HParticipant } from '../model/HParticipant';
import { HTeamMember } from '../model/HTeamMember';
import { RegistrationService } from '../service/RegistrationService';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';  
const URL = 'http://localhost:3001/hUser/register';  

@Component({
  selector: 'app-team-sign-up',
  templateUrl: './team-sign-up.component.html',
  styleUrls: ['./team-sign-up.component.css']
})
export class TeamSignUpComponent {
  hParticipant: HParticipant = new HParticipant();
  //filesToUpload: Array<File>;
  selectedFile: File = null;

  constructor(private registrationService: RegistrationService, private http: HttpClient) {
    this.hParticipant.teamMembers.push(new HTeamMember());
    //this.filesToUpload = [];
  }

  submitForm(data) {
    console.log(this.hParticipant);
    this.registrationService.reisterHParticipant(this.hParticipant)
      .subscribe(res => console.log(res)); 
          
  }


  upload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3001/hUser/register', fd, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(res =>{
        console.log(res);
    });
  }

  onFileChange(event) {

    this.selectedFile = <File>event.target.files[0];
  }

//   upload(){
//   this.makeFileRequest("http://localhost:3001/hUser/register", [], this.filesToUpload).then((result) => {
//     console.log(result);
// }, (error) => {
//     console.error(error);
// });
// }

//   makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
//     return new Promise((resolve, reject) => {
//         var formData: any = new FormData();
//         var xhr = new XMLHttpRequest();
//         for(var i = 0; i < files.length; i++) {
//             formData.append("uploads[]", files[i], files[i].name);
//         }
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     resolve(JSON.parse(xhr.response));
//                 } else {
//                     reject(xhr.response);
//                 }
//             }
//         }
//         xhr.open("POST", url, true);
//         xhr.send(formData);
//     });
// }


 

    // let reader = new FileReader();
    // if(event.target.files && event.target.files.length > 0) {
    //   let file = event.target.files[0];
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     // this.form.get('avatar').setValue({
    //     //   filename: file.name,
    //     //   filetype: file.type,
    //     //   value: reader.result.split(',')[1]
    //     // })
    //   };
    // }
  //}

  addTeamMemberView() {
    this.hParticipant.teamMembers.push(new HTeamMember());
  }
}
