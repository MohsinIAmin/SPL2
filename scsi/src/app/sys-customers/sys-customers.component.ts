import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { CustomerAccountService } from '../services/customer-account.service';

@Component({
  selector: 'app-sys-customers',
  templateUrl: './sys-customers.component.html',
  styleUrls: ['./sys-customers.component.css']
})
export class SysCustomersComponent implements OnInit {

  allCustomer: Customer[] = [];

  constructor(private customerService: CustomerAccountService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer()
      .subscribe(response => {
        this.allCustomer = response.map(item => {
          return new Customer(item.username, item.mobileNumber, item.address, item.password, item.type, item.package_id);
        });
      });
  }

  action(customer: Customer) {
    this.customerService.setCustomerToUpdate(customer);
    this.router.navigate(['updatecustomere']);
  }

}
