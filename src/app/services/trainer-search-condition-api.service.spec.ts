import { TestBed } from '@angular/core/testing';

import { TrainerSearchConditionApiService } from './trainer-search-condition-api.service';

describe('TrainerSearchConditionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerSearchConditionApiService = TestBed.get(TrainerSearchConditionApiService);
    expect(service).toBeTruthy();
  });
});
