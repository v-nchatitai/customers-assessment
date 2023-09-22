import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer-comments',
  templateUrl: './new-customer-comments.component.html',
  styleUrls: ['./new-customer-comments.component.css']
})
export class NewCustomerCommentsComponent implements OnInit {

  customerCommentsForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let comments = '';
    if(this.customerService.editMode) {
      comments = this.customerService.selectedCustomer.comments;
    }

    this.customerCommentsForm = new FormGroup({
      'comments': new FormControl(comments)
    });
  }

  backToAddressDetails() {}
  
  onSubmit() {
    this.mapValuesFromControls();
    this.customerService.submitCustomer().subscribe(
      response => {
        this.customerService.selectedCustomer = null;
        this.customerService.editMode = false;
        this.router.navigate(['/']);
      }
    );
  }

  mapValuesFromControls() {
    this.customerService.selectedCustomer.comments = this.customerCommentsForm.controls['comments'].value;
  }
}
