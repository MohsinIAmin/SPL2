import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetPackage } from '../models/net-package';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-sys-admin-home',
  templateUrl: './sys-admin-home.component.html',
  styleUrls: ['./sys-admin-home.component.css']
})
export class SysAdminHomeComponent implements OnInit {

  allPackage: NetPackage[] = [];
  constructor(private router: Router, private packageService: PackageService) { }

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

  updatePackage(netPac: NetPackage): void {
    this.packageService.setUpdatePackage(netPac);
    this.router.navigate(['updatepackage']);
  }

}
