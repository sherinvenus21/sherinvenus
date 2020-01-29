import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface AuthResponseData{
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreateorderService {

  

  constructor(private http: HttpClient) { }

  createorder(order_id: string, qty: string,prod_id: string, expectedDate: string,completionDate: string, price:number, owner:string ) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.post<AuthResponseData>('http://172.16.0.229:4000/createorder',
       {   
        order_id : order_id,
        qty: qty,
        prod_id: prod_id,
        expectedDate: expectedDate,
        completionDate:completionDate,
        price:price,
        owner:owner
      }, httpOptions);
}
}
