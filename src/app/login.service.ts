import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
  response: string;
}
@Injectable({providedIn: 'root'})


export class LoginService {

  constructor(private http: HttpClient) {}
  
  login(username: string, orgName: string) {
    
    return this.http.post<AuthResponseData>('http://192.168.30.34:4000/login',
       {   
        username: username,
        orgName: orgName
      });
}
}
