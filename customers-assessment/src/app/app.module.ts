import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { NewCustomerDetailsComponent } from './customer/new-customer/details/new-customer-details.component';
import { NewCustomerAddressComponent } from './customer/new-customer/address/new-customer-address.component';
import { NewCustomerCommentsComponent } from './customer/new-customer/comments/new-customer-comments.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './customer/customer.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalHttpErrorHandler } from './error/global-http-error-handler.interceptor';
import { CustomErrorComponent } from './error/custom-error.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerComponent,
    CustomErrorComponent,
    CustomerListComponent,
    NewCustomerDetailsComponent,
    NewCustomerAddressComponent,
    NewCustomerCommentsComponent,
    HeaderComponent,
    FooterComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CustomerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorHandler,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
