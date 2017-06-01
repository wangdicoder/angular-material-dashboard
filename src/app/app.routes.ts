/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

