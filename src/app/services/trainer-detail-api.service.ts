import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface TrainerDetail {
  access: string;
  belonging: string;
  comment: string;
  fee: string;
  hobby: string;
  imagePath: string
  introduction: string
  reason: string;
  salesPoint: string;
  trainerId: number;
  trainerName: string;
  trainerNameEn: string;
}

@Injectable({ providedIn: "root" })
export class TrainerDetailApiService {
  url = "https://api-proex-2018.herokuapp.com/api/trainer/details/";
  // url = "assets/mock/detail.json";

  constructor(private http: HttpClient) {}

  getTrainerDetail(id): Observable<TrainerDetail> {
    return this.http.get<TrainerDetail>(this.url + id);
  }

  // demo用
  // getTrainerDetail(id): Observable<TrainerDetail> {
  //   return this.http.get<TrainerDetail>(this.url);
  // }
}
