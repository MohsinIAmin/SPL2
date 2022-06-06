import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetPackage } from '../models/net-package';
import { CustomerAccountService } from '../services/customer-account.service';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-net-package-list',
  templateUrl: './net-package-list.component.html',
  styleUrls: ['./net-package-list.component.css']
})
export class NetPackageListComponent implements OnInit {
  
  allPackage: NetPackage[] = [];
  
  constructor(private router: Router, private packageService: PackageService, private customerService:CustomerAccountService) { }

  ngOnInit(): void {
    this.getAllPackage();
  }

  getAllPackage() {
    this.packageService.getAllPackage()
      .subscribe(response => { 
        this.allPackage = response.map(item=>{
          return new NetPackage(item.name,item.speed,item.cost);
        });
      });
  }

  updateCustomer = this.customerService.getCustomerToUpdate();

  updateUser(){
    
  }
}
