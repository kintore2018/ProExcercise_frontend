import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  TrainerDetail,
  TrainerDetailApiService
} from "../../services/trainer-detail-api.service";
import {Observable} from "rxjs/index";

@Component({
  selector: "app-trainer-detail-page",
  templateUrl: "./trainer-detail-page.component.html",
  styleUrls: ["./trainer-detail-page.component.scss"]
})
export class TrainerDetailPageComponent implements OnInit {
  trainerDetail: TrainerDetail;
  trainerDetail$: Observable<TrainerDetail>;

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
    this.trainerDetail$ = this.trainerDetailAPI.getTrainerDetail(id);
    console.log(this.trainerDetail$);
  }

  // 参考：https://stackblitz.com/edit/error-handling-with-angulars-async-pipe?file=app%2Fapp.component.ts

  // private getTrainerDetail(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.trainerDetailAPI
  //     .getTrainerDetail(id)
  //     .subscribe((data: TrainerDetail) => {
  //       this.trainerDetail = data;
  //     });
  // }
}
