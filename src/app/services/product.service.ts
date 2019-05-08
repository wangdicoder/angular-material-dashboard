import { Injectable } from '@angular/core';
import { Auth, Storage } from 'aws-amplify';
import axios from 'axios';
import { environment } from 'environments/environment';
import { Product } from './model';
import uuid4 from 'uuid/v4'
import * as uuid from 'device-uuid';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiName = environment.url;
  path = '/product';
  pathComment = '/comment';
  pathOrder = '/order';
  pathUser = '/user';
  myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
      // name: 'param'
    }
  }
  constructor() { }

  onScanProduct() {
    return axios.get(`${this.apiName}${this.path}`)
  }

  async onPostProduct(product) {
    if (!product.id) {
      product.id = await uuid4();
    }
    let currentSesion = await Auth.currentSession();
    let token = null;
    if (currentSesion && currentSesion.getIdToken().getJwtToken()) {
      token = currentSesion.getIdToken().getJwtToken();
    }
    return axios.post(`${this.apiName}${this.path}`, product);
  }

  onGetProduct(id: string) {
    return axios.get(`${this.apiName}${this.path}?id=${id}`)
  }

  onDeleteProduct(id: string) {
    return axios.delete(`${this.apiName}${this.path}?id=${id}`)
  }

  uploadFile(file: File) {
    return Storage.put(`uploads/${uuid4()}.jpg`, file);
  }

  onComment(idProduct: string, comment) {
    return axios.put(`${this.apiName}${this.pathComment}/${idProduct}`, comment)
  }

  onGetUser(id) {
    return axios.get(`${this.apiName}${this.pathUser}?id=${id}`)
  }

  onOrder(data) {
    return axios.post(`${this.apiName}${this.pathOrder}`, { ...data, id: uuid4(), userId: new uuid.DeviceUUID().get() })
  }

  onScanOrder() {
    return axios.get(`${this.apiName}${this.pathOrder}`)
  }
}
