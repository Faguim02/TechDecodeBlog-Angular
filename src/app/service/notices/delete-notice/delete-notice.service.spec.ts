import { TestBed } from '@angular/core/testing';

import { DeleteNoticeService } from './delete-notice.service';

describe('DeleteNoticeService', () => {
  let service: DeleteNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
