import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerDetailsComponent } from "./customers/customer-details/customer-details.component";
import { NewCustomerDetailsComponent } from "./customers/new/new-customer-details/new-customer-details.component";
import { NewCustomerAddressComponent } from "./customers/new/new-customer-address/new-customer-address.component";
import { NewCustomerCommentsComponent } from "./customers/new/new-customer-comments/new-customer-comments.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: '/customers', pathMatch: 'full' },
    // { path: 'customers', component: CustomersComponent, children: [
    //     { path: ':id', component: CustomerDetailsComponent },
    //     { path: 'new/details', component: NewCustomerDetailsComponent },
    //     { path: 'new/address', component: NewCustomerAddressComponent },
    //     { path: 'new/comment', component: NewCustomerCommentsComponent }
    // ] }
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'customers', component: CustomersComponent },
    { path: 'customers/:id', component: CustomerDetailsComponent },
    { path: 'customers/new/details', component: NewCustomerDetailsComponent },
    { path: 'customers/new/address', component: NewCustomerAddressComponent },
    { path: 'customers/new/comment', component: NewCustomerCommentsComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}