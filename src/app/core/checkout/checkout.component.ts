import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckoutService } from 'app/services/checkout.service';
import axios from 'axios';
import { ProductService } from 'app/services/product.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import * as uuid from 'device-uuid';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css', '../css/checkout.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  products = [
    // { id: "1", image: 'assets/images/3.jpeg', name: "Caesar", price: "43", vote: 5, quality: 1 },
    // { id: "2", image: 'assets/images/greek-salad.jpeg', name: "Greek Salad", price: "43", vote: 5, quality: 4 },
    // { id: "3", image: 'assets/images/prosciutto-salad.jpeg', name: "Prosciutto Salad", price: "43", vote: 5, quality: 2 }
  ]
  map = null;
  constructor(private fb: FormBuilder, private checkoutService: CheckoutService, private productService: ProductService, private router: Router) {
    this.checkoutService.getLocal().subscribe(data => {
      if (data) {
        this.products = JSON.parse(data);
        this.products = this.products.map(item => {
          return { ...JSON.parse(item), quality: 1 }
        });
        console.log(this.products);

      }
    })
  }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      fullname: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
    })


    this.productService.onGetUser(new uuid.DeviceUUID().get()).then(res => {
      if (res && res.data && Object.keys(res.data).length) {
        console.log(res.data);
        let item = res.data.Item
        this.checkoutForm.setValue({
          fullname: item.fullname,
          phoneNumber: item.phoneNumber,
          address: item.address
        });
      }
    })
  }

  onReduction(index) {
    if (this.products[index].quality && this.products[index].quality > 1)
      this.products[index].quality--
  }

  onIncrease(index) {
    if (this.products[index].quality)
      this.products[index].quality++
  }

  onGetTotal() {
    return this.products.reduce((total, item) => total += (+item.price.price * (100 - item.discount) / 100) * item.quality, 0)
  }

  onSubmitOrder() {
    console.log({ ...this.checkoutForm.value, products: this.products, total: this.onGetTotal(), timestamp: Date.now() });
    this.productService.onOrder({ ...this.checkoutForm.value, products: this.products, total: this.onGetTotal(), timestamp: Date.now() }).then(res => {
      swal("Order success!")
      localStorage.removeItem('checkout')
      this.router.navigate(['/shop'])
      this.checkoutService.local.next('')
    })
  }

  onDelete(index) {
    this.products.splice(index, 1);
  }

  onCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lng = position.coords.longitude
        let key = 'AIzaSyCSV1AmlA-ArhLJz9u0TXS8zQEXt5wmdAU&v=3.exp'
        this.map = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x300&sensor=false&key=${key}`

        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${key}`)
          .then(res => {
            console.log(res.data.results[0].formatted_address);
            let form = this.checkoutForm.value
            delete form.address
            this.checkoutForm.setValue({
              ...form,
              address: res.data.results[0].formatted_address
            })
          })
      });
    }
  }
}
