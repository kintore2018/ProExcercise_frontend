import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { TrainersPageComponent } from "./pages/trainers-page/trainers-page.component";
import { TrainerDetailPageComponent } from "./pages/trainer-detail-page/trainer-detail-page.component";
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TrainersPageComponent,
    HeaderComponent,
    FooterComponent,
    TrainerDetailPageComponent,
    PrivacyPolicyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
