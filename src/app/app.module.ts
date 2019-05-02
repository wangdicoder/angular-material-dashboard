import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule, MatFormField, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
// import 'hammerjs';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';

import { SettingsService } from './services/settings.service';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import * as topbar from 'topbar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AmplifyAngularModule,
    SharedModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [SettingsService, AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    topbar.config({
      autoRun: true,
      barThickness: 3,
      barColors: {
        '0': 'rgba(26,  188, 156, .9)',
        '.25': 'rgba(52,  152, 219, .9)',
        '.50': 'rgba(241, 196, 15,  .9)',
        '.75': 'rgba(230, 126, 34,  .9)',
        '1.0': 'rgba(211, 84,  0,   .9)'
      },
      shadowBlur: 10,
      shadowColor: 'rgba(0,   0,   0,   .6)'
    })
  }
}
