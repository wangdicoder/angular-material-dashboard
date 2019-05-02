import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {
  products = [
    { id: "1", image: 'assets/images/3.jpeg', name: "Caesar", discount: 0, prices: [{ size: "small", price: "43" }], vote: 5 },
    { id: "2", image: 'assets/images/greek-salad.jpeg', discount: 50, name: "Greek Salad", prices: [{ size: "small", price: "43" }], vote: 5 },
    { id: "3", image: 'assets/images/prosciutto-salad.jpeg', discount: 0, name: "Prosciutto Salad", prices: [{ size: "small", price: "43" }], vote: 5 },
    { id: "4", image: 'assets/images/borjomi.jpeg', discount: 0, name: "Borjomi", prices: [{ size: "small", price: "43" }], vote: 5 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
