import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private loginService: LoginService) { }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const username = form.value.username;
    const password = form.value.password;

    this.loginService.login(username, password).subscribe(resData=>{
      console.log(resData);
      this.setSession(resData);
    },
    error => {
    console.log(error);

    });
    form.reset();
  }
  setSession(authResult) {
    localStorage.setItem('token',authResult.token);
    console.log(localStorage.getItem("token"));
     }

}
