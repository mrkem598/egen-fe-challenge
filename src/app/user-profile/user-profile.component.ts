import { Component, OnInit, OnDestroy  } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService } from "./../shared.service";
import { CONST_ROUTING } from './../app.routing';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',

})
export class UserProfileComponent implements OnInit {

user:{
   id: string,
   firstName : string,
   lastName : string,
   name :string,
   email : string,
   address : any,
   company: any,
   profilePic : any;

  };

  constructor(private _sharedService: SharedService, private router:Router) { }

  ngOnInit() {

      if (this._sharedService.id) {
              console.log("user id to fetch "+this._sharedService.id);
              this._sharedService.findUserById(this._sharedService.id)
                  .subscribe(lstresult => {
                      this.user = lstresult;
                      console.log("json result received "+lstresult);
                      },
                    error => { console.log(error); }
                  );
           }
         }


deleteUser(user){

          if(confirm("Are you sure to Delete the User "+user.firstName )) {
              this._sharedService.deleteUserById(user.id)
              .subscribe(response => {
                   if(response){  // if user is deleted redirect to users view
                      console.log("User is deleted in api");
                      this.router.navigate(['/users']);
                   }
                  },
                );
            }
    }


}
