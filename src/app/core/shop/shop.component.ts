import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import uuid from 'device-uuid';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = [
    // { id: "1", image: 'assets/images/3.jpeg', name: "Caesar", price: "57", vote: 5 },
    // { id: "2", image: 'assets/images/greek-salad.jpeg', name: "Greek Salad", price: "43", vote: 5 },
    // { id: "3", image: 'assets/images/prosciutto-salad.jpeg', name: "Prosciutto Salad", price: "33", vote: 5 },
    // { id: "4", image: 'assets/images/borjomi.jpeg', name: "Borjomi", price: "51", vote: 5 },
    // { id: "5", image: 'assets/images/drpeper.jpeg', name: "Dr Pepper", price: "29", vote: 5 },
  ]
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.onPostProduct();
    console.log(new uuid.DeviceUUID().get());
    this.productService.onScanProduct().then(res => {
      if (res.data && res.data.Items) {
        console.log(res.data);

        this.products = res.data.Items
        this.products = this.products.map(item => {
          item.image = `${environment.s3}${item.image}`
          return item
        })
      }
    })
  }

}
