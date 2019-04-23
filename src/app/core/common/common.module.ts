import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
@NgModule({
  declarations: [
    ProductCartComponent,
    BannerComponent
  ],
  exports: [
    ProductCartComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommonSharedModule { }
