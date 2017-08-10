import { Component, OnInit } from '@angular/core';
import {SharedService } from "./../shared.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',


})
export class UsersComponent implements OnInit {

users:[{
   id: string,
   firstName : string,
   lastName : string,
   name :string,
   email : string,
   address : any,
   company: any,
   profilePic : any;

  }];


  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._sharedService.findAllUsers()
        .subscribe(lstresult => {
            this.users = lstresult;
           },
          error => {
                   console.log("Error. The find users result JSON value is as follows:");
                   console.log(error);
                  }
            );
      }

      rowClick(user){this._sharedService.notifyOther(user)}

}
