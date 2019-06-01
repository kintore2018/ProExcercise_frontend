import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrainersPageComponent } from './pages/trainers-page/trainers-page.component';
import { TrainerDetailPageComponent } from './pages/trainer-detail-page/trainer-detail-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { RequestFormPageComponent } from './pages/request-form-page/request-form-page.component';

import { ApiRequestInterceptor } from './interceptors/api-request.interceptor';
import { TrainerSearchConditionComponent } from './components/trainer-search-condition/trainer-search-condition.component';
import { CheckboxComponent } from './atoms/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TrainersPageComponent,
    HeaderComponent,
    FooterComponent,
    TrainerDetailPageComponent,
    PrivacyPolicyPageComponent,
    RequestFormPageComponent,
    TrainerSearchConditionComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
