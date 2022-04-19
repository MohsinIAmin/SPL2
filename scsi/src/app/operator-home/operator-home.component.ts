import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetPackage } from '../models/net-package';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-operator-home',
  templateUrl: './operator-home.component.html',
  styleUrls: ['./operator-home.component.css']
})
export class OperatorHomeComponent implements OnInit {

  allPackage: NetPackage[] = [];
  constructor(private router: Router, private packageService: PackageService) { }

  ngOnInit(): void {
    this.getAllPackage();
  }

  getAllPackage() {
    this.packageService.getAllPackage()
      .subscribe(response => {
        this.allPackage = response.map(item => {
          return new NetPackage(item.name, item.speed, item.cost);
        });
      });
  }
}
