import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
declare const $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  listOrder = []
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.onReload()
  }

  onReload() {
    this.productService.onScanOrder().then(res => {
      if (res && res.data) {
        this.listOrder = res.data.Items
      }
    })
  }

  onGetTotal(products) {
    return products.reduce((total, item) => total += (+item.price.price * (100 - item.discount) / 100) * item.quality, 0)
  }

}
