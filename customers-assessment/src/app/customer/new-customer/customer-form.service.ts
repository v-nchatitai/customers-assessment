import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CustomerFormService {

  private newCustomerForm = this.fb.group({
    details: this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      cellphoneNumber: [null, Validators.required]
    }),
    address: this.fb.group({
      streetAddress01: [null, Validators.required],
      streetAddress02: [null,],
      cityOrTown: [null, Validators.required],
      postalCode: [null, [Validators.required, Validators.pattern(/^\d*$/)]],
      pAddress01: [null],
      pAddress02: [null],
      pCityOrTown: [null],
      pPostalCode: [null]
    }),
    comments: this.fb.group({
      comments: [null]
    })
  });

  constructor(private fb: FormBuilder) {
  }

  public get detailsForm(): FormGroup {
    return this.newCustomerForm.controls.details as FormGroup;
  }

  public get addressForm(): FormGroup {
    return this.newCustomerForm.controls.address as FormGroup;
  }

  public get commentsForm(): FormGroup {
    return this.newCustomerForm.controls.comments as FormGroup;
  }

  public customerForm(): any {
    return this.newCustomerForm.getRawValue();
  }
}
