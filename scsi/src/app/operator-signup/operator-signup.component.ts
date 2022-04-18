import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Operator } from '../models/operator';
import { OperatorAccountService } from '../services/operator-account.service';

@Component({
  selector: 'app-operator-signup',
  templateUrl: './operator-signup.component.html',
  styleUrls: ['./operator-signup.component.css']
})
export class OperatorSignupComponent implements OnInit {

  operatorAccount = new Operator();

  constructor(private router:Router,private operatorService:OperatorAccountService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.operatorService.register(this.operatorAccount)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['operatorlogin']);
        },
        error => { 
          alert("User Name already exixt");
        }
      );
  }

  loginClick(): void {
    this.router.navigate(['operatorlogin']);
  }
}
