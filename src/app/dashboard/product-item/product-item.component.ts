import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { ProductService } from 'app/services/product.service';
import swal from 'sweetalert';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  productForm: FormGroup;
  prices = [{ size: 'large', price: 0 }, { size: 'medium', price: 0 }, { size: 'small', price: 0 }]
  imageView = null;
  file: File;
  isLoading = false;
  comments = []

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter description in here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      userId: ['', []],
      category: ['', [Validators.required]],
      timestamp: ['', []]
    })

    if (this.activeRoute.snapshot.params.id != 'create') {
      this.productService.onGetProduct(this.activeRoute.snapshot.params.id).then(res => {
        if (res.data && res.data.Item) {

          let item = res.data.Item;
          console.log(item);

          this.productForm.setValue({
            id: item.id,
            name: item.name,
            description: item.description,
            discount: item.discount,
            userId: item.userId,
            category: item.category,
            timestamp: item.timestamp
          })
          this.imageView = `${environment.s3}${item.image}`
          this.prices = item.prices
          this.comments = item.comments
        }

      }).catch(err => {
        console.log(err);
      })
    }

  }

  onChange(e) {
    this.prices = this.prices.map(item => e.target.name === item.size ? { size: item.size, price: e.target.value } : item)
  }

  async onSave() {
    if (this.prices.filter(item => item.price == 0 ? null : '1').length == 0 || !this.imageView) {
      swal("Form is invalid")
      return
    }
    this.isLoading = true;
    this.productForm.value.timestamp = Date.now();
    let rs = await this.auth.currentUserInfo()
    this.productForm.value.userId = rs.id
    let url = null
    if (this.file) {
      url = await this.productService.uploadFile(this.file)
    }
    this.productForm.value.image = url ? url.key : this.imageView.replace(environment.s3, '');
    console.log({ ...this.productForm.value, comments: this.comments, prices: this.prices });

    let result = await this.productService.onPostProduct({ ...this.productForm.value, comments: this.comments, prices: this.prices })
    this.isLoading = false;
    if (result) {
      swal("Save success!")
      this.router.navigate(['/dashboard/product'])
      return
    }
    swal("Error");
  }

  onFileSelected(event) {
    // const inputNode: any = document.querySelector('#file');
    const self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        self.imageView = reader.result
      };
      this.file = event.target.files[0]
      reader.readAsDataURL(event.target.files[0]);
    }
  }


}
