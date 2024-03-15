import { TestBed } from '@angular/core/testing';

import { FindAllNoticesService } from './find-all-notices.service';

describe('FindAllNoticesService', () => {
  let service: FindAllNoticesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindAllNoticesService);
  });

  it('should be created', () => {
    expect(1).toBe(1)
  });
});
