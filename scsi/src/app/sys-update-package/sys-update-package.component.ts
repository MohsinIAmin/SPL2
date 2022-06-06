import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-sys-update-package',
  templateUrl: './sys-update-package.component.html',
  styleUrls: ['./sys-update-package.component.css']
})
export class SysUpdatePackageComponent implements OnInit {

  pacTobeUpdate = this.packageService.getUpdatePackage();
  constructor(private router: Router,private packageService:PackageService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.packageService.updatePackage(this.pacTobeUpdate)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['syspackages']);
        },
        error => {
          console.log(error);
          alert('Package cannot updated');
          this.router.navigate(['syspackages']);
        }
      );
  }

}
