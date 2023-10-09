import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from '../../customer.model';
import { CustomerFormService } from '../customer-form.service';

@Component({
  selector: 'app-new-customer-comments',
  templateUrl: './new-customer-comments.component.html'
})
export class NewCustomerCommentsComponent implements OnInit, OnDestroy {

  private queryParamsObservable: Subscription;
  private submitCustomerObservable: Subscription;
  customerCommentsForm: FormGroup;
  private customer = new Customer();
  error = null;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private customerFormService: CustomerFormService
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.customerCommentsForm = this.customerFormService.commentsForm;
  }

  public backToAddressDetails(): void {
    this.router.navigate(['customers/new/address']);
  }

  public onSubmit(): void {
    // this.customer.comments = this.customerCommentsForm.controls['comments'].value;
    // this.submitCustomerObservable = this.customerService.submitCustomer(this.customer).subscribe(
    //   response => {
    //     this.router.navigate(['/']);
    //   }, error => {
    //     this.error = error.message;
    //   }
    // );
    console.log('Customer form', this.customerFormService.customerForm);
  }

  public ngOnDestroy(): void {
  }
}
