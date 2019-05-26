import { TestBed } from '@angular/core/testing';

import { SkillTagStateService } from './skilltag-state.service';

describe('SkilltagStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillTagStateService = TestBed.get(SkillTagStateService);
    expect(service).toBeTruthy();
  });
});
