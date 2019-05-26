import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AbstractApiService } from './abstract-api.service';

export interface IItem {
  id: number;
  name: string;
}

export interface IAreas {
  areas: IItem[];
}

export interface ISkillTags {
  skillTags: IItem[];
}

@Injectable({
  providedIn: 'root'
})
export class TrainerSearchConditionApiService extends AbstractApiService {

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  public fetchArea(): Observable<IAreas> {
    return this.fetch('/api/area/list');
  }

  public fetchSkillTag(): Observable<ISkillTags> {
    return this.fetch('/api/trainer/skill/tag/list');
  }
}
