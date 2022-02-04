import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<any>(this.apiUrl);
  }

  addCustomer(customer:any) {
    return this.http.post<any>(this.apiUrl, customer);
  }

}
