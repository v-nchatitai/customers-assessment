import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from '../../customer.model';

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
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}
  
  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.customerCommentsForm = this.formBuilder.group({
      comments: ['']
    });
    this.queryParamsObservable = this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.customer.firstName = queryParams['firstName'];
        this.customer.lastName = queryParams['lastName'];
        this.customer.cellphoneNumber = queryParams['cellphoneNumber'];
        this.customer.streetAddress01 = queryParams['streetAddress01'];
        this.customer.streetAddress02 = queryParams['streetAddress02'];
        this.customer.cityOrTown = queryParams['cityOrTown'];
        this.customer.postalCode = queryParams['postalCode'];
        this.customer.pAddress01 = queryParams['pAddress01'];
        this.customer.pAddress02 = queryParams['pAddress02'];
        this.customer.pCityOrTown = queryParams['pCityOrTown'];
        this.customer.pPostalCode = queryParams['pPostalCode'];
        this.customer.comments = queryParams['comments'];
      }
    );
  }

  public backToAddressDetails(): void {

    this.router.navigate(
      ['customers/new/address'],
      {
        queryParams: {
          firstName: this.route.snapshot.queryParamMap.get('firstName'),
          lastName: this.route.snapshot.queryParamMap.get('lastName'),
          cellphoneNumber: this.route.snapshot.queryParamMap.get('cellphoneNumber'),
          streetAddress01: this.route.snapshot.queryParamMap.get('streetAddress01'),
          streetAddress02: this.route.snapshot.queryParamMap.get('streetAddress02'),
          cityOrTown: this.route.snapshot.queryParamMap.get('cityOrTown'),
          postalCode: this.route.snapshot.queryParamMap.get('postalCode'),
          pAddress01: this.route.snapshot.queryParamMap.get('pAddress01'),
          pAddress02: this.route.snapshot.queryParamMap.get('pAddress02'),
          pCityOrTown: this.route.snapshot.queryParamMap.get('pCityOrTown'),
          pPostalCode: this.route.snapshot.queryParamMap.get('pPostalCode'),
          comments: this.customerCommentsForm.controls['comments'].value
        },
        fragment: 'editing'
      }
    );
  }
  
  public onSubmit(): void {
    this.customer.comments = this.customerCommentsForm.controls['comments'].value;
    this.submitCustomerObservable = this.customerService.submitCustomer(this.customer).subscribe(
      response => {
        this.router.navigate(['/']);
      }, error => {
        this.error = error.message;
      }
    );
  }
  
  public ngOnDestroy(): void {
    this.queryParamsObservable.unsubscribe();
    this.submitCustomerObservable ? this.submitCustomerObservable.unsubscribe() : console.log('Page closed without submission');
  }
}
