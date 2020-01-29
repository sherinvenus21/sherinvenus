import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateorderService } from 'src/app/createorder.service';

@Component({
  selector: 'app-createodr',
  templateUrl: './createodr.component.html',
  styleUrls: ['./createodr.component.css']
})
export class CreateodrComponent  {
  

  constructor(private createorderService: CreateorderService) { }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const order_id = form.value.order_id;
    const qty = form.value.qty;
    const prod_id = form.value.prod_id;
    const expectedDate = form.value.expectedDate;
    const completedDate = form.value.completedDate;
    const price= form.value.price;
    const owner = form.value.owner;

    this.createorderService.createorder(order_id, qty,prod_id,expectedDate,completedDate,price,owner).subscribe(resData=>{
      console.log(resData);
      
    },
    error => {
    console.log(error);

    });
    form.reset();
  }

}
