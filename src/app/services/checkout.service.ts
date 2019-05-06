import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public local = new BehaviorSubject<string>('');

  constructor() {
    if (localStorage.getItem('checkout')) {
      this.local.next(localStorage.getItem('checkout'))
    }
  }

  public setLocal(data: string) {
    let arr = [];
    this.local.subscribe(item => {
      if (item) arr = JSON.parse(item)
    })
    if (arr.includes(data)) {
      return;
    }
    arr.push(data)
    this.local.next(JSON.stringify(arr))
    localStorage.setItem('checkout', JSON.stringify(arr))
  }

  public getLocal() {
    return this.local;
  }

}
