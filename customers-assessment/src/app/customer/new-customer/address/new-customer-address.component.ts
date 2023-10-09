import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerFormService } from '../customer-form.service';

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
    private formBuilder: FormBuilder,
    private customerFormService: CustomerFormService
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.addressDetailsForm = this.customerFormService.addressForm;
  }

  public backToCustomerDetails(): void {
    this.router.navigate(['customers/new/details']);
  }

  public proceedToComments(): void {
    this.router.navigate(['customers/new/comment']);
  }
}
