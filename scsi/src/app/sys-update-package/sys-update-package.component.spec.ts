import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysUpdatePackageComponent } from './sys-update-package.component';

describe('SysUpdatePackageComponent', () => {
  let component: SysUpdatePackageComponent;
  let fixture: ComponentFixture<SysUpdatePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysUpdatePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUpdatePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
