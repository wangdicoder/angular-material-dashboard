import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { RootComponent } from './root/root.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'product', component: TableComponent },
      { path: 'product/:id', component: ProductItemComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
