import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator, first } from 'rxjs';
import { Sysadmin } from '../models/sysadmin';
import { OperatorAccountService } from '../services/operator-account.service';
import { SysAccountService } from '../services/sys-account.service';

@Component({
  selector: 'app-sys-signup',
  templateUrl: './sys-signup.component.html',
  styleUrls: ['./sys-signup.component.css']
})
export class SysSignupComponent implements OnInit {

  sysAccount = new Sysadmin();

  constructor(private router:Router,private sysService:SysAccountService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.sysService.register(this.sysAccount)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['syslogin']);
        },
        error => { 
          alert("User Name already exixt");
        }
      );
  }

  loginClick(): void {
    this.router.navigate(['syslogin']);
  }
}
