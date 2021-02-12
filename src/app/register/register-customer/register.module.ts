
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Service } from './service/service';
import { RegisterCustomerComponent } from './register-form/register-customer.component';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Service
  ],
  bootstrap: [
    AppComponent
  ]
})

export class RegisterModule { }
