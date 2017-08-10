import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {SharedService } from "./../shared.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',

})
export class AddUserComponent implements OnInit {
  bootstrap: [AddUserComponent];
  addUser : FormGroup;

  constructor(private _sharedService: SharedService, private fb:FormBuilder){
    this.addUser =this.fb.group({
      'firstName' : '',
      'lastName': '',
      'email' : '',
      'address':this.fb.group({
        'street': '',
        'city':'',
        'state':'',
        'zip':'',
        'country':''
      }),

      'company':this.fb.group({
        'companyName':'',
        'companyWebsite':''
      }),

      'profilePic':''
    })
  }
  ngOnInit() {
  }
  addUserToGroup(){
    this._sharedService.addUserToGroup(JSON.stringify(this.addUser))
    .subscribe(lstresult => {
      if(lstresult){
        console.log("user added");
      }
    },
    error => {console.log(error);}
  );
}
}
