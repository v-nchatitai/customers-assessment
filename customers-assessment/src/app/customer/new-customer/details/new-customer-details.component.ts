import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerFormService } from '../customer-form.service';

@Component({
  selector: 'app-new-customer-details',
  templateUrl: './new-customer-details.component.html',
  styleUrls: ['./new-customer-details.component.css']
})
export class NewCustomerDetailsComponent implements OnInit {

  public customerDetailsForm: FormGroup;

  constructor(
    private router: Router,
    private customerFormService: CustomerFormService
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.customerDetailsForm = this.customerFormService.detailsForm;
  }

  public proceedToAddressDetails(): void {
    this.router.navigate(['customers/new/address']);
  }
}
