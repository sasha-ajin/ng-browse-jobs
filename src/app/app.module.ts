import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdsComponent } from './pages/ads/ads.component';
import { AdCardComponent } from './components/ad-card/ad-card.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdsComponent,
    AdCardComponent,
    LoginComponent,
    HomeComponent,
    CandidatesComponent,
    ProfileComponent,
    HeaderComponent,
    CreateAdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
