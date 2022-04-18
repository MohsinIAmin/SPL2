import { Component, OnInit } from '@angular/core';
import { CustomerAccountService } from '../services/customer-account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userName: string = '';
  password: string = '';

  constructor(private customerService: CustomerAccountService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.customerService.login(this.userName,this.password);

  }
}
