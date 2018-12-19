import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface TrainerDetail {
  name: string;
  area: string;
}

@Injectable({ providedIn: "root" })
export class TrainerDetailApiService {
  url = "https://api-proex-2018.herokuapp.com/api/trainer/details/";

  constructor(private http: HttpClient) {}

  getTrainerDetail(id): Observable<TrainerDetail> {
    return this.http.get<TrainerDetail>(this.url + id);
  }
}
