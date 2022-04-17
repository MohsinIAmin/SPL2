import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickHome(): void {
    this.router.navigate(['home']);
  }
  clickPackages(): void {
    this.router.navigate(['packages']);
  }
  clickNews(): void {
    this.router.navigate(['news']);
  }
  clickComplaint(): void {
    this.router.navigate(['complaint']);
  }
  clickAccount(): void {
    this.router.navigate(['account']);
  }
}
