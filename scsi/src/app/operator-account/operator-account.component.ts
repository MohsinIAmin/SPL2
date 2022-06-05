import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Operator } from '../models/operator';
import { Sysadmin } from '../models/sysadmin';
import { OperatorAccountService } from '../services/operator-account.service';

@Component({
  selector: 'app-operator-account',
  templateUrl: './operator-account.component.html',
  styleUrls: ['./operator-account.component.css']
})
export class OperatorAccountComponent implements OnInit {

  constructor(private operatorService:OperatorAccountService) { }

  operatoraccount = new Operator();
  ngOnInit(): void {
    this.getSysadmin();
  }

  getSysadmin() {
    const userName = localStorage.getItem('token')?.toString();
    console.log(userName);
    this.operatorService.getOperator(userName)
      .pipe(first())
      .subscribe(
        data => {
          this.operatoraccount = data[0];
          console.log(this.operatoraccount);
        }
      )
  }

}
