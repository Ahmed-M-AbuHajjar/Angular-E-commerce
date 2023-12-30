import { TestBed } from '@angular/core/testing';

import { RemovescrollService } from './removescroll.service';

describe('RemovescrollService', () => {
  let service: RemovescrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemovescrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
