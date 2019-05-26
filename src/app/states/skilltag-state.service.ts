import { Injectable } from '@angular/core';
import { AbstractStateService } from './abstract-state.service';
import { ISkillTags, IItem, TrainerSearchConditionApiService } from '../services/trainer-search-condition-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillTagStateService extends AbstractStateService<IItem[]> {

  public defaultState = null;
  public subject = new BehaviorSubject<IItem[]>(this.defaultState);

  constructor(
    private trainerSearchCondition: TrainerSearchConditionApiService
  ) {
    super();
  }

  public fetchSkilltag(): void {
    this.trainerSearchCondition.fetchSkillTag().subscribe((res: ISkillTags) => {
      this.setValue(res.skillTags);
    });
  }
}
