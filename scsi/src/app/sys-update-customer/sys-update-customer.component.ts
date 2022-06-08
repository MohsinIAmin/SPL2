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
  activate = true;

  ngOnInit(): void {
    if (this.updateCustomer.type == 'deactive') {
      this.activate = false;
    }
  }

  save() {
    if (this.activate) {
      this.updateCustomer.type = 'active';
    } else {
      this.updateCustomer.type = 'deactive';
    }
    console.log(this.updateCustomer);
    this.customerService.updateUser(this.updateCustomer)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['syscustomers']);
        },
        error => {
          console.log(error);
          this.router.navigate(['syscustomers']);
        }
      );
  }

}
