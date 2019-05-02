import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products = []
  isLoading: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.isLoading = true
    this.onLoadData()
  }

  onLoadData() {
    this.productService.onScanProduct()
      .then(res => {
        console.log(res.data);
        this.products = res.data.Items
        this.isLoading = false
      })
      .catch(err => {
        this.isLoading = false
      })
  }

  onDelete(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: { cancel: true, ok: true },
    })
      .then((willDelete) => {
        if (willDelete) {
          console.log(willDelete);

          this.productService.onDeleteProduct(id).then(res => {
            this.onLoadData();
            swal("Delete succes!")
          })
        }
      });
  }

}
