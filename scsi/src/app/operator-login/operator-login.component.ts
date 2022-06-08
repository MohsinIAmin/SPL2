import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { OperatorAccountService } from '../services/operator-account.service';

@Component({
  selector: 'app-operator-login',
  templateUrl: './operator-login.component.html',
  styleUrls: ['./operator-login.component.css']
})
export class OperatorLoginComponent implements OnInit {

  userName: string = '';
  password: string = '';

  constructor(private operatorService: OperatorAccountService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.operatorService.login(this.userName, this.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('token', data[0].username);
          this.router.navigate(['operatorhome']);
        },
        error => {
          alert('user name and password wrong');
        }
      )
  }

  registerClick(): void {
    this.router.navigate(['operatorsignup']);
  }

}
