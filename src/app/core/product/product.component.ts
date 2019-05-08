import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import * as uuid from 'device-uuid';
import * as topbar from 'topbar';
import { CheckoutService } from 'app/services/checkout.service';

declare const $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', '../css/flexslider.css']
})
export class ProductComponent implements OnInit {
  avatar = ''
  product: any;
  size = 0;
  myForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private checkoutService: CheckoutService
  ) { }

  ngOnInit() {

    this.initSlider();
    this.myForm = this.fb.group({
      userId: [new uuid.DeviceUUID().get(), []],
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      content: ['', [Validators.required]]
    })

    this.loadProduct();
  }

  onAddToCart() {
    let product = { ...this.product, price: this.product.prices[this.size] }
    delete product.prices
    delete product.comments

    this.checkoutService.setLocal(JSON.stringify(product))
  }

  loadProduct() {
    topbar.show();
    this.productService.onGetProduct(this.activeRoute.snapshot.params.id)
      .then(res => {
        topbar.hide()
        if (res && res.data) {
          this.product = res.data.Item
          this.product.image = environment.s3 + this.product.image
        }
      }).then(res => {
        topbar.hide()
        $(document).ready(function () {
          $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
          });
        });
      })
  }

  onComment() {
    console.log(this.myForm.value);
    topbar.show();
    this.productService.onComment(this.activeRoute.snapshot.params.id, this.myForm.value)
      .then(res => {
        topbar.hide()
        this.loadProduct();
      }).catch(error => {
        topbar.hide();
      })
  }

  changeSize(index) {
    this.size = index
  }

  initSlider() {
    $(document).ready(function () {
      $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function (event) { // Callback function if tab is switched
          var $tab = $(this);
          var $info = $('#tabInfo');
          var $name = $('span', $info);
          $name.text($tab.text());
          $info.show();
        }
      });
      $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
      });
    });
  }

}
