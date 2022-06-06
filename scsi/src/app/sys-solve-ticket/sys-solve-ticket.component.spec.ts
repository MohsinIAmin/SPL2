import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSolveTicketComponent } from './sys-solve-ticket.component';

describe('SysSolveTicketComponent', () => {
  let component: SysSolveTicketComponent;
  let fixture: ComponentFixture<SysSolveTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSolveTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSolveTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
