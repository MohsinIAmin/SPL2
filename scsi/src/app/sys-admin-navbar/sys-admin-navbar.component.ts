import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sys-admin-navbar',
  templateUrl: './sys-admin-navbar.component.html',
  styleUrls: ['./sys-admin-navbar.component.css']
})
export class SysAdminNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickHome(): void {
    this.router.navigate(['syshome']);
  }
  clickPackages(): void {
    this.router.navigate(['syspackages']);
  }
  clickCustomers(): void {
    this.router.navigate(['syscustomers']);
  }
  clickComplaint(): void {
    this.router.navigate(['syscomplaint']);
  }
  clickAccount(): void {
    this.router.navigate(['sysaccount']);
  }
}
