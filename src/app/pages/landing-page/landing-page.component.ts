import { Component, OnInit } from '@angular/core';
import { IItem } from '../../services/trainer-search-condition-api.service';
import { AreaStateService } from 'src/app/states/area-state.service';
import { SkilltagStateService } from 'src/app/states/skilltag-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public areas$: Observable<IItem[]>;
  public skilltags$: Observable<IItem[]>;

  constructor(
    private areaState: AreaStateService,
    private skilltagState: SkilltagStateService,
  ) { }

  ngOnInit() {
    this.areaState.fetchArea();
    this.areas$ = this.areaState.$;
    this.skilltagState.fetchSkilltag();
    this.skilltags$ = this.skilltagState.$;
  }

}
