import { TestBed } from '@angular/core/testing';

import { TrainerDetailApiService } from './trainer-detail-api.service';

describe('TrainerDetailApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerDetailApiService = TestBed.get(TrainerDetailApiService);
    expect(service).toBeTruthy();
  });
});
