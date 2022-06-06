import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysUpdateCustomerComponent } from './sys-update-customer.component';

describe('SysUpdateCustomerComponent', () => {
  let component: SysUpdateCustomerComponent;
  let fixture: ComponentFixture<SysUpdateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysUpdateCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUpdateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
