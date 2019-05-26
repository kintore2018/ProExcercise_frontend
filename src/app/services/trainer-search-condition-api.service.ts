import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AbstractApiService } from './abstract-api.service';

export interface IArea {
  areaId: number;
  areaName: string;
}

export interface IAreas {
  areas: IArea[];
}

export interface ISkilltag {
  tagId: number;
  tag: string;
}

export interface ISkilltags {
  skilltags: ISkilltag[];
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

  public fetchSkillTag(): Observable<ISkilltags> {
    return this.fetch('/api/trainer/skilltag/list');
  }
}
