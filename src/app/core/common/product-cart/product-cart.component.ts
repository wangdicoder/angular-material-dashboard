import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from 'app/services/checkout.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input() product;
  @Input() col = 3;
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
    console.log(this.product);

  }

  addToCart() {
    this.checkoutService.setLocal(JSON.stringify(this.product))
  }
}
