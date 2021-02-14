import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { Service } from '../service/service';

@Component({
    selector: 'app-customer-index',
    templateUrl: './customer-index.html',
    styleUrls: ['./customer-index.css']
})
export class CustomerIndex implements OnInit {

    openRegister: boolean = false;
    customers: Customer;
    customer: Customer;
    constructor(private service: Service<Customer>) { }

    ngOnInit() {
        this.service.findAll().subscribe(result => { this.customers = result; });
    }

    onSelect(customer: Customer): void {
        this.customer = customer;
        this.openRegister = true;
    }

    signUp(): void {
        this.customer = new Customer;
        this.openRegister = true;
    }

    openSignUp = (status: boolean): void => { this.openRegister = status; this.ngOnInit() };

}