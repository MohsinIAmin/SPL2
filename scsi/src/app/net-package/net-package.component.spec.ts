import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPackageComponent } from './net-package.component';

describe('NetPackageComponent', () => {
  let component: NetPackageComponent;
  let fixture: ComponentFixture<NetPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
