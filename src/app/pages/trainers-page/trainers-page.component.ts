import { Component, OnInit } from '@angular/core';
import {
  TrainerListApiService
} from '../../services/trainer-list-api.service';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-trainers-page',
  templateUrl: './trainers-page.component.html',
  styleUrls: ['./trainers-page.component.scss']
})
export class TrainersPageComponent implements OnInit {
  trainers$: Observable<any>;

  constructor(private trainerListAPI: TrainerListApiService) {}

  ngOnInit() {
    this.getTrainers();
  }

  private getTrainers(): void {
    this.trainers$ = this.trainerListAPI.getTrainers();
  }
}
