import { Component, OnInit } from '@angular/core';
import { Customer } from './customer,model';
import { CustomerService } from './customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  registeredCustomers = 3;
  customers = [];
  error = null;
  
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerService.selectedCustomer = null;
    this.customerService.fetchCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        this.customerService.customers = this.customers;
      }, error => {
        this.error = error.message;
      }
    );
  }

  showCustomerDetails(customer) {
    this.customerService.selectedCustomer = customer;
    this.router.navigate([customer.id], {relativeTo: this.route})
  }
}
