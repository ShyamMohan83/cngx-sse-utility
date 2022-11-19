import { TestBed } from '@angular/core/testing';

import { CngxSseUtilityService } from './cngx-sse-utility.service';

describe('CngxSseUtilityService', () => {
  let service: CngxSseUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CngxSseUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
