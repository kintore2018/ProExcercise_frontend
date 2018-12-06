import { TestBed } from '@angular/core/testing';

import { TrainerListApiService } from './trainer-list-api.service';

describe('TrainerListApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerListApiService = TestBed.get(TrainerListApiService);
    expect(service).toBeTruthy();
  });
});
