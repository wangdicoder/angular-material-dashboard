import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = [
    { id: "1", image: 'assets/images/s1.jpg', name: "BELLA TOES", price: "43$", vote: 5 },
    { id: "2", image: 'assets/images/s2.jpg', name: "CHIKKU LOAFERS", price: "43$", vote: 5 },
    { id: "3", image: 'assets/images/s3.jpg', name: "(SRV) SNEAKERS", price: "43$", vote: 5 },
    { id: "4", image: 'assets/images/s4.jpg', name: "SHUBERRY HEELS", price: "43$", vote: 5 },
    { id: "5", image: 'assets/images/s5.jpg', name: "RED BELLIES", price: "43$", vote: 5 },
  ]
  constructor() { }

  ngOnInit() {
  }

}
