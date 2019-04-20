/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lock', component: LockComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', loadChildren: "./dashboard/dashboard.module#DashboardModule" },
  { path: '', loadChildren: "./core/core.module#CoreModule" },
];

export const routing = RouterModule.forRoot(routes);

