import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FigurecardComponent } from './figurecard/figurecard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImagecardComponent } from './imagecard/imagecard.component';
import { MsgIconBtnComponent } from './msgiconbtn/msgiconbtn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule, MatMenuModule, MatCheckboxModule } from '@angular/material';

const COMPONENTS = [
  FigurecardComponent,
  FooterComponent,
  HeaderComponent,
  ImagecardComponent,
  MsgIconBtnComponent,
  NavbarComponent
]
@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }
