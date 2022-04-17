import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorComplaintComponent } from './operator-complaint.component';

describe('OperatorComplaintComponent', () => {
  let component: OperatorComplaintComponent;
  let fixture: ComponentFixture<OperatorComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
