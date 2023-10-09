import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { NewCustomerDetailsComponent } from './customer/new-customer/details/new-customer-details.component'
import { NewCustomerAddressComponent } from './customer/new-customer/address/new-customer-address.component';
import { NewCustomerCommentsComponent } from './customer/new-customer/comments/new-customer-comments.component';
import { NewCustomerComponent } from "./customer/new-customer/new-customer.component";
import { CustomerComponent } from "./customer/customer.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { 
    path: 'customers', component: CustomerComponent, children: [
      { path: '', component: CustomerListComponent },
      { path: ':id', component: CustomerDetailsComponent }
  ] },
  {
    path: 'customers/new', component: NewCustomerComponent, children: [
      { path: 'details', component: NewCustomerDetailsComponent },
      { path: 'address', component: NewCustomerAddressComponent },
      { path: 'comment', component: NewCustomerCommentsComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
