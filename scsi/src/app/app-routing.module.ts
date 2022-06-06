import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NetPackageListComponent } from './net-package-list/net-package-list.component';
import { NewsComponent } from './news/news.component';
import { OperatorAccountComponent } from './operator-account/operator-account.component';
import { OperatorAddNewsComponent } from './operator-add-news/operator-add-news.component';
import { OperatorComplaintComponent } from './operator-complaint/operator-complaint.component';
import { OperatorHomeComponent } from './operator-home/operator-home.component';
import { OperatorLoginComponent } from './operator-login/operator-login.component';
import { OperatorNavbarComponent } from './operator-navbar/operator-navbar.component';
import { OperatorNewsComponent } from './operator-news/operator-news.component';
import { OperatorPackagesComponent } from './operator-packages/operator-packages.component';
import { OperatorSignupComponent } from './operator-signup/operator-signup.component';
import { PackagesComponent } from './packages/packages.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SysAccountComponent } from './sys-account/sys-account.component';
import { SysAdminHomeComponent } from './sys-admin-home/sys-admin-home.component';
import { SysAdminNavbarComponent } from './sys-admin-navbar/sys-admin-navbar.component';
import { SysComplaintComponent } from './sys-complaint/sys-complaint.component';
import { SysCustomersComponent } from './sys-customers/sys-customers.component';
import { SysLoginComponent } from './sys-login/sys-login.component';
import { SysPackagesComponent } from './sys-packages/sys-packages.component';
import { SysSignupComponent } from './sys-signup/sys-signup.component';
import { SysSolveTicketComponent } from './sys-solve-ticket/sys-solve-ticket.component';
import { SysUpdatePackageComponent } from './sys-update-package/sys-update-package.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'account', component: AccountComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'syshome', component: SysAdminHomeComponent },
  { path: 'syspackages', component: SysPackagesComponent },
  { path: 'syscustomers', component: SysCustomersComponent },
  { path: 'syscomplaint', component: SysComplaintComponent },
  { path: 'sysaccount', component: SysAccountComponent },
  { path: 'syssignup', component: SysSignupComponent },
  { path: 'syslogin', component: SysLoginComponent },
  { path: 'updatepackage', component: SysUpdatePackageComponent },
  { path: 'addpackage', component: AddPackageComponent },
  { path: 'solveticket', component: SysSolveTicketComponent },
  { path: 'operatorhome', component: OperatorHomeComponent },
  { path: 'operatorpackages', component: OperatorPackagesComponent },
  { path: 'operatornews', component: OperatorNewsComponent },
  { path: 'operatorcomplaint', component: OperatorComplaintComponent },
  { path: 'operatoraccount', component: OperatorAccountComponent },
  { path: 'operatorsignup', component: OperatorSignupComponent },
  { path: 'operatorlogin', component: OperatorLoginComponent },
  { path: 'addnews', component: OperatorAddNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
