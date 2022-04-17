import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysComplaintComponent } from './sys-complaint.component';

describe('SysComplaintComponent', () => {
  let component: SysComplaintComponent;
  let fixture: ComponentFixture<SysComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
