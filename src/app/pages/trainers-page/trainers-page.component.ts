import { Component, OnInit } from "@angular/core";
import {
  // TrainerList,
  TrainerListApiService
} from "../../services/trainer-list-api.service";
import {Observable} from "rxjs/index";

@Component({
  selector: "app-trainers-page",
  templateUrl: "./trainers-page.component.html",
  styleUrls: ["./trainers-page.component.scss"]
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

//圧倒的な違いは@inputやoutputするときのタイミングで利用する場合はngOninitに書く
//ここでコンロの火をつけるイメージ
//subscribeはデータに変化があれば実行する（状態を監視している）

//コンポーネント＝レイヤー

// あとでコンソールで確かめる時
// .subscribe(heroes => {
//   console.log(heroes.foo);     // NG
//   console.log(heroes['foo']);  // OK
// });
