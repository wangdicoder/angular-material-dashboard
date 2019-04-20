import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
    {
        path: '', component: CoreComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'product/:id', component: ProductComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
