import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiName = environment.url;
  path = '/pizza';
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

  async onPostProduct() {
    let currentSesion = await Auth.currentSession();
    let token = null;
    if (currentSesion && currentSesion.getIdToken().getJwtToken()) {
      token = currentSesion.getIdToken().getJwtToken();
    }
    return axios.post(`${this.apiName}${this.path}`, { headers: { Authorization: token } });
  }
}
