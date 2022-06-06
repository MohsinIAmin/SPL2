import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CustomerAccountService } from '../services/customer-account.service';

@Component({
  selector: 'app-sys-update-customer',
  templateUrl: './sys-update-customer.component.html',
  styleUrls: ['./sys-update-customer.component.css']
})
export class SysUpdateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerAccountService, private router: Router) { }

  updateCustomer = this.customerService.getCustomerToUpdate();

  ngOnInit(): void {
  }

  submit(): void {
    this.customerService.updateUser(this.updateCustomer)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['syscustomers']);
        },
        error => {
          console.log(error);
          alert('Package cannot updated');
          this.router.navigate(['syscustomers']);
        }
      );
  }

  save() {
    this.customerService.updateUser(this.updateCustomer)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['syscustomers']);
        },
        error => {
          console.log(error);
          alert('Package cannot updated');
          this.router.navigate(['syscustomers']);
        }
      );
  }

}
