import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
@NgModule({
  declarations: [
    ProductCartComponent,
    BannerComponent,
    FeaturedProductComponent
  ],
  exports: [
    ProductCartComponent,
    BannerComponent,
    FeaturedProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommonSharedModule { }
