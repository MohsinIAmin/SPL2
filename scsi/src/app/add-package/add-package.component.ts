import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NetPackage } from '../models/net-package';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  newPackage = new NetPackage('', '', '');

  constructor(private packageService: PackageService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.packageService.addNewPackage(this.newPackage)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['syspackages']);
        },
        error => {
          alert('Package already exixt');
          this.router.navigate(['syspackages']);
        }
      );
  }

}
