import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysCustomersComponent } from './sys-customers.component';

describe('SysCustomersComponent', () => {
  let component: SysCustomersComponent;
  let fixture: ComponentFixture<SysCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
