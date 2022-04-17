import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NetPackageComponent } from './net-package/net-package.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NetPackageListComponent } from './net-package-list/net-package-list.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { SysAdminNavbarComponent } from './sys-admin-navbar/sys-admin-navbar.component';
import { OperatorNavbarComponent } from './operator-navbar/operator-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SysAdminHomeComponent } from './sys-admin-home/sys-admin-home.component';
import { OperatorHomeComponent } from './operator-home/operator-home.component';
import { PackagesComponent } from './packages/packages.component';
import { NewsComponent } from './news/news.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { AccountComponent } from './account/account.component';
import { SysPackagesComponent } from './sys-packages/sys-packages.component';
import { SysCustomersComponent } from './sys-customers/sys-customers.component';
import { SysComplaintComponent } from './sys-complaint/sys-complaint.component';
import { SysAccountComponent } from './sys-account/sys-account.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { OperatorPackagesComponent } from './operator-packages/operator-packages.component';
import { OperatorNewsComponent } from './operator-news/operator-news.component';
import { OperatorComplaintComponent } from './operator-complaint/operator-complaint.component';
import { OperatorAccountComponent } from './operator-account/operator-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    NetPackageComponent,
    NetPackageListComponent,
    CustomerNavbarComponent,
    SysAdminNavbarComponent,
    OperatorNavbarComponent,
    UserHomeComponent,
    SysAdminHomeComponent,
    OperatorHomeComponent,
    PackagesComponent,
    NewsComponent,
    ComplaintComponent,
    AccountComponent,
    SysPackagesComponent,
    SysCustomersComponent,
    SysComplaintComponent,
    SysAccountComponent,
    LoginFormComponent,
    SignupFormComponent,
    OperatorPackagesComponent,
    OperatorNewsComponent,
    OperatorComplaintComponent,
    OperatorAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
