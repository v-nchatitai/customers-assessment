import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customer.model';

@Component({
  selector: 'app-new-customer-details',
  templateUrl: './new-customer-details.component.html',
  styleUrls: ['./new-customer-details.component.css']
})
export class NewCustomerDetailsComponent implements OnInit {

  public customerDetailsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.customerDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cellphoneNumber: ['', Validators.required]
    });
    if (this.route.snapshot.fragment) {
      this.customerDetailsForm.controls['firstName'].setValue(this.route.snapshot.queryParamMap.get('firstName'));
      this.customerDetailsForm.controls['lastName'].setValue(this.route.snapshot.queryParamMap.get('lastName'));
      this.customerDetailsForm.controls['cellphoneNumber'].setValue(this.route.snapshot.queryParamMap.get('cellphoneNumber'));
    }
  }

  public proceedToAddressDetails(): void {
    if(this.route.snapshot.fragment) {
      this.router.navigate(
        ['customers/new/address'],
        {
          queryParams: {
            firstName: this.customerDetailsForm.controls['firstName'].value,
            lastName: this.customerDetailsForm.controls['lastName'].value,
            cellphoneNumber: this.customerDetailsForm.controls['cellphoneNumber'].value,
            streetAddress01: this.route.snapshot.queryParamMap.get('streetAddress01'),
            streetAddress02: this.route.snapshot.queryParamMap.get('streetAddress02'),
            cityOrTown: this.route.snapshot.queryParamMap.get('cityOrTown'),
            postalCode: this.route.snapshot.queryParamMap.get('postalCode'),
            pAddress01: this.route.snapshot.queryParamMap.get('pAddress01'),
            pAddress02: this.route.snapshot.queryParamMap.get('pAddress02'),
            pCityOrTown: this.route.snapshot.queryParamMap.get('pCityOrTown'),
            pPostalCode: this.route.snapshot.queryParamMap.get('pPostalCode'),
            comments: this.route.snapshot.queryParamMap.get('comments')
          },
          fragment: 'editing'
        }
      );
    }
    this.router.navigate(
      ['customers/new/address'],
      {
        queryParams: {
          firstName: this.customerDetailsForm.controls['firstName'].value,
          lastName: this.customerDetailsForm.controls['lastName'].value,
          cellphoneNumber: this.customerDetailsForm.controls['cellphoneNumber'].value,
        }
      }
    );
  }
}
