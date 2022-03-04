import { AdsComponent } from './pages/ads/ads.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ads', component: AdsComponent },
  { path: 'ad/detail/:id/candidates', component: CandidatesComponent },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
