import { TestBed } from '@angular/core/testing';

import { PublishFromGuard } from './publish-from.guard';

describe('PublishFromGuard', () => {
  let guard: PublishFromGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublishFromGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
