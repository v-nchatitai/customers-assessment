import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit, OnDestroy {

  customers$: Observable<Customer[]>;
  error: Error | null = null;

  private destroy = new Subject();

  constructor(
    private customerService: CustomerService,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.customers$ = this.customerService.fetchCustomers$().pipe(
      tap({
        error: (error) => {
          this.error = error;
        }
      }),
      catchError(err => of([]))
    );
  }

  private showCustomerDetails(id): void {
    this.router.navigateByUrl(`customers/${id}`)
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
