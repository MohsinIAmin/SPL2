import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAccountComponent } from './sys-account.component';

describe('SysAccountComponent', () => {
  let component: SysAccountComponent;
  let fixture: ComponentFixture<SysAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
