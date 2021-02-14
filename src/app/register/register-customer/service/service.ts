
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root',
})
export class Service<T> {
  constructor(private http: HttpClient) { }

  create(customer: Customer): Observable<T> {
    if (customer.id) {
      return this.http.put<T>(`${environment.url}/customers`, customer)
    } else {
      return this.http.post<T>(`${environment.url}/customers`, customer)
    }
  }

  findAll(): Observable<T> {
    return this.http.get<T>(`${environment.url}/customers`)
  }

  delete(id: string){
    return this.http.delete(`${environment.url}/customers/` + id)
  }

}