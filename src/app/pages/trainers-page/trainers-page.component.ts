import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import {
  TrainerListApiService
} from '../../services/trainer-list-api.service';
import { AreaStateService } from 'src/app/states/area-state.service';
import { IItem } from '../../services/trainer-search-condition-api.service';
import { SkillTagStateService } from 'src/app/states/skilltag-state.service';

@Component({
  selector: 'app-trainers-page',
  templateUrl: './trainers-page.component.html',
  styleUrls: ['./trainers-page.component.scss']
})
export class TrainersPageComponent implements OnInit {
  public trainers$: Observable<any>;
  public areas$: Observable<IItem[]>;
  public skillTags$: Observable<IItem[]>;

  constructor(
    private trainerListAPI: TrainerListApiService,
    private areaState: AreaStateService,
    private skillTagState: SkillTagStateService,
  ) {}

  ngOnInit() {
    this.getTrainers();
    // TODO 前のページでfetchした場合はローカルメモリから取得する
    this.areaState.fetchArea();
    this.areas$ = this.areaState.$;
    this.skillTagState.fetchSkilltag();
    this.skillTags$ = this.skillTagState.$;
  }

  private getTrainers(): void {
    this.trainers$ = this.trainerListAPI.getTrainers();
  }
}
