import { TestBed } from '@angular/core/testing';

import { HideNavFooterGuard } from './hide-nav-and-footer.guard';

describe('HideNavAndFooterGuard', () => {
  let guard: HideNavFooterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HideNavFooterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
