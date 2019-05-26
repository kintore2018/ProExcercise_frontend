import { Injectable } from '@angular/core';
import { AbstractStateService } from './abstract-state.service';
import { IArea, IAreas, TrainerSearchConditionApiService } from '../services/trainer-search-condition-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaStateService extends AbstractStateService<IArea[]> {

  public defaultState = null;
  public subject = new BehaviorSubject<IArea[]>(this.defaultState);


  constructor(
    private trainerSearchCondition: TrainerSearchConditionApiService
  ) {
    super();
  }

  public fetchArea(): void {
    this.trainerSearchCondition.fetchArea().subscribe((res: IAreas) => this.setValue(res.areas));
  }
}
