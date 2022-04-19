import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSignupComponent } from './sys-signup.component';

describe('SysSignupComponent', () => {
  let component: SysSignupComponent;
  let fixture: ComponentFixture<SysSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
