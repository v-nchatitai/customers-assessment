import { Component } from "@angular/core";
import { CustomerFormService } from './customer-form.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  providers: [CustomerFormService]
})
export class NewCustomerComponent {

}
