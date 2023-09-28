import { Injectable } from '@angular/core';
import { Customer } from './customer,model';
import { HttpClient } from '@angular/common/http';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  editMode = false;
  customers = [];
  selectedCustomer: Customer;
  customerForm: FormArray;

  constructor(
    private http: HttpClient
  ) {
  }

  fetchCustomers$(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customers');
  }

  submitCustomer() {
    return this.http.post('http://localhost:8080/customers/new/', this.selectedCustomer);
  }

  getCustomerById$(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/customer/${id}`);
  }
}
