import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from './customer,model';
import { CustomerService } from './customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// TODO: Rename to customer list
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {

  registeredCustomers = 3;
  customers = [];
  error = null;

  private destroy = new Subject();

  public customers$ = this.customerService.fetchCustomers$();

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.customerService.selectedCustomer = null;

    // TODO: Subscribing using Async pipe and try write observables in a declarative to leverage async pipe.
    // With this approach you need to clean up your subscription
    this.customerService.fetchCustomers$()
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: Customer[]) => {
          this.customers = response;
          this.customerService.customers = this.customers;
        }, error => {
          this.error = error.message;
        }
      );
  }

  showCustomerDetails(id) {
    // // this.customerService.selectedCustomer = id;
    // this.router.navigate([id.id], {relativeTo: this.route});
    this.router.navigateByUrl(`customers/${id}`)
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
