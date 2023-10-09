import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  constructor(
    private http: HttpClient
  ) {
  }

  public fetchCustomers$(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customers');
  }

  public submitCustomer(customer: Customer): Observable<any> {
    return this.http.post('http://localhost:8080/customers/new/', customer);
  }

  public getCustomerById$(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/customer/${id}`);
  }
}
