import { TestBed } from '@angular/core/testing';

import { SysAccountService } from './sys-account.service';

describe('SysAccountService', () => {
  let service: SysAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SysAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
