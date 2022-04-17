import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { NetPackageListComponent } from './net-package-list/net-package-list.component';
import { NewsComponent } from './news/news.component';
import { OperatorNavbarComponent } from './operator-navbar/operator-navbar.component';
import { PackagesComponent } from './packages/packages.component';
import { SysAdminNavbarComponent } from './sys-admin-navbar/sys-admin-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'account', component: AccountComponent },
  { path: 'operatorHome', component: OperatorNavbarComponent },
  { path: 'sysAdminHome', component: SysAdminNavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
