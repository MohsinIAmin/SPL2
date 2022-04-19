import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetPackage } from '../models/net-package';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-sys-packages',
  templateUrl: './sys-packages.component.html',
  styleUrls: ['./sys-packages.component.css']
})
export class SysPackagesComponent implements OnInit {

  allPackage: NetPackage[] = [];

  constructor(private router: Router, private packageService: PackageService) { }

  ngOnInit(): void {
    this.getAllPackage();
  }

  addNewPackage(): void {
    this.router.navigate(['addpackage']);
  }

  getAllPackage() {
    this.packageService.getAllPackage()
      .subscribe(response => { 
        this.allPackage = response.map(item=>{
          return new NetPackage(item.name,item.speed,item.cost);
        });
      });
  }
}
