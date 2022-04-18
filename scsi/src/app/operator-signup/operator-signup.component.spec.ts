import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorSignupComponent } from './operator-signup.component';

describe('OperatorSignupComponent', () => {
  let component: OperatorSignupComponent;
  let fixture: ComponentFixture<OperatorSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
