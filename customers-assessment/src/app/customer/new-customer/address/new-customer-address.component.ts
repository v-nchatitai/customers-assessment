import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../../customer.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-customer-address',
  templateUrl: './new-customer-address.component.html',
  styleUrls: ['./new-customer-address.component.css']
})
export class NewCustomerAddressComponent implements OnInit {

  public addressDetailsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.addressDetailsForm = this.formBuilder.group({
      streetAddress01: ['', Validators.required],
      streetAddress02: ['',],
      cityOrTown: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d*$/)]],
      pAddress01: [''],
      pAddress02: [''],
      pCityOrTown: [''],
      pPostalCode: ['']
    });
    if(this.route.snapshot.fragment) {
      this.addressDetailsForm.controls['streetAddress01'].setValue(this.route.snapshot.queryParamMap.get('streetAddress01'));
      this.addressDetailsForm.controls['streetAddress02'].setValue(this.route.snapshot.queryParamMap.get('streetAddress02'));
      this.addressDetailsForm.controls['cityOrTown'].setValue(this.route.snapshot.queryParamMap.get('cityOrTown'));
      this.addressDetailsForm.controls['postalCode'].setValue(this.route.snapshot.queryParamMap.get('postalCode'));
      this.addressDetailsForm.controls['pAddress01'].setValue(this.route.snapshot.queryParamMap.get('pAddress01'));
      this.addressDetailsForm.controls['pAddress02'].setValue(this.route.snapshot.queryParamMap.get('pAddress02'));
      this.addressDetailsForm.controls['pCityOrTown'].setValue(this.route.snapshot.queryParamMap.get('pCityOrTown'));
      this.addressDetailsForm.controls['pPostalCode'].setValue(this.route.snapshot.queryParamMap.get('pPostalCode'));
    }
  }

  public backToCustomerDetails(): void {
    this.router.navigate(
      ['customers/new/details'],
      {
        queryParams: {
          firstName: this.route.snapshot.queryParamMap.get('firstName'),
          lastName: this.route.snapshot.queryParamMap.get('lastName'),
          cellphoneNumber: this.route.snapshot.queryParamMap.get('cellphoneNumber'),
          streetAddress01: this.addressDetailsForm.controls['streetAddress01'].value,
          streetAddress02: this.addressDetailsForm.controls['streetAddress02'].value,
          cityOrTown: this.addressDetailsForm.controls['cityOrTown'].value,
          postalCode: this.addressDetailsForm.controls['postalCode'].value,
          pAddress01: this.addressDetailsForm.controls['pAddress01'].value,
          pAddress02: this.addressDetailsForm.controls['pAddress02'].value,
          pCityOrTown: this.addressDetailsForm.controls['pCityOrTown'].value,
          pPostalCode: this.addressDetailsForm.controls['pPostalCode'].value,
          comments: this.route.snapshot.queryParamMap.get('comments')
        },
        fragment: 'editing'
      }
    );
  }

  public proceedToComments(): void {
    this.router.navigate(['customers/new/comment'],
      {
        queryParams: {
          firstName: this.route.snapshot.queryParamMap.get('firstName'),
          lastName: this.route.snapshot.queryParamMap.get('lastName'),
          cellphoneNumber: this.route.snapshot.queryParamMap.get('cellphoneNumber'),
          streetAddress01: this.addressDetailsForm.controls['streetAddress01'].value,
          streetAddress02: this.addressDetailsForm.controls['streetAddress02'].value,
          cityOrTown: this.addressDetailsForm.controls['cityOrTown'].value,
          postalCode: this.addressDetailsForm.controls['postalCode'].value,
          pAddress01: this.addressDetailsForm.controls['pAddress01'].value,
          pAddress02: this.addressDetailsForm.controls['pAddress02'].value,
          pCityOrTown: this.addressDetailsForm.controls['pCityOrTown'].value,
          pPostalCode: this.addressDetailsForm.controls['pPostalCode'].value,
          comments: this.route.snapshot.queryParamMap.get('comments')
        }
      }
    );
  }
}
