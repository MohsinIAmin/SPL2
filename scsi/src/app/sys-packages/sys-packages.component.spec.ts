import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysPackagesComponent } from './sys-packages.component';

describe('SysPackagesComponent', () => {
  let component: SysPackagesComponent;
  let fixture: ComponentFixture<SysPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
