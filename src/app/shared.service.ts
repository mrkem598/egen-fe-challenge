import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
   egenSolutionUrl = "http://mocker.egen.io/users/";
   allUsers = "bulk";
  public id : any;
  constructor(private _http: Http) { }

public notifyOther(data: any) {
    // console.log(data);
      if (data) {
        this.id = data.id;
      }
    }
  findAllUsers() {
               return this._http.get(this.egenSolutionUrl)
               .map(response => { { return response.json() }; })
               .catch(error => Observable.throw(error.json().error));
                  }

   findUserById(userId) {
               return this._http.get(this.egenSolutionUrl + userId)
                        .map(response => { { return response.json() }; })
                        .catch(error => Observable.throw(error.json().error));
                         }

   deleteUserById(userId) {
             return this._http.delete(this.egenSolutionUrl + userId)
                        .map(response => { { return response }; })
                        .catch(error => Observable.throw(error.json().error));
                         }
   addUserToGroup(user) {
              return this._http.post(this.egenSolutionUrl,user)
                 .map(response => { { return response.json() }; })
                 .catch(error => Observable.throw(error.json().error));
                  }
}
