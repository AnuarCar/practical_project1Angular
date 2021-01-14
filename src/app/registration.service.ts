import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, ObservableInput } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor( private _http : HttpClient) { }

public loginUserFromRemote(user:User):Observable<any>{
  //return this._http.post<any>("http://localhost:8080/login", user)
  return this._http.post<any>("https://practicalproject1.herokuapp.com/login", user)
}

public registeruserFromremote(user: User):Observable<any>{
  //return this._http.post<any>("http://localhost:8080/registeruser", user);
  return this._http.post<any>("https://practicalproject1.herokuapp.com/registeruser", user);
}

public testFromremote(){
  return this._http.get<any>("https://inventarioextranet.herokuapp.com/login/edna");
}

public get(urL:string){
  return this._http.get(urL);
}

public get_1(url_1:string){
  return this._http.request('GET', url_1, {responseType:'text'});
}

}
