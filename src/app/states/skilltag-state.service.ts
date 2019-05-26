import { Injectable } from '@angular/core';
import { AbstractStateService } from './abstract-state.service';
import { ISkilltags, TrainerSearchConditionApiService } from '../services/trainer-search-condition-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkilltagStateService extends AbstractStateService<ISkilltags> {

  public defaultState = null;
  public subject = new BehaviorSubject<ISkilltags>(this.defaultState);

  constructor(
    private trainerSearchCondition: TrainerSearchConditionApiService
  ) {
    super();
  }

  public fetchSkilltag(): void {
    this.trainerSearchCondition.fetchSkillTag().subscribe((res: ISkilltags) => this.setValue(res));
  }
}
