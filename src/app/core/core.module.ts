import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CoreComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule
  ],
  exports: [
    CoreComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
