import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData
{
  response: string;
}

@Injectable({providedIn: 'root'})
export class SignupService {

  constructor(private http: HttpClient) {}

  signup(companyName: string, employeeId:string, password: string) {
    return this.http.post<AuthResponseData>('http://172.16.0.229:4000/signup',
    { 
      companyName: companyName,
      employeeId: employeeId,
      password: password,
    
    });
  }
}
