import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrainersPageComponent } from './pages/trainers-page/trainers-page.component';
import { TrainerDetailPageComponent } from './pages/trainer-detail-page/trainer-detail-page.component';
import { PrivacyPolicyPageComponent } from "./pages/privacy-policy-page/privacy-policy-page.component";
import { RequestFormPageComponent } from "./pages/request-form-page/request-form-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'trainers',
    component: TrainersPageComponent
  },
  {
    path: 'trainers/detail/:id',
    component: TrainerDetailPageComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyPageComponent
  },
  {
    path: 'request',
    component: RequestFormPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
