import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent {
  
  public customer: Customer;
  // private customerId: number;

  // This is preferred 
  public customer$ = this.route.paramMap.pipe(
    switchMap(paramMap => this.customerService.fetchCustomers$()
      .pipe(map(customers => customers.find(customer => customer.id === +paramMap.get('id')))))
  );

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //   this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    //   this.customerService.fetchCustomers$().subscribe(
    //     customers => {
    //       this.customer = customers.find(customer => customer.id === this.customerId);
    //     }
    //   );
  }
}
