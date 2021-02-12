
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root',
})
export class Service {
    constructor(private http: HttpClient) { }

    create(customer: Customer) {
        return this.http.post(`${environment.url}/customers`, customer)
    }

}