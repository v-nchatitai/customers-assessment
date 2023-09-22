import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer,model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer-details',
  templateUrl: './new-customer-details.component.html',
  styleUrls: ['./new-customer-details.component.css']
})
export class NewCustomerDetailsComponent implements OnInit {

  customerDetailsForm: FormGroup;
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let firstName = '';
    let lastName = '';
    let cellphoneNumber = '';
    if(this.customerService.editMode) {
      this.customer = this.customerService.selectedCustomer;
      firstName = this.customer.firstName;
      lastName = this.customer.lastName;
      cellphoneNumber = this.customer.cellphoneNumber;
    } else {
      this.customer = new Customer();
    }

    this.customerDetailsForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'cellphoneNumber': new FormControl(cellphoneNumber)
    });
  }

  proceedToAddressDetails() {
    this.customer.firstName = this.customerDetailsForm.controls['firstName'].value;
    this.customer.lastName = this.customerDetailsForm.controls['lastName'].value;
    this.customer.cellphoneNumber = this.customerDetailsForm.controls['cellphoneNumber'].value;
    this.customerService.selectedCustomer = this.customer;
    this.router.navigate(['customers/new/address']);
  }
}
