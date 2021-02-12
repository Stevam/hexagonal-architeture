import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/Customer';
import { Service } from '../service/service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  status: boolean = false;
  registerForm: FormGroup;
  constructor( private fb: FormBuilder, private service: Service ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]]
    })
  }

  create() {
    this.status = true;
    if(this.registerForm.valid){
      let customer = Object.assign(new Customer(), this.registerForm.value)
      this.service.create(customer).subscribe(sucess => {
        alert('Registro Criado Com Sucesso');
        this.status = false
      })
    }else{
      alert('Preencha os campos')
    }
  }

}
