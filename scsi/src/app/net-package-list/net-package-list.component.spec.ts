import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPackageListComponent } from './net-package-list.component';

describe('NetPackageListComponent', () => {
  let component: NetPackageListComponent;
  let fixture: ComponentFixture<NetPackageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetPackageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
