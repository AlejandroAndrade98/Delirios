import { TestBed } from '@angular/core/testing';

import { EntremetsService } from './entremets.service';

describe('EntremetsService', () => {
  let service: EntremetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntremetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
