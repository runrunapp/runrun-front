import { TestBed } from '@angular/core/testing';

import { RunroomieService } from './runroomie.service';

describe('RunroomieService', () => {
  let service: RunroomieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunroomieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
