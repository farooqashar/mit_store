import { Injectable } from '@angular/core';
import { Product } from "./product";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];

  addToCart(product: Product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getRelevantProdInfo(): any {
    const newData = [];
    for (let i = 1; i < this.products.length; i++) {
      newData.push({"name": this.products[i].name});
    return newData;
    }
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  clearCart() {
    this.products = [];
    return this.products;
  }



  constructor(private http:HttpClient) { }
}
