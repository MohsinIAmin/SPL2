import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorPackagesComponent } from './operator-packages.component';

describe('OperatorPackagesComponent', () => {
  let component: OperatorPackagesComponent;
  let fixture: ComponentFixture<OperatorPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
