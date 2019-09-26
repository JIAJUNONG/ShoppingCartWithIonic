import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  products = new BehaviorSubject([
    {
      id: 1,
      label: "Oranges",
      img: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-oranges-1296x728-feature.jpg?w=1155&h=1528",
      quantity: 0,
      price: 2,
      description: "Testing 123, this is a very delicious orange. Please buy it now!",
      inMyCart: false
    },
    {
      id: 2,
      label: "Apples",
      img: "https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      quantity: 0,
      price: 5,
      description: "Testing 123, this is a very delicious apple. Please buy it now!",
      inMyCart: false
    },
    {
      id: 3,
      label: "Grapes",
      img: "https://images.homedepot-static.com/productImages/4e590154-9e69-4860-bc61-89fe692dfa79/svn/van-zyverden-fruit-plants-83720-64_1000.jpg",
      quantity: 0,
      price: 30,
      description: "Testing 123, this is a very delicious grape. Please buy it now!",
      inMyCart: false
    },
  ])
  // image, quantity, + -, single price, addToCart, inMyCart 
  // My Cart
  // label, quantity, single price, delete (remove item on click)
  

  constructor() { }

  addQuantity(id){
    let currentProducts = this.products.getValue()
    const product = this.findProduct( currentProducts,id)
    product.quantity++
    this.products.next(currentProducts)
  }

  minusQuantity(id){
    let currentProducts = this.products.getValue()
    const product = this.findProduct( currentProducts,id)
    product.quantity--
    this.products.next(currentProducts)
  }

  addToCart(id){
    let currentProducts = this.products.getValue()
    const product = this.findProduct( currentProducts,id)
    product.inMyCart = true
    this.products.next(currentProducts)
  }

  removeFromCart(id){
    let currentProducts = this.products.getValue()
    const product = this.findProduct( currentProducts,id)
    product.inMyCart = false
    product.quantity = 0
    this.products.next(currentProducts)
  }

  findProduct(currentProducts, id){
    for(let product of currentProducts){
      if(product.id === id){
        return product
      }
    }
    return null
  }


}
