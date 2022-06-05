import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorAddNewsComponent } from './operator-add-news.component';

describe('OperatorAddNewsComponent', () => {
  let component: OperatorAddNewsComponent;
  let fixture: ComponentFixture<OperatorAddNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorAddNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorAddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
