import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Customer } from '../models/customer';
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
  customer = new Customer('', '', '', '', '', '');
  
  constructor(private router: Router, private packageService: PackageService, private customerService:CustomerAccountService) { }

  ngOnInit(): void {
    this.getAllPackage();
    this.getCustomer();
  }

  getAllPackage() {
    this.packageService.getAllPackage()
      .subscribe(response => { 
        this.allPackage = response.map(item=>{
          return new NetPackage(item.name,item.speed,item.cost);
        });
      });
  }

  updateUser(netPack :string){
    console.log(this.customer);
    this.customer.package_id = netPack;
    this.customer.type = 'deactive';
    console.log(this.customer);
    this.customerService.updateUser(this.customer)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['account']);
        },
        error => {
          console.log(error);
          this.router.navigate(['account']);
        }
      );
  }

  getCustomer() {
    const userName = String(localStorage.getItem('token'));
    console.log(userName);
    this.customerService.getUser(userName)
      .pipe(first())
      .subscribe(
        data => {
          this.customer = data[0];
        }
      )
  }
}
