import { Injectable } from '@angular/core';
import { Customer } from './customer,model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormArray } from '@angular/forms';

@Injectable()
export class CustomerService {
  
  editMode = false;
  customers = [];
  selectedCustomer: Customer;
  customerForm: FormArray;

  constructor(
    private http: HttpClient
  ) { }

  fetchCustomers() {
    return this.http.get('http://localhost:8080/customers')
  }

  submitCustomer() {
    return this.http.post('http://localhost:8080/customers/new/', this.selectedCustomer);
  }
}
