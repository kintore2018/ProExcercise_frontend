import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  TrainerListApiService,
  ITrainerListRequest
} from '../../services/trainer-list-api.service';
import { AreaStateService } from '../../states/area-state.service';
import { IItem } from '../../services/trainer-search-condition-api.service';
import { SkillTagStateService } from '../../states/skilltag-state.service';

@Component({
  selector: 'app-trainers-page',
  templateUrl: './trainers-page.component.html',
  styleUrls: ['./trainers-page.component.scss']
})
export class TrainersPageComponent implements OnInit {
  public trainers$: Observable<any>;
  public areas$: Observable<IItem[]>;
  public skillTags$: Observable<IItem[]>;

  public selectAreas: string[] = [];
  public selectSkillTags: string[] = [];

  public open = {
    area: false,
    skillTag: false
  };

  constructor(
    private trainerListAPI: TrainerListApiService,
    private areaState: AreaStateService,
    private skillTagState: SkillTagStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setSearchCondition();
    this.getTrainers();
    // TODO 前のページでfetchした場合はローカルメモリから取得する
    this.areaState.fetchArea();
    this.areas$ = this.areaState.$;
    this.skillTagState.fetchSkilltag();
    this.skillTags$ = this.skillTagState.$;
  }

  private getTrainers(): void {
    const params = {} as ITrainerListRequest;
    if (this.selectAreas.length) {
      params.areaIds = this.selectAreas;
    }

    if (this.selectSkillTags.length) {
      params.skillTagIds = this.selectSkillTags;
    }
    this.trainers$ = this.trainerListAPI.getTrainers(params);
  }

  private setSearchCondition(): void {
    const area = this.route.snapshot.queryParamMap.get('area');
    const skillTag = this.route.snapshot.queryParamMap.get('skillTag');

    if (area) {
      this.selectAreas.push(area);
    }

    if (skillTag) {
      this.selectSkillTags.push(skillTag);
    }
  }

  public onSearch(items: string[], isArea = false): void {
    isArea ? this.selectAreas = items : this.selectSkillTags = items;
    this.getTrainers();
  }

  public onOpen(isArea: boolean): void {
    this.open = {
      area: isArea,
      skillTag: !isArea
    };
  }
}
