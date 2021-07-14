import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor() { };

  products = products;


  onNotify() {
    window.alert('You will be notified about this free product!');
  };


  ngOnInit(): void {
  };

}
