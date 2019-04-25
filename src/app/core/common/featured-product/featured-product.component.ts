import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {
  products = [
    { id: "1", image: 'assets/images/3.jpeg', name: "Caesar", price: "43", vote: 5 },
    { id: "2", image: 'assets/images/greek-salad.jpeg', name: "Greek Salad", price: "43", vote: 5 },
    { id: "3", image: 'assets/images/prosciutto-salad.jpeg', name: "Prosciutto Salad", price: "43", vote: 5 },
    { id: "4", image: 'assets/images/borjomi.jpeg', name: "Borjomi", price: "43", vote: 5 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
