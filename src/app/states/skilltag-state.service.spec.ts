import { TestBed } from '@angular/core/testing';

import { SkilltagStateService } from './skilltag-state.service';

describe('SkilltagStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkilltagStateService = TestBed.get(SkilltagStateService);
    expect(service).toBeTruthy();
  });
});
