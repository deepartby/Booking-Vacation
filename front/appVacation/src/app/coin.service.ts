import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }

  addCoin(na, price) {
    const uri = 'http://localhost:8000/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
}
