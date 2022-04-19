import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CustomerAccountService } from '../services/customer-account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  userName: string = '';
  password: string = '';

  constructor(private customerService: CustomerAccountService,private router:Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.customerService.login(this.userName,this.password)
    .pipe(first())
    .subscribe(
      data=>{
        this.router.navigate(['account']);
        alert('log in successsfully');
      },
      error=>{
        alert('user name and password wrong');
      }
    );
  }

  registerClick():void {
    this.router.navigate(['signup']);
  }
}
