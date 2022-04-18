import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer';
import { CustomerAccountService } from '../services/customer-account.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form: FormBuilder = new FormBuilder;

  customerAccount = new Customer();

  constructor(private router: Router, private customerService: CustomerAccountService) { }

  ngOnInit(): void {
  }

  onSubmit(): void { 
    
  }

}
