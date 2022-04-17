import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorNewsComponent } from './operator-news.component';

describe('OperatorNewsComponent', () => {
  let component: OperatorNewsComponent;
  let fixture: ComponentFixture<OperatorNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
