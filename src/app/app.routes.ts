/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(routes);

