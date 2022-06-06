import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Customer } from '../models/customer';
import { CustomerAccountService } from '../services/customer-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private customerService: CustomerAccountService) { }

  customer = new Customer('', '', '', '', '', '');

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    const userName = String(localStorage.getItem('token'));
    console.log(userName);
    this.customerService.getUser(userName)
      .pipe(first())
      .subscribe(
        data => {
          this.customer = data[0];
          console.log(this.customer);
        }
      )
  }
}
