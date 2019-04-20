import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { NotificationComponent } from './notification/notification.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';
import { SettingsComponent } from './settings/settings.component';
import { PriceTableComponent } from './component/pricetable/pricetable.component';
import { PanelsComponent } from './component/panels/panels.component';
import { WizardComponent } from './component/wizard/wizard.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'table', component: TableComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'alert', component: SweetAlertComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'components/price-table', component: PriceTableComponent },
      { path: 'components/panels', component: PanelsComponent },
      { path: 'components/wizard', component: WizardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
