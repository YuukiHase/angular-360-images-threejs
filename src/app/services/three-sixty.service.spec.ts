import { TestBed } from '@angular/core/testing';

import { ThreeSixtyService } from './three-sixty.service';

describe('ThreeSixtyService', () => {
  let service: ThreeSixtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreeSixtyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
