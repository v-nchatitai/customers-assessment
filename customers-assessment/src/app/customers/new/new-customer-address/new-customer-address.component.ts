import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer,model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer-address',
  templateUrl: './new-customer-address.component.html',
  styleUrls: ['./new-customer-address.component.css']
})
export class NewCustomerAddressComponent implements OnInit {

  addressDetailsForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let streetAddress01 = '';
    let streetAddress02 = '';
    let cityOrTown = '';
    let postalCode = '';
    let pAddress01 = '';
    let pAddress02 = '';
    let pCityOrTown = '';
    let pPostalCode = '';
    if(this.customerService.editMode) {
      streetAddress01 = this.customerService.selectedCustomer.streetAddress01;
      streetAddress02 = this.customerService.selectedCustomer.streetAddress02;
      cityOrTown = this.customerService.selectedCustomer.cityOrTown;
      postalCode = this.customerService.selectedCustomer.postalCode;
      pAddress01 = this.customerService.selectedCustomer.pAddress01;
      pAddress02 = this.customerService.selectedCustomer.pAddress02;
      pCityOrTown = this.customerService.selectedCustomer.cityOrTown;
      pPostalCode = this.customerService.selectedCustomer.pPostalCode;
    }

    this.addressDetailsForm = new FormGroup({
      'streetAddress01': new FormControl(streetAddress01, Validators.required),
      'streetAddress02': new FormControl(streetAddress02),
      'cityOrTown': new FormControl(cityOrTown, Validators.required),
      'postalCode': new FormControl(postalCode, [Validators.required, Validators.pattern(/^\d*$/)]),
      'pAddress01': new FormControl(pAddress01),
      'pAddress02': new FormControl(pAddress02),
      'pCityOrTown': new FormControl(pCityOrTown),
      'pPostalCode': new FormControl(pPostalCode),
    });
  }

  backToCustomerDetails() {
    this.customerService.editMode = true;
    this.mapValuesFromControls();
    this.router.navigate(['customers/new/details']);
  }

  proceedToAddressDetails() {
    this.mapValuesFromControls();
    this.router.navigate(['customers/new/comment']);
  }

  mapValuesFromControls() {
    this.customerService.selectedCustomer.streetAddress01 = this.addressDetailsForm.controls['streetAddress01'].value;
    this.customerService.selectedCustomer.streetAddress02 = this.addressDetailsForm.controls['streetAddress02'].value;
    this.customerService.selectedCustomer.cityOrTown = this.addressDetailsForm.controls['cityOrTown'].value;
    this.customerService.selectedCustomer.postalCode = this.addressDetailsForm.controls['postalCode'].value;
    this.customerService.selectedCustomer.pAddress01 = this.addressDetailsForm.controls['pAddress01'].value;
    this.customerService.selectedCustomer.pAddress02 = this.addressDetailsForm.controls['pAddress02'].value;
    this.customerService.selectedCustomer.cityOrTown = this.addressDetailsForm.controls['cityOrTown'].value;
    this.customerService.selectedCustomer.pPostalCode = this.addressDetailsForm.controls['pPostalCode'].value;
  }
}
