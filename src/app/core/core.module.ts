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
import { ProductCartComponent } from './common/product-cart/product-cart.component';
import { CommonSharedModule } from './common/common.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutService } from 'app/services/checkout.service';

@NgModule({
  declarations: [
    CoreComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    CommonSharedModule,
    FormsModule
  ],
  exports: [
    CoreComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    CheckoutService
  ]
})
export class CoreModule { }
