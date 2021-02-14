import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RegisterCustomerComponent } from './register/register-customer/register-form/register-customer.component';
import { RegisterModule } from './register/register-customer/register.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerIndex } from './register/register-customer/index/customer-index';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    CustomerIndex,
    RegisterCustomerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
