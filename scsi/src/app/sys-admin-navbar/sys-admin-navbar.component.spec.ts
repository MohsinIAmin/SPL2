import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAdminNavbarComponent } from './sys-admin-navbar.component';

describe('SysAdminNavbarComponent', () => {
  let component: SysAdminNavbarComponent;
  let fixture: ComponentFixture<SysAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAdminNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
