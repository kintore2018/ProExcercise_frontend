import { TestBed } from '@angular/core/testing';

import { AreaStateService } from './area-state.service';

describe('AreaStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaStateService = TestBed.get(AreaStateService);
    expect(service).toBeTruthy();
  });
});
