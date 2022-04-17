import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator-navbar',
  templateUrl: './operator-navbar.component.html',
  styleUrls: ['./operator-navbar.component.css']
})
export class OperatorNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickHome(): void {
    this.router.navigate(['operatorhome']);
  }
  clickPackages(): void {
    this.router.navigate(['operatorpackages']);
  }
  clickNews(): void {
    this.router.navigate(['operatornews']);
  }
  clickComplaint(): void {
    this.router.navigate(['operatorcomplaint']);
  }
  clickAccount(): void {
    this.router.navigate(['operatoraccount']);
  }
}
