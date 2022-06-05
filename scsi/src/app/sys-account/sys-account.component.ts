import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Sysadmin } from '../models/sysadmin';
import { SysAccountService } from '../services/sys-account.service';

@Component({
  selector: 'app-sys-account',
  templateUrl: './sys-account.component.html',
  styleUrls: ['./sys-account.component.css']
})
export class SysAccountComponent implements OnInit {

  constructor(private sysadminService: SysAccountService) { }
  sysaccount = new Sysadmin();
  ngOnInit(): void {
    this.getSysadmin();
  }

  getSysadmin() {
    const userName = localStorage.getItem('token')?.toString();
    console.log(userName);
    this.sysadminService.getSysadmin(userName)
      .pipe(first())
      .subscribe(
        data => {
          this.sysaccount = data[0];
          console.log(this.sysaccount);
        }
      )
  }
}
