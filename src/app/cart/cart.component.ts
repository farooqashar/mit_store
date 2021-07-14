import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import firebase from "firebase/app";
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from "../product";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private store: AngularFirestore,private cartService:CartService, private formBuilder:FormBuilder) { }

  products =  this.cartService.getProducts();

  newProductsData = this.products.map((product:Product) => product.name);
  all_prices = this.products.map((product:Product) => product.price);
  total = this.all_prices.reduce((a:number,b:number) => a + b,0)

  checkoutForm = this.formBuilder.group({
    first_name: '',
    last_name:'',
    address: '',
    email: '',
    shipping_type: ''
  });

  shippingForm = this.formBuilder.group({
    c_drop_off: null,
    boston_drop_off: null,
    ship: null
  });

  onSubmit(): void {

    window.alert('Your order has been submitted!');
    this.store.collection('buyers').doc(this.checkoutForm.value.first_name).set({"purchased products": this.newProductsData,"buyer information": this.checkoutForm.value});
    this.products = this.cartService.clearCart();
    this.checkoutForm.reset();
  }


  ngOnInit(): void {
  }

}
