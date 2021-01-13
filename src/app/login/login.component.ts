import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';
  url = 'enda';

  constructor(private _service :RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  activar_1(){
    this._service.get(`https://inventarioextranet.herokuapp.com/login/edna`)
     .subscribe( data => { 
        console.log(data);
      })
  }

  activar(){
    this._service.get_1(`https://inventarioextranet.herokuapp.com/login/edna`)
     .subscribe( data => { 
        console.log(data);
      })
  }

  loginuser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => { 
        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      } ,
      
      error => {

        console.log("exception occured");
        this.msg = "bad credentials, please enter valid emailid and password";

      }
    )
  }

  gotoregistration(){
        this._router.navigate(['/registration'])
    
  }

 


}
