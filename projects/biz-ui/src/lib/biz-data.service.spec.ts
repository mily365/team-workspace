import { TestBed } from '@angular/core/testing';

import { BizDataService } from './biz-data.service';

describe('BizDataService', () => {
  let service: BizDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BizDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
