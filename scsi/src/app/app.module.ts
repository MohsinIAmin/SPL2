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
    AccountComponent
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
