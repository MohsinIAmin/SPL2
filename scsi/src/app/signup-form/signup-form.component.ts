import { assertPlatform, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { CustomerAccountService } from '../services/customer-account.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  customerAccount = new Customer();

  constructor(private router: Router, private customerService: CustomerAccountService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.customerService.register(this.customerAccount)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },
        error => { 
          alert("User Name already exixt");
        }
      );
  }

  loginClick(): void {
    this.router.navigate(['login']);
  }

}
