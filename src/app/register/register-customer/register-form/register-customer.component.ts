import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/Customer';
import { Service } from '../service/service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnChanges {

  @Output() openSignUp = new EventEmitter<boolean>();
  @Input() customer: Customer;
  loading: boolean = false;
  registerForm: FormGroup;
  mask: string = '000.000.000-00';

  constructor(private fb: FormBuilder, private service: Service<Customer>) { }

  ngOnChanges() {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]]
    })
    if (this.customer) { this.fillForm(this.customer) }
  }

  create() {
    this.loading = true;

    if (this.registerForm.valid) {

      let customer = Object.assign(new Customer(), this.customer, this.registerForm.value)

      this.service.create(customer).subscribe((customer: Customer) => {
        this.customer.id ? alert('Registro atualizado com sucesso') : alert('Registro criado com sucesso');
        this.customer = customer;
        this.loading = false;
        this.openSignUp.emit(false);
      })

    } else {
      alert('Preencha os campos')
      this.loading = false
    }
  }

  delete(customer: Customer) {
    this.service.delete(customer.id).subscribe(
      () => {
        alert('Registro apagado com sucesso');
        this.openSignUp.emit(false);
      })
  }

  backToList = () => { this.openSignUp.emit(false) }

  fillForm(customer: Customer) {
    this.registerForm.patchValue({
      nome: customer.nome,
      cpf: customer.cpf
    })
  }

}
