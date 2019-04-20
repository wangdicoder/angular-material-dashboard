import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { NotificationComponent } from './notification/notification.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';
import { SettingsComponent } from './settings/settings.component';
import { PriceTableComponent } from './component/pricetable/pricetable.component';
import { PanelsComponent } from './component/panels/panels.component';
import { WizardComponent } from './component/wizard/wizard.component';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { RootComponent } from './root/root.component';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from 'app/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    TableComponent,
    NotificationComponent,
    SweetAlertComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    RootComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    SharedModule,
    FormsModule
  ]
})
export class DashboardModule { }
