import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css', '../css/checkout.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  products = [
    { id: "1", image: 'assets/images/3.jpeg', name: "Caesar", price: "43", vote: 5, quality: 1 },
    { id: "2", image: 'assets/images/greek-salad.jpeg', name: "Greek Salad", price: "43", vote: 5, quality: 4 },
    { id: "3", image: 'assets/images/prosciutto-salad.jpeg', name: "Prosciutto Salad", price: "43", vote: 5, quality: 2 }
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      fullname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      landmark: ['', Validators.required],
      town: ['', Validators.required],
      address: ['', Validators.required],
    })
    this.checkoutForm.setValue({
      fullname: '',
      phoneNumber: '',
      landmark: '',
      town: '',
      address: ''
    })
  }

  compare(val1, val2) {
    return val1.id === val2.id;
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
    return this.products.reduce((total, item) => total += +item.price * item.quality, 0)
  }
}
