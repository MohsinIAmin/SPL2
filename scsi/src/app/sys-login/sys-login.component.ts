import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SysAccountService } from '../services/sys-account.service';

@Component({
  selector: 'app-sys-login',
  templateUrl: './sys-login.component.html',
  styleUrls: ['./sys-login.component.css']
})
export class SysLoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  constructor(private router: Router, private sysAccount: SysAccountService) { }

  ngOnInit(): void {
  }
  login() {
    this.sysAccount.login(this.userName, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['sysaccount']);
          alert('log in successsfully');
        },
        error => {
          alert('user name and password wrong');
        }
      )
  }

  registerClick(): void {
    this.router.navigate(['syssignup']);
  }
}
