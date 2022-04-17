import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { NetPackageListComponent } from './net-package-list/net-package-list.component';
import { NewsComponent } from './news/news.component';
import { OperatorAccountComponent } from './operator-account/operator-account.component';
import { OperatorComplaintComponent } from './operator-complaint/operator-complaint.component';
import { OperatorHomeComponent } from './operator-home/operator-home.component';
import { OperatorNavbarComponent } from './operator-navbar/operator-navbar.component';
import { OperatorNewsComponent } from './operator-news/operator-news.component';
import { OperatorPackagesComponent } from './operator-packages/operator-packages.component';
import { PackagesComponent } from './packages/packages.component';
import { SysAccountComponent } from './sys-account/sys-account.component';
import { SysAdminHomeComponent } from './sys-admin-home/sys-admin-home.component';
import { SysAdminNavbarComponent } from './sys-admin-navbar/sys-admin-navbar.component';
import { SysComplaintComponent } from './sys-complaint/sys-complaint.component';
import { SysCustomersComponent } from './sys-customers/sys-customers.component';
import { SysPackagesComponent } from './sys-packages/sys-packages.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'account', component: AccountComponent },
  { path: 'syshome', component: SysAdminHomeComponent },
  { path: 'syspackages', component: SysPackagesComponent },
  { path: 'syscustomers', component: SysCustomersComponent },
  { path: 'syscomplaint', component: SysComplaintComponent },
  { path: 'sysaccount', component: SysAccountComponent },
  { path: 'operatorhome', component: OperatorHomeComponent },
  { path: 'operatorpackages', component: OperatorPackagesComponent },
  { path: 'operatornews', component: OperatorNewsComponent },
  { path: 'operatorcomplaint', component: OperatorComplaintComponent },
  { path: 'operatoraccount', component: OperatorAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
