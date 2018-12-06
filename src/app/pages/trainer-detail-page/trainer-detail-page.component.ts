import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  TrainerDetail,
  TrainerDetailApiService
} from "../../services/trainer-detail-api.service";

@Component({
  selector: "app-trainer-detail-page",
  templateUrl: "./trainer-detail-page.component.html",
  styleUrls: ["./trainer-detail-page.component.scss"]
})
export class TrainerDetailPageComponent implements OnInit {
  trainerDetail: TrainerDetail[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trainerDetailAPI: TrainerDetailApiService
  ) {}

  ngOnInit() {
    this.getTrainerDetail();
  }

  private getTrainerDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainerDetailAPI
      .getTrainerDetail(id)
      .subscribe((data: TrainerDetail[]) => {
        this.trainerDetail = data;
      });
  }

  private;
}
