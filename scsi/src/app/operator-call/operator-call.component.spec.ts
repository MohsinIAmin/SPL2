import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCallComponent } from './operator-call.component';

describe('OperatorCallComponent', () => {
  let component: OperatorCallComponent;
  let fixture: ComponentFixture<OperatorCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
