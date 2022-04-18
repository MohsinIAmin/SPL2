import { TestBed } from '@angular/core/testing';

import { OperatorAccountService } from './operator-account.service';

describe('OperatorAccountService', () => {
  let service: OperatorAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
