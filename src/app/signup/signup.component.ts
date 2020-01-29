import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
 

  constructor(private signupService: SignupService) { }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const companyName = form.value.org;
    const employeeId =form.value.emp;
    const password = form.value.password;
   
   
  
    this.signupService.signup(companyName,employeeId, password).subscribe(resData=>{
      console.log(resData);
    },
    error => {
    console.log(error);

    });
    form.reset();

}
}
